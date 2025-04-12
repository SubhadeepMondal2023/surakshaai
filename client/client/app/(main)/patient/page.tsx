// app/(main)/patient/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSession } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import UpcomingAppointments from './_components/UpcomingAppointments';
import RecentPrescriptions from './_components/RecentPrescriptions';
import QuickActions from './_components/QuickActions';
import HealthMetricsChart from './_components/HealthMetricsChart';

export default function PatientDashboard() {
  const { session, isLoaded } = useSession();
  const router = useRouter();
  const [patientId, setPatientId] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded) {
      if (!session) {
        router.push('/sign-in');
        return;
      }

      const id = session.user?.publicMetadata.patientId as string || 'demo-patient-id';
      setPatientId(id);
    }
  }, [session, isLoaded, router]);

  if (!isLoaded) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-pulse text-purple-400">Loading...</div>
    </div>
  );

  if (!patientId) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-pulse text-purple-400">Loading patient data...</div>
    </div>
  );

  return (
    <div className="ml-0 md:ml-64 p-4 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Welcome section */}
      <div className="glass-card mb-8 p-6 rounded-xl">
        <div className="flex gap-4 items-center">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold text-xl">
            {session?.user.firstName?.charAt(0) || ''}
            {session?.user.lastName?.charAt(0) || ''}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">
              Welcome back, {session?.user.fullName || 'Patient'}
            </h1>
            <p className="text-purple-200">Patient ID: {patientId}</p>
          </div>
        </div>
      </div>
      
      {/* Main dashboard grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <UpcomingAppointments patientId={patientId} />
          <QuickActions patientId={patientId} />
        </div>
        <div className="space-y-6">
          <RecentPrescriptions patientId={patientId} />
          <HealthMetricsChart patientId={patientId} />
        </div>
      </div>
    </div>
  );
}