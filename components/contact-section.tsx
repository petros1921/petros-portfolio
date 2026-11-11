"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom Typewriter Hook for placeholders
function useTypewriter(text: string, speed = 50, startDelay = 500) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => text.slice(0, prev.length + 1));
        if (i >= text.length) clearInterval(interval);
        i++;
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [text, speed, startDelay]);
  return displayedText;
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "encrypting" | "routing" | "sent" | "error">("idle");
  const [byteCount, setByteCount] = useState(0);

  // Typewriter placeholders
  const namePlaceholder = useTypewriter("Enter designation...", 40);
  const emailPlaceholder = useTypewriter("Enter comms link...", 40);
  const msgPlaceholder = useTypewriter("Input project details...", 30);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("encrypting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Simulate encryption delay for the UI effect
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("routing");

      // ⚠️ REPLACE WITH YOUR ACTUAL FORMSPREE ENDPOINT
      const res = await fetch("https://formspree.io/f/mljbegjv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      await new Promise((resolve) => setTimeout(resolve, 800)); // Wait for routing effect
      
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
      setByteCount(0);
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start justify-between gap-4 border-b border-zinc-800 pb-4 sm:flex-row sm:items-end"
        >
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-100">
            [ 04 // Communication Uplink ]
          </h2>
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span className="hidden sm:inline">PING: 12ms</span>
            <span className="flex items-center gap-2 rounded-sm border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-green-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Uplink Ready
            </span>
          </div>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          
          {/* Left Side: System Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
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
                  <span className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500">↗</span>
                </div>
              </a>

              {/* Telegram Link */}
              <a href="https://t.me/@Micku_19" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-red-500/50 hover:bg-zinc-900 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-zinc-800 transition-colors group-hover:bg-red-500" />
                <div className="flex items-center justify-between pl-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-red-500">~/network/telegram</span>
                    <span className="mt-1 text-sm text-zinc-300 group-hover:text-white">@Micku_19</span>
                  </div>
                  <span className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500">↗</span>
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
                  <span className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500">↗</span>
                </div>
              </a>
              {/* LinkedIn Link */}
              <a href="https://www.linkedin.com/in/petros-worku/" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-red-500/50 hover:bg-zinc-900 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-zinc-800 transition-colors group-hover:bg-red-500" />
                <div className="flex items-center justify-between pl-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-red-500">~/network/linkedin</span>
                    <span className="mt-1 text-sm text-zinc-300 group-hover:text-white">linkedin.com/in/petros-worku</span>
                  </div>
                  <span className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500">↗</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Uplink Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative flex flex-col border border-zinc-800 bg-zinc-900/30 p-6 md:p-8 backdrop-blur-sm min-h-[450px]">
              
              {/* Form Corner Brackets */}
              <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-zinc-600 transition-colors focus-within:border-red-500" />
              <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-zinc-600 transition-colors focus-within:border-red-500" />
              <div className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-zinc-600 transition-colors focus-within:border-red-500" />
              <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-zinc-600 transition-colors focus-within:border-red-500" />

              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  /* SUCCESS SCREEN */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-1 flex-col items-center justify-center text-center font-mono h-full"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-green-500/30 bg-green-500/10 mb-6">
                      <span className="text-3xl text-green-500">✓</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-widest text-green-500 mb-2">
                      Transmission_Successful
                    </h3>
                    <p className="text-xs text-zinc-400 max-w-xs">
                      Message encrypted and routed to primary node. Awaiting response sequence.
                    </p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="mt-8 border border-zinc-700 bg-zinc-800 px-6 py-2 text-[10px] uppercase tracking-widest text-zinc-300 hover:bg-zinc-700"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  /* FORM SCREEN */
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-6"
                  >
                    {/* Identity Input */}
                    <div className="group">
                      <label className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors group-focus-within:text-red-500">
                        <span className="flex items-center gap-2">
                          <span className="text-red-500">❯</span> [ Identity ]
                        </span>
                        <span className="text-zinc-700 opacity-0 transition-opacity group-focus-within:opacity-100">REQ</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder={namePlaceholder}
                        className="w-full border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-sm text-zinc-100 placeholder-zinc-700 transition-all focus:border-red-600/50 focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-red-600/50"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="group">
                      <label className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors group-focus-within:text-red-500">
                        <span className="flex items-center gap-2">
                          <span className="text-red-500">❯</span> [ Return_Address ]
                        </span>
                        <span className="text-zinc-700 opacity-0 transition-opacity group-focus-within:opacity-100">REQ</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder={emailPlaceholder}
                        className="w-full border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-sm text-zinc-100 placeholder-zinc-700 transition-all focus:border-red-600/50 focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-red-600/50"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="group">
                      <label className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors group-focus-within:text-red-500">
                        <span className="flex items-center gap-2">
                          <span className="text-red-500">❯</span> [ Payload ]
                        </span>
                        <span className="text-zinc-700 opacity-0 transition-opacity group-focus-within:opacity-100">REQ</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder={msgPlaceholder}
                        onChange={(e) => setByteCount(new Blob([e.target.value]).size)}
                        className="w-full resize-none border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-sm text-zinc-100 placeholder-zinc-700 transition-all focus:border-red-600/50 focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-red-600/50"
                      />
                      <div className="mt-1 flex justify-end font-mono text-[9px] text-zinc-600">
                        BYTES: {String(byteCount).padStart(3, "0")}
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status !== "idle"}
                      className="group relative mt-2 flex w-full items-center justify-between overflow-hidden border border-zinc-700 bg-zinc-800 px-6 py-4 font-mono text-xs uppercase tracking-widest text-zinc-100 transition-all hover:border-red-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-90"
                    >
                      {/* Sweeping Red Background */}
                      <span className="absolute inset-0 -translate-x-full bg-red-600 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                      
                      <span className="relative z-10 flex items-center gap-2">
                        {status === "idle" && "TRANSMIT_MESSAGE"}
                        {status === "encrypting" && (
                          <>
                            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                            ENCRYPTING_PAYLOAD...
                          </>
                        )}
                        {status === "routing" && (
                          <>
                            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                            ESTABLISHING_UPLINK...
                          </>
                        )}
                        {status === "error" && <span className="text-red-300">TRANSMISSION_FAILED. RETRY.</span>}
                      </span>
                      <span className="relative z-10 text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">
                        {status === "idle" ? "→" : "■"}
                      </span>
                    </button>
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