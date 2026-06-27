# Matte Siva Sai Prakash — Portfolio

A personal portfolio site built around a circuit-board / signal-trace visual
language, fitting the subject's actual work in VLSI, embedded systems, and
power-grid IoT. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS,
and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Editing content

All resume content (projects, skills, education, achievements, contact info)
lives in one place: `src/data/resume.ts`. Edit that file to update the site —
no need to touch the components themselves for content changes.

## Structure

```
src/
  app/            Root layout, global styles, page composition
  components/      One file per section (Hero, Projects, Skills, etc.)
  data/resume.ts   All resume content, centralized
  types.ts         Shared TypeScript types
public/
  resume.pdf       Downloadable resume (linked from the hero section)
```

## Notes

- Fonts (Space Grotesk + JetBrains Mono) are self-hosted via `@fontsource`,
  so the site works fully offline with no external font requests.
- The contact form opens the visitor's email client with a pre-filled
  message (mailto link) — there's no backend, so nothing is transmitted
  from the page itself. Wire up a real backend (e.g. Resend, a serverless
  function) if you want in-page submission.
- Update the placeholder LinkedIn and GitHub URLs in `src/data/resume.ts`
  (`profile.linkedin`, `profile.github`) with the real ones.
