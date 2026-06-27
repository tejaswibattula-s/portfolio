"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import FloatingPoints from "./FloatingPoints";
import FloatingECEIcons from "./FloatingECEIcons";
import { profile } from "@/data/resume";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pcb-grid pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-8 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <FloatingPoints />
      <FloatingECEIcons />
      <div className="max-w-[var(--container)] mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-eyebrow mb-5"
        >
          SIH 2025 · Grand Finale Winner
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[1.04] tracking-tight max-w-4xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-[var(--ink-dim)] max-w-2xl leading-relaxed"
        >
          {profile.objective}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono-trace text-xs text-[var(--muted)]"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-signal" />
            {profile.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={13} className="text-signal" />
            {profile.email}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[var(--signal)] text-[#06120a] text-sm font-medium rounded-sm hover:bg-[var(--signal-dim)] transition-colors"
          >
            View projects
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-[var(--surface-border)] text-sm font-medium rounded-sm hover:border-[var(--muted)] transition-colors"
          >
            Download resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-[var(--ink-dim)] hover:text-[var(--ink)] transition-colors"
          >
            Contact →
          </a>
        </motion.div>

      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--muted)] hover:text-signal transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="font-mono-trace text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
