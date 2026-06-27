"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--surface-border)]" : ""
      }`}
    >
      <nav className="max-w-[var(--container)] mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono-trace text-sm text-[var(--ink)] tracking-tight"
        >
          M<span className="text-signal">.</span>PRAKASH
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-[var(--ink-dim)] hover:text-[var(--ink)] transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center font-mono-trace text-xs uppercase tracking-wider px-4 py-2 border border-[var(--signal-dim)] text-signal hover:bg-[var(--signal-soft)] transition-colors rounded-sm"
          >
            Get in touch
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[var(--ink)] p-2"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-[var(--bg)] border-b border-[var(--surface-border)] px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="text-base text-[var(--ink-dim)]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
