import { NextRequest, NextResponse } from 'next/server';
import { Prescription } from '@/lib/types';

export async function GET(
  request: NextRequest,
  { params }: { params: { patientId: string } }
) {
  try {
    // Mock data
    const mockPrescriptions: Prescription[] = [
      {
        id: 'p1',
        name: 'Lisinopril',
        dosage: '10mg',
        frequency: 'Once daily',
        prescribedBy: 'Dr. Jane Smith',
        prescribedOn: '2025-04-01',
        refills: 2
      },
      {
        id: 'p2',
        name: 'Atorvastatin',
        dosage: '20mg',
        frequency: 'Once daily',
        prescribedBy: 'Dr. Jane Smith',
        prescribedOn: '2025-04-01',
        refills: 5
      },
      {
        id: 'p3',
        name: 'Metformin',
        dosage: '500mg',
        frequency: 'Twice daily',
        prescribedBy: 'Dr. Michael Wong',
        prescribedOn: '2025-03-15',
        refills: 3
      }
    ];
    
    return NextResponse.json(mockPrescriptions);
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prescriptions' }, 
      { status: 500 }
    );
  }
}