// server/src/prescriptions/dto/create-prescription.dto.ts
export class CreatePrescriptionDto {
    patientId: string;
    doctorId: string;
    medication: string;
    dosage: string;
    frequency: string;
    duration: string;
    instructions?: string;
    pharmacy?: string;
    refills?: number;
  }