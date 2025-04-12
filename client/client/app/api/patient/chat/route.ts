// Use AI SDK properly
import { Message } from 'ai';
// Import the correct response class
import { NextResponse } from 'next/server';

import { ChatMistralAI } from '@langchain/mistralai';
import { AIMessage, HumanMessage, SystemMessage } from '@langchain/core/messages';
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { StringOutputParser } from "@langchain/core/output_parsers";

const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;

// Verify API key is present
if (!MISTRAL_API_KEY) {
  console.error("Missing MISTRAL_API_KEY environment variable");
}

// Medical knowledge for in-memory vector store
const medicalKnowledge = `
Seasonal allergies typically present with symptoms such as sneezing, runny or stuffy nose, watery and itchy eyes, and itchy sinuses, throat, or ear canals. They are caused by the body's immune response to allergens like pollen, grass, or dust.

Sleep quality can be improved by maintaining a consistent sleep schedule, creating a restful environment, limiting exposure to screens before bedtime, avoiding large meals, caffeine, and alcohol before sleeping, and regular physical activity.

For a mild fever (below 102°F or 38.9°C), you can take acetaminophen or ibuprofen as directed, drink plenty of fluids to stay hydrated, rest, and dress in lightweight clothing. If fever persists for more than three days or is accompanied by severe symptoms, contact a healthcare provider.

Adults should generally have a physical exam every 1-3 years depending on age and existing health conditions. Annual checkups are recommended for people over 50, while younger adults without health issues might go every 2-3 years.

Diabetes symptoms include increased thirst, frequent urination, extreme hunger, unexplained weight loss, fatigue, irritability, blurred vision, slow-healing sores, and frequent infections.

Good nutrition basics include eating a variety of foods from all food groups, controlling portion sizes, limiting sugar and salt intake, choosing whole grains, lean proteins, and healthy fats, and staying hydrated by drinking plenty of water.

Hypertension, or high blood pressure, is often asymptomatic which is why it's called the "silent killer." When symptoms do occur, they may include headaches, shortness of breath, nosebleeds, flushing, dizziness, chest pain, visual changes, and blood in the urine.

Regular exercise benefits include improved cardiovascular health, weight management, stronger muscles and bones, increased energy levels, better sleep, improved brain health, reduced risk of chronic diseases, and enhanced mental wellbeing.

Common cold symptoms typically include runny or stuffy nose, sore throat, cough, congestion, mild body aches, sneezing, low-grade fever, and mild headache. Symptoms usually appear one to three days after exposure to a cold virus.

Stress management techniques include regular physical activity, relaxation techniques like deep breathing or meditation, maintaining social connections, setting aside time for hobbies, getting enough sleep, and seeking professional help when needed.
`;

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Medical system prompt
  const systemPrompt = `
  You are Dr. AI, a professional medical assistant. Your role is to provide helpful, 
  accurate medical information while being cautious about potential health risks.
  
  Guidelines:
  1. Always maintain a professional, empathetic tone
  2. Ask clarifying questions when symptoms are vague
  3. Provide evidence-based information
  4. Clearly state when a condition requires professional medical attention
  5. Never diagnose serious conditions - always recommend consulting a doctor
  6. For medication questions, advise checking with a pharmacist or physician
  7. Suggest general wellness tips when appropriate
  
  Important disclaimers:
  - This is not a substitute for professional medical advice
  - In emergencies, advise calling emergency services immediately
  - Always recommend following up with a healthcare provider for persistent symptoms
  `;

  try {
    // Debug API key presence (remove in production)
    console.log("API Key present:", !!MISTRAL_API_KEY);

    // Create in-memory vector store from medical knowledge
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const docs = await textSplitter.createDocuments([medicalKnowledge]);
    
    // Initialize embeddings with Mistral
    const embeddings = new MistralAIEmbeddings({
      apiKey: MISTRAL_API_KEY,
      model: "mistral-embed", // Their embedding model
    });
    
    // Create vector store with our medical knowledge
    const vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);

    // Set up Mistral chat model with the specific model you're using
    const model = new ChatMistralAI({
      apiKey: MISTRAL_API_KEY,
      modelName: "mistralai/Mistral-7B-Instruct-v0.3", // Using your specific model
      temperature: 0.3,
      streaming: true,
    });

    // Format messages for chat history
    const formattedMessages = [
      new SystemMessage(systemPrompt),
      ...messages.map((m: Message) =>
        m.role === 'user'
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      ),
    ];

    // Get the last user message
    const latestUserMessage = formattedMessages
      .filter(msg => msg._getType() === 'human')
      .pop();
    
    const userQuestion = latestUserMessage ? latestUserMessage.content : '';

    // Create retrieval chain
    const retriever = vectorStore.asRetriever();
    
    // Setup prompt template
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", systemPrompt],
      ["human", "{input}"]  // Using input as the parameter name
    ]);

    // Create the chain
    const stuffChain = await createStuffDocumentsChain({
      llm: model,
      prompt,
      outputParser: new StringOutputParser(),
    });

    const retrievalChain = await createRetrievalChain({
      combineDocsChain: stuffChain,
      retriever,
    });

    // Invoke the chain with the user's question
    const response = await retrievalChain.invoke({
      input: userQuestion
    });

    // Return the response
    return NextResponse.json({ 
      response: response.answer
    });
  } catch (error: unknown) {
    console.error('Chat error:', error);
    
    // Enhanced error handling
    if (error instanceof Error) {
      // Check for authentication errors
      if (error.message.includes('401') || error.message.includes('Unauthorized')) {
        return NextResponse.json({ 
          error: 'Authentication failed with Mistral API. Please check your API key.',
          details: error.message
        }, { status: 401 });
      }
      
      // Check for model availability errors
      if (error.message.includes('model') && (error.message.includes('not found') || error.message.includes('unavailable'))) {
        return NextResponse.json({ 
          error: 'The specified Mistral model is not available or not found. Please check your model name.',
          details: error.message
        }, { status: 400 });
      }
    }
    
    // Generic error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: 'Error processing chat', details: errorMessage }, {
      status: 500
    });
  }
}