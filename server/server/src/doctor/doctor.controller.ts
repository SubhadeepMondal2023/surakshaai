import {
    Controller,
    Get,
    Post,
    Body,
    Req,
    Query,
    UseGuards,
    NotFoundException,
  } from '@nestjs/common';
  import { DoctorService } from './doctor.service';
  import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
  import { RoleGuard } from '../auth/guards/role.guard';
  import { Roles } from '../auth/decorators/roles.decorator';
  import { AppointmentStatus, UserRole } from '@prisma/client';
  import { AvailabilityDto } from './dto/availability.dto';
  import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
  
  @ApiTags('Doctor')
  @ApiBearerAuth('JWT-auth')
  @Controller('api/doctor')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.DOCTOR)
  export class DoctorController {
    constructor(private readonly doctorService: DoctorService) {}
  
    @Get('profile')
    @ApiOperation({ summary: 'Get doctor profile information' })
    @ApiResponse({ status: 200, description: 'Doctor profile retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Doctor not found' })
    async getDoctorProfile(@Req() req) {
      return this.doctorService.getDoctorProfile(req.user.id);
    }
  
    @Get('appointments')
    @ApiOperation({ summary: 'Get doctor appointments with optional filters' })
    @ApiQuery({ name: 'date', required: false, description: 'Filter by date (YYYY-MM-DD)' })
    @ApiQuery({ name: 'status', required: false, enum: Object.values(AppointmentStatus) })
    @ApiResponse({ status: 200, description: 'Appointments retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Doctor not found' })
    async getDoctorAppointments(
      @Req() req,
      @Query('date') date?: string,
      @Query('status') status?: AppointmentStatus,
    ) {
      return this.doctorService.getDoctorAppointments(req.user.id, date, status);
    }
    
    @Get('appointments/today')
    @ApiOperation({ summary: 'Get today\'s appointments' })
    @ApiResponse({ status: 200, description: 'Today\'s appointments retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Doctor not found' })
    async getTodayAppointments(@Req() req) {
      return this.doctorService.getTodayAppointments(req.user.id);
    }
  
    @Get('appointments/pending')
    @ApiOperation({ summary: 'Get pending consultations' })
    @ApiResponse({ status: 200, description: 'Pending consultations retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Doctor not found' })
    async getPendingConsults(@Req() req) {
      return this.doctorService.getPendingConsults(req.user.id);
    }
  
    @Get('prescriptions/due')
    @ApiOperation({ summary: 'Get active prescriptions that are due' })
    @ApiResponse({ status: 200, description: 'Active prescriptions retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Doctor not found' })
    async getPrescriptionsDue(@Req() req) {
      return this.doctorService.getPrescriptionsDue(req.user.id);
    }
    
    @Get('availability')
    @ApiOperation({ summary: 'Get doctor\'s available slots' })
    @ApiResponse({ status: 200, description: 'Available slots retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Doctor not found' })
    async getAvailableSlots(@Req() req) {
      return this.doctorService.getAvailableSlots(req.user.id);
    }
    
    @Post('availability')
    @ApiOperation({ summary: 'Set doctor\'s available slots' })
    @ApiResponse({ status: 201, description: 'Available slots set successfully' })
    @ApiResponse({ status: 404, description: 'Doctor not found' })
    async setAvailableSlots(@Req() req, @Body() availabilityDto: AvailabilityDto) {
      return this.doctorService.setAvailableSlots(req.user.id, availabilityDto);
    }
  
    @Get('stats')
    @ApiOperation({ summary: 'Get doctor statistics' })
    @ApiResponse({ status: 200, description: 'Statistics retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Doctor not found' })
    async getDoctorStats(@Req() req) {
      return this.doctorService.getDoctorStats(req.user.id);
    }
  }