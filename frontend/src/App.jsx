import { useState } from 'react';
import { useAuth } from './context/AuthContext';
import Signin from './components/Signin';
import Login from './components/Login';
import CTA from './components/CTA';
import Dashboard from './components/Dashboard';
import { ArrowLeft, Loader2 } from 'lucide-react';

function App() {
  const { user, loading } = useAuth();
  
  // State for non-authenticated routing: 'cta' | 'login' | 'signin'
  const [currentView, setCurrentView] = useState('cta');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  // If user is authenticated, render the Dashboard directly
  if (user) {
    return <Dashboard />;
  }

  // Render unauthenticated views based on currentView state
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans selection:bg-indigo-500/30">
      {currentView === 'cta' && (
        <CTA 
          onLoginClick={() => setCurrentView('login')} 
          onSignupClick={() => setCurrentView('signin')} 
        />
      )}

      {(currentView === 'login' || currentView === 'signin') && (
        <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative isolate overflow-hidden">
          
          {/* Animated background matching CTA for seamless transition */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>
          
          {/* Back to Home Button */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
            <button 
              onClick={() => setCurrentView('cta')}
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </button>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center z-10 relative">
            <div className="w-full animate-fade-in-up">
              {currentView === 'login' ? (
                <Login onToggle={() => setCurrentView('signin')} />
              ) : (
                <Signin onToggle={() => setCurrentView('login')} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
