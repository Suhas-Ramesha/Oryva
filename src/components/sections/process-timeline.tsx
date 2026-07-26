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

export type ProcessStep = {
  index: string;
  title: string;
  body: string;
};

export function ProcessTimeline({
  steps,
  className,
}: {
  steps: ProcessStep[];
  className?: string;
}) {
  const reducedMotion = useReducedMotion() ?? false;
  const sectionRef = React.useRef<HTMLElement>(null);
  const [active, setActive] = React.useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 35%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });
  const railScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className={cn("relative", className)}
      aria-label="Product process timeline"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(12rem,0.35fr)_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex gap-5">
            <div className="relative hidden w-px bg-hairline lg:block" aria-hidden>
              <motion.div
                className="absolute inset-x-0 top-0 origin-top bg-brand-bright"
                style={{
                  scaleY: reducedMotion ? 1 : railScale,
                  width: 2,
                  left: -0.5,
                }}
              />
            </div>
            <div>
              <p className="font-label text-xs font-medium tracking-[0.22em] text-signal">
                ACTIVE STAGE
              </p>
              <p className="mt-3 font-display text-2xl leading-tight text-ink">
                {steps[active]?.title}
              </p>
              <p className="mt-2 font-label text-sm tracking-[0.18em] text-muted">
                {steps[active]?.index} / {String(steps.length).padStart(2, "0")}
              </p>
              <ol className="mt-6 space-y-2">
                {steps.map((step, index) => (
                  <li key={step.index}>
                    <button
                      type="button"
                      onClick={() => {
                        document
                          .getElementById(`process-step-${step.index}`)
                          ?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
                        setActive(index);
                      }}
                      className={cn(
                        "w-full rounded-lg px-3 py-2 text-left font-label text-sm tracking-tight transition-colors",
                        index === active
                          ? "bg-paper text-ink"
                          : "text-muted hover:text-ink"
                      )}
                      aria-current={index === active ? "step" : undefined}
                    >
                      {step.index} {step.title}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <ol className="space-y-8">
          {steps.map((step, index) => (
            <ProcessArticle
              key={step.index}
              step={step}
              index={index}
              setActive={setActive}
              reducedMotion={reducedMotion}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessArticle({
  step,
  index,
  setActive,
  reducedMotion,
}: {
  step: ProcessStep;
  index: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  reducedMotion: boolean;
}) {
  const ref = React.useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { amount: 0.55, margin: "-15% 0px -25% 0px" });

  React.useEffect(() => {
    if (inView) setActive(index);
  }, [inView, index, setActive]);

  return (
    <motion.li
      id={`process-step-${step.index}`}
      ref={ref}
      className="min-h-[55vh] rounded-3xl border border-hairline bg-paper p-7 sm:p-9"
      initial={reducedMotion ? false : { opacity: 0.4, y: 24 }}
      animate={
        inView || reducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0.55, y: 12 }
      }
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      aria-current={inView ? "step" : undefined}
    >
      <span className="font-label text-sm font-medium tracking-[0.22em] text-signal">
        {step.index}
      </span>
      <h3 className="mt-4 font-display text-3xl leading-tight text-ink">
        {step.title}
      </h3>
      <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
        {step.body}
      </p>
      <p className="mt-6 font-label text-xs tracking-[0.18em] text-muted-2">
        STAGE {index + 1}
      </p>
    </motion.li>
  );
}
