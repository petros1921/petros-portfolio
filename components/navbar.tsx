"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const links = [
  { label: "About", href: "#about", id: "01" },
  { label: "Work", href: "#work", id: "02" },
  { label: "Stack", href: "#stack", id: "03" },
  { label: "Contact", href: "#contact", id: "04" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll Spy: Automatically tracks which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* 1. Top Micro-Status Bar (HUD Detail) */}
      <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-1.5">
        <div className="mx-auto flex max-w-6xl items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              SYS_ONLINE
            </span>
            
            {/* Signal Bars */}
            <span className="hidden items-end gap-[2px] sm:flex">
              <span className="h-1 w-[2px] bg-green-500" />
              <span className="h-1.5 w-[2px] bg-green-500" />
              <span className="h-2 w-[2px] bg-green-500" />
              <span className="h-2.5 w-[2px] bg-green-500" />
            </span>

            <span className="hidden sm:inline">NODE: ADDIS_ABABA</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">PING: 12ms</span>
            <span className="hidden sm:inline">MEM: 84%</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-4 rounded-[1px] border border-zinc-600 p-[1px]">
                <span className="block h-full w-3/4 bg-green-500" />
              </span>
              84%
            </span>
            <span className="text-zinc-600">v.2.4.1</span>
          </div>
        </div>
      </div>

      {/* 2. Main Nav */}
      <div className="border-b border-zinc-200 bg-zinc-50/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          
          {/* Logo + Command Palette Hint */}
          <div className="flex items-center gap-3">
            <a href="#" className="group flex items-center font-mono text-sm font-bold tracking-tighter text-zinc-900">
              <span className="mr-1.5 text-red-600 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110">▶</span>
              PETROS_WORKU<span className="text-zinc-400">.SYS</span>
              <span className="ml-1 h-3.5 w-2 animate-pulse bg-zinc-400" />
            </a>
            <span className="hidden border border-zinc-300 bg-white px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-zinc-400 transition-colors hover:border-zinc-400 hover:text-zinc-600 cursor-pointer lg:inline">
              ⌘K
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group relative flex items-center gap-2 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                    isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  <span className={`text-[10px] transition-colors ${
                    isActive ? "text-red-600" : "text-zinc-300 group-hover:text-red-600"
                  }`}>
                    [{link.id}]
                  </span>
                  {link.label}
                  
                  {/* Active Indicator */}
                  <span className={`absolute bottom-0 left-0 h-px bg-red-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              );
            })}
            
            <a
              href="#contact"
              className="group relative ml-4 overflow-hidden border border-zinc-900 bg-zinc-900 px-5 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-50 transition-all hover:border-red-600 active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full bg-red-600 transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative z-10">Initiate_Contact</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="group flex flex-col gap-1.5 md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-zinc-900 transition-transform duration-300 ${open ? "translate-y-2 rotate-45 bg-red-600" : ""}`} />
            <span className={`h-0.5 w-6 bg-zinc-900 transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-zinc-900 transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45 bg-red-600" : ""}`} />
          </button>
        </nav>
      </div>

      {/* 3. Mobile Nav (Terminal Dropdown with Framer Motion) */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-zinc-800 bg-zinc-950 px-6 shadow-2xl md:hidden"
          >
            <div className="py-6">
              <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                <span>~/menu/directory/</span>
                <span className="text-green-500 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  SECURE
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {links.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center gap-3 border p-3 font-mono text-xs uppercase tracking-widest transition-all ${
                        isActive
                          ? "border-red-600/50 bg-red-950/20 text-white"
                          : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:text-white"
                      }`}
                    >
                      <span className={`transition-colors ${isActive ? "text-red-500" : "text-zinc-600 group-hover:text-red-500"}`}>
                        [{link.id}]
                      </span>
                      {link.label}
                      <span className={`ml-auto transition-transform group-hover:translate-x-1 ${isActive ? "text-red-500" : "text-zinc-600"}`}>→</span>
                    </a>
                  );
                })}
              </div>
              
              {/* Mobile Contact CTA */}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex w-full items-center justify-between bg-red-600 px-4 py-3 font-mono text-xs uppercase tracking-widest text-white active:scale-95"
              >
                Initiate_Contact
                <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}