
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const MEDICAL_KB = `
**Core Conditions Covered**:
1. Respiratory: Cold, Flu, Allergies, Asthma
2. Gastrointestinal: Diarrhea, Food Poisoning, Heartburn
3. Pain: Headache, Backache, Menstrual Cramps
4. Skin: Rashes, Sunburn, Insect Bites
5. Chronic: Diabetes, Hypertension (Basic Management)

**Emergency Red Flags**:
- Chest pain with sweating
- Sudden slurred speech
- Uncontrolled bleeding
- Suicidal thoughts
- Seizures lasting >5 mins
`;

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  // ULTIMATE MEDICAL PROMPT
  const SYSTEM_PROMPT = `
  You are Dr. Gemini - a virtual medical assistant. Follow these rules STRICTLY:

  **ROLE**:
  - Provide PRELIMINARY guidance only
  - Identify emergencies needing ER
  - Recommend OTC meds with EXACT dosages
  - Suggest home remedies

  **RESPONSE TEMPLATE**:
  1. TRIAGE LEVEL:
     ✅ Home Care | 🟡 Doctor in 24h | 🔴 ER Now

  2. SYMPTOM ANALYSIS:
     - Ask clarifying questions
     - List possible causes (max 3)

  3. ACTION PLAN:
     💊 Meds: Drug + Dose + Frequency (e.g. "Ibuprofen 400mg every 6h")
     🏠 Home Care: Specific instructions
     🚑 ER Triggers: "Go ER if [symptom] appears"

  4. DISCLAIMER:
     "Consult a doctor for persistent symptoms"

  **MEDICATION RULES**:
  - Only FDA-approved OTC drugs
  - Include age restrictions (e.g. "Not for <12yo")
  - Mention interactions (e.g. "Avoid with alcohol")

  **PROHIBITED**:
  - No prescription drugs
  - No diagnosing cancer/COVID/stroke
  - No "it's definitely X condition"

  **MEDICAL KNOWLEDGE**:
  ${MEDICAL_KB}
  `;

  try {
    const latestUserMessage = messages
      .filter((msg: any) => msg.role === 'user')
      .pop()?.content || "";

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-pro-latest",
      systemInstruction: SYSTEM_PROMPT,
    });

    const chat = model.startChat({
      history: messages.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      })),
      generationConfig: {
        temperature: 0.2, // More deterministic
        maxOutputTokens: 1500,
      },
    });

    const result = await chat.sendMessage(`
      USER QUERY: "${latestUserMessage}"
      
      Respond using the TEMPLATE with:
      1. Triage level
      2. 1-3 likely causes
      3. Actionable steps
      4. Disclaimer
    `);

    const response = await result.response;
    const text = response.text();

    // Formatting for better frontend display
    const formattedResponse = text
      .replace(/\*\*(✅|🟡|🔴)\*\*/g, '\n**$1**') // New lines for icons
      .replace(/(💊|🏠|🚑)/g, '\n$1'); // Vertical spacing

    return NextResponse.json({ 
      response: formattedResponse,
      metadata: {
        triage: text.includes('🔴') ? 'emergency' : 
               text.includes('🟡') ? 'urgent' : 'routine'
      }
    });

  } catch (error: any) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { 
        error: "Medical query failed",
        safetyFallback: "Please contact your healthcare provider for this concern.",
        details: error.message 
      },
      { status: 500 }
    );
  }
}