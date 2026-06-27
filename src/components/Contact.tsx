"use client";

import { Mail, MapPin, Phone, Link2, FolderGit2 } from "lucide-react";
import { profile } from "@/data/resume";
import Reveal from "./Reveal";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${name || "—"}`
  )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`)}`;

  return (
    <section id="contact" className="px-6 md:px-8 py-24 md:py-32 tape-edge">
      <div className="max-w-[var(--container)] mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
        <Reveal>
          <p className="label-eyebrow mb-4">05 — Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Let&apos;s talk hardware.
          </h2>
          <p className="mt-5 text-[var(--ink-dim)] leading-relaxed max-w-md">
            Open to roles and collaborations in VLSI, embedded systems, and
            IoT. The fastest way to reach me is email.
          </p>

          <div className="mt-8 space-y-4 font-mono-trace text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-[var(--ink-dim)] hover:text-signal transition-colors"
            >
              <Mail size={16} className="text-signal" /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-[var(--ink-dim)] hover:text-signal transition-colors"
            >
              <Phone size={16} className="text-signal" /> {profile.phone}
            </a>
            <div className="flex items-center gap-3 text-[var(--ink-dim)]">
              <MapPin size={16} className="text-signal" /> {profile.location}
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[var(--ink-dim)] hover:text-signal transition-colors"
            >
              <Link2 size={16} className="text-signal" /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[var(--ink-dim)] hover:text-signal transition-colors"
            >
              <FolderGit2 size={16} className="text-signal" /> GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-[var(--surface-border)] rounded-md p-6 md:p-8 bg-[var(--bg-elevated)]/40">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="font-mono-trace text-[11px] uppercase tracking-wide text-[var(--muted)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full bg-transparent border border-[var(--surface-border)] rounded-sm px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--signal)] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-mono-trace text-[11px] uppercase tracking-wide text-[var(--muted)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full bg-transparent border border-[var(--surface-border)] rounded-sm px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--signal)] outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-mono-trace text-[11px] uppercase tracking-wide text-[var(--muted)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-2 w-full bg-transparent border border-[var(--surface-border)] rounded-sm px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--signal)] outline-none transition-colors resize-none"
                  placeholder="What are you building?"
                />
              </div>
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[var(--signal)] text-[#06120a] text-sm font-medium rounded-sm hover:bg-[var(--signal-dim)] transition-colors"
              >
                Open in email client
              </a>
              <p className="font-mono-trace text-[10px] text-[var(--muted)] leading-relaxed">
                This opens your email app with the message pre-filled — no
                data is sent from this page.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
