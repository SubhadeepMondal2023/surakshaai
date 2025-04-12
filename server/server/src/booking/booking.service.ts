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
  

  /**Common Invalid Patterns Blocked

user@.com (leading dot in domain)

user..name@domain.com (consecutive dots)

user@domain..com (consecutive dots in domain)

user@-domain.com (leading hyphen)

user@domain-.com (trailing hyphen)

Example Matches:
Valid:

simple@example.com

very.common@example.com

disposable.style.email.with+symbol@example.com

other.email-with-hyphen@example.com

fully-qualified-domain@example.com

user.name+tag+sorting@example.com

Invalid:

@missing-local.com

missing-at-sign.com

double..dots@example.com

.leading-dot@example.com

trailing-dot@example.com.

user@-hyphen-start.com */
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
    return date.format('YYYY-MM-DDTHH:MM:SS[Z]');
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

  async getAvailability(days: any, timezone: string) {
    return await getAvailability(days);
  }

  async createBooking(bookingData: BookingRequest) {
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

    const calComRequest = {
      start: bookingData.start,
      eventTypeId: this.config.eventTypeId,
      attendee: {
        ...bookingData.attendee,
        email: emailValidation.normalized,
        phoneNumber: phoneValidation.normalized,
        timeZone: bookingData.attendee.timeZone || 'America/New_York',
        language: 'en'
      },
      location: bookingData.location || 'Zoom',
      metadata: bookingData.metadata || {}
    };
  
    return await createBooking(calComRequest);
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