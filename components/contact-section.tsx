"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerHaptic } from "@/lib/haptics"; // <-- Added Haptics

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    triggerHaptic(); // Vibrate on submit
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // ⚠️ REPLACE WITH YOUR ACTUAL FORMSPREE ENDPOINT
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative border-t border-zinc-800 bg-zinc-950 py-24 text-zinc-50 md:py-32 scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-start justify-between gap-4 border-b border-zinc-800 pb-4 sm:flex-row sm:items-end"
        >
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-100">
            [ Contact Me ]
          </h2>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
              Let's build <br />
              <span className="text-red-500">something.</span>
            </h3>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-zinc-400">
              Tell me about your business. I reply on Telegram or email, usually within 24 hours.
            </p>

            <div className="mt-12 flex flex-col gap-3 font-mono">
              {/* Email Link */}
              <a href="mailto:petrosworku19@gmail.com" onClick={triggerHaptic} className="group relative flex flex-col border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-red-500/50 hover:bg-zinc-900 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-zinc-800 transition-colors group-hover:bg-red-500" />
                <div className="flex items-center justify-between pl-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-red-500">Email</span>
                    <span className="mt-1 text-sm text-zinc-300 group-hover:text-white">petrosworku19@gmail.com</span>
                  </div>
                  <span className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500">↗</span>
                </div>
              </a>

              {/* Telegram Link */}
              <a href="https://t.me/@Micku_19" target="_blank" rel="noopener noreferrer" onClick={triggerHaptic} className="group relative flex flex-col border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-red-500/50 hover:bg-zinc-900 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-zinc-800 transition-colors group-hover:bg-red-500" />
                <div className="flex items-center justify-between pl-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-red-500">Telegram</span>
                    <span className="mt-1 text-sm text-zinc-300 group-hover:text-white">@Micku_19</span>
                  </div>
                  <span className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500">↗</span>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/" target="_blank" rel="noopener noreferrer" onClick={triggerHaptic} className="group relative flex flex-col border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-red-500/50 hover:bg-zinc-900 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-zinc-800 transition-colors group-hover:bg-red-500" />
                <div className="flex items-center justify-between pl-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-red-500">LinkedIn</span>
                    <span className="mt-1 text-sm text-zinc-300 group-hover:text-white">linkedin.com/in/petros-worku</span>
                  </div>
                  <span className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500">↗</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="relative flex flex-col border border-zinc-800 bg-zinc-900/30 p-6 md:p-8 backdrop-blur-sm min-h-[400px]">
              
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-1 flex-col items-center justify-center text-center font-mono h-full">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-green-500/30 bg-green-500/10 mb-6">
                      <span className="text-3xl text-green-500">✓</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-widest text-green-500 mb-2">
                      Message Sent
                    </h3>
                    <p className="text-xs text-zinc-400 max-w-xs">
                      Thank you for reaching out. I will get back to you within 24 hours.
                    </p>
                    <button onClick={() => { triggerHaptic(); setStatus("idle"); }} className="mt-8 border border-zinc-700 bg-zinc-800 px-6 py-2 text-[10px] uppercase tracking-widest text-zinc-300 hover:bg-zinc-700">
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="flex flex-col gap-6">
                    
                    <div className="group">
                      <label className="mb-2 flex items-center font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors group-focus-within:text-red-500">
                        Name
                      </label>
                      {/* 🔴 FIXED: Changed text-sm to text-base sm:text-sm */}
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="Your name" 
                        className="w-full border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-base sm:text-sm text-zinc-100 placeholder-zinc-700 transition-all focus:border-red-600/50 focus:bg-zinc-900 focus:outline-none" 
                      />
                    </div>

                    <div className="group">
                      <label className="mb-2 flex items-center font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors group-focus-within:text-red-500">
                        Email
                      </label>
                      {/* 🔴 FIXED: Changed text-sm to text-base sm:text-sm */}
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="you@company.com" 
                        className="w-full border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-base sm:text-sm text-zinc-100 placeholder-zinc-700 transition-all focus:border-red-600/50 focus:bg-zinc-900 focus:outline-none" 
                      />
                    </div>

                    <div className="group">
                      <label className="mb-2 flex items-center font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors group-focus-within:text-red-500">
                        Message
                      </label>
                      {/* 🔴 FIXED: Changed text-sm to text-base sm:text-sm */}
                      <textarea 
                        name="message" 
                        required 
                        rows={4} 
                        placeholder="Tell me about your business..." 
                        className="w-full resize-none border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-base sm:text-sm text-zinc-100 placeholder-zinc-700 transition-all focus:border-red-600/50 focus:bg-zinc-900 focus:outline-none" 
                      />
                    </div>
                    
                    <button type="submit" disabled={status !== "idle"} className="group relative mt-2 flex w-full items-center justify-between overflow-hidden border border-zinc-700 bg-zinc-800 px-6 py-4 font-mono text-xs uppercase tracking-widest text-zinc-100 transition-all hover:border-red-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-90 touch-manipulation">
                      <span className="absolute inset-0 -translate-x-full bg-red-600 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                      <span className="relative z-10">
                        {status === "idle" ? "Send Message" : "Sending..."}
                      </span>
                      <span className="relative z-10 text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">
                        {status === "idle" ? "→" : "■"}
                      </span>
                    </button>

                    {status === "error" && (
                      <p className="text-center font-mono text-[10px] uppercase tracking-widest text-red-500">
                        Something went wrong. Please email me directly.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}