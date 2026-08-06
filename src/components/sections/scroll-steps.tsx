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

/** Vertical connected stepper with scroll-driven rail fill. */
export function ScrollSteps({
  steps,
  className,
}: {
  steps: Step[];
  className?: string;
}) {
  const reducedMotion = useReducedMotion() ?? false;
  const ref = React.useRef<HTMLDivElement>(null);
  const firstNodeRef = React.useRef<HTMLSpanElement>(null);
  const lastNodeRef = React.useRef<HTMLSpanElement>(null);
  const [railStyle, setRailStyle] = React.useState({ top: 15, height: 0 });
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

  React.useEffect(() => {
    const container = ref.current;
    const firstNode = firstNodeRef.current;
    const lastNode = lastNodeRef.current;
    if (!container || !firstNode || !lastNode) return;
    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      const firstRect = firstNode.getBoundingClientRect();
      const lastRect = lastNode.getBoundingClientRect();
      const firstCenter = firstRect.top + firstRect.height / 2 - containerRect.top;
      const lastCenter = lastRect.top + lastRect.height / 2 - containerRect.top;
      setRailStyle({ top: firstCenter, height: lastCenter - firstCenter });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Rail */}
      <div
        aria-hidden
        className="absolute left-[17px] w-px bg-hairline sm:left-[21px]"
        style={{ top: railStyle.top, height: railStyle.height }}
      >
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-gradient-to-b from-brand-bright to-brand"
          style={{ scaleY: reducedMotion ? 1 : scaleY }}
        />
      </div>

      <ol className="space-y-6 sm:space-y-8">
        {steps.map((step, i) => (
          <StepRow
            key={step.index}
            step={step}
            reducedMotion={reducedMotion}
            nodeRef={i === 0 ? firstNodeRef : i === steps.length - 1 ? lastNodeRef : undefined}
          />
        ))}
      </ol>
    </div>
  );
}

function StepRow({
  step,
  reducedMotion,
  nodeRef,
}: {
  step: Step;
  reducedMotion: boolean;
  nodeRef?: React.RefObject<HTMLSpanElement | null>;
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
          ref={nodeRef}
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
