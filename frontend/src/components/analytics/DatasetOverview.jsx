import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import StatCard from '../cards/StatCard';
import PedestrianChart from '../charts/PedestrianChart';
import { Image, BoxSelect, Maximize, Minimize2 } from 'lucide-react';

export default function DatasetOverview({ stats, loading }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!loading && containerRef.current) {
      gsap.fromTo(
        gsap.utils.toArray('.stat-stagger'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [loading]);

  return (
    <div ref={containerRef} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat-stagger"><StatCard title="Train Images" value={stats?.train_images || 0} icon={Image} loading={loading} /></div>
        <div className="stat-stagger"><StatCard title="Validation Images" value={stats?.validation_images || 0} icon={Image} loading={loading} /></div>
        <div className="stat-stagger"><StatCard title="Test Images" value={stats?.test_images || 0} icon={Image} loading={loading} /></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 stat-stagger">
        <div className="md:col-span-8">
          <PedestrianChart data={stats?.pedestrian_distribution} loading={loading} />
        </div>
        <div className="md:col-span-4 flex flex-col gap-6">
          <StatCard title="Small Pedestrians" value={stats?.pedestrian_distribution?.small || 0} icon={Minimize2} loading={loading} />
          <StatCard title="Medium Pedestrians" value={stats?.pedestrian_distribution?.medium || 0} icon={BoxSelect} loading={loading} />
          <StatCard title="Large Pedestrians" value={stats?.pedestrian_distribution?.large || 0} icon={Maximize} loading={loading} />
        </div>
      </div>
    </div>
  );
}
