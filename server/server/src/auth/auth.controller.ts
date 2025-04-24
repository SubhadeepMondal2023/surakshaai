// server/src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
async register(@Body() registerDto: RegisterDto) {
  console.log('Register endpoint hit with data:', registerDto);
  console.log('Full path:', 'auth/register');
  try {
    const result = await this.authService.register(registerDto);
    console.log('Registration successful:', result);
    return result;
  } catch (error) {
    console.error('Registration error in controller:', error);
    throw error;
  }
}
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}