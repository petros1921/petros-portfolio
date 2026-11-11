"use client";

import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-zinc-800 pb-4 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-100">
              [ 03 // Capabilities Matrix ]
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-sm border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            All Modules Online
          </div>
        </motion.div>
        
        {/* Grid of Modules */}
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div 
              key={group.label} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-red-600/50 hover:bg-zinc-900"
            >
              {/* Corner Brackets (HUD Detail) */}
              <div className="absolute -left-px -top-px h-2.5 w-2.5 border-l-2 border-t-2 border-zinc-600 transition-all group-hover:border-red-500" />
              <div className="absolute -right-px -top-px h-2.5 w-2.5 border-r-2 border-t-2 border-zinc-600 transition-all group-hover:border-red-500" />
              <div className="absolute -bottom-px -left-px h-2.5 w-2.5 border-b-2 border-l-2 border-zinc-600 transition-all group-hover:border-red-500" />
              <div className="absolute -bottom-px -right-px h-2.5 w-2.5 border-b-2 border-r-2 border-zinc-600 transition-all group-hover:border-red-500" />

              {/* Module Header */}
              <div className="mb-5 flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 transition-colors group-hover:bg-red-500 group-hover:animate-pulse" />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-300 transition-colors group-hover:text-red-500">
                    {group.label}
                  </h3>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-600 bg-zinc-900 px-1.5 py-0.5 border border-zinc-800">
                  {group.id}
                </span>
              </div>

              {/* Items List */}
              <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {group.items.map((item, idx) => (
                  <li 
                    key={item} 
                    className="group/item flex items-center justify-between border border-transparent px-2 py-1.5 font-mono text-[11px] text-zinc-400 transition-all duration-200 hover:border-zinc-700/50 hover:bg-zinc-800/50 hover:text-zinc-100"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[9px] text-zinc-600 transition-colors group-hover/item:text-red-500">
                        [{String(idx + 1).padStart(2, '0')}]
                      </span>
                      {item}
                    </div>
                    {/* System Status Box */}
                    <span className="text-[8px] text-zinc-700 transition-colors group-hover/item:text-red-500/70">
                      ■
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer System Check */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div className="h-px w-12 bg-zinc-800" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            [ System Check Complete // 100% Operational ]
          </p>
          <div className="h-px w-12 bg-zinc-800" />
        </motion.div>

      </div>
    </section>
  );
}