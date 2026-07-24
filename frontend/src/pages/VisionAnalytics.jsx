import React, { useState } from 'react';
import { useVisionData } from '../hooks/useVisionData';
import DatasetOverview from '../components/analytics/DatasetOverview';
import ModelMetrics from '../components/analytics/ModelMetrics';
import DatasetExplorer from '../components/analytics/DatasetExplorer';
import ModelComparison from '../components/analytics/ModelComparison';
import { AlertCircle } from 'lucide-react';

export default function VisionAnalytics() {
  const [imageId, setImageId] = useState(1);
  const { stats, image, metrics, comparison, loading, error } = useVisionData(imageId);

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
        <div>
          <h3 className="text-sm font-semibold text-red-800">Failed to load analytics</h3>
          <p className="text-sm text-red-600 mt-1">{error.message || 'Check if the backend is running.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-6xl mx-auto pb-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Vision Analytics</h1>
        <p className="text-zinc-500 mt-1">Comprehensive performance insights and dataset exploration.</p>
      </div>

      <section>
        <DatasetOverview stats={stats} loading={loading} />
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Model Performance</h2>
          <p className="text-sm text-zinc-500">Evaluation metrics on the VTUAV-det test set.</p>
        </div>
        <ModelMetrics metrics={metrics} loading={loading} />
      </section>

      <section>
        <DatasetExplorer image={image} imageId={imageId} setImageId={setImageId} loading={loading} />
      </section>
      
      <section>
        <ModelComparison comparison={comparison} loading={loading} />
      </section>
    </div>
  );
}
