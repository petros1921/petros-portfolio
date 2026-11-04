const groups = [
  { 
    id: "MOD_01",
    label: "FRONTEND_LAYER", 
    items: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"] 
  },
  { 
    id: "MOD_02",
    label: "BACKEND_INFRA", 
    items: ["Node.js", "Express.js", "Python / Flask", "REST APIs", "GraphQL", "Business Logic"] 
  },
  { 
    id: "MOD_03",
    label: "DATABASE_SYS", 
    items: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "SQLite", "Prismic CMS"] 
  },
  { 
    id: "MOD_04",
    label: "TOOLS_WORKFLOW", 
    items: ["Git / Version Control", "Responsive Design", "Media Workflows", "DaVinci Resolve"] 
  },
];

export function TechStack() {
  return (
    <section id="stack" className="relative border-y border-zinc-800 bg-zinc-950 py-24 text-zinc-50 md:py-32 scroll-mt-24 overflow-hidden">
      
      {/* Background Faint Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-zinc-800 pb-4 sm:flex-row sm:items-end">
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-100">
            [ 03 // Capabilities Matrix ]
          </h2>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
            All Modules Online
          </div>
        </div>
        
        {/* Grid of Modules (Now 2x2 on desktop) */}
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div 
              key={group.label} 
              className="group relative border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-red-600/50 hover:bg-zinc-900"
            >
              {/* Corner Brackets (HUD Detail) */}
              <div className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-zinc-700 transition-colors group-hover:border-red-500" />
              <div className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-zinc-700 transition-colors group-hover:border-red-500" />
              <div className="absolute -bottom-px -left-px h-2 w-2 border-b-2 border-l-2 border-zinc-700 transition-colors group-hover:border-red-500" />
              <div className="absolute -bottom-px -right-px h-2 w-2 border-b-2 border-r-2 border-zinc-700 transition-colors group-hover:border-red-500" />

              {/* Module Header */}
              <div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-red-500">
                  {group.label}
                </h3>
                <span className="font-mono text-[9px] uppercase text-zinc-600">
                  {group.id}
                </span>
              </div>

              {/* Items List */}
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {group.items.map((item, index) => (
                  <li 
                    key={item} 
                    className="group/item flex items-center gap-2 font-mono text-[11px] text-zinc-400 transition-all duration-200 hover:translate-x-1 hover:text-zinc-100"
                  >
                    <span className="text-[9px] text-zinc-600 transition-colors group-hover/item:text-red-500">
                      [{String(index + 1).padStart(2, '0')}]
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer System Check */}
        <div className="mt-12 text-center font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          [ System Check Complete // 100% Operational ]
        </div>

      </div>
    </section>
  );
}