import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectGrid } from "@/components/project-grid";
import { TechStack } from "@/components/tech-stack";
import { ContactSection } from "@/components/contact-section";
import { cacheLife } from "next/cache";

async function getCopyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Home() {
  const year = await getCopyrightYear();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ProjectGrid />
      <TechStack />
      <ContactSection />

      <footer className="border-t border-zinc-200 bg-zinc-50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:flex-row">
          <p>© {year} PETROS_WORKU.SYS</p>
          <p>LOC: 9.0320° N, 38.7469° E</p>
        </div>
      </footer>
    </main>
  );
}