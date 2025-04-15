import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const nestApiUrl = process.env.NEST_API_URL || 'http://localhost:3001';
    const response = await fetch(`${nestApiUrl}/doctors/${params.id}`, {
      headers: {
        'Content-Type': 'application/json',
        // Add authentication headers if needed
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch doctor data');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch doctor data' },
      { status: 500 }
    );
  }
}