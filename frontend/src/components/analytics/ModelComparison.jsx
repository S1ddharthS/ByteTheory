import React from 'react';
import ImageCard from '../cards/ImageCard';

export default function ModelComparison({ comparison, loading }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-zinc-900">Model Comparison</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ImageCard title="RGB Only" src={comparison?.rgb} loading={loading} className="aspect-square" />
        <ImageCard title="Thermal Only" src={comparison?.thermal} loading={loading} className="aspect-square" />
        <ImageCard title="Baseline Fusion" src={comparison?.baseline} loading={loading} className="aspect-square" />
        <ImageCard title="QFDet (Ours)" src={comparison?.ours} loading={loading} className="aspect-square border-indigo-200 shadow-sm shadow-indigo-100" />
      </div>
    </div>
  );
}
