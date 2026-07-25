import React from 'react';
import { ArrowRight, LogIn, UserPlus, Zap } from 'lucide-react';
import Ferrofluid from './react-bits/Ferrofluid.jsx';

export default function CTA({ onLoginClick, onSignupClick }) {
  return (
    <div className="relative isolate min-h-screen flex flex-col justify-center overflow-hidden bg-zinc-950 text-white selection:bg-indigo-500/30">
      {/* Animated gradient backgrounds */}

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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-zinc-300 ring-1 ring-white/10 hover:ring-white/20 transition-all bg-white/5 backdrop-blur-md flex items-center gap-2 cursor-default">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>Next Generation Vision AI</span>
            </div>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Smarter Pedestrian Detection with RGB + Thermal AI
          </h1>
          
          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-xl mx-auto">
            Harness the power of dual-spectrum computer vision to detect pedestrians with unprecedented accuracy in all lighting and weather conditions.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={onSignupClick}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-all duration-200"
            >
              <UserPlus className="w-4 h-4" />
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={onLoginClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-8 py-3.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </div>
  );
}
