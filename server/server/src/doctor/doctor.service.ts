import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AppointmentStatus, UserRole } from '@prisma/client';
import { AvailabilityDto } from './dto/availability.dto';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}

  async getDoctorProfile(userId: string) {
    return this.prisma.doctor.findUnique({
      where: { userId },
      include: {
        user: {
          select: {
            email: true,
            createdAt: true,
          },
        },
        appointments: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  async getDoctorAppointments(
    userId: string, 
    date?: string, 
    status?: AppointmentStatus
  ) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { userId },
    });

    if (!doctor) throw new NotFoundException('Doctor not found');

    const dateFilter = date ? new Date(date) : undefined;
    
    return this.prisma.appointment.findMany({
      where: {
        doctorId: doctor.id,
        ...(dateFilter && {
          dateTime: {
            gte: dateFilter,
            lt: new Date(dateFilter.setDate(dateFilter.getDate() + 1)),
          },
        }),
        ...(status && { status }),
      },
      include: {
        patient: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
            phoneNumber: true,
          },
        },
      },
      orderBy: {
        dateTime: 'asc',
      },
    });
  }
  
  async getTodayAppointments(userId: string) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { userId },
    });
    
    if (!doctor) throw new NotFoundException('Doctor not found');
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return this.prisma.appointment.findMany({
      where: {
        doctorId: doctor.id,
        dateTime: {
          gte: today,
          lt: tomorrow,
        },
        status: {
          not: 'CANCELLED',
        },
      },
      include: {
        patient: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
      },
      orderBy: {
        dateTime: 'asc',
      },
    });
  }
  
  async getPendingConsults(userId: string) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { userId },
    });
    
    if (!doctor) throw new NotFoundException('Doctor not found');
    
    return this.prisma.appointment.findMany({
      where: {
        doctorId: doctor.id,
        status: {
          in: ['SCHEDULED', 'CHECKED_IN', 'WAITING'],
        },
      },
      include: {
        patient: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
      },
      orderBy: {
        dateTime: 'asc',
      },
    });
  }

  async getPrescriptionsDue(userId: string) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { userId },
    });
    
    if (!doctor) throw new NotFoundException('Doctor not found');
    
    const today = new Date();
    
    return this.prisma.prescription.findMany({
      where: {
        doctorId: doctor.id,
        expiryDate: {
          gt: today,
        },
        status: 'ACTIVE',
      },
      include: {
        patient: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
      },
      orderBy: {
        expiryDate: 'asc',
      },
    });
  }
  
  async getAvailableSlots(userId: string) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { userId },
    });
    
    if (!doctor) throw new NotFoundException('Doctor not found');
    
    return this.prisma.availableSlot.findMany({
      where: {
        doctorId: doctor.id,
        isBooked: false,
        startTime: {
          gt: new Date(),
        },
      },
      orderBy: {
        startTime: 'asc',
      },
    });
  }
  
  async setAvailableSlots(userId: string, availabilityDto: AvailabilityDto) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { userId },
    });
    
    if (!doctor) throw new NotFoundException('Doctor not found');
    
    // First, clear existing future slots
    await this.prisma.availableSlot.deleteMany({
      where: {
        doctorId: doctor.id,
        startTime: {
          gt: new Date(),
        },
      },
    });
    
    // Create new slots
    return this.prisma.availableSlot.createMany({
      data: availabilityDto.slots.map(slot => ({
        doctorId: doctor.id,
        startTime: slot.startTime,
        endTime: slot.endTime,
        dayOfWeek: slot.dayOfWeek,
      })),
    });
  }

  async getDoctorStats(userId: string) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { userId },
    });
    
    if (!doctor) throw new NotFoundException('Doctor not found');
    
    const [totalAppointments, completedAppointments, todayAppointments, totalPatients] = await Promise.all([
      this.prisma.appointment.count({
        where: { doctorId: doctor.id },
      }),
      this.prisma.appointment.count({
        where: { 
          doctorId: doctor.id,
          status: 'COMPLETED',
        },
      }),
      this.prisma.appointment.count({
        where: { 
          doctorId: doctor.id,
          dateTime: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lt: new Date(new Date().setHours(23, 59, 59, 999)),
          },
        },
      }),
      this.prisma.appointment.groupBy({
        by: ['patientId'],
        where: { doctorId: doctor.id },
        _count: true,
      }).then(result => result.length),
    ]);
    
    return {
      totalAppointments,
      completedAppointments,
      todayAppointments,
      totalPatients,
    };
  }
}