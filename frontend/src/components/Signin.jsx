import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Loader2, Mail, Lock, User, AlertCircle, ArrowRight } from 'lucide-react';
import Ferrofluid from './react-bits/Ferrofluid.jsx';

export default function Signin({ onToggle }) {
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error when user types
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }
    if (formData.password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    setLoading(true);
    
    // We strictly use the existing signUp(email, password)
    // as per instructions not to modify AuthContext.
    const { error: signUpError } = await signUp(formData.email, formData.password);
    
    if (signUpError) {
      setError(signUpError);
      setLoading(false);
    }
    // If successful, App.jsx handles the redirect when `user` state changes in AuthContext
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-zinc-200/50 p-8 border border-zinc-100">
      
<div className="absolute inset-0 -z-10">
  <Ferrofluid
    colors={["#ffffff", "#ffffff", "#ffffff"]}
    speed={0.5}
    scale={1.6}
    turbulence={1}
    fluidity={0.1}
    rimWidth={0.2}
    sharpness={2.5}
    shimmer={1.5}
    glow={2}
    flowDirection="down"
    opacity={1}
    mouseInteraction
    mouseStrength={1}
    mouseRadius={0.35}
  />
</div>
       <div className="absolute inset-0 -z-10 bg-black/60" />
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Create an account</h2>
        <p className="text-sm text-zinc-500 mt-2">Join us to start detecting pedestrians</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2.5 border border-zinc-200 rounded-xl bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all sm:text-sm"
              placeholder="John Doe"
            />
          </div>
        </div>

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
          <label className="block text-sm font-medium text-zinc-700 mb-1">Password</label>
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

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Confirm Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2.5 border border-zinc-200 rounded-xl bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all sm:text-sm"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-6"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Sign up
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-zinc-500">
        Already have an account?{' '}
        <button onClick={onToggle} className="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline transition-all">
          Sign in
        </button>
      </div>
    </div>
  );
}
