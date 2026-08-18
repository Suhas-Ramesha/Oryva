"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

export type Step = {
  index: string;
  title: string;
  body: string;
};

/** Vertical connected stepper with scroll-driven rail fill. */
export function ScrollSteps({
  steps,
  className,
}: {
  steps: Step[];
  className?: string;
}) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <div className={cn("relative", className)}>
      <ol className="space-y-7 sm:space-y-10">
        {steps.map((step, i) => (
          <StepRow
            key={step.index}
            step={step}
            reducedMotion={reducedMotion}
            delay={i * 0.08}
          />
        ))}
      </ol>
    </div>
  );
}

function StepRow({
  step,
  reducedMotion,
  delay,
}: {
  step: Step;
  reducedMotion: boolean;
  delay: number;
}) {
  const ref = React.useRef<HTMLLIElement>(null);
  const active = useInView(ref, { amount: 0.6, margin: "-10% 0px -30% 0px" });

  return (
    <motion.li
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-[1.6rem] border bg-[#050608] p-7 transition duration-500 sm:p-14",
        active
          ? "border-[#67b7ff] shadow-[0_22px_70px_-52px_rgba(80,170,255,0.9)]"
          : "border-[#278de7]"
      )}
      initial={reducedMotion ? false : { opacity: 0, y: 34, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5, margin: "-6% 0px -12% 0px" }}
      transition={{ duration: reducedMotion ? 0 : 0.58, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-y-0 left-0 w-1 bg-[#67b7ff]"
        initial={reducedMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.65 }}
        transition={{ duration: reducedMotion ? 0 : 0.52, delay: delay + 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "top" }}
      />
      <h3 className="font-display text-4xl leading-tight tracking-[-0.05em] text-white sm:text-6xl">
        {step.title}
      </h3>
      <p className="mt-8 max-w-3xl text-pretty text-base font-medium leading-snug text-[#b8bdc7] sm:text-2xl">
        {step.body}
      </p>
    </motion.li>
  );
}
