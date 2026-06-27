"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * The page's signature element: a horizontal trace, like a scope readout,
 * fixed under the navbar. It fills left-to-right with scroll progress and
 * the leading edge carries a small "pulse" — a stand-in for the live
 * voltage monitoring that runs through Prakash's actual work.
 */
export default function SignalTrace() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-[var(--surface-border)]"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-[var(--signal)] origin-left"
        style={{ scaleX: mounted ? scaleX : 0 }}
      />
    </div>
  );
}
