import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Upload, Video, ThermometerSun, Loader2 } from 'lucide-react';

export default function VideoUploadPanel({ onDetect, loading }) {
  const [rgbFile, setRgbFile] = useState(null);
  const [thermalFile, setThermalFile] = useState(null);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'rgb') setRgbFile(file);
      else setThermalFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rgbFile && thermalFile) {
      onDetect(rgbFile, thermalFile);
    }
  };

  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-1">Video Inference</h3>
          <p className="text-sm text-zinc-500">Upload RGB and Thermal video pairs for detection.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* RGB Video Upload */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2 flex items-center gap-2">
                <Video className="w-4 h-4 text-zinc-500" />
                RGB Video
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-300 border-dashed rounded-xl hover:bg-zinc-50 transition-colors">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-8 w-8 text-zinc-400" />
                  <div className="flex text-sm text-zinc-600 justify-center">
                    <label htmlFor="rgb-video-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="rgb-video-upload" name="rgb-video-upload" type="file" className="sr-only" accept="video/*" onChange={(e) => handleFileChange(e, 'rgb')} disabled={loading} />
                    </label>
                  </div>
                  <p className="text-xs text-zinc-500">{rgbFile ? rgbFile.name : 'MP4, AVI up to 500MB'}</p>
                </div>
              </div>
            </div>

            {/* Thermal Video Upload */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2 flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-zinc-500" />
                Thermal Video
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-300 border-dashed rounded-xl hover:bg-zinc-50 transition-colors">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-8 w-8 text-zinc-400" />
                  <div className="flex text-sm text-zinc-600 justify-center">
                    <label htmlFor="thermal-video-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="thermal-video-upload" name="thermal-video-upload" type="file" className="sr-only" accept="video/*" onChange={(e) => handleFileChange(e, 'thermal')} disabled={loading} />
                    </label>
                  </div>
                  <p className="text-xs text-zinc-500">{thermalFile ? thermalFile.name : 'MP4, AVI up to 500MB'}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!rgbFile || !thermalFile || loading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing Video...
              </>
            ) : (
              'Run Video Inference'
            )}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
