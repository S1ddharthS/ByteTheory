import React, { useState } from 'react';
import UploadPanel from '../components/detection/UploadPanel';
import DetectionResults from '../components/detection/DetectionResults';
import { detect } from '../api/client';
import { AlertCircle } from 'lucide-react';

export default function LiveDetection() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleDetect = async (rgbFile, thermalFile) => {
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('rgb_image', rgbFile);
      formData.append('thermal_image', thermalFile);
      
      const res = await detect(formData);
      setResult(res);
    } catch (err) {
      setError(err.message || 'Detection failed. Please check the backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 h-full flex flex-col pb-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Live Detection</h1>
        <p className="text-zinc-500 mt-1">Run inference on custom RGB-Thermal image pairs.</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
        <div className="lg:col-span-4 h-full">
          <UploadPanel onDetect={handleDetect} loading={loading} />
        </div>
        <div className="lg:col-span-8 h-full">
          <DetectionResults result={result} loading={loading} />
        </div>
      </div>
    </div>
  );
}
