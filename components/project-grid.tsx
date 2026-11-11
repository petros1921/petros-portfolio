"use client";

import { motion } from "framer-motion";
import { ProjectCard, type Project } from "./project-card";
import Image from "next/image";

const projects: Project[] = [
  {
    id: "mekbeb-dinamo",
    title: "መክበብ ዲናሞ",
    subtitle: "Garage & Workshop Management",
    description:
      "Built for physical retail/repair automotive workshops. Features real-time stock tracking, synchronized inventory management, daily financial reports, and custom printable receipts.",
    highlights: [
      "Solves paper-bookkeeping chaos and stock leakage",
      "Ethiopian calendar-aware receipt generation",
      "Real-time inventory synchronization",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    media: (
      <Image
        src="/mekbeb.png"
        alt="Garage Management System"
        width={800}
        height={450}
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    id: "the-spot",
    title: "The Spot — Kitchen & Cocktail Lounge",
    subtitle: "Restaurant Operations & Ordering System",
    description:
      "A production-ready restaurant website with a QR-code table-ordering system and a real-time admin dashboard. Fully responsive, accessible, and designed with a custom futuristic design system.",
    highlights: [
      "QR-code table-ordering system for seamless guest experience",
      "Real-time admin dashboard for order management",
      "Headless CMS (Prismic) for dynamic menus and events",
      "Secure auth and row-level security via Supabase",
    ],
    tags: ["HTML/CSS/JS", "Prismic", "Supabase", "PostgreSQL"],
    media: (
      <Image
        src="/spot.jpg"
        alt="The Spot - Kitchen & Cocktail Lounge"
        width={800}
        height={450}
        className="h-full w-full object-cover"
      />
    ),
    liveUrl: "https://thespotaddis.com",
    href: "https://github.com/petros1921/The-Spot-Website",
  },
  {
    id: "asni-donation",
    title: "ASNI Donation",
    subtitle: "Non-Profit Platform & CMS",
    description:
      "A high-converting, fully responsive donation website for an Ethiopian education non-profit. Features a premium design system, headless CMS, and custom interactive components.",
    highlights: [
      "Premium custom design system (Deep Forest Green & Warm Gold)",
      "Sanity.io headless CMS with Portable Text rendering",
      "Custom Masonry gallery with keyboard-navigable Lightbox",
      "Seamless donation flow with QR codes & clipboard copy",
    ],
    tags: ["React.js", "Vite", "Sanity.io", "CSS3", "React Router"],
    media: (
      <Image
        src="/asni.jpg" // Make sure to save your ASNI screenshot as asni.jpg in the public folder!
        alt="ASNI Donation Platform"
        width={800}
        height={450}
        className="h-full w-full object-cover"
      />
    ),
    // liveUrl: "https://asni-donation.com", // Uncomment when live
    // href: "https://github.com/petros1921/ASNI-Donation", // Uncomment to show source button
  },
];

export function ProjectGrid() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-24 overflow-hidden">
      
      {/* Background Faint Grid (Matches other sections) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-zinc-300 pb-4 sm:flex-row sm:items-end"
        >
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-900">
            [ 02 // Selected Work ]
          </h2>
          
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span className="hidden sm:inline">SORT: DESC</span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span className="flex items-center gap-1.5 rounded-sm border border-zinc-200 bg-white px-2 py-1 text-green-600 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-600" />
              </span>
              {projects.length} Records Found
            </span>
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
        
        {/* End of Record */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div className="h-px w-8 bg-zinc-300" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            --- END OF RECORD ---
          </p>
          <div className="h-px w-8 bg-zinc-300" />
        </motion.div>
      </div>
    </section>
  );
}