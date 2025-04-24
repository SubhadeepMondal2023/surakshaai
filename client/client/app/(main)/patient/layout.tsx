// app/(main)/patient/layout.tsx
'use client';

import { useState, useEffect } from 'react';
import PatientNavbar from './navbar/PatientNavbar';
import { useIsMobile } from '@/hooks/use-mobile';

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Set sidebar open by default on desktop
  useEffect(() => {
    if (!isMobile) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, [isMobile]);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
 
  return (
    <div className="flex min-h-screen">
      <PatientNavbar 
         isSidebarOpen={isSidebarOpen}
         toggleSidebar={toggleSidebar}
       />
      <main 
        className={`flex-1 p-6 transition-all duration-300 ${
          isMobile ? 'ml-0' : (isSidebarOpen ? 'ml-64' : 'ml-0')
        }`}
      >
        <div className={isMobile ? 'pt-12' : ''}>
          {children}
        </div>
      </main>
    </div>
  );
}