"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Radio, Activity, Wifi, Battery, Terminal, Settings, Server, Code, Plug } from "lucide-react";

const ICONS = [
  { Icon: Cpu, size: 48, top: "15%", left: "10%", delay: 0 },
  { Icon: Zap, size: 36, top: "25%", left: "85%", delay: 1.2 },
  { Icon: Radio, size: 40, top: "70%", left: "15%", delay: 2.5 },
  { Icon: Activity, size: 50, top: "60%", left: "80%", delay: 0.8 },
  { Icon: Wifi, size: 32, top: "40%", left: "90%", delay: 3 },
  { Icon: Cpu, size: 24, top: "80%", left: "50%", delay: 1.5 },
  
  // New icons
  { Icon: Battery, size: 42, top: "20%", left: "45%", delay: 2.1 },
  { Icon: Terminal, size: 38, top: "85%", left: "30%", delay: 3.5 },
  { Icon: Settings, size: 46, top: "45%", left: "5%", delay: 0.5 },
  { Icon: Server, size: 34, top: "10%", left: "70%", delay: 1.8 },
  { Icon: Code, size: 28, top: "50%", left: "75%", delay: 2.9 },
  { Icon: Plug, size: 36, top: "75%", left: "65%", delay: 1.1 },
];

export default function FloatingECEIcons() {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {ICONS.map(({ Icon, size, top, left, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-signal"
          style={{ top, left }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
