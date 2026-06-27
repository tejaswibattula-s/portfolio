"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IMAGES = [
  {
    src: "/sih-1.jpg",
    alt: "SIH 2025 Grand Finale Joint Winner Cheque",
    caption: "Our team, Eco-Grid Innovators, proudly receiving the joint winner prize of ₹75,000 for our hardware solution.",
  },
  {
    src: "/sih-2.jpg",
    alt: "Individual Winner Photo",
    caption: "Holding the winner's cheque and certificate at the grand finale. A defining moment in my hardware engineering journey.",
  },
  {
    src: "/sih-3.jpg",
    alt: "SIH 2025 Badge and Hoodie",
    caption: "Representing SRKR Engineering College at the national level. The atmosphere at the grand finale was incredible.",
  },
  {
    src: "/sih-4.jpg",
    alt: "Close up of the winning cheque",
    caption: "Hack for BHARAT, Build for the World. The official joint winner cheque presented by the Ministry of Education and AICTE.",
  },
];

export default function SIHSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!container || !track || !progress) return;

    // Bulletproof GSAP horizontal scroll logic
    // Moves track by -100% of its own width, plus 1 window width back to the right.
    // This perfectly aligns the right edge of the track with the right edge of the screen!
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=3000", // Massive scroll area so it feels buttery smooth
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(track, {
      xPercent: -100,
      x: () => window.innerWidth,
      ease: "none",
    }, 0);

    tl.to(progress, {
      scaleX: 1,
      ease: "none",
    }, 0);

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="sih-win" className="relative bg-[var(--bg)] h-screen overflow-hidden flex flex-col justify-center border-b border-[var(--surface-border)]">
      
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[var(--surface-border)] z-50">
        <div ref={progressRef} className="h-full bg-[var(--signal)] origin-left scale-x-0" />
      </div>

      {/* Title Block - Fixed position inside the pinned container */}
      <div className="absolute top-12 md:top-20 left-6 md:left-12 z-10 pointer-events-none">
        <p className="label-eyebrow mb-2">National Achievement</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--ink)]">
          Smart India Hackathon 2025 <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--signal)] to-[var(--amber)]">Grand Finale Winner</span>
        </h2>
      </div>

      {/* The massive horizontal track */}
      <div ref={trackRef} className="flex flex-nowrap items-center w-max h-full pt-40 md:pt-48 px-6 md:px-12 pb-24 gap-12 md:gap-24">
        
        {/* Intro Card */}
        <div className="w-[85vw] md:w-[500px] shrink-0 h-[400px] md:h-[500px] flex flex-col justify-center p-8 md:p-12 rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)]/50 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--signal)] to-transparent opacity-50" />
          <p className="text-xl md:text-2xl text-[var(--ink)] font-medium leading-relaxed mb-6">
            Our team, <span className="text-[var(--signal)]">Eco-Grid Innovators</span>, emerged as Joint Winners in the highly competitive Hardware Edition of SIH 2025.
          </p>
          <p className="text-[var(--ink-dim)] leading-relaxed">
            We engineered a robust real-time hardware solution that was recognized by the Ministry of Education and AICTE, securing a prize of ₹75,000. This journey tested our limits in embedded systems and rapid prototyping.
          </p>
          <div className="mt-auto flex items-center gap-4 text-[var(--muted)] font-mono-trace text-sm uppercase tracking-widest">
            <span>Scroll to explore</span>
            <span className="w-12 h-[1px] bg-[var(--surface-border)] relative overflow-hidden">
              <span className="absolute inset-0 bg-[var(--signal)] w-full animate-pulse" />
            </span>
          </div>
        </div>

        {/* Gallery Images */}
        {IMAGES.map((img, index) => (
          <div key={index} className="w-[85vw] md:w-[60vw] max-w-[800px] shrink-0 flex flex-col gap-6">
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-[var(--surface-border)] shadow-2xl bg-[#06120a] group">
              
              {/* Fallback Text if image isn't placed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--muted)] z-0 p-8 text-center bg-[var(--bg-elevated)]">
                <p className="font-mono-trace text-xs mb-2">IMAGE PLACEHOLDER</p>
                <p className="text-sm">Please place <strong className="text-[var(--signal)]">{img.src}</strong> in your public folder.</p>
              </div>

              {/* Uncomment this when images are in public folder */}
              {/* <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105 z-10"
              /> */}

              {/* Number Badge */}
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center font-mono-trace text-white text-sm z-20 shadow-xl">
                0{index + 1}
              </div>
            </div>
            
            {/* Caption */}
            <div className="flex gap-6 items-start pl-4 md:pl-8 border-l-2 border-[var(--surface-border)]">
              <p className="text-base md:text-lg text-[var(--ink-dim)] leading-relaxed max-w-2xl">
                {img.caption}
              </p>
            </div>
          </div>
        ))}

        {/* Outro Card */}
        <div className="w-[50vw] md:w-[400px] shrink-0 h-[400px] flex flex-col justify-center items-center text-center">
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-[var(--surface-border)] flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[var(--signal-soft)] flex items-center justify-center">
              <span className="text-[var(--signal)] font-mono-trace text-xl">✓</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-[var(--ink)] mb-2">Hack for BHARAT</h3>
          <p className="text-[var(--ink-dim)]">Build for the World.</p>
        </div>

      </div>
    </section>
  );
}
