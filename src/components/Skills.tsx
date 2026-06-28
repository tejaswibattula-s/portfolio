"use client";

import { motion } from "framer-motion";
import { skills, softSkills } from "@/data/resume";
import Reveal from "./Reveal";
import { Terminal, Cpu, Layers, Activity } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Programming": <Terminal strokeWidth={1.5} size={22} />,
  "Embedded Systems": <Cpu strokeWidth={1.5} size={22} />,
  "VLSI & Digital": <Layers strokeWidth={1.5} size={22} />,
  "EDA & Simulation": <Activity strokeWidth={1.5} size={22} />,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-8 py-24 md:py-32 tape-edge relative overflow-hidden">
      <div className="max-w-[var(--container)] mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[var(--signal)]"></span>
            <p className="label-eyebrow">03 — Skills</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-xl text-[var(--ink)]">
            Core Toolchain
          </h2>
          <p className="mt-4 text-[var(--ink-dim)] text-lg max-w-2xl">
            The hardware and software ecosystem I use to design, simulate, and build robust systems.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.1}>
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group h-full p-8 md:p-10 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--surface-border)] hover:border-[var(--signal)]/30 transition-colors duration-500 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] flex items-center justify-center text-[var(--ink-dim)] group-hover:text-[var(--signal)] group-hover:border-[var(--signal)]/20 transition-all duration-500">
                    {iconMap[group.group] || <Terminal strokeWidth={1.5} size={22} />}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[var(--ink)]">
                    {group.group}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 text-sm md:text-base rounded-lg bg-[var(--surface)] text-[var(--ink-dim)] border border-[var(--surface-border)] group-hover:border-[var(--signal)]/20 transition-colors duration-500 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Soft Skills Section */}
        <Reveal delay={0.4}>
          <div className="mt-16 pt-10 border-t border-[var(--surface-border)] flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
            <h3 className="font-mono-trace text-sm uppercase tracking-widest text-[var(--muted)] shrink-0">
              Professional Skills
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {softSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="flex items-center gap-2 text-[var(--ink-dim)] text-sm md:text-base"
                >
                  <span className="text-[var(--signal)] text-xs">▹</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
