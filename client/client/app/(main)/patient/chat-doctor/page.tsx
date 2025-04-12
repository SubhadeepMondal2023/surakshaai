// app/(main)/patient/chat-doctor/page.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, User, Bot, Paperclip, Image, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useChat } from 'ai/react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  isUser: boolean;
  content: string;
  time: string;
}

const ChatMessage = ({ isUser, content, time }: ChatMessageProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`max-w-[80%] rounded-2xl p-4 ${
        isUser 
          ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-500/20' 
          : 'bg-card text-white border border-purple-300/10 shadow-md'
      }`}>
        <div className="flex items-start mb-2">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
            isUser ? 'bg-purple-400' : 'bg-purple-800'
          }`}>
            {isUser ? <User className="h-4 w-4 text-purple-900" /> : <Bot className="h-4 w-4 text-purple-200" />}
          </div>
          <div>
            <p className="font-medium">{isUser ? 'You' : 'AI Doctor'}</p>
            <p className="text-xs opacity-80">{time}</p>
          </div>
        </div>
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </motion.div>
  );
};

const ChatDoctor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { messages, input, handleInputChange, handleSubmit, setMessages, isLoading: chatIsLoading } = useChat({
    api: '/api/patient/chat',
    onError: (error: Error) => {
      toast.error('An error occurred. Please try again.');
      console.error('Chat error:', error);
    },
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gradient-to-br from-purple-900/40 to-black">
      <div className="max-w-4xl mx-auto pb-10">
        {/* Header Card */}
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
              className="border-purple-400/30 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400/50 flex items-center gap-2"
            >
              <RefreshCw className="h-3 w-3" />
              New Chat
            </Button>
          </div>
          
          <div className="bg-purple-600/10 p-4 rounded-lg mb-4 text-sm border border-purple-400/20">
            <p className="text-purple-100 mb-2">
              <span className="font-medium text-purple-300">Important:</span> This AI assistant provides general medical information and is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p className="text-purple-100">
              In case of emergency, please call your local emergency services or go to the nearest emergency room.
            </p>
          </div>
        </motion.div>
        
        {/* Chat Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl shadow-lg mb-6 p-6 border border-purple-300/20"
        >
          <div className="h-[400px] overflow-y-auto mb-4 px-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent">
            {messages.length === 0 ? (
              <ChatMessage 
                isUser={false} 
                content="Hello! I'm your AI health assistant. How can I help you today?" 
                time={getCurrentTime()} 
              />
            ) : (
              messages.map((m, index) => (
                <ChatMessage
                  key={index}
                  isUser={m.role === 'user'}
                  content={m.content}
                  time={getCurrentTime()}
                />
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <div className="border-t border-purple-300/10 pt-4">
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-purple-400/30 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400/50"
                type="button"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-purple-400/30 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400/50"
                type="button"
              >
                <Image className="h-4 w-4" />
              </Button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  className="w-full h-12 px-5 pr-12 bg-card/60 border border-purple-400/30 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-purple-300/60"
                  disabled={chatIsLoading}
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
                disabled={chatIsLoading || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.div>
        
        {/* Common Questions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-2xl shadow-lg p-6 border border-purple-300/20"
        >
          <h2 className="text-lg font-semibold mb-4 text-purple-100">Common Health Questions</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "What are the symptoms of seasonal allergies?",
              "How can I improve my sleep quality?",
              "What should I do for a mild fever?",
              "How often should I get a physical exam?"
            ].map((question, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="justify-start text-left h-auto py-3 px-4 bg-purple-600/10 border-purple-400/20 text-purple-100 hover:bg-purple-600/20 hover:border-purple-400/30 rounded-xl"
                onClick={() => {
                  setMessages([...messages, { id: Date.now().toString(), role: 'user', content: question }]);
                }}
              >
                {question}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatDoctor;