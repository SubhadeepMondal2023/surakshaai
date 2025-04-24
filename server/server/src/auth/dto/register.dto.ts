import { IsEmail, IsString, IsNotEmpty, IsEnum, IsOptional, IsDateString } from 'class-validator';
import { UserRole } from '@prisma/client';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(UserRole)
  @IsNotEmpty()
  role: UserRole;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsDateString()
  @IsOptional()
  dateOfBirth?: string; // Required for patients

  @IsString()
  @IsOptional()
  specialization?: string; // Optional, usually for doctors

  @IsString()
  @IsOptional()
  licenseNumber?: string; // Optional, usually for doctors
}
