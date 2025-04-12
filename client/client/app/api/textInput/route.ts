// File: /app/api/textInput/route.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, callId } = body;
    
    // Call the client-side function through a client API endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || ''}/api/ultravox/send-text`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, callId }),
    });
    
    if (!response.ok) {
      throw new Error(`Error from ultravox API: ${response.status}`);
    }
    
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Error processing text input:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}