
// app/api/patient/[patientId]/appointments/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Appointment } from '@/lib/types';

export async function GET(
  request: NextRequest,
  { params }: { params: { patientId: string } }
) {
  try {
    // In a real app, you would fetch data from your database
    // For now, we'll return mock data
    const mockAppointments: Appointment[] = [
      {
        id: '1',
        date: '2025-04-20',
        time: '10:00 AM',
        doctor: {
          id: 'd1',
          name: 'Dr. Jane Smith',
          specialty: 'Cardiologist'
        },
        location: 'Main Hospital, Room 302',
        status: 'confirmed',
        type: 'In-person'
      },
      {
        id: '2',
        date: '2025-04-25',
        time: '2:30 PM',
        doctor: {
          id: 'd2',
          name: 'Dr. Michael Wong',
          specialty: 'Dermatologist'
        },
        location: 'North Clinic',
        status: 'confirmed',
        type: 'In-person'
      }
    ];
    
    return NextResponse.json(mockAppointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' }, 
      { status: 500 }
    );
  }
}