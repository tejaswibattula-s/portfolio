import { projects } from "@/data/resume";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-8 py-24 md:py-32 tape-edge">
      <div className="max-w-[var(--container)] mx-auto">
        <Reveal>
          <p className="label-eyebrow mb-4">02 — Projects</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-xl">
            Four builds, one thread: systems that monitor and react in real time.
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
