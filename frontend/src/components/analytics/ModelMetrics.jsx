import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MetricCard from '../cards/MetricCard';
import MetricsChart from '../charts/MetricsChart';

export default function ModelMetrics({ metrics, loading }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!loading && containerRef.current) {
      gsap.fromTo(
        gsap.utils.toArray('.metric-stagger'),
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(1.2)' }
      );
    }
  }, [loading]);

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-4 metric-stagger">
        <MetricsChart metrics={metrics} loading={loading} />
      </div>
      <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="metric-stagger"><MetricCard title="mAP" value={metrics?.mAP} loading={loading} /></div>
        <div className="metric-stagger"><MetricCard title="mAP50" value={metrics?.mAP50} loading={loading} /></div>
        <div className="metric-stagger"><MetricCard title="mAP75" value={metrics?.mAP75} loading={loading} /></div>
        <div className="metric-stagger"><MetricCard title="FPS" value={metrics?.FPS} loading={loading} /></div>
        <div className="metric-stagger"><MetricCard title="Parameters" value={metrics?.Parameters} loading={loading} /></div>
        <div className="metric-stagger"><MetricCard title="Model Size" value={metrics?.ModelSize} loading={loading} /></div>
      </div>
    </div>
  );
}
