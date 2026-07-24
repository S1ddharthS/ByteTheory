import React, { useState } from 'react';
import UploadPanel from '../components/detection/UploadPanel';
import DetectionResults from '../components/detection/DetectionResults';
import VideoUploadPanel from '../components/detection/VideoUploadPanel';
import VideoResults from '../components/detection/VideoResults';
import { detectImage, detectVideo } from '../api/client';
import { AlertCircle, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

export default function LiveDetection() {
  const [loadingImage, setLoadingImage] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  const [errorImage, setErrorImage] = useState(null);

  const [loadingVideo, setLoadingVideo] = useState(false);
  const [resultVideo, setResultVideo] = useState(null);
  const [errorVideo, setErrorVideo] = useState(null);

  const handleDetectImage = async (rgbFile, thermalFile) => {
    setLoadingImage(true);
    setErrorImage(null);
    try {
      const formData = new FormData();
      formData.append('rgb_image', rgbFile);
      formData.append('thermal_image', thermalFile);
      
      const res = await detectImage(formData);
      setResultImage(res);
    } catch (err) {
      setErrorImage(err.message || 'Detection failed. Please check the backend.');
    } finally {
      setLoadingImage(false);
    }
  };

  const handleDetectVideo = async (rgbFile, thermalFile) => {
    setLoadingVideo(true);
    setErrorVideo(null);
    try {
      const formData = new FormData();
      formData.append('rgb_video', rgbFile);
      formData.append('thermal_video', thermalFile);
      
      const res = await detectVideo(formData);
      setResultVideo(res);
    } catch (err) {
      setErrorVideo(err.message || 'Detection failed. Please check the backend.');
    } finally {
      setLoadingVideo(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 h-full flex flex-col pb-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Live Detection</h1>
        <p className="text-zinc-500 mt-1">Run inference on custom RGB-Thermal pairs.</p>
      </div>

      <Tabs defaultValue="image" className="flex-1 flex flex-col">
        <TabsList className="mb-6 w-full max-w-sm grid grid-cols-2">
          <TabsTrigger value="image" className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4" />
            Image Pair
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2">
            <VideoIcon className="w-4 h-4" />
            Video Pair
          </TabsTrigger>
        </TabsList>

        <TabsContent value="image" className="flex-1 m-0 focus-visible:outline-none">
          {errorImage && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 mb-6">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <p className="text-sm text-red-600">{errorImage}</p>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
            <div className="lg:col-span-4 h-full">
              <UploadPanel onDetect={handleDetectImage} loading={loadingImage} />
            </div>
            <div className="lg:col-span-8 h-full">
              <DetectionResults result={resultImage} loading={loadingImage} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="video" className="flex-1 m-0 focus-visible:outline-none">
          {errorVideo && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 mb-6">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <p className="text-sm text-red-600">{errorVideo}</p>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
            <div className="lg:col-span-4 h-full">
              <VideoUploadPanel onDetect={handleDetectVideo} loading={loadingVideo} />
            </div>
            <div className="lg:col-span-8 h-full">
              <VideoResults result={resultVideo} loading={loadingVideo} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
