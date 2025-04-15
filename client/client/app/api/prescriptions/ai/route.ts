// client/app/api/prescriptions/ai/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { prompt, patientInfo } = await req.json();
  
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  
  const medicalPrompt = `
  As a medical AI assistant, generate a prescription based on:
  Patient: ${patientInfo.name} (${patientInfo.age}y)
  Conditions: ${patientInfo.conditions.join(', ')}
  Allergies: ${patientInfo.allergies.join(', ') || 'None'}
  
  Doctor's Instructions: "${prompt}"
  
  Respond in JSON format:
  {
    "medication": "Standardized medication name",
    "dosage": "Recommended dosage",
    "frequency": "Administration frequency",
    "duration": "Treatment duration",
    "instructions": "Detailed instructions",
    "warnings": "Specific warnings"
  }`;

  try {
    const result = await model.generateContent(medicalPrompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract JSON from markdown if needed
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const jsonResponse = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
    
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: "AI generation failed" },
      { status: 500 }
    );
  }
}