// client/app/patient/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import UpcomingAppointments from './_components/UpcomingAppointments';
import RecentPrescriptions from './_components/RecentPrescriptions';
import QuickActions from './_components/QuickActions';

export default function PatientDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);
  
  useEffect(() => {
    if (!loading && !user) {
      router.push('/sign-in');
    }
  }, [user, loading, router]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Redirecting to login...</p>
      </div>
    );
  }
  
  return (
    <>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex gap-4 items-center">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold text-xl">
            {user?.profile?.firstName?.charAt(0) || ''}
            {user?.profile?.lastName?.charAt(0) || ''}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {greeting}, {user?.profile?.firstName || 'Patient'}!
            </h1>
            <p className="text-gray-600">Welcome to your patient dashboard</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <UpcomingAppointments patientId={user.id} />
          <QuickActions patientId={user.id} />
        </div>
        <div className="space-y-6">
          <RecentPrescriptions patientId={user.id} />
        </div>
      </div>
    </>
  );
}