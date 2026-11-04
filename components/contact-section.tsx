"use client";

import { useState, type FormEvent } from "react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace with your Formspree endpoint or EmailJS logic
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative border-t border-zinc-800 bg-zinc-950 py-24 text-zinc-50 md:py-32 scroll-mt-24 overflow-hidden">
      
      {/* Background Faint Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-4 border-b border-zinc-800 pb-4 sm:flex-row sm:items-end">
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-100">
            [ 04 // Communication Uplink ]
          </h2>
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span className="hidden sm:inline">PING: 12ms</span>
            <span className="flex items-center gap-2 text-green-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Uplink Ready
            </span>
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          
          {/* Left Side: System Contacts */}
          <div>
            <h3 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
              Initiate <br />
              <span className="text-red-500">Contact.</span>
            </h3>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-zinc-400">
              Direct line for project inquiries, system architecture discussions, or a quick demo. Awaiting input.
            </p>

            <div className="mt-12 flex flex-col gap-3 font-mono">
              {/* Email Link */}
              <a href="mailto:petrosworku19@gmail.com" className="group relative flex flex-col border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-red-500/50 hover:bg-zinc-900 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-zinc-800 transition-colors group-hover:bg-red-500" />
                <div className="flex items-center justify-between pl-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-red-500">~/network/email</span>
                    <span className="mt-1 text-sm text-zinc-300 group-hover:text-white">petrosworku19@gmail.com</span>
                  </div>
                  <span className="text-zinc-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500">↗</span>
                </div>
              </a>

              {/* Telegram Link */}
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-red-500/50 hover:bg-zinc-900 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-zinc-800 transition-colors group-hover:bg-red-500" />
                <div className="flex items-center justify-between pl-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-red-500">~/network/telegram</span>
                    <span className="mt-1 text-sm text-zinc-300 group-hover:text-white">@yourusername</span>
                  </div>
                  <span className="text-zinc-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500">↗</span>
                </div>
              </a>

              {/* GitHub Link */}
              <a href="https://github.com/petros1921" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-red-500/50 hover:bg-zinc-900 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-zinc-800 transition-colors group-hover:bg-red-500" />
                <div className="flex items-center justify-between pl-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-red-500">~/network/github</span>
                    <span className="mt-1 text-sm text-zinc-300 group-hover:text-white">github.com/petros1921</span>
                  </div>
                  <span className="text-zinc-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500">↗</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Uplink Form */}
          <form 
            onSubmit={handleSubmit} 
            className="relative flex flex-col gap-6 border border-zinc-800 bg-zinc-900/30 p-6 md:p-8"
          >
            {/* Form Corner Brackets */}
            <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-zinc-600 transition-colors focus-within:border-red-500" />
            <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-zinc-600 transition-colors focus-within:border-red-500" />
            <div className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-zinc-600 transition-colors focus-within:border-red-500" />
            <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-zinc-600 transition-colors focus-within:border-red-500" />

            {/* Identity Input */}
            <div className="group">
              <label className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors group-focus-within:text-red-500">
                <span className="text-red-500">❯</span> [ Identity ]
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter designation"
                className="w-full border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-sm text-zinc-100 placeholder-zinc-700 transition-all focus:border-red-600/50 focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-red-600/50"
              />
            </div>

            {/* Email Input */}
            <div className="group">
              <label className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors group-focus-within:text-red-500">
                <span className="text-red-500">❯</span> [ Return_Address ]
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter comms link"
                className="w-full border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-sm text-zinc-100 placeholder-zinc-700 transition-all focus:border-red-600/50 focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-red-600/50"
              />
            </div>

            {/* Message Input */}
            <div className="group">
              <label className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors group-focus-within:text-red-500">
                <span className="text-red-500">❯</span> [ Payload ]
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Input project details..."
                className="w-full resize-none border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-sm text-zinc-100 placeholder-zinc-700 transition-all focus:border-red-600/50 focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-red-600/50"
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative mt-2 flex w-full items-center justify-between overflow-hidden border border-zinc-700 bg-zinc-800 px-6 py-4 font-mono text-xs uppercase tracking-widest text-zinc-100 transition-all hover:border-red-600 active:scale-[0.98] disabled:opacity-50"
            >
              {/* Sweeping Red Background */}
              <span className="absolute inset-0 -translate-x-full bg-red-600 transition-transform duration-300 ease-out group-hover:translate-x-0" />
              
              <span className="relative z-10">
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-ping rounded-full bg-white" />
                    TRANSMITTING...
                  </span>
                ) : (
                  "TRANSMIT_MESSAGE"
                )}
              </span>
              <span className="relative z-10 text-lg leading-none transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            {/* Form Status Readouts */}
            <div className="mt-2 h-4 text-center">
              {status === "sent" && (
                <p className="font-mono text-[10px] uppercase tracking-widest text-green-500 animate-pulse">
                  ✓ Transmission Successful. Awaiting Response.
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-[10px] uppercase tracking-widest text-red-500 animate-pulse">
                  ✗ Error. Please use direct email link.
                </p>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}