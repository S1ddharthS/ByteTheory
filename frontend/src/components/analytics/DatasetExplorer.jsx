import React from 'react';
import ImageCard from '../cards/ImageCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DatasetExplorer({ image, imageId, setImageId, loading }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-900">Dataset Explorer</h3>
        <div className="flex items-center gap-4 bg-white px-4 py-1.5 rounded-full border border-zinc-200 shadow-sm">
          <button 
            onClick={() => setImageId(prev => Math.max(1, prev - 1))}
            disabled={loading || imageId <= 1}
            className="p-1 hover:bg-zinc-100 rounded-full disabled:opacity-50 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-600" />
          </button>
          <span className="font-mono text-sm font-medium text-zinc-900 w-24 text-center">
            ID: {imageId.toString().padStart(5, '0')}
          </span>
          <button 
            onClick={() => setImageId(prev => prev + 1)}
            disabled={loading}
            className="p-1 hover:bg-zinc-100 rounded-full disabled:opacity-50 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-zinc-600" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageCard title="RGB Image" src={image?.rgb_image} loading={loading} className="aspect-[4/3]" />
        <ImageCard title="Thermal Image" src={image?.thermal_image} loading={loading} className="aspect-[4/3]" />
      </div>
    </div>
  );
}
