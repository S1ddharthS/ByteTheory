import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, Activity, Video } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();

  // Extract user details securely
  const email = user?.email || 'No email provided';
  const id = user?.id || '';
  const shortId = id ? `${id.substring(0, 8)}...` : 'Unknown ID';
  const createdAt = user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown Date';
  
  // Since we couldn't modify the AuthContext, we don't have full_name in metadata.
  // We'll fall back to parsing the email or providing a placeholder.
  const fullName = user?.user_metadata?.full_name || email.split('@')[0];
  const initials = fullName ? fullName.substring(0, 2).toUpperCase() : 'U';

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      {/* Top Navigation / Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-zinc-900 tracking-tight text-lg">ByteTheory</span>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar / Profile Card */}
        <aside className="w-full md:w-80 shrink-0">
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-inner">
                {initials}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 tracking-tight capitalize truncate w-48" title={fullName}>{fullName}</h2>
                <p className="text-sm text-zinc-500 truncate w-48" title={email}>{email}</p>
              </div>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-zinc-100">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500">User ID</span>
                <span className="font-mono text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded text-xs">{shortId}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500">Member Since</span>
                <span className="text-zinc-900 font-medium">{createdAt}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm h-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <Video className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-2 tracking-tight">Detection Dashboard Coming Soon</h3>
            <p className="text-zinc-500 max-w-md mx-auto leading-relaxed">
              We're currently building the next generation of RGB + Thermal pedestrian detection. Your dashboard will appear here once it's ready.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
