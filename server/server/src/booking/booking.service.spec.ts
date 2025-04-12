import { Test, TestingModule } from '@nestjs/testing';
import { BookingService } from './booking.service';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingService],
    }).compile();

    service = module.get<BookingService>(BookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Email Validation', () => {
    it('should validate correct email', async () => {
      const result = await service.validateEmail({ email: 'test@example.com' });
      expect(result.isValid).toBe(true);
      expect(result.normalized).toBe('test@example.com');
    });

    it('should reject invalid email', async () => {
      const result = await service.validateEmail({ email: 'invalid-email' });
      expect(result.isValid).toBe(false);
    });

    it('should generate phonetic spelling', async () => {
      const result = await service.validateEmail({ 
        email: 'ab@cd.com',
        phoneticConfirmation: true
      });
      expect(result.phonetic).toContain('Alpha');
      expect(result.phonetic).toContain('Bravo');
      expect(result.phonetic).toContain('at');
      expect(result.phonetic).toContain('dot');
    });
  });

  describe('Phone Validation', () => {
    it('should validate US phone number', async () => {
      const result = await service.validatePhone({ 
        phoneNumber: '555-123-4567',
        countryCode: 'US'
      });
      expect(result.isValid).toBe(true);
      expect(result.normalized).toMatch(/^\+1\d{10}$/);
    });

    it('should validate international phone number', async () => {
      const result = await service.validatePhone({ 
        phoneNumber: '+91-9876543210'
      });
      expect(result.isValid).toBe(true);
      expect(result.normalized).toBe('+919876543210');
    });

    it('should generate phonetic spelling for phone', async () => {
      const result = await service.validatePhone({ 
        phoneNumber: '123'
      });
      expect(result.phonetic).toContain('One');
      expect(result.phonetic).toContain('Two');
      expect(result.phonetic).toContain('Three');
    });
  });
});