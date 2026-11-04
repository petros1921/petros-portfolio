export function Hero() {
    return (
      <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 overflow-hidden">
        
        {/* Background Tech Rings (Subtle Depth) */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-30">
          <div className="h-[800px] w-[800px] rounded-full border border-zinc-200" />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-zinc-300" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200" />
        </div>
  
        {/* Main Container */}
        <div className="relative border border-zinc-200 bg-zinc-50/90 p-8 shadow-[0_0_80px_-20px_rgba(0,0,0,0.1)] backdrop-blur-md md:p-14 lg:p-16">
          
          {/* Outer Corner Brackets */}
          <div className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-zinc-900" />
          <div className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-zinc-900" />
          <div className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-zinc-900" />
          <div className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-zinc-900" />
  
          <div className="grid items-center gap-16 md:grid-cols-[1.2fr_0.8fr]">
            
            {/* Left side: Typography */}
            <div>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2 border border-zinc-300 bg-white px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-800 shadow-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
                  Status: Available for Work
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Loc: Addis Ababa, ET (UTC+3)
                </span>
              </div>
  
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tighter text-zinc-900 md:text-7xl lg:text-[5.5rem]">
                I engineer <br />
                <span className="text-red-600">systems</span> <br />
                that run <br />
                businesses<span className="animate-pulse text-red-600">_</span>
              </h1>
              
              <p className="mt-8 max-w-md text-lg leading-relaxed text-zinc-600">
                Petros Worku — Full-Stack Developer & Custom Systems Architect. 
                I design and build custom operational software, inventory management systems, and high-performance web apps.
              </p>
  
              {/* High-Converting Metric Bar */}
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-zinc-200 py-4 font-mono">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-zinc-900">15+</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500">Systems_Deployed</span>
                </div>
                <div className="h-8 w-px bg-zinc-200" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-zinc-900">99.9%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500">Uptime_Guaranteed</span>
                </div>
                <div className="h-8 w-px bg-zinc-200" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-zinc-900">100%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500">Custom_Built</span>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {/* Primary CTA */}
                <a
                  href="#work"
                  className="group relative flex items-center gap-2 overflow-hidden bg-zinc-900 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-zinc-800 hover:shadow-lg hover:shadow-red-600/20 active:scale-95"
                >
                  <span className="absolute inset-0 -translate-x-full bg-red-600 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    View Case Studies
                    <span className="text-lg leading-none">↓</span>
                  </span>
                </a>
  
                {/* Secondary CTA */}
                <a
                  href="#contact"
                  className="group relative flex items-center gap-2 border border-zinc-300 bg-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-zinc-900 transition-all hover:border-zinc-900 active:scale-95"
                >
                  Book a Demo
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-red-600">
                    →
                  </span>
                </a>
              </div>
            </div>
  
            {/* Right side: System Terminal Profile */}
            <div className="group relative flex w-full flex-col overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl md:aspect-[4/5]">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <div className="h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  sys_profile.ts
                </span>
              </div>
  
              {/* Terminal Content (Faux Code) */}
              <div className="flex flex-1 flex-col p-6 font-mono text-[13px] leading-loose text-zinc-400">
                <div className="flex gap-2">
                  <span className="text-red-500">const</span>
                  <span className="text-zinc-100">developer</span>
                  <span className="text-zinc-500">=</span>
                  <span className="text-zinc-100">{"{"}</span>
                </div>
                
                <div className="pl-4">
                  <p><span className="text-zinc-500">name:</span> <span className="text-amber-300">'Petros Worku'</span>,</p>
                  <p><span className="text-zinc-500">role:</span> <span className="text-amber-300">'Systems Architect'</span>,</p>
                  <p><span className="text-zinc-500">location:</span> <span className="text-amber-300">'Addis Ababa'</span>,</p>
                  <p><span className="text-zinc-500">stack:</span> [</p>
                  <div className="pl-4">
                    <p><span className="text-amber-300">'Next.js'</span>,</p>
                    <p><span className="text-amber-300">'TypeScript'</span>,</p>
                    <p><span className="text-amber-300">'PostgreSQL'</span></p>
                  </div>
                  <p>],</p>
                  <p><span className="text-zinc-500">status:</span> <span className="text-green-400">'online'</span>,</p>
                  <p><span className="text-zinc-500">ready_for_hire:</span> <span className="text-red-400">true</span></p>
                </div>
  
                <div className="flex gap-2">
                  <span className="text-zinc-100">{"}"}</span>
                  <span className="text-zinc-500">;</span>
                </div>
  
                {/* Terminal Command Line */}
                <div className="mt-auto flex items-center gap-2 border-t border-zinc-800 pt-4">
                  <span className="text-red-500">➜</span>
                  <span className="text-zinc-500">~</span>
                  <span className="text-zinc-100">npm run deploy</span>
                  <span className="h-3.5 w-2 animate-pulse bg-zinc-300" />
                </div>
              </div>
              
              {/* Live Progress Bar (Fills up on hover) */}
              <div className="h-1 w-full bg-zinc-900">
                <div className="h-full w-1/3 bg-red-600 transition-all duration-[2000ms] ease-out group-hover:w-full group-hover:bg-green-500" />
              </div>
  
              {/* Scanline overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20" />
            </div>
  
          </div>
        </div>
      </section>
    );
  }