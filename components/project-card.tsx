import { type ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  media: ReactNode;
  href?: string;     // Source Code Link
  liveUrl?: string;  // Live Website Link
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const formattedId = String(index + 1).padStart(2, "0");
  
  // Determine the system status based on available links
  const isLive = !!project.liveUrl;
  const hasSource = !!project.href;
  
  let statusText = "CLASSIFIED";
  let statusColor = "text-zinc-400";
  let statusDot = "bg-zinc-400";
  
  if (isLive) {
    statusText = "LIVE_IN_PRODUCTION";
    statusColor = "text-green-600";
    statusDot = "bg-green-600 animate-pulse";
  } else if (hasSource) {
    statusText = "SOURCE_ONLY";
    statusColor = "text-amber-500";
    statusDot = "bg-amber-500";
  }

  return (
    <article className="group relative flex flex-col border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.08)]">
      
      {/* 1. Card Header (System HUD style) */}
      <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="text-red-600">■</span>
          <span>PROJ_ID: {formattedId}</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="hidden sm:inline">SYS_TYPE: WEB_APP</span>
          <span className={`flex items-center gap-1.5 ${statusColor}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${statusDot}`} /> 
            {statusText}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8 p-6 md:flex-row md:items-stretch md:gap-10 md:p-8">
        
        {/* 2. Media Container */}
        <div className="relative w-full shrink-0 overflow-hidden border border-zinc-200 bg-zinc-100 md:w-1/2 group/image">
          <div className="aspect-video h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
            {project.media}
          </div>
          
          {/* Technical Grid Overlay (Appears on Hover) */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
          
          {/* Corner Target Brackets (Appears on Hover) */}
          <div className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-red-500 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
          <div className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-red-500 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />

          {/* Scanning Line */}
          <div className="pointer-events-none absolute left-0 top-0 h-0.5 w-full bg-red-600/50 opacity-0 blur-[1px] transition-opacity duration-300 group-hover/image:opacity-100 group-hover/image:animate-[scan_2s_ease-in-out_infinite]" />
        </div>

        {/* 3. Content Section */}
        <div className="flex flex-1 flex-col justify-between md:w-1/2">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-600">
              {project.subtitle}
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              {project.description}
            </p>
            
            {/* Highlights (Terminal style) */}
            <ul className="mt-6 space-y-2.5">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 font-mono text-[11px] text-zinc-600">
                  <span className="mt-0.5 text-red-600">↳</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-zinc-200 bg-zinc-50 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-800"
                >
                  [{tag}]
                </span>
              ))}
            </div>

            {/* 4. Action Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex flex-1 items-center justify-between overflow-hidden border border-zinc-300 bg-white px-4 py-3 font-mono text-xs uppercase tracking-widest text-zinc-900 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white active:scale-[0.98]"
                >
                  <span className="relative z-10">Live_Site</span>
                  <span className="relative z-10 text-red-600 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:text-white">↗</span>
                </a>
              )}
              
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex flex-1 items-center justify-between border border-zinc-300 bg-white px-4 py-3 font-mono text-xs uppercase tracking-widest text-zinc-900 transition-all hover:border-zinc-900 hover:bg-zinc-900 hover:text-white active:scale-[0.98]"
                >
                  <span>Source_Code</span>
                  <span className="text-red-600 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:text-red-500">→</span>
                </a>
              )}

              {!project.href && !project.liveUrl && (
                <div className="flex w-full items-center justify-between border border-zinc-200 bg-zinc-50 px-4 py-3 font-mono text-xs uppercase tracking-widest text-zinc-400">
                  <span>Classified_Build</span>
                  <span className="text-zinc-300">■</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}