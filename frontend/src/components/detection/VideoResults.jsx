import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Activity, Clock, Film, Crosshair, Download, Loader2 } from 'lucide-react';

export default function VideoResults({ result, loading }) {
  if (loading) {
    return (
      <Card className="h-full flex flex-col items-center justify-center p-12 border-dashed border-2">
        <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
        <h3 className="text-xl font-medium text-zinc-900">Processing Video</h3>
        <p className="text-zinc-500 text-center mt-2 max-w-sm">
          Running inference on video streams. This may take a few moments depending on the video length.
        </p>
      </Card>
    );
  }

  if (!result) {
    return (
      <Card className="h-full flex flex-col items-center justify-center p-12 border-dashed border-2 bg-zinc-50/50">
        <Film className="w-16 h-16 text-zinc-300 mb-4" />
        <h3 className="text-xl font-medium text-zinc-500">No Results Yet</h3>
        <p className="text-zinc-400 text-center mt-2 max-w-sm">
          Upload a video pair and click run to see inference results.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6 h-full flex flex-col">
      <Card className="flex-1 overflow-hidden">
        <CardHeader className="border-b bg-zinc-50/50 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Film className="w-5 h-5 text-indigo-600" />
              Inference Results
            </CardTitle>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {result.status === 'processing_complete' ? 'Completed' : result.status}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden relative flex items-center justify-center">
            {/* Placeholder for Annotated Video Player */}
            <div className="text-center">
              <Film className="w-12 h-12 text-zinc-700 mx-auto mb-2" />
              <p className="text-zinc-500 text-sm">Annotated Video Preview</p>
              <p className="text-zinc-600 text-xs mt-1">(Preview will be available here)</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-zinc-50 p-4 rounded-xl border">
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Film className="w-4 h-4" />
                <span className="text-sm font-medium">Frames</span>
              </div>
              <p className="text-2xl font-semibold text-zinc-900">{result.frames_processed}</p>
            </div>
            
            <div className="bg-zinc-50 p-4 rounded-xl border">
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Crosshair className="w-4 h-4" />
                <span className="text-sm font-medium">Detections</span>
              </div>
              <p className="text-2xl font-semibold text-zinc-900">{result.detections}</p>
            </div>

            <div className="bg-zinc-50 p-4 rounded-xl border">
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Activity className="w-4 h-4" />
                <span className="text-sm font-medium">Avg Confidence</span>
              </div>
              <p className="text-2xl font-semibold text-zinc-900">
                {Math.round(result.average_confidence * 100)}%
              </p>
            </div>

            <div className="bg-zinc-50 p-4 rounded-xl border">
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Process Time</span>
              </div>
              <p className="text-2xl font-semibold text-zinc-900">{result.processing_time}</p>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-zinc-200 rounded-xl shadow-sm text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <Download className="w-4 h-4" />
            Download Annotated Video
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
