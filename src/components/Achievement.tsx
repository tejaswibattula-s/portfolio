"use client";

import { motion } from "framer-motion";
import { achievement } from "@/data/resume";
import Reveal from "./Reveal";

export default function Achievement() {
  return (
    <section className="px-6 md:px-8 py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[var(--container)] mx-auto relative z-10">
        <Reveal>
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group relative"
          >
            {/* Elegant Background Card */}
            <div className="relative rounded-xl p-8 md:p-14 bg-[var(--bg-elevated)] border border-[var(--surface-border)] shadow-sm group-hover:border-[var(--signal-dim)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8 md:gap-14 items-start md:items-center">
              
              {/* Refined Icon Area */}
              <div className="shrink-0 relative w-16 h-16 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--surface-border)] group-hover:border-[var(--signal)]/30 transition-colors duration-500">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-[var(--ink-dim)] group-hover:text-[var(--signal)] transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15l-3.09 1.636.59-3.455L7 10.727l3.468-.503L12 7l1.532 3.224L17 10.727l-2.5 2.454.59 3.455z"/>
                  <path d="M3 21v-4c0-2.76 2.24-5 5-5h8c2.76 0 5 2.24 5 5v4"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>

              {/* Text Content */}
              <div className="flex-1 relative z-10 w-full">
                <div className="inline-flex items-center gap-4 mb-4">
                  <span className="font-mono-trace text-[10px] md:text-xs text-[var(--signal)] uppercase tracking-widest font-semibold">
                    National Level Recognition
                  </span>
                  <div className="h-[1px] w-12 bg-[var(--surface-border)]" />
                </div>
                
                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-[var(--ink)] mb-2">
                  {achievement.title}
                </h3>
                <h4 className="text-base md:text-xl text-[var(--ink-dim)] font-medium mb-8">
                  {achievement.subtitle}
                </h4>

                <div className="h-[1px] w-full bg-gradient-to-r from-[var(--surface-border)] to-transparent mb-8" />

                <ul className="space-y-4 max-w-2xl">
                  {achievement.points.map((p, i) => (
                    <li
                      key={p}
                      className="flex gap-4 text-[var(--ink-dim)] text-sm md:text-base leading-relaxed items-start"
                    >
                      <span className="mt-1 text-[var(--signal)] text-xs font-mono-trace">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Official Stamp */}
              <div className="absolute top-8 right-8 font-mono-trace text-[10px] md:text-xs text-[var(--muted)] flex flex-col items-end opacity-60">
                <span className="tracking-widest uppercase">Final // Verified</span>
                <span className="text-[var(--ink-dim)] mt-1 tracking-widest">AICTE & MoE</span>
              </div>
              
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
