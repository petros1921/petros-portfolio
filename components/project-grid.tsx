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
        src="/mekbeb.png" // Ensure this is in your public folder
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
        src="/spot.jpg" // Ensure this matches your saved image name
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
    id: "enterprise-solutions",
    title: "Enterprise Systems",
    subtitle: "High-Ticket Build · Coming Soon",
    description:
      "A dedicated slot for upcoming enterprise-grade systems. Custom database architectures, multi-tenant business logic, and workflow automation for scaling operations.",
    highlights: [
      "Multi-tenant architecture",
      "Automated workflow orchestration",
    ],
    tags: ["Next.js", "Node.js", "System Design"],
    media: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-zinc-100 space-y-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white">
          <span className="text-zinc-400">🔒</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
          [ DATA_ENCRYPTED ]
        </span>
      </div>
    ),
  },
];

export function ProjectGrid() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-24">
      
      <div className="pointer-events-none absolute inset-0 flex justify-between px-6 opacity-30">
        <div className="w-px h-full bg-zinc-200" />
        <div className="w-px h-full bg-zinc-200 hidden md:block" />
        <div className="w-px h-full bg-zinc-200 hidden md:block" />
        <div className="w-px h-full bg-zinc-200" />
      </div>

      <div className="relative z-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-zinc-300 pb-4 sm:flex-row sm:items-end">
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-900">
            [ 02 // Selected Work ]
          </h2>
          
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span className="hidden sm:inline">SORT: DESC</span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span className="text-green-600 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600 animate-pulse" />
              {projects.length} Records Found
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-zinc-400">
          --- END OF RECORD ---
        </div>
      </div>
    </section>
  );
}