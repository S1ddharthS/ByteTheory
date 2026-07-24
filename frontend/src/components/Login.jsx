import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Loader2, Mail, Lock, AlertCircle, ArrowRight } from 'lucide-react';

export default function Login({ onToggle }) {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    const { error: loginError } = await login(formData.email, formData.password);
    
    if (loginError) {
      setError(loginError);
      setLoading(false);
    }
    // If successful, App.jsx handles the redirect when `user` state changes
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-zinc-200/50 p-8 border border-zinc-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Welcome back</h2>
        <p className="text-sm text-zinc-500 mt-2">Sign in to your account to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 animate-fade-in">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Email address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2.5 border border-zinc-200 rounded-xl bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-medium text-zinc-700">Password</label>
            <button type="button" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2.5 border border-zinc-200 rounded-xl bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all sm:text-sm"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-6"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Sign in
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-zinc-500">
        Don't have an account?{' '}
        <button onClick={onToggle} className="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline transition-all">
          Sign up
        </button>
      </div>
    </div>
  );
}
