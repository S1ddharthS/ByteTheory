import React from 'react';
import { Card } from '../ui/card';
import { Image as ImageIcon, Box } from 'lucide-react';
import ImageCard from '../cards/ImageCard';

export default function DetectionResults({ result, loading }) {
  if (!result && !loading) {
    return (
      <Card className="h-full flex items-center justify-center bg-zinc-50/50 border-dashed min-h-[400px]">
        <div className="text-center p-8 max-w-sm">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-zinc-200 flex items-center justify-center mx-auto mb-4">
            <ImageIcon className="w-8 h-8 text-zinc-400" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-2">No Results Yet</h3>
          <p className="text-sm text-zinc-500">
            Upload an RGB and Thermal image pair and click Detect to see the model inference results here.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4 bg-white border border-zinc-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
            <Box className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm text-zinc-500 font-medium">Total Detections</p>
            <p className="text-2xl font-bold text-zinc-900">{loading ? '-' : (result?.detections?.length || 0)}</p>
          </div>
        </Card>
        <Card className="p-4 bg-white border border-zinc-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
            <span className="text-lg font-bold text-indigo-600">%</span>
          </div>
          <div>
            <p className="text-sm text-zinc-500 font-medium">Avg Confidence</p>
            <p className="text-2xl font-bold text-zinc-900">
              {loading ? '-' : (
                result?.detections?.length 
                  ? (result.detections.reduce((acc, curr) => acc + curr.confidence, 0) / result.detections.length * 100).toFixed(1) + '%'
                  : '0%'
              )}
            </p>
          </div>
        </Card>
      </div>

      <ImageCard 
        title="QFDet Fusion Output" 
        src={result?.output_image} 
        loading={loading} 
        className="flex-1 min-h-[400px] border-indigo-200 shadow-sm shadow-indigo-100" 
      />
    </div>
  );
}
