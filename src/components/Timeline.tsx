import { education, trajectory, certifications } from "@/data/resume";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section id="timeline" className="px-6 md:px-8 py-24 md:py-32 tape-edge">
      <div className="max-w-[var(--container)] mx-auto">
        <Reveal>
          <p className="label-eyebrow mb-4">04 — Timeline</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-xl">
            Where this is headed
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Education timeline */}
          <Reveal delay={0.05}>
            <h3 className="font-mono-trace text-xs uppercase tracking-wider text-[var(--muted)] mb-6">
              Education
            </h3>
            <ol className="relative border-l border-[var(--surface-border)] ml-1">
              {education.map((e) => (
                <li key={e.school} className="ml-6 pb-8 last:pb-0">
                  <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-[var(--signal)]" />
                  <div className="font-mono-trace text-[11px] text-signal">
                    {e.period}
                  </div>
                  <div className="mt-1 font-semibold text-[var(--ink)]">
                    {e.school}
                  </div>
                  <div className="text-sm text-[var(--ink-dim)]">
                    {e.place}
                  </div>
                  <div className="mt-1 text-sm text-[var(--ink-dim)]">
                    {e.detail}
                  </div>
                  <div className="mt-1 font-mono-trace text-xs text-[var(--muted)]">
                    {e.metric}
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="font-mono-trace text-xs uppercase tracking-wider text-[var(--muted)] mt-10 mb-4">
              Certifications &amp; activities
            </h3>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c.name} className="flex justify-between text-sm gap-4">
                  <span className="text-[var(--ink-dim)]">{c.name}</span>
                  <span className="font-mono-trace text-xs text-[var(--muted)] text-right whitespace-nowrap">
                    {c.org}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Currently learning / future goals roadmap */}
          <Reveal delay={0.1}>
            <h3 className="font-mono-trace text-xs uppercase tracking-wider text-[var(--muted)] mb-6">
              Currently learning
            </h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {trajectory.learning.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-sm text-sm bg-[var(--signal-soft)] text-signal border border-[var(--signal-dim)]/40"
                >
                  {t}
                </span>
              ))}
            </div>

            <h3 className="font-mono-trace text-xs uppercase tracking-wider text-[var(--muted)] mb-6">
              Future goals
            </h3>
            <div className="flex flex-wrap gap-2">
              {trajectory.goals.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-sm text-sm border border-[var(--surface-border)] text-[var(--ink-dim)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
