// app/api/patient/[patientId]/health-metrics/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { HealthMetric } from '@/lib/types';

export async function GET(
  request: NextRequest,
  { params }: { params: { patientId: string } }
) {
  try {
    // Mock data
    const mockHealthMetrics: HealthMetric[] = [
      {
        date: '2025-04-01',
        bloodPressure: '120/80',
        heartRate: 72,
        weight: 158
      },
      {
        date: '2025-03-15',
        bloodPressure: '118/78',
        heartRate: 70,
        weight: 160
      },
      {
        date: '2025-03-01',
        bloodPressure: '122/82',
        heartRate: 74,
        weight: 162
      },
      {
        date: '2025-02-15',
        bloodPressure: '124/84',
        heartRate: 76,
        weight: 165
      },
      {
        date: '2025-02-01',
        bloodPressure: '126/86',
        heartRate: 78,
        weight: 167
      }
    ];
    
    return NextResponse.json(mockHealthMetrics);
  } catch (error) {
    console.error('Error fetching health metrics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch health metrics' }, 
      { status: 500 }
    );
  }
}