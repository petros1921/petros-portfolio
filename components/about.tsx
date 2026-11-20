"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-24 overflow-hidden">
      
      {/* Background Faint Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-zinc-300 pb-4 sm:flex-row sm:items-end"
        >
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-900">
            [ 01 // About Me ]
          </h2>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-600" />
            Open for new projects
          </span>
        </motion.div>

        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          
          {/* Left Side: Image / Photo Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative border border-zinc-300 bg-white p-2 shadow-sm"
          >
            
            {/* Frame Corner Brackets */}
            <div className="absolute -left-px -top-px z-30 h-4 w-4 border-l-2 border-t-2 border-zinc-900" />
            <div className="absolute -right-px -top-px z-30 h-4 w-4 border-r-2 border-t-2 border-zinc-900" />
            <div className="absolute -bottom-px -left-px z-30 h-4 w-4 border-b-2 border-l-2 border-zinc-900" />
            <div className="absolute -bottom-px -right-px z-30 h-4 w-4 border-b-2 border-r-2 border-zinc-900" />
            
            <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-zinc-100">
              
              <span className="absolute z-0 font-mono text-xs uppercase tracking-widest text-zinc-400">
                [ Loading Photo... ]
              </span>
              
              {/* Your Image (Ensure 'profile.jpg' is in the public folder) */}
              <Image
                src="/profile.jpg"
                alt="Petros Worku"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="relative z-10 object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
              />
              
              {/* HUD Overlays */}
              <div className="pointer-events-none absolute inset-0 z-20">
                {/* Scanning Line */}
                <div className="absolute left-0 top-0 h-1 w-full animate-[scan_3s_ease-in-out_infinite] bg-red-600/50 opacity-50 blur-[1px]" />
                
                {/* Scanlines effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px]" />
                
                {/* Top Right Status */}
                <div className="absolute right-2 top-2 flex items-center gap-1.5 rounded-sm bg-black/50 px-2 py-0.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white">Live</span>
                </div>
              </div>
            </div>

            {/* Frame Footer */}
            <div className="mt-2 flex items-center justify-between border-t border-zinc-200 px-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              <span>PETROS_WORKU.JPG</span>
              <span className="flex items-center gap-1 text-green-600">
                <span className="h-1 w-1 rounded-full bg-green-600" />
                Available
              </span>
            </div>
          </motion.div>

          {/* Right Side: Bio Data */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              Architecting <br />
              <span className="text-red-600">Order</span> from Chaos.
            </h3>
            
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              I am a Full-Stack Developer based in Addis Ababa. My focus is on building custom operational software that solves real-world business problems.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Whether it is an inventory system for an automotive garage or a high-performance web application, I engineer tools that eliminate bottlenecks, prevent revenue leakage, and streamline daily workflows.
            </p>

            {/* Skills / Capabilities */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              
              <div className="group relative border border-zinc-200 bg-white p-5 transition-all duration-300 hover:border-red-600 hover:shadow-sm">
                <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  <span className="transition-colors group-hover:text-red-600">[01]</span>
                  <span>■</span>
                </div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-900">
                  Custom Systems
                </h4>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-zinc-500">
                  Database architectures and business logic tailored to specific operational needs.
                </p>
              </div>
              
              <div className="group relative border border-zinc-200 bg-white p-5 transition-all duration-300 hover:border-red-600 hover:shadow-sm">
                <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  <span className="transition-colors group-hover:text-red-600">[02]</span>
                  <span>■</span>
                </div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-900">
                  Web Performance
                </h4>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-zinc-500">
                  Highly responsive, API-driven interfaces that load fast and handle complex state.
                </p>
              </div>
              
              <div className="group relative border border-zinc-200 bg-white p-5 transition-all duration-300 hover:border-red-600 hover:shadow-sm">
                <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  <span className="transition-colors group-hover:text-red-600">[03]</span>
                  <span>■</span>
                </div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-900">
                  Media Workflows
                </h4>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-zinc-500">
                  Technical video editing and digital media integration for business requirements.
                </p>
              </div>

              <div className="group relative border border-zinc-200 bg-white p-5 transition-all duration-300 hover:border-red-600 hover:shadow-sm">
                <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  <span className="transition-colors group-hover:text-red-600">[04]</span>
                  <span>■</span>
                </div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-900">
                  Problem Solving
                </h4>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-zinc-500">
                  Replacing paper-based chaos with synchronized, real-time digital ecosystems.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}