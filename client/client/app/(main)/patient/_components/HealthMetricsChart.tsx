'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { HealthMetric } from '@/lib/types';

export default function HealthMetricsChart({ patientId }: { patientId: string }) {
  const [metrics, setMetrics] = useState<HealthMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeMetric, setActiveMetric] = useState<'bloodPressure' | 'heartRate' | 'weight'>('bloodPressure');

  useEffect(() => {
    const fetchHealthMetrics = async () => {
      try {
        const res = await fetch(`/api/patient/${patientId}/health-metrics`);
        if (!res.ok) throw new Error('Failed to fetch health metrics');
        const data = await res.json();
        setMetrics(data);
      } catch (error) {
        console.error('Failed to fetch health metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHealthMetrics();
  }, [patientId]);

  // Format blood pressure for chart
  const formattedMetrics = metrics.map(metric => ({
    ...metric,
    systolic: parseInt(metric.bloodPressure.split('/')[0]),
    diastolic: parseInt(metric.bloodPressure.split('/')[1])
  }));

  if (loading) return <div className="glass-card p-6">Loading health data...</div>;

  const renderChart = () => {
    switch (activeMetric) {
      case 'bloodPressure':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={formattedMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis dataKey="date" stroke="#E5E7EB" />
              <YAxis stroke="#E5E7EB" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  borderColor: '#4B5563',
                  borderRadius: '0.5rem'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#8B5CF6"
                name="Systolic"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#A78BFA"
                name="Diastolic"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'heartRate':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={metrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis dataKey="date" stroke="#E5E7EB" />
              <YAxis stroke="#E5E7EB" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  borderColor: '#4B5563',
                  borderRadius: '0.5rem'
                }}
              />
              <Line
                type="monotone"
                dataKey="heartRate"
                stroke="#F59E0B"
                name="Heart Rate (BPM)"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'weight':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={metrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis dataKey="date" stroke="#E5E7EB" />
              <YAxis stroke="#E5E7EB" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  borderColor: '#4B5563',
                  borderRadius: '0.5rem'
                }}
              />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#7C3AED"
                name="Weight (lbs)"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Health Metrics</h2>
        <Button variant="link" className="text-purple-400 hover:text-purple-300">View Full History</Button>
      </div>

      <div className="mb-4 flex gap-2">
        <Button
          variant={activeMetric === 'bloodPressure' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveMetric('bloodPressure')}
          className={activeMetric === 'bloodPressure' ? 'bg-purple-600' : 'text-white border-gray-600 hover:bg-gray-700'}
        >
          Blood Pressure
        </Button>
        <Button
          variant={activeMetric === 'heartRate' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveMetric('heartRate')}
          className={activeMetric === 'heartRate' ? 'bg-purple-600' : 'text-white border-gray-600 hover:bg-gray-700'}
        >
          Heart Rate
        </Button>
        <Button
          variant={activeMetric === 'weight' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveMetric('weight')}
          className={activeMetric === 'weight' ? 'bg-purple-600' : 'text-white border-gray-600 hover:bg-gray-700'}
        >
          Weight
        </Button>
      </div>

      {renderChart()}
    </div>
  );
}