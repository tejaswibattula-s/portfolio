import { achievement } from "@/data/resume";
import Reveal from "./Reveal";

export default function Achievement() {
  return (
    <section className="px-6 md:px-8 py-20 tape-edge">
      <div className="max-w-[var(--container)] mx-auto">
        <Reveal>
          <div className="relative border border-[var(--signal-dim)] rounded-md p-8 md:p-12 bg-[linear-gradient(135deg,var(--signal-soft),transparent_60%)] overflow-hidden">
            <div className="absolute top-0 right-0 font-mono-trace text-[10px] text-signal/60 p-4">
              FINAL // VERIFIED
            </div>
            <p className="label-eyebrow mb-3">Achievement</p>
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
              {achievement.title}
            </h3>
            <p className="mt-1 text-lg text-signal font-medium">
              {achievement.subtitle}
            </p>
            <ul className="mt-6 space-y-2 max-w-xl">
              {achievement.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-[var(--ink-dim)] text-sm md:text-base leading-relaxed"
                >
                  <span className="text-signal mt-1">▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
