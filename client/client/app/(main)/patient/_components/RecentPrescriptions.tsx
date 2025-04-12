'use client';

import { Pill, Calendar, RefreshCcw, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Prescription } from '@/lib/types';
import Link from 'next/link';

export default function RecentPrescriptions({ patientId }: { patientId: string }) {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const res = await fetch(`/api/patient/${patientId}/prescriptions`);
        if (!res.ok) throw new Error('Failed to fetch prescriptions');
        const data = await res.json();
        setPrescriptions(data.slice(0, 3)); // Show only 3 most recent
      } catch (error) {
        console.error('Failed to fetch prescriptions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrescriptions();
  }, [patientId]);

  if (loading) return <div className="glass-card p-6">Loading prescriptions...</div>;

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Recent Prescriptions</h2>
        <Link href={`/patient/prescriptions`}>
          <Button variant="link" className="text-purple-400 hover:text-purple-300">View All</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {prescriptions.length > 0 ? (
          prescriptions.map((prescription) => (
            <PrescriptionCard key={prescription.id} prescription={prescription} />
          ))
        ) : (
          <p className="text-gray-400">No recent prescriptions</p>
        )}
      </div>
    </div>
  );
}

function PrescriptionCard({ prescription }: { prescription: Prescription }) {
  return (
    <div className="flex justify-between items-start border-b border-gray-700 pb-3 last:border-0">
      <div className="flex gap-3">
        <div className="mt-1 p-2 bg-purple-900/50 rounded-lg">
          <Pill className="h-5 w-5 text-purple-400" />
        </div>
        <div>
          <h3 className="font-medium text-white">{prescription.name}</h3>
          <p className="text-sm text-gray-300">{prescription.dosage}, {prescription.frequency}</p>
          <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
            <Calendar className="h-3 w-3" />
            <span>Prescribed on {prescription.prescribedOn}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" className="text-xs bg-gray-800 border-gray-700 text-white hover:bg-gray-700">
          <RefreshCcw className="h-3 w-3 mr-1" />
          Refill ({prescription.refills})
        </Button>
        <Button size="sm" variant="ghost" className="text-xs text-purple-400 hover:text-purple-300">
          <FileText className="h-3 w-3 mr-1" />
          Details
        </Button>
      </div>
    </div>
  );
}