"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "We talk about your business", desc: "We discuss your current problems, how you track stock or orders, and what needs fixing." },
  { step: "02", title: "I send a plan and a price", desc: "You get a clear proposal with the timeline, the exact features, and the final cost. No surprises." },
  { step: "03", title: "I build it and show you progress", desc: "I build the system and give you access to a staging link so you can see it working before launch." },
  { step: "04", title: "I train your staff and stay available", desc: "I train your team on how to use the system, provide documentation, and offer post-launch support." },
];

export function Process() {
  return (
    <section id="process" className="relative border-y border-zinc-200 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-zinc-200 pb-4"
        >
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-900">
            [ How I Work ]
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((item, index) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative border-l-2 border-zinc-200 pl-6"
            >
              <span className="font-mono text-xs font-bold text-red-600">{item.step}</span>
              <h3 className="mt-2 font-display text-xl font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}