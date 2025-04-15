// app/(main)/patient/chat-doctor/page.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Send, Mic, User, Bot, RefreshCw, AlertTriangle, Stethoscope, Pill } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useChat } from 'ai/react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// Define our custom message type with metadata
interface MedicalMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  metadata?: {
    triage?: 'emergency' | 'urgent' | 'routine';
  };
  createdAt?: Date;
}

interface ChatMessageProps {
  isUser: boolean;
  content: string;
  metadata?: {
    triage?: 'emergency' | 'urgent' | 'routine';
  };
  time: string;
}

const ChatMessage = ({ isUser, content, metadata, time }: ChatMessageProps) => {
  const medicationMatch = content.match(/💊 (.+?)(?=\n|$)/);
  const homeCareMatch = content.match(/🏠 (.+?)(?=\n|$)/);
  const emergencyMatch = content.match(/🚑 (.+?)(?=\n|$)/);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`max-w-[90%] rounded-2xl p-4 ${
        isUser 
          ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-500/20' 
          : metadata?.triage === 'emergency'
            ? 'bg-red-900/50 border-red-500/30 text-white'
            : metadata?.triage === 'urgent'
              ? 'bg-yellow-900/30 border-yellow-500/30 text-white'
              : 'bg-card text-white border border-purple-300/10 shadow-md'
      }`}>
        <div className="flex items-start mb-2">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
            isUser 
              ? 'bg-purple-400' 
              : metadata?.triage === 'emergency'
                ? 'bg-red-600'
                : metadata?.triage === 'urgent'
                  ? 'bg-yellow-600'
                  : 'bg-purple-800'
          }`}>
            {isUser 
              ? <User className="h-4 w-4 text-purple-900" /> 
              : metadata?.triage === 'emergency'
                ? <AlertTriangle className="h-4 w-4 text-white" />
                : <Bot className="h-4 w-4 text-purple-200" />}
          </div>
          <div>
            <p className="font-medium">
              {isUser ? 'You' : metadata?.triage === 'emergency' ? 'EMERGENCY ALERT' : 'AI Doctor'}
            </p>
            <p className="text-xs opacity-80">{time}</p>
          </div>
        </div>
        
        {metadata?.triage === 'emergency' && (
          <div className="bg-red-800/50 p-3 rounded-lg mb-3 flex items-start gap-2 border border-red-500/30">
            <AlertTriangle className="h-5 w-5 text-red-300 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-red-100">Seek Emergency Care Immediately</p>
              {emergencyMatch && (
                <p className="text-sm text-red-200">{emergencyMatch[1]}</p>
              )}
            </div>
          </div>
        )}

        {medicationMatch && (
          <div className="bg-purple-900/20 p-3 rounded-lg mb-3 flex items-start gap-2 border border-purple-500/30">
            <Pill className="h-5 w-5 text-purple-300 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-purple-100">Medication Suggestion</p>
              <p className="text-sm text-purple-200">{medicationMatch[1]}</p>
            </div>
          </div>
        )}

        {homeCareMatch && (
          <div className="bg-teal-900/20 p-3 rounded-lg mb-3 flex items-start gap-2 border border-teal-500/30">
            <Stethoscope className="h-5 w-5 text-teal-300 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-teal-100">Home Care</p>
              <p className="text-sm text-teal-200">{homeCareMatch[1]}</p>
            </div>
          </div>
        )}

        <div className="whitespace-pre-wrap">
          {content.split('\n').map((line, i) => {
            if (line.startsWith('💊') || line.startsWith('🏠') || line.startsWith('🚑')) return null;
            return <p key={i}>{line}</p>;
          })}
        </div>
      </div>
    </motion.div>
  );
};

const COMMON_QUESTIONS = [
  {
    question: "I have fever (101°F) with body aches",
    tag: "urgent"
  },
  {
    question: "Sharp chest pain when breathing deeply",
    tag: "emergency"
  },
  {
    question: "Best OTC medicine for seasonal allergies",
    tag: "routine"
  },
  {
    question: "How to treat mild food poisoning at home",
    tag: "routine"
  }
];

const ChatDoctor = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Use custom state for messages instead of useChat's messages
  const [medicalMessages, setMedicalMessages] = useState<MedicalMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: MedicalMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      createdAt: new Date()
    };

    setMedicalMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/patient/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...medicalMessages, userMessage]
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      
      const aiMessage: MedicalMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: data.response,
        metadata: data.metadata,
        createdAt: new Date()
      };

      setMedicalMessages(prev => [...prev, aiMessage]);

      // Emergency detection
      if (data.metadata?.triage === 'emergency') {
        toast.warning('Emergency Detected', {
          description: 'Please seek immediate medical attention',
          duration: 10000
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [medicalMessages]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleNewChat = () => {
    if (medicalMessages.length > 0 && confirm('Start a new conversation? Your chat history will be cleared.')) {
      setMedicalMessages([]);
    }
  };

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gradient-to-br from-purple-900/40 to-black">
      <div className="max-w-4xl mx-auto pb-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl shadow-lg mb-6 p-6 border border-purple-300/20"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-purple-600/30 flex items-center justify-center mr-4 shadow-inner shadow-purple-500/50">
                <Bot className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">AI Doctor Assistant</h1>
                <p className="text-sm text-purple-200/80">Available 24/7 for medical advice</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleNewChat}
              disabled={medicalMessages.length === 0}
              className="border-purple-400/30 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400/50 flex items-center gap-2"
            >
              <RefreshCw className="h-3 w-3" />
              New Chat
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-red-900/30 to-purple-600/10 p-4 rounded-lg mb-4 text-sm border border-red-400/20">
            <p className="text-red-100 mb-2 flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <span className="font-medium">Emergency Warning:</span> For chest pain, difficulty breathing, severe bleeding, or suicidal thoughts - call emergency services immediately.
              </span>
            </p>
            <p className="text-purple-100 pl-6">
              This AI provides general information only, not medical diagnosis or treatment.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl shadow-lg mb-6 p-6 border border-purple-300/20"
        >
          <div className="h-[400px] overflow-y-auto mb-4 px-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent">
            {medicalMessages.length === 0 ? (
              <ChatMessage 
                isUser={false} 
                content="Hello! I'm your AI health assistant. Please describe your symptoms or health concern." 
                time={getCurrentTime()} 
              />
            ) : (
              medicalMessages.map((m, index) => (
                <ChatMessage
                  key={index}
                  isUser={m.role === 'user'}
                  content={m.content}
                  metadata={m.metadata}
                  time={getCurrentTime()}
                />
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="border-t border-purple-300/10 pt-4">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe your symptoms..."
                  className="w-full h-12 px-5 pr-12 bg-card/60 border border-purple-400/30 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-purple-300/60"
                  disabled={isLoading}
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2 rounded-full text-purple-300 hover:text-purple-200 hover:bg-purple-600/20"
                  type="button"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                size="icon" 
                className="rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 h-12 w-12 shadow-md shadow-purple-700/30"
                type="submit"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <div className="h-4 w-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-2xl shadow-lg p-6 border border-purple-300/20"
        >
          <h2 className="text-lg font-semibold mb-4 text-purple-100">Quick Health Questions</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {COMMON_QUESTIONS.map((item, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className={`justify-start text-left h-auto py-3 px-4 rounded-xl ${
                  item.tag === 'emergency'
                    ? 'bg-red-900/20 border-red-400/30 text-red-100 hover:bg-red-900/30'
                    : item.tag === 'urgent'
                      ? 'bg-yellow-900/20 border-yellow-400/30 text-yellow-100 hover:bg-yellow-900/30'
                      : 'bg-purple-600/10 border-purple-400/20 text-purple-100 hover:bg-purple-600/20'
                }`}
                onClick={() => {
                  setInput(item.question);
                }}
              >
                {item.question}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatDoctor;