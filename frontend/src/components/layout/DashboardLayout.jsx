import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      {/* Fixed Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50">
        <Sidebar />
      </div>

      {/* Main Content Wrapper (offset by sidebar width) */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Dynamic Page Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
