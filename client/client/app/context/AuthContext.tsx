'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  role: 'PATIENT' | 'DOCTOR';
  profile?: {
    id: string;
    firstName: string;
    lastName: string;
    [key: string]: any;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Set API URL from environment variables with fallback
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api';

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // First check if we're in a browser environment
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('token');
          if (token) {
            const userData = JSON.parse(localStorage.getItem('user') || '{}');
            setUser(userData);
          }
        }
      } catch (error) {
        console.error('Auth check error:', error);
        // Clear invalid stored data
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Modified login function in AuthProvider
// Add this to your existing AuthContext.tsx file

const login = async (email: string, password: string): Promise<void> => {
  setLoading(true);
  try {
    console.log(`Attempting login to: ${API_URL}/auth/login`);
    
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // Include cookies if your API uses cookies
    });

    // Handle non-JSON responses
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error('Non-JSON response:', text);
      throw new Error('Server returned non-JSON response. Please check server logs.');
    }

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    console.log('Login successful:', data);

    // Verify we got a token
    if (!data.token) {
      throw new Error('No authentication token received');
    }

    // Save auth info
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify({
      id: data.id,
      email: data.email,
      role: data.role,
      profile: data.profile,
    }));

    setUser({
      id: data.id,
      email: data.email,
      role: data.role,
      profile: data.profile,
    });

    // We're no longer handling redirection here - it will be managed by the login page
    // This ensures the user state is fully updated before any redirect happens
  } catch (error: any) {
    console.error('Login error:', error);
    throw error;
  } finally {
    setLoading(false);
  }
};

// Similarly, update the register function:
const register = async (userData: any): Promise<void> => {
  setLoading(true);
  try {
    // Construct the registration URL properly
    const apiUrl = `${API_URL}/auth/register`;
    console.log('Full registration URL:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    // Log full response for debugging
    console.log('Response status:', response.status);
    const contentType = response.headers.get("content-type");
    
    if (!response.ok) {
      let errorMessage = 'Registration failed';
      try {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } else {
          const textError = await response.text();
          console.error('Server response:', textError);
        }
      } catch (e) {
        console.error('Error parsing error response:', e);
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log('Registration successful:', data);
    
    // Handle successful registration
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({
        id: data.id,
        email: data.email,
        role: data.role,
        profile: data.profile,
      }));
      
      setUser({
        id: data.id,
        email: data.email,
        role: data.role,
        profile: data.profile,
      });
      
      // We're no longer handling redirection here
    }
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  } finally {
    setLoading(false);
  }
};

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      register, 
      logout, 
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}