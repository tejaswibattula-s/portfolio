"use client";

import { motion } from "framer-motion";

/**
 * A scope-style waveform: a settling voltage trace that starts noisy
 * and stabilizes into a clean band — a visual echo of the ±2% voltage
 * deviation result from the rooftop solar project. This is the page's
 * one deliberate hero visual.
 */
export default function Waveform() {
  return (
    <svg
      viewBox="0 0 600 200"
      className="w-full h-auto"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.15" />
          <stop offset="60%" stopColor="var(--signal)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* baseline grid */}
      {[40, 80, 120, 160].map((y) => (
        <line
          key={y}
          x1="0"
          x2="600"
          y1={y}
          y2={y}
          stroke="var(--surface-border)"
          strokeWidth="1"
        />
      ))}

      {/* settling waveform: noisy → stable, echoing the ±2% deviation story */}
      <motion.path
        d="M0,100 
           C20,40 40,160 60,90
           C80,30 100,150 120,95
           C140,50 160,130 180,100
           C200,70 220,118 240,100
           C260,85 280,108 300,98
           C340,92 380,102 420,99
           C460,97.5 500,100.5 540,99.5
           C560,99.2 580,100 600,100"
        fill="none"
        stroke="url(#fade)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />

      {/* stabilized band marker */}
      <motion.line
        x1="420"
        x2="600"
        y1="100"
        y2="100"
        stroke="var(--signal)"
        strokeWidth="1"
        strokeDasharray="2 4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      />
      <motion.text
        x="600"
        y="92"
        textAnchor="end"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fill="var(--signal)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4 }}
      >
        ±2% STABLE
      </motion.text>
    </svg>
  );
}
