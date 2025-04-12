// app/(main)/patient/layout.tsx
'use client';

import { useState } from 'react';
import PatientNavbar from './navbar/PatientNavbar';

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex min-h-screen">
      <PatientNavbar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />
      <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {children}
      </main>
    </div>
  );
}