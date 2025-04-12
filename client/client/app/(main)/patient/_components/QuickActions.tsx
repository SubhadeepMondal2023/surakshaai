'use client';

import { CalendarPlus, MessageCircle, FlaskConical, ActivitySquare } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function QuickActions({ patientId }: { patientId: string }) {
  const router = useRouter();

  const actions = [
    {
      icon: <CalendarPlus className="h-6 w-6 text-purple-400" />,
      label: "Book Appointment",
      onClick: () => router.push(`/patient/book-appointment`)
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-400" />,
      label: "Chat with AI Doctor",
      onClick: () => router.push(`/patient/chat-doctor`)
    },
    {
      icon: <FlaskConical className="h-6 w-6 text-green-400" />,
      label: "Request Lab Test",
      onClick: () => router.push(`/patient/lab-tests`)
    },
    {
      icon: <ActivitySquare className="h-6 w-6 text-orange-400" />,
      label: "View Health Metrics",
      onClick: () => router.push(`/patient/health-metrics`)
    }
  ];

  return (
    <div className="glass-card p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-4 text-white">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-700 hover:bg-gray-800/50 transition-colors"
          >
            <span className="text-2xl mb-2">{action.icon}</span>
            <span className="text-sm font-medium text-gray-200">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}