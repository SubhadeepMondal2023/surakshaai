export interface BookingRequest {
  start: string; // Changed from startTime to match Cal.com
  eventTypeId: number;
  attendee: {
    name: string;
    email: string;
    timeZone: string;
    phoneNumber: string;
    language: string;
  };
  location: string;
  metadata: object;
}

export interface EmailRequest{
  location: string,
  email: string
}
