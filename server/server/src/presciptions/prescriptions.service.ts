// server/src/prescriptions/prescriptions.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.sercice';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';

@Injectable()
export class PrescriptionsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePrescriptionDto) {
    // Calculate expiry date based on duration (e.g., "30 days" -> 30 days from now)
    const days = parseInt(dto.duration) || 30; // Default to 30 days if parsing fails
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + days);

    return this.prisma.prescription.create({
      data: {
        patientId: dto.patientId,
        doctorId: dto.doctorId,
        medicationName: dto.medication,
        dosage: dto.dosage,
        frequency: dto.frequency,
        duration: dto.duration,
        instructions: dto.instructions,
        status: 'ACTIVE',
        expiryDate: expiryDate,
        pharmacy: dto.pharmacy,
        refills: dto.refills || 0
      }
    });
  }
}