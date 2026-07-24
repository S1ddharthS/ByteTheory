import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import VisionAnalytics from '../pages/VisionAnalytics';
import LiveDetection from '../pages/LiveDetection';

export default function Dashboard() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<VisionAnalytics />} />
          <Route path="detection" element={<LiveDetection />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
