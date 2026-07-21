"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const BARS = [38, 62, 45, 78, 54, 90, 68];

export function ProductMockup() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-3xl border border-border-subtle bg-surface"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute inset-5 rounded-2xl border border-border-subtle bg-surface-2/80 backdrop-blur-sm"
      />

      <div className="absolute inset-5 flex flex-col rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-border-strong" />
            <span className="h-2 w-2 rounded-full bg-border-strong" />
            <span className="h-2 w-2 rounded-full bg-accent-bright" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-2">
            Preview
          </span>
        </div>

        <div className="mt-8 flex flex-1 items-end justify-between gap-2">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-full bg-gradient-to-t from-accent/40 to-accent-bright/80"
            />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 border-t border-border-subtle pt-5">
          <Sparkles className="h-4 w-4 text-accent-bright" strokeWidth={1.5} />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2">
            Currently Building
          </span>
        </div>
      </div>
    </div>
  );
}
