'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function RedirectPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login');
        return;
      }
      
      // Redirect based on user role
      if (user.role === 'PATIENT') {
        router.push('/patient');
      } else if (user.role === 'DOCTOR') {
        router.push('/doctor');
      } else {
        router.push('/');
      }
    }
  }, [user, loading, router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Redirecting...</h2>
        <p className="mt-2">Please wait while we redirect you to the appropriate dashboard.</p>
      </div>
    </div>
  );
}