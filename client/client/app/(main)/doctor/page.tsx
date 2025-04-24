'use client';
import { useEffect, useState } from 'react';
import { Search, Bell, Calendar as CalendarIcon, Clock, Video, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '../../context/AuthContext';

interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  specialization: string;
  licenseNumber: string;
  user: {
    email: string;
    createdAt: string;
  };
}

interface Appointment {
  id: string;
  dateTime: string;
  status: string;
  type: string;
  reason?: string;
  duration: number;
  patient: {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
  };
}

interface DoctorStats {
  totalAppointments: number;
  completedAppointments: number;
  todayAppointments: number;
  totalPatients: number;
}

const generateCalendar = (year: number, month: number, appointments: Appointment[]) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  let calendar = [];
  let day = 1;
  
  // Create calendar rows
  for (let i = 0; i < 6; i++) {
    // Stop if we've gone through all days
    if (day > daysInMonth) break;
    
    let row = [];
    
    // Create days for each week
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || day > daysInMonth) {
        row.push(null);
      } else {
        const currentDate = new Date(year, month, day);
        const dateStr = currentDate.toISOString().split('T')[0];
        const dayAppointments = appointments.filter(a => 
          new Date(a.dateTime).toISOString().split('T')[0] === dateStr
        );
        
        row.push({
          day,
          hasAppointments: dayAppointments.length > 0,
          appointmentCount: dayAppointments.length
        });
        day++;
      }
    }
    
    calendar.push(row);
  }
  
  return calendar;
};

export default function DoctorDashboard() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [monthAppointments, setMonthAppointments] = useState<Appointment[]>([]);
  const [stats, setStats] = useState<DoctorStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api';

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token not found');
        }

        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };

        // Format dates for API queries
        const dateParam = selectedDate.toISOString().split('T')[0];
        const monthStart = new Date(currentYear, currentMonth, 1).toISOString().split('T')[0];
        const monthEnd = new Date(currentYear, currentMonth + 1, 0).toISOString().split('T')[0];

        // Fetch all needed data
        const [profileRes, appointmentsRes, monthAppointmentsRes, statsRes] = await Promise.all([
          fetch(`${API_URL}/doctor/profile`, { headers }),
          fetch(`${API_URL}/doctor/appointments?date=${dateParam}`, { headers }),
          fetch(`${API_URL}/doctor/appointments?startDate=${monthStart}&endDate=${monthEnd}`, { headers }),
          fetch(`${API_URL}/doctor/stats`, { headers })
        ]);

        if (!profileRes.ok || !appointmentsRes.ok || !monthAppointmentsRes.ok || !statsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const doctorData = await profileRes.json();
        const appointmentsData = await appointmentsRes.json();
        const monthAppointmentsData = await monthAppointmentsRes.json();
        const statsData = await statsRes.json();

        setDoctor(doctorData);
        setAppointments(appointmentsData);
        setMonthAppointments(monthAppointmentsData);
        setStats(statsData);
      } catch (error) {
        console.error('Dashboard fetch error:', error);
        toast({
          title: 'Error',
          description: 'Failed to load dashboard data',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, selectedDate, currentMonth, currentYear, toast, API_URL]);

  const startTelemedicine = async (appointmentId: string) => {
    toast({
      title: 'Starting consultation',
      description: 'Preparing video session...'
    });
    // Telemedicine implementation would go here
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (day: number) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  if (loading || !doctor) {
    return (
      <div className="space-y-6 p-6">
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

  const calendarData = generateCalendar(currentYear, currentMonth, monthAppointments);
  const today = new Date();
  const isToday = (day: number) => 
    day === today.getDate() && 
    currentMonth === today.getMonth() && 
    currentYear === today.getFullYear();

  // Generate upcoming dates (next 7 days)
  const upcomingDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  return (
    <div className="space-y-6 p-6">
      {/* Doctor Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dr. {doctor.firstName} {doctor.lastName}</h1>
          <p className="text-gray-600">
            {doctor.specialization} | ID: DOC-{doctor.licenseNumber.slice(-4)}
          </p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-gray-700">4.9 (120 reviews)</span>
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

      {/* Navigation Tabs */}
      <div className="flex border-b">
        <Button variant="ghost" className="font-semibold">Appointments</Button>
        <Button variant="ghost">Prescriptions</Button>
        <Button variant="ghost">Lab Orders</Button>
      </div>

      {/* Calendar Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handlePrevMonth}>
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={handleNextMonth}>
              Next
            </Button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="border rounded-lg p-4">
          <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-500 mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {calendarData.map((week, weekIndex) => (
              week.map((day, dayIndex) => (
                <div 
                  key={`${weekIndex}-${dayIndex}`}
                  className={`h-12 flex flex-col items-center justify-center rounded-md text-sm
                    ${day ? 'cursor-pointer hover:bg-gray-100' : ''}
                    ${day && isToday(day.day) ? 'bg-blue-50 font-bold' : ''}
                    ${day && day.day === selectedDate.getDate() && 
                      currentMonth === selectedDate.getMonth() && 
                      currentYear === selectedDate.getFullYear() ? 'bg-blue-100' : ''}
                  `}
                  onClick={() => day && handleDateSelect(day.day)}
                >
                  {day ? (
                    <>
                      <span>{day.day}</span>
                      {day.hasAppointments && (
                        <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                      )}
                    </>
                  ) : null}
                </div>
              ))
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Dates */}
      <div className="space-y-2">
        <h3 className="font-medium">Upcoming dates:</h3>
        <div className="flex overflow-x-auto gap-4 pb-2">
          {upcomingDates.map((date) => {
            const dateAppointments = appointments.filter(a => 
              new Date(a.dateTime).toDateString() === date.toDateString()
            );
            
            return (
              <div 
                key={date.toISOString()}
                className={`flex flex-col items-center min-w-[50px] p-2 rounded-lg
                  ${date.toDateString() === selectedDate.toDateString() ? 'bg-blue-100' : 'bg-gray-50'}
                `}
                onClick={() => setSelectedDate(date)}
              >
                <span className="text-xs text-gray-500">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                <span className="font-medium">{date.getDate()}</span>
                {dateAppointments.length > 0 && (
                  <span className="text-xs text-gray-500">{dateAppointments.length} appt{dateAppointments.length !== 1 ? 's' : ''}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Today's Summary */}
      <div className="space-y-4">
        <h3 className="font-semibold">Today's Summary</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Appointments for {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</h4>
              <p className="text-sm text-gray-500">{appointments.length} appointment{appointments.length !== 1 ? 's' : ''}</p>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          {appointments.length === 0 ? (
            <Card className="p-6 text-center">
              <p className="text-gray-500">No appointments scheduled for this day</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <Card key={appointment.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">{appointment.patient.firstName} {appointment.patient.lastName}</h4>
                      <p className="text-sm text-gray-500">ID: P-{appointment.patient.id.slice(-4)}</p>
                    </div>
                    <Badge variant={appointment.type === 'TELEMEDICINE' ? 'secondary' : 'default'}>
                      {appointment.type === 'TELEMEDICINE' ? 'Virtual' : 'In-person'}
                    </Badge>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      {new Date(appointment.dateTime).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                      {appointment.duration && ` • ${appointment.duration} mins`}
                    </div>
                  </div>

                  {appointment.reason && (
                    <div className="mt-3">
                      <p className="text-sm font-medium">Reason:</p>
                      <p className="text-sm">{appointment.reason}</p>
                    </div>
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
                      View History
                    </Button>
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}