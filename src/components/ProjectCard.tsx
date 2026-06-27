"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group border border-[var(--surface-border)] rounded-md p-6 md:p-7 hover:border-[var(--signal-dim)] transition-colors bg-[var(--bg-elevated)]/40"
    >
      <div className="flex items-center justify-between font-mono-trace text-[11px] text-[var(--muted)]">
        <span>{String(index + 1).padStart(2, "0")} / SPEC SHEET</span>
        <span>{project.year}</span>
      </div>

      <h3 className="mt-4 text-xl md:text-2xl font-semibold tracking-tight leading-snug">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-signal font-mono-trace">
        {project.subtitle}
      </p>

      <p className="mt-4 text-[var(--ink-dim)] text-sm leading-relaxed">
        {project.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.bullets.map((b) => (
          <li
            key={b}
            className="flex gap-2 text-[13px] text-[var(--ink-dim)] leading-relaxed"
          >
            <span className="text-signal shrink-0">—</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono-trace text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-sm bg-[var(--surface)] text-[var(--ink-dim)] border border-[var(--surface-border)]"
          >
            {s}
          </span>
        ))}
      </div>

      {project.metrics.length > 0 && (
        <div className="mt-5 pt-5 border-t border-[var(--surface-border)] flex gap-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-mono-trace text-lg text-signal font-medium">
                {m.value}
              </div>
              <div className="text-[11px] text-[var(--muted)]">{m.label}</div>
            </div>
          ))}
        </div>
      )}
    </motion.article>
  );
}
