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
        className="absolute inset-0 rounded-3xl border border-hairline bg-paper-3"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute inset-5 rounded-2xl border border-hairline bg-paper-2 shadow-[0_24px_64px_-28px_rgba(0,0,0,0.75)]"
      />

      <div className="absolute inset-5 flex flex-col rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-hairline-strong" />
            <span className="h-2 w-2 rounded-full bg-hairline-strong" />
            <span className="h-2 w-2 rounded-full bg-signal" />
          </div>
          <span className="font-[family-name:var(--font-label)] text-[10px] uppercase tracking-[0.18em] text-muted-2">
            Preview
          </span>
        </div>

        <div className="mt-8 flex flex-1 items-end justify-between gap-2">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-full bg-gradient-to-t from-brand/25 via-brand to-brand-bright"
            />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 border-t border-hairline pt-5">
          <Sparkles className="h-4 w-4 text-signal" strokeWidth={1.5} aria-hidden />
          <span className="font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.18em] text-muted-2">
            In development
          </span>
        </div>
      </div>
    </div>
  );
}
