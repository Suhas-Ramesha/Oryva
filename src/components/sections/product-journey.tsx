"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type JourneyStep = {
  index: string;
  title: string;
  body: string;
};

export function ProductJourney({
  steps,
  className,
}: {
  steps: JourneyStep[];
  className?: string;
}) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <ol className={cn("grid gap-5 md:grid-cols-3 md:gap-6", className)}>
      {steps.map((step, index) => (
        <motion.li
          key={step.index}
          className="group relative overflow-hidden rounded-2xl border border-hairline bg-paper p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_20px_44px_-28px_rgba(110,168,255,0.65)] sm:p-7"
          initial={reducedMotion ? false : { opacity: 0, y: 26, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4, margin: "-8% 0px -10% 0px" }}
          transition={{
            duration: reducedMotion ? 0 : 0.55,
            ease: [0.16, 1, 0.3, 1],
            delay: reducedMotion ? 0 : index * 0.1,
          }}
        >
          <span className="font-label text-sm font-medium tracking-[0.22em] text-signal">
            {step.index}
          </span>
          <h3 className="mt-3 font-display text-xl leading-tight text-ink sm:text-2xl">
            {step.title}
          </h3>
          <p className="mt-3 text-pretty leading-relaxed text-muted">{step.body}</p>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-bright to-transparent transition-transform duration-500 group-hover:scale-x-100"
          />
        </motion.li>
      ))}
    </ol>
  );
}
