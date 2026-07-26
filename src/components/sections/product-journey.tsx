"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 40%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className={cn("relative", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-hairline md:left-1/2 md:block md:-translate-x-1/2 md:w-full md:max-w-none md:bg-transparent"
      >
        <div className="relative mx-auto hidden h-px w-full max-w-4xl bg-hairline md:block">
          <motion.div
            className="absolute inset-y-0 left-0 origin-left bg-brand-bright"
            style={{ scaleX: reducedMotion ? 1 : lineScale }}
          />
        </div>
        <motion.div
          className="absolute inset-x-0 top-0 origin-top bg-brand-bright md:hidden"
          style={{ scaleY: reducedMotion ? 1 : lineScale, width: 2 }}
        />
      </div>

      <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
        {steps.map((step, index) => {
          const start = index / steps.length;
          const end = (index + 0.85) / steps.length;
          return (
            <JourneyNode
              key={step.index}
              step={step}
              progress={progress}
              start={start}
              end={end}
              reducedMotion={reducedMotion}
            />
          );
        })}
      </ol>
    </section>
  );
}

function JourneyNode({
  step,
  progress,
  start,
  end,
  reducedMotion,
}: {
  step: JourneyStep;
  progress: ReturnType<typeof useSpring>;
  start: number;
  end: number;
  reducedMotion: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0.45, 1]);
  const border = useTransform(
    progress,
    [start, end],
    ["rgba(95,104,120,0.55)", "rgba(110,168,255,0.9)"]
  );

  return (
    <motion.li
      className="relative rounded-2xl border bg-paper p-6 sm:p-7"
      style={
        reducedMotion
          ? undefined
          : {
              opacity,
              borderColor: border,
            }
      }
    >
      <span className="font-label text-sm font-medium tracking-[0.22em] text-signal">
        {step.index}
      </span>
      <h3 className="mt-3 font-display text-xl leading-tight text-ink sm:text-2xl">
        {step.title}
      </h3>
      <p className="mt-3 text-pretty leading-relaxed text-muted">{step.body}</p>
    </motion.li>
  );
}
