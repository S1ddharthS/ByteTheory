import React from 'react';
import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function ImageCard({ title, src, loading, className = '' }) {
  return (
    <Card className={`overflow-hidden flex flex-col ${className}`}>
      <div className="p-3 border-b border-zinc-100 bg-zinc-50/50">
        <h4 className="text-sm font-semibold text-zinc-700">{title}</h4>
      </div>
      <div className="relative aspect-video bg-zinc-950 flex-1 flex items-center justify-center p-2">
        {loading ? (
          <Skeleton className="w-full h-full bg-zinc-800" />
        ) : (
          <img 
            src={src} 
            alt={title} 
            className="w-full h-full object-contain rounded-sm"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/640x480/18181b/ffffff?text=Image+Not+Found';
            }}
          />
        )}
      </div>
    </Card>
  );
}
