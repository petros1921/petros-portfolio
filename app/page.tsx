import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectGrid } from "@/components/project-grid";
import { Process } from "@/components/process";
import { TechStack } from "@/components/tech-stack";
import { ContactSection } from "@/components/contact-section";
import { Year } from "@/components/year";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ProjectGrid />
      <Process />
      <TechStack />
      <ContactSection />
      
      <footer className="border-t border-zinc-200 bg-zinc-50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:flex-row">
          {/* Using the <Year /> component instead */}
          <p>© <Year /> Petros Worku</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            Based in Addis Ababa, Ethiopia
          </p>
        </div>
      </footer>
    </main>
  );
}