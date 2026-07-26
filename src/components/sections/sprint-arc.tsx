"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

export type SprintStep = {
  index: string;
  title: string;
  body: string;
};

export function SprintArc({
  steps,
  className,
}: {
  steps: SprintStep[];
  className?: string;
}) {
  const reducedMotion = useReducedMotion() ?? false;
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 35%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });
  const pathLength = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className={cn("relative", className)}>
      <div className="relative hidden min-h-[28rem] lg:block" aria-hidden>
        <svg
          viewBox="0 0 1000 420"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <path
            d="M80 300 C 220 80, 380 80, 500 210 S 780 340, 920 140"
            stroke="rgba(95,104,120,0.45)"
            strokeWidth="2"
          />
          <motion.path
            d="M80 300 C 220 80, 380 80, 500 210 S 780 340, 920 140"
            stroke="rgba(110,168,255,0.95)"
            strokeWidth="2.5"
            style={{ pathLength: reducedMotion ? 1 : pathLength }}
          />
          <path
            d="M920 140 C 860 70, 760 90, 700 150"
            stroke="rgba(110,168,255,0.55)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      <ol className="relative grid gap-5 sm:grid-cols-2 lg:mt-[-22rem] lg:grid-cols-5 lg:gap-4">
        {steps.map((step, index) => (
          <SprintNode
            key={step.index}
            step={step}
            index={index}
            total={steps.length}
            progress={progress}
            reducedMotion={reducedMotion}
          />
        ))}
      </ol>
    </section>
  );
}

function SprintNode({
  step,
  index,
  total,
  progress,
  reducedMotion,
}: {
  step: SprintStep;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
}) {
  const start = index / total;
  const end = (index + 0.8) / total;
  const opacity = useTransform(progress, [start, end], [0.4, 1]);
  const y = useTransform(progress, [start, end], [18, 0]);

  return (
    <motion.li
      className={cn(
        "rounded-2xl border border-hairline bg-paper p-5 sm:p-6",
        index % 2 === 1 ? "sm:translate-y-6 lg:translate-y-10" : ""
      )}
      style={
        reducedMotion
          ? undefined
          : {
              opacity,
              y,
            }
      }
    >
      <span className="font-label text-sm font-medium tracking-[0.22em] text-signal">
        {step.index}
      </span>
      <h3 className="mt-3 font-display text-xl leading-tight text-ink">
        {step.title}
      </h3>
      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted sm:text-base">
        {step.body}
      </p>
    </motion.li>
  );
}
