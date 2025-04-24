import { Injectable } from '@nestjs/common';
import * as moment from 'moment-timezone';
import {
  getAvailability,
  createBooking,
  cancelBookingByUser,
  getBooking,
} from 'src/cal-com/cal';
import { BookingEvent } from 'src/interface/IBooking';
import { BookingRequest, EmailRequest } from 'src/request/BookingRequest';
import {
  ValidationResponse,
  EmailValidationRequest,
  PhoneValidationRequest,
} from 'src/request/ValidationRequest';

@Injectable()
export class BookingService {
  private config = {
    apiKey: process.env.CALCOM_API_KEY,
    eventTypeId: !!process.env.CALCOM_EVENT_TYPE_ID
      ? parseInt(process.env.CALCOM_EVENT_TYPE_ID, 10)
      : 0,
  };

  private readonly emailRegex = /^(?!\.)(?!.*\.\.)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  
  private phoneticAlphabet: Record<string, string> = {
    'a': 'Alpha', 'b': 'Bravo', 'c': 'Charlie', 'd': 'Delta',
    'e': 'Echo', 'f': 'Foxtrot', 'g': 'Golf', 'h': 'Hotel',
    'i': 'India', 'j': 'Juliet', 'k': 'Kilo', 'l': 'Lima',
    'm': 'Mike', 'n': 'November', 'o': 'Oscar', 'p': 'Papa',
    'q': 'Quebec', 'r': 'Romeo', 's': 'Sierra', 't': 'Tango',
    'u': 'Uniform', 'v': 'Victor', 'w': 'Whiskey', 'x': 'X-ray',
    'y': 'Yankee', 'z': 'Zulu',
    '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three',
    '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven',
    '8': 'Eight', '9': 'Nine', '@': 'at', '.': 'dot',
    '_': 'underscore', '-': 'dash', '+': 'plus'
  };

  private getCountryPhoneRules(): Record<string, { code: string; pattern: RegExp; example: string; length: number }> {
    return {
      'US': {
        code: '1',
        pattern: /^\+1\d{10}$/,
        example: '+12025551234',
        length: 10
      },
      'IN': {
        code: '91',
        pattern: /^\+91\d{10}$/,
        example: '+919876543210',
        length: 10
      },
      'FR': {
        code: '33',
        pattern: /^\+33\d{9}$/,
        example: '+33123456789',
        length: 9
      }
    };
  }

  private formatTimeToISO(timeInput: string) {
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(timeInput)) {
      return timeInput;
    }
    const date = moment(timeInput);
    if (!date.isValid()) {
      throw new Error('Invalid date format');
    }
    return date.format('YYYY-MM-DDTHH:mm:ss[Z]');
  }

  convertToUtc(timeZone: string, timeInput: string): string {
    try {
      return moment
        .tz(timeInput, timeZone)
        .utc()
        .format('YYYY-MM-DDTHH:mm:ss[Z]');
    } catch (e) {
      throw new Error('Invalid timezone or date format');
    }
  }

  // Format the start time properly for Cal.com
  private formatStartTime(start: string, timeZone: string): string {
    // Make sure we have a valid date
    if (!moment(start).isValid()) {
      throw new Error(`Invalid start time: ${start}`);
    }
    
    // If the time is not in UTC format (doesn't end with Z), convert it
    if (!start.endsWith('Z')) {
      return moment.tz(start, timeZone).utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
    }
    
    return start;
  }

  // Check if a requested time slot is available
  private async isTimeSlotAvailable(startTime: string, timeZone: string): Promise<boolean> {
    try {
      // Get availability for the next 7 days
      const availability = await this.getAvailability(7, timeZone);
      
      // Check if the availability response has the expected structure
// Inside the isTimeSlotAvailable method
if (!availability.success) {
  console.log('Failed to fetch availability data:', 
    'error' in availability ? availability.error : 'Unknown error');
  return false;
}
      
      if (!Array.isArray(availability.availability?.slots)) {
        console.log('Invalid availability data structure:', availability);
        return false;
      }
      
      // Format the start time in UTC for comparison
      const requestedTimeUtc = this.formatStartTime(startTime, timeZone);
      const requestedTimestamp = new Date(requestedTimeUtc).getTime();
      
      // Check if the requested time exists in available slots
      const isAvailable = availability.availability.slots.some(slot => {
        const slotTime = new Date(slot.time).getTime();
        return Math.abs(slotTime - requestedTimestamp) < 60000; // Within 1 minute
      });
      
      console.log(`Time slot ${requestedTimeUtc} availability: ${isAvailable}`);
      return isAvailable;
    } catch (error) {
      console.error('Error checking time slot availability:', error);
      return false;
    }
  }

  async getAvailability(days: any, timezone: string) {
    return await getAvailability(days, timezone);
  }

  async createBooking(bookingData: BookingRequest) {
    console.log('Creating booking with data:', JSON.stringify(bookingData, null, 2));
    
    // First check if the slot is actually available
    const isAvailable = await this.isTimeSlotAvailable(
      bookingData.start,
      bookingData.attendee.timeZone || 'UTC'
    );
    
    if (!isAvailable) {
      throw new Error('The requested time slot is not available. Please select another time.');
    }
    
    // Validate phone first
    const phoneValidation = await this.validatePhone({
      phoneNumber: bookingData.attendee.phoneNumber,
      countryCode: bookingData.attendee.timeZone?.includes('Asia/Kolkata') ? 'IN' : 'US'
    });
  
    if (!phoneValidation.isValid) {
      throw new Error(`Invalid phone number: ${phoneValidation.message}`);
    }
    
    // Then validate email
    const emailValidation = await this.validateEmail({
      email: bookingData.attendee.email,
      phoneticConfirmation: true
    });
  
    if (!emailValidation.isValid) {
      throw new Error(`Invalid email: ${emailValidation.message}`);
    }
  
    // Format the start time properly for Cal.com API
    const formattedStart = this.formatStartTime(
      bookingData.start,
      bookingData.attendee.timeZone || 'UTC'
    );
    
    console.log(`Formatted booking time (UTC): ${formattedStart}`);
  
    const calComRequest = {
      start: formattedStart,
      eventTypeId: this.config.eventTypeId,
      attendee: {
        ...bookingData.attendee,
        email: emailValidation.normalized,
        phoneNumber: phoneValidation.normalized,
      },
      location: bookingData.location || 'Zoom',
      metadata: bookingData.metadata || {}
    };
    
    // Log the exact request we're sending to Cal.com
    console.log('Sending booking request to Cal.com:', JSON.stringify(calComRequest, null, 2));
    
    // Attempt to create the booking
    const bookingResult = await createBooking(calComRequest);
    
    if (!bookingResult.status) {
      throw new Error(bookingResult.error || 'Failed to create booking');
    }
    
    return bookingResult;
  }
  
  async cancelBookingByUser(cancelData: any) {
    return await cancelBookingByUser(
      cancelData.attendeeName,
      cancelData.attendeeEmail,
      cancelData.cancellationReason,
    );
  }

  async getBooking(query: any) {
    return await getBooking(
      query.attendeeName,
      query.attendeeEmail,
      query.status,
    );
  }

  async sendEmail(emailData: EmailRequest) {
    try {
      const response = await fetch(
        'https://agentic.prach.org/webhook/d7f685fa-9b29-4a1a-8d65-03812f07bec6',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: emailData.location,
            email: emailData.email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error('Failed to send email:', data);
        throw new Error(`Webhook responded with status ${response.status}: ${data.message || 'Unknown error'}`);
      }

      console.log('Email webhook success:', data);
      return data;
    } catch (error) {
      console.error('Error sending email:', error.message);
      throw new Error('Failed to send email');
    }
  }

  async validateEmail(request: EmailValidationRequest): Promise<ValidationResponse> {
    const { email, phoneticConfirmation = true } = request;
    
    if (!email) {
      return {
        isValid: false,
        normalized: '',
        message: 'Email address is required'
      };
    }

    const normalizedEmail = email.toLowerCase().trim();
    
    // Basic format validation
    if (!this.emailRegex.test(normalizedEmail)) {
      return {
        isValid: false,
        normalized: normalizedEmail,
        message: 'Invalid email format. Example formats: john.doe@example.com, jane_doe123@sub.domain.co.in'
      };
    }

    // Length validation
    if (normalizedEmail.length > 254) {
      return {
        isValid: false,
        normalized: normalizedEmail,
        message: 'Email address too long (max 254 characters)'
      };
    }

    // Common typo detection
    const [localPart, domain] = normalizedEmail.split('@');
    const commonTypos = {
      'gamil.com': 'gmail.com',
      'gmial.com': 'gmail.com',
      'yaho.com': 'yahoo.com',
      'hotmal.com': 'hotmail.com',
      'outllook.com': 'outlook.com',
      'yahooo.com': 'yahoo.com'
    };

    const correctedDomain = commonTypos[domain] || domain;
    const correctedEmail = correctedDomain !== domain ? 
      `${localPart}@${correctedDomain}` : normalizedEmail;

    return {
      isValid: true,
      normalized: correctedEmail,
      phonetic: phoneticConfirmation ? this.generatePhoneticSpelling(correctedEmail) : undefined,
      message: correctedDomain !== domain ? 
        `Email validated (corrected ${domain} to ${correctedDomain})` : 'Email is valid'
    };
  }

  private generatePhoneticSpelling(text: string): string {
    return text.toLowerCase().split('').map(char =>
      this.phoneticAlphabet[char] || char
    ).join(', ');
  }

  async validatePhone(request: PhoneValidationRequest): Promise<ValidationResponse> {
    let { phoneNumber, countryCode = 'US' } = request;
    const countryRules = this.getCountryPhoneRules();
    const rules = countryRules[countryCode.toUpperCase()] || countryRules['US'];

    if (!phoneNumber) {
      return {
        isValid: false,
        normalized: '',
        message: `Phone number is required. Example format for ${countryCode}: ${rules.example}`
      };
    }

    // Remove all non-digit characters except leading +
    phoneNumber = phoneNumber.toString().replace(/[^\d+]/g, '');

    // Add country code if missing
    if (!phoneNumber.startsWith('+')) {
      phoneNumber = `+${rules.code}${phoneNumber.replace(/^0+/, '')}`;
    }

    // Validate length and pattern
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    const expectedLength = rules.code.length + rules.length;
    
    if (digitsOnly.length !== expectedLength || !rules.pattern.test(phoneNumber)) {
      return {
        isValid: false,
        normalized: phoneNumber,
        message: `Invalid ${countryCode} phone number. Required format: ${rules.example} (${rules.length} digits)`
      };
    }

    return {
      isValid: true,
      normalized: phoneNumber,
      phonetic: this.generatePhoneticSpelling(phoneNumber),
      message: `${countryCode} phone number is valid`
    };
  }
}