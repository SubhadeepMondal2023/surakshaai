// app/patient/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSession } from '@clerk/nextjs';
import UpcomingAppointments from '../_components/UpcomingAppointments';
import RecentPrescriptions from '../_components/RecentPrescriptions';
import QuickActions from '../_components/QuickActions';
import HealthMetricsChart from '../_components/HealthMetricsChart';

export default function PatientDashboard() {
  const { session } = useSession();
  const [patientId, setPatientId] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user) {
      // Get patient ID from Clerk metadata or your database
      const id = session.user.publicMetadata.patientId as string;
      setPatientId(id);
    }
  }, [session]);

  if (!patientId) return <div>Loading patient data...</div>;

  return (
    <div className="pb-10">
      {/* Welcome section */}
      <div className="health-card mb-6">
        <div className="flex gap-4 items-center">
          <div className="h-16 w-16 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
            {session?.user.firstName?.charAt(0)}
            {session?.user.lastName?.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Welcome back, {session?.user.fullName}
            </h1>
            <p className="text-gray-600">Patient ID: {patientId}</p>
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