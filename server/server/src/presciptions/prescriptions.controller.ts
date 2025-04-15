// server/src/prescriptions/prescriptions.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';

@Controller('prescriptions')
export class PrescriptionsController {
  constructor(private readonly service: PrescriptionsService) {}

  @Post()
  async create(@Body() dto: CreatePrescriptionDto) {
    return this.service.create(dto);
  }
}