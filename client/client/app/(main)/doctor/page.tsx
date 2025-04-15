'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Search, Bell, Calendar as CalendarIcon, Clock, Video, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  specialization: string;
  licenseNumber: string;
  rating: number;
  reviewCount: number;
  user: {
    email: string;
  };
}

interface Appointment {
  id: string;
  dateTime: Date;
  status: string;
  type: string;
  reason?: string;
  duration: number;
  patient: {
    id: string;
    firstName: string;
    lastName: string;
    medicalHistory?: string;
    insuranceProvider?: string;
  };
}

export default function DoctorDashboard() {
  const { data: session } = useSession();
  const { toast } = useToast();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [doctorRes, appointmentsRes] = await Promise.all([
          fetch(`/api/doctors/${session?.user.id}`),
          fetch(`/api/doctors/${session?.user.id}/appointments?date=${selectedDate.toISOString()}`)
        ]);

        if (!doctorRes.ok || !appointmentsRes.ok) throw new Error('Failed to fetch data');

        const doctorData = await doctorRes.json();
        const appointmentsData = await appointmentsRes.json();

        setDoctor(doctorData);
        setAppointments(appointmentsData);
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to load dashboard data',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    if (session?.user.id) fetchData();
  }, [session, selectedDate, toast]);

  const startTelemedicine = (appointmentId: string) => {
    // Implementation would connect to your video API
    toast({
      title: 'Starting consultation',
      description: 'Preparing video session...'
    });
  };

  if (loading || !doctor) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-1/4" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-1/2" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Doctor Profile Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">Dr. {doctor.firstName} {doctor.lastName}</h1>
          <p className="text-gray-600">
            {doctor.specialization} | ID: {doctor.licenseNumber}
          </p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-1">
              {doctor.rating.toFixed(1)} ({doctor.reviewCount} reviews)
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Date Selector */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={() => {
          const prevDay = new Date(selectedDate);
          prevDay.setDate(prevDay.getDate() - 1);
          setSelectedDate(prevDay);
        }}>
          Previous
        </Button>
        
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span className="font-medium">
            {selectedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>
        
        <Button variant="outline" onClick={() => {
          const nextDay = new Date(selectedDate);
          nextDay.setDate(nextDay.getDate() + 1);
          setSelectedDate(nextDay);
        }}>
          Next
        </Button>
      </div>

      {/* Appointments */}
      <h2 className="text-xl font-semibold">Today's Appointments</h2>
      
      {appointments.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-gray-500">No appointments scheduled for this day</p>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {appointments.map((appointment) => (
            <Card key={appointment.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={`/patients/${appointment.patient.id}.jpg`} />
                    <AvatarFallback>
                      {appointment.patient.firstName.charAt(0)}{appointment.patient.lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">
                      {appointment.patient.firstName} {appointment.patient.lastName}
                    </h3>
                    <p className="text-sm text-gray-500">ID: {appointment.patient.id}</p>
                  </div>
                </div>
                <Badge variant={
                  appointment.status === 'CONFIRMED' ? 'default' : 
                  appointment.status === 'CANCELLED' ? 'destructive' : 'outline'
                }>
                  {appointment.status}
                </Badge>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  {new Date(appointment.dateTime).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                  {' • '}
                  {appointment.duration} mins
                </div>
                <div className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-2" />
                  {appointment.type === 'TELEMEDICINE' ? 'Virtual Visit' : 'In-Person'}
                </div>
              </div>

              {appointment.reason && (
                <p className="mt-3 text-sm">
                  <span className="font-medium">Reason:</span> {appointment.reason}
                </p>
              )}

              <div className="mt-4 flex gap-2">
                <Button 
                  size="sm" 
                  onClick={() => startTelemedicine(appointment.id)}
                  disabled={appointment.type !== 'TELEMEDICINE'}
                >
                  <Video className="h-4 w-4 mr-2" />
                  Start Consult
                </Button>
                <Button variant="outline" size="sm">
                  View Patient
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}