"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function Counter({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const numeric = parseFloat(value);
  const isNumeric = !Number.isNaN(numeric);
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;

  useEffect(() => {
    if (!inView) return;
    if (!isNumeric) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, isNumeric, numeric, decimals, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </motion.span>
  );
}
