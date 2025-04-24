'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  CalendarPlus, 
  MessageCircle, 
  FlaskConical, 
  Pill, 
  CalendarDays,
  Menu,
  X,
  LifeBuoy,
  Users,
  ScanLine
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

type SidebarLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SidebarLink = ({ href, icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link href={href} passHref>
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer",
          isActive 
            ? "bg-purple-600 text-white" 
            : "text-gray-300 hover:bg-purple-600/30 hover:text-purple-400"
        )}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
    </Link>
  );
};

type PatientSidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const PatientSidebar = ({ isSidebarOpen, toggleSidebar }: PatientSidebarProps) => {
  const isMobile = useIsMobile();
  
  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 flex flex-col h-full bg-gray-900 shadow-lg transition-all duration-300 ease-in-out",
        isMobile ? (isSidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full") : "w-64",
      )}>
        {/* Logo and close button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
              <span className="text-white font-bold">HP</span>
            </div>
            <span className="font-bold text-lg text-white">HealthPortal</span>
          </div>
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="text-gray-400 hover:bg-purple-600/30 hover:text-purple-400"
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
        
        {/* User info */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
              JS
            </div>
            <div>
              <p className="font-medium text-white">John Smith</p>
              <p className="text-sm text-gray-400">Patient ID: P-12345</p>
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <SidebarLink 
            href="/patient" 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
          />
          <SidebarLink 
            href="/book-appointment" 
            icon={<CalendarPlus size={20} />} 
            label="Book Appointment" 
          />
          <SidebarLink 
            href="/doctors" 
            icon={<Users size={20} />} 
            label="Our Doctors" 
          />
           <SidebarLink 
            href="/appointments" 
            icon={<CalendarDays size={20} />} 
            label="My Appointments" 
          />
          
          <SidebarLink 
            href="/patient/chat-doctor"  
            icon={<MessageCircle size={20} />} 
            label="Chat with AI Doctor" 
          />
          <SidebarLink 
            href="/patient/lab-tests" 
            icon={<FlaskConical size={20} />} 
            label="Lab Tests" 
          />
          <SidebarLink 
            href="/patient/prescriptions" 
            icon={<Pill size={20} />} 
            label="Prescriptions" 
          />
         <SidebarLink 
            href="/patient/scans" 
            icon={<ScanLine size={20} />} 
            label="Scans" 
          />
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <Button 
            variant="outline" 
            className="w-full bg-gray-800 border-gray-700 text-white hover:bg-purple-600 hover:border-purple-600 hover:text-white"
          >
            <LifeBuoy className="h-4 w-4 mr-2" />
            Need Help?
          </Button>
        </div>
      </aside>
      
      {/* Mobile toggle button */}
      {isMobile && !isSidebarOpen && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-4 left-4 z-40 bg-gray-800 shadow-md rounded-full text-white hover:bg-purple-600 hover:text-white"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default PatientSidebar;