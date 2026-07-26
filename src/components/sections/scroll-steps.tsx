"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export type Step = {
  index: string;
  title: string;
  body: string;
};

/**
 * Vertical connected stepper. A brand-coloured rail fills top-to-bottom as the
 * section scrolls (pointing you to the next step); each step pops in on entry
 * and its node lights up when reached. Mobile-friendly (no sticky panel, no
 * viewport-height cards).
 */
export function ScrollSteps({
  steps,
  className,
}: {
  steps: Step[];
  className?: string;
}) {
  const reducedMotion = useReducedMotion() ?? false;
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 75%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });
  const scaleY = useTransform(fill, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Rail */}
      <div
        aria-hidden
        className="absolute bottom-6 top-6 left-[17px] w-px bg-hairline sm:left-[21px]"
      >
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-gradient-to-b from-brand-bright to-brand"
          style={{ scaleY: reducedMotion ? 1 : scaleY }}
        />
      </div>

      <ol className="space-y-6 sm:space-y-8">
        {steps.map((step) => (
          <StepRow key={step.index} step={step} reducedMotion={reducedMotion} />
        ))}
      </ol>
    </div>
  );
}

function StepRow({
  step,
  reducedMotion,
}: {
  step: Step;
  reducedMotion: boolean;
}) {
  const ref = React.useRef<HTMLLIElement>(null);
  const active = useInView(ref, { amount: 0.6, margin: "-10% 0px -30% 0px" });

  return (
    <motion.li
      ref={ref}
      className="relative grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6"
      initial={reducedMotion ? false : { opacity: 0, y: 26, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5, margin: "-6% 0px -12% 0px" }}
      transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex justify-center">
        <motion.span
          className={cn(
            "relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-paper font-label text-[11px] font-medium transition-colors duration-300 sm:h-[38px] sm:w-[38px] sm:text-xs",
            active
              ? "border-brand text-brand-bright shadow-[0_0_0_4px_var(--brand-dim)]"
              : "border-hairline-strong text-muted"
          )}
          initial={reducedMotion ? false : { scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 340, damping: 18 }}
        >
          {step.index}
        </motion.span>
      </div>

      <div
        className={cn(
          "rounded-2xl border bg-paper p-5 transition-colors duration-300 sm:p-6",
          active ? "border-brand/40" : "border-hairline"
        )}
      >
        <h3 className="font-display text-xl leading-tight text-ink sm:text-2xl">
          {step.title}
        </h3>
        <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted">
          {step.body}
        </p>
      </div>
    </motion.li>
  );
}
