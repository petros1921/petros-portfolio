import { type ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  built: string;
  result: string;
  tags: string[];
  media: ReactNode;
  href?: string;
  liveUrl?: string;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const formattedId = String(index + 1).padStart(2, "0");
  
  const isLive = !!project.liveUrl;
  const hasSource = !!project.href;
  
  let statusText = "IN DEVELOPMENT";
  let statusColor = "text-zinc-400";
  let statusDot = "bg-zinc-400";
  
  if (isLive) {
    statusText = "LIVE";
    statusColor = "text-green-600";
    statusDot = "bg-green-600 animate-pulse";
  } else if (hasSource) {
    statusText = "SOURCE AVAILABLE";
    statusColor = "text-amber-500";
    statusDot = "bg-amber-500";
  }

  return (
    <article className="group relative flex flex-col border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.08)]">
      
      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="text-red-600">■</span>
          <span>Project {formattedId}</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <span className={`flex items-center gap-1.5 ${statusColor}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${statusDot}`} /> 
            {statusText}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8 p-6 md:flex-row md:items-stretch md:gap-10 md:p-8">
        
        {/* Media Container */}
        <div className="relative w-full shrink-0 overflow-hidden border border-zinc-200 bg-zinc-100 md:w-1/2 group/image">
          <div className="aspect-video h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
            {project.media}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
          <div className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-red-500 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
          <div className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-red-500 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-between md:w-1/2">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-600">
              {project.subtitle}
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              {project.title}
            </h3>
            
            {/* The Problem -> Solution -> Result Format */}
            <div className="mt-6 space-y-4">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">Problem:</span>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{project.problem}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">What I built:</span>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{project.built}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">Result:</span>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{project.result}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-zinc-200 bg-zinc-50 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-800">
                  [{tag}]
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/btn flex flex-1 items-center justify-between overflow-hidden border border-zinc-300 bg-white px-4 py-3 font-mono text-xs uppercase tracking-widest text-zinc-900 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white active:scale-[0.98]">
                  <span className="relative z-10">View Live Site</span>
                  <span className="relative z-10 text-red-600 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:text-white">↗</span>
                </a>
              )}
              
              {project.href && (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="group/btn flex flex-1 items-center justify-between border border-zinc-300 bg-white px-4 py-3 font-mono text-xs uppercase tracking-widest text-zinc-900 transition-all hover:border-zinc-900 hover:bg-zinc-900 hover:text-white active:scale-[0.98]">
                  <span>View Code</span>
                  <span className="text-red-600 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:text-red-500">→</span>
                </a>
              )}

              {!project.href && !project.liveUrl && (
                <div className="flex w-full items-center justify-between border border-zinc-200 bg-zinc-50 px-4 py-3 font-mono text-xs uppercase tracking-widest text-zinc-400">
                  <span>Building Now</span>
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