"use client";

import { motion } from "framer-motion";
import { ProjectCard, type Project } from "./project-card";
import Image from "next/image";

const projects: Project[] = [
  {
    id: "mekbeb-dinamo",
    title: "መክበብ ዲናሞ",
    subtitle: "Garage & Workshop System",
    problem: "Stock and sales were tracked on paper, so items went missing and the owner couldn’t see the day’s totals.",
    built: "A system that tracks stock in real time, prints receipts with Ethiopian dates, and gives daily financial reports.",
    result: "[Add how long it’s been used, what changed, or a quote from the owner]",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    media: (
      <Image src="/mekbeb.png" alt="Garage Management System" width={800} height={450} className="h-full w-full object-cover" />
    ),
  },
  {
    id: "the-spot",
    title: "The Spot — Kitchen & Cocktail Lounge",
    subtitle: "Restaurant Website & QR Ordering",
    problem: "Guests waited for staff to take orders, and menus were hard to update.",
    built: "Guests scan a QR code at the table and order. Staff see orders live on a dashboard, and the team updates menus and events without a developer.",
    result: "Live since 2024. Used daily by staff to manage menu updates and table orders.",
    tags: ["HTML/CSS/JS", "Prismic", "Supabase", "PostgreSQL"],
    media: (
      <Image src="/spot.jpg" alt="The Spot - Kitchen & Cocktail Lounge" width={800} height={450} className="h-full w-full object-cover" />
    ),
    liveUrl: "https://thespotaddis.com",
    href: "https://github.com/petros1921/The-Spot-Website",
  },
  {
    id: "asni-donation",
    title: "ASNI Donation",
    subtitle: "Non-Profit Website",
    problem: "An education non-profit needed a trustworthy way to collect donations online.",
    built: "A donation website with a photo gallery, a simple donation flow with QR codes, and content the team can edit themselves.",
    result: "[Add donations received, or feedback]",
    tags: ["React", "Vite", "Sanity.io", "CSS3"],
    media: (
      <Image src="/asni.jpg" alt="ASNI Donation Platform" width={800} height={450} className="h-full w-full object-cover" />
    ),
    // Add these when you are ready:
    // liveUrl: "https://asni-donation.com",
    // href: "https://github.com/petros1921/ASNI-Donation",
  },
];

export function ProjectGrid() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-zinc-300 pb-4 sm:flex-row sm:items-end"
        >
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-900">
            [ My Work ]
          </h2>
        </motion.div>

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
      </div>
    </section>
  );
}