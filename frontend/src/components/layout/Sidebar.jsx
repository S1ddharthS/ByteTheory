import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Activity, BarChart2, Video, LogOut } from 'lucide-react';

export default function Sidebar() {
  const { user, logout } = useAuth();
  
  const email = user?.email || 'No email provided';
  const fullName = user?.user_metadata?.full_name || email.split('@')[0];
  const initials = fullName ? fullName.substring(0, 2).toUpperCase() : 'U';

  const navItems = [
    { name: 'Vision Analytics', path: '/dashboard', icon: BarChart2 },
    { name: 'Live Detection', path: '/dashboard/detection', icon: Video },
  ];

  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 text-zinc-300 flex flex-col min-h-screen">
      {/* Header */}
      <div className="h-16 flex items-center px-6 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-white tracking-tight text-lg">ByteTheory</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-500/10 text-indigo-400' 
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer / User Profile */}
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-3 truncate">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-inner shrink-0">
              {initials}
            </div>
            <div className="truncate">
              <p className="text-sm font-medium text-white truncate capitalize">{fullName}</p>
              <p className="text-xs text-zinc-500 truncate">{email}</p>
            </div>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
