export class EmailValidationRequest {
    email: string;
    phoneticConfirmation?: boolean;
  }
  
  export class PhoneValidationRequest {
    phoneNumber: string;
    countryCode?: string; // e.g., 'US', 'IN'
  }
  
  export interface ValidationResponse {
    isValid: boolean;
    normalized: string; // Always required
    phonetic?: string;
    message?: string;
  }