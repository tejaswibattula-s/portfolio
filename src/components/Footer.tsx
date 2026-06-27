import { profile } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg)] border-t border-[var(--surface-border)] pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      
      {/* Top small text */}
      <div className="max-w-[var(--container)] mx-auto relative z-10">
        <p className="label-eyebrow mb-2 text-[var(--ink-dim)]">HAVE A PROJECT IN MIND?</p>
      </div>

      {/* Huge text */}
      <div className="max-w-[var(--container)] mx-auto relative z-10 flex justify-center py-10 md:py-16">
        <h2 
          className="text-[clamp(4rem,15vw,13rem)] font-bold tracking-tighter leading-none text-center select-none text-[var(--ink)] opacity-10"
        >
          PRAKASH
        </h2>
      </div>

      {/* Bottom section */}
      <div className="max-w-[var(--container)] mx-auto relative z-10 mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Pills */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--surface-border)] text-sm font-medium text-[var(--ink-dim)] hover:text-[var(--ink)] hover:border-[var(--muted)] transition-colors"
          >
            GITHUB
            <ArrowUpRight size={14} className="opacity-50" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--surface-border)] text-sm font-medium text-[var(--ink-dim)] hover:text-[var(--ink)] hover:border-[var(--muted)] transition-colors"
          >
            LINKEDIN
            <ArrowUpRight size={14} className="opacity-50" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--surface-border)] text-sm font-medium text-[var(--ink-dim)] hover:text-[var(--ink)] hover:border-[var(--muted)] transition-colors"
          >
            EMAIL
            <ArrowUpRight size={14} className="opacity-50" />
          </a>
        </div>

        {/* Credits */}
        <div className="text-right text-xs md:text-sm text-[var(--muted)] flex flex-col gap-1">
          <p>Designed & Developed by</p>
          <p className="font-mono-trace text-[var(--ink-dim)]">Matte Siva Sai Prakash</p>
        </div>
        
      </div>
    </footer>
  );
}
