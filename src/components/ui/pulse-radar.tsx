"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function PulseRadar() {
  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full border border-signal/40"
          initial={{ scale: 0.4, opacity: 0.6 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut",
          }}
        />
      ))}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-hairline-strong bg-paper-2">
        <Sparkles className="h-6 w-6 text-signal" strokeWidth={1.5} />
      </div>
    </div>
  );
}
