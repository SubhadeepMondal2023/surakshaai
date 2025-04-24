// server/src/auth/auth.service.ts
import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, role, firstName, lastName, dateOfBirth, specialization, licenseNumber } = registerDto;

    // Check if user exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    // Validate role-specific fields
    if (role === 'DOCTOR' && (!specialization || !licenseNumber)) {
      throw new BadRequestException('Doctors must provide specialization and license number');
    }

    if (role === 'PATIENT' && !dateOfBirth) {
      throw new BadRequestException('Patients must provide date of birth');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    });

    // Create role-specific profile
  // In your auth.service.ts, modify the patient creation part:
  if (role === 'PATIENT') {
    if (!dateOfBirth) {
      throw new BadRequestException('Date of birth is required for patients');
    }
    
    await this.prisma.patient.create({
      data: {
        userId: user.id,
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth), // Convert string date to Date object
      },
    })
  } if (role === 'DOCTOR') {
    if (!specialization || !licenseNumber) {
      throw new Error('Specialization and License Number are required for doctors');
    }
  
    await this.prisma.doctor.create({
      data: {
        userId: user.id,
        firstName,
        lastName,
        specialization, // now guaranteed to be string
        licenseNumber,  // now guaranteed to be string
      },
    });
  }
  
  

    // Generate token
    const token = this.generateToken(user.id, user.email, user.role);

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      token,
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Get profile based on role
    let profile;
    if (user.role === 'PATIENT') {
      profile = await this.prisma.patient.findUnique({
        where: { userId: user.id },
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      });
    } else if (user.role === 'DOCTOR') {
      profile = await this.prisma.doctor.findUnique({
        where: { userId: user.id },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          specialization: true,
        },
      });
    }

    // Generate token
    const token = this.generateToken(user.id, user.email, user.role);

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      profile,
      token,
    };
  }

  private generateToken(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };
    return this.jwtService.sign(payload);
  }
}