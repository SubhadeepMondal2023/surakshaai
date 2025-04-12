'use client';

import { Calendar, Clock, MapPin, User, Video, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Appointment } from '@/lib/types';
import Link from 'next/link';

export default function UpcomingAppointments({ patientId }: { patientId: string }) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(`/api/patient/${patientId}/appointments`);
        if (!res.ok) throw new Error('Failed to fetch appointments');
        const data = await res.json();
        setAppointments(data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [patientId]);

  if (loading) return <div className="glass-card p-6">Loading appointments...</div>;

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Upcoming Appointments</h2>
        <Link href="/patient/appointments">
          <Button variant="link" className="text-purple-400 hover:text-purple-300">View All</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))
        ) : (
          <p className="text-gray-400">No upcoming appointments</p>
        )}
      </div>
    </div>
  );
}

function AppointmentCard({ appointment }: { appointment: Appointment }) {
  const getAppointmentIcon = () => {
    switch (appointment.type) {
      case "Video":
        return <Video className="h-4 w-4 text-blue-400" />;
      case "Phone":
        return <Phone className="h-4 w-4 text-green-400" />;
      default:
        return <MapPin className="h-4 w-4 text-red-400" />;
    }
  };

  return (
    <div className="border-l-4 border-purple-600 p-3 bg-gray-800/50 rounded-r-lg">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="h-4 w-4 text-purple-400" />
            <span className="font-medium text-white">{appointment.date}</span>
            <Clock className="h-4 w-4 text-purple-400 ml-2" />
            <span className="text-gray-300">{appointment.time}</span>
          </div>
          
          <div className="flex items-center gap-2 mb-1">
            <User className="h-4 w-4 text-purple-400" />
            <span className="text-white">{appointment.doctor.name}</span>
            <span className="text-xs text-gray-400">({appointment.doctor.specialty})</span>
          </div>
          
          <div className="flex items-center gap-2">
            {getAppointmentIcon()}
            <span className="text-sm text-gray-300">{appointment.type}: {appointment.location}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="text-xs bg-gray-800 border-gray-700 text-white hover:bg-gray-700">
            Reschedule
          </Button>
          <Button size="sm" variant="ghost" className="text-xs text-red-400 hover:text-red-300">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}