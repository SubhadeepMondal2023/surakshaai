import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import {
  BookingAvailabilityRequest,
  BookingEvent,
} from 'src/interface/IBooking';
import { BookingRequest, EmailRequest } from 'src/request/BookingRequest';
import {
  ValidationResponse,
  EmailValidationRequest,
  PhoneValidationRequest,
} from 'src/request/ValidationRequest';
@Controller('cal')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}
  
  @Post('/availability')
  async getAvailability(@Body() requestBody: BookingAvailabilityRequest) {
    try {
      console.log(new Date().toISOString());
      console.log('Getting availability for', requestBody.days, 'days');
      console.log('Timezone:', requestBody.timezone);
      const result = await this.bookingService.getAvailability(
        requestBody.days,
        requestBody.timezone,
      );
      console.log(new Date().toISOString());
      return result;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch availability',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  
  @Post('/booking')
  async createBooking(@Body() requestData: any) {
    try {
      // Log the raw incoming data
      console.log('Creating booking for', requestData);
      
      // Transform the flat structure from the Claude tool into the expected BookingRequest format
      const bookingData: BookingRequest = {
        start: requestData.startTime, // Convert from startTime to start
        eventTypeId: parseInt(process.env.CALCOM_EVENT_TYPE_ID || '0', 10), // Use env var directly
        attendee: {
          name: requestData.name,
          email: requestData.email,
          timeZone: requestData.timeZone,
          phoneNumber: requestData.phoneNumber,
          language: 'en'
        },
        location: requestData.location || 'Zoom',
        metadata: requestData.metadata || {}
      };
      
      // Log the transformed structure
      console.log('Transformed booking request:', bookingData);
      
      const result = await this.bookingService.createBooking(bookingData);
      return result;
    } catch (error) {
      console.error('Booking error:', error);
      throw new HttpException(
        error.message || 'Failed to create booking',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }



  @Post('/cancel')
  async cancelBooking(@Body() cancelData: any) {
    try {
      console.log('Cancelling booking for', cancelData);
      const result = await this.bookingService.cancelBookingByUser(cancelData);
      return result;
    } catch (error) {
      throw new HttpException(
        'Failed to cancel booking',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/booking')
  async getBooking(@Query() query: any) {
    try {
      console.log('Fetching booking for', query);
      const result = await this.bookingService.getBooking(query);
      return result;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch booking information',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/sendEmail')
  async sendEmail(@Body() emailData: EmailRequest) {
    try {
      console.log('sending info for', emailData.location);
      const result = await this.bookingService.sendEmail(emailData);
      return result;
    } catch (error) {
      throw new HttpException(
        `Failed to send info for ${emailData.location}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/validate/email')
  async validateEmail(@Body() request: EmailValidationRequest): Promise<ValidationResponse> {
    try {
      return await this.bookingService.validateEmail(request);
    } catch (error) {
      throw new HttpException(
        'Email validation failed',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('/validate/phone')
  async validatePhone(@Body() request: PhoneValidationRequest): Promise<ValidationResponse> {
    try {
      return await this.bookingService.validatePhone(request);
    } catch (error) {
      throw new HttpException(
        'Phone validation failed',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
