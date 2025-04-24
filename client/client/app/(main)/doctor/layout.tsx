'use client';
import { useState } from 'react';
import { Calendar, ClipboardList, FileText, User, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { name: 'Appointments', icon: Calendar, href: '/doctor/appointments' },
    { name: 'Prescriptions', icon: ClipboardList, href: '/doctor/prescriptions' },
    { name: 'Lab Orders', icon: FileText, href: '/doctor/lab-orders' },
    { name: 'Patients', icon: User, href: '/doctor/patients' },
    { name: 'Settings', icon: Settings, href: '/doctor/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white border-r ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 fixed h-full`}>
        <div className="p-4 flex items-center justify-between border-b">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold text-primary">SurakshaAi</h1>
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? '«' : '»'}
          </button>
        </div>
        
        <nav className="p-2 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center p-3 rounded-lg mb-2 ${pathname.startsWith(item.href) ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}
            >
              <item.icon className="h-5 w-5" />
              {sidebarOpen && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button className="flex items-center p-3 rounded-lg hover:bg-gray-100 w-full">
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {children}
      </main>
    </div>
  );
}