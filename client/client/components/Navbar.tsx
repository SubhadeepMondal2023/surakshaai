import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

const Navbar = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black py-4 shadow-md">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-violet-500" />
          <span className="font-bold text-xl text-white">Suraksha
            <span className="text-violet-400">AI</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white hover:text-violet-400">Features</a>
          <a href="#how-it-works" className="text-white hover:text-violet-400">How It Works</a>
          <a href="#demo" className="text-white hover:text-violet-400">Demo</a>
          <a href="#testimonials" className="text-white hover:text-violet-400">Testimonials</a>
          <a href="#about" className="text-white hover:text-violet-400">About Us</a>
          <a href="#faq" className="text-white hover:text-violet-400">FAQ</a>
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-violet-600 text-white rounded-md">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 border border-violet-600 text-violet-600 bg-white rounded-md">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800">
          <nav className="container flex flex-col py-4 space-y-4">
            <a href="#features" className="px-4 py-2 text-white" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="px-4 py-2 text-white" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#demo" className="px-4 py-2 text-white" onClick={() => setIsMenuOpen(false)}>Demo</a>
            <a href="#testimonials" className="px-4 py-2 text-white" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#about" className="px-4 py-2 text-white" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#faq" className="px-4 py-2 text-white" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 border border-violet-600 text-violet-600 bg-white rounded-md w-full">
                Sign Up
              </button>
            </SignUpButton>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;