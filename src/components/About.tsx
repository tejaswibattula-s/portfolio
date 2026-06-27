import { stats } from "@/data/resume";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-8 py-24 md:py-32 tape-edge">
      <div className="max-w-[var(--container)] mx-auto grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-start">
        <Reveal>
          <p className="label-eyebrow mb-4">01 — About</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            Hardware that has to work the first time.
          </h2>
          <p className="mt-6 text-[var(--ink-dim)] leading-relaxed">
            Prakash works at the layer where electronics meets the real
            world — sensors, power grids, and embedded boards that don&apos;t
            get to fail quietly. His focus is narrowing toward{" "}
            <span className="text-[var(--ink)] font-medium">VLSI design</span>{" "}
            and{" "}
            <span className="text-[var(--ink)] font-medium">
              embedded systems
            </span>
            , built on a foundation of shipped IoT and power-systems projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["VLSI", "Embedded", "IoT", "Hardware", "Power Systems"].map(
              (tag) => (
                <span
                  key={tag}
                  className="font-mono-trace text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-sm border border-[var(--surface-border)] text-[var(--ink-dim)]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-px bg-[var(--surface-border)] rounded-md overflow-hidden">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[var(--bg-elevated)] p-6 md:p-8"
            >
              <div className="font-mono-trace text-3xl md:text-4xl text-signal font-medium">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-[var(--muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
