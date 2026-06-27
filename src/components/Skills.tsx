import { skills } from "@/data/resume";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-8 py-24 md:py-32 tape-edge">
      <div className="max-w-[var(--container)] mx-auto">
        <Reveal>
          <p className="label-eyebrow mb-4">03 — Skills</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-xl">
            Toolchain
          </h2>
        </Reveal>

        <div className="mt-12 border border-[var(--surface-border)] rounded-md overflow-hidden">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <div
                className={`grid md:grid-cols-[220px_1fr] gap-x-8 px-6 md:px-8 py-6 ${
                  i !== 0 ? "border-t border-[var(--surface-border)]" : ""
                }`}
              >
                <div className="font-mono-trace text-xs uppercase tracking-wider text-signal">
                  {group.group}
                </div>
                <div className="mt-2 md:mt-0 flex flex-wrap gap-x-6 gap-y-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-[var(--ink-dim)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
