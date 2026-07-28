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

export type Principle = {
  title: string;
  body: string;
};

export function AboutPrinciples({
  principles,
  className,
}: {
  principles: Principle[];
  className?: string;
}) {
  const reducedMotion = useReducedMotion() ?? false;
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 80%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });
  const scaleY = useTransform(fill, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div
        aria-hidden
        className="absolute bottom-8 top-8 left-[14px] w-px bg-hairline sm:left-[18px]"
      >
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-gradient-to-b from-brand-bright to-brand"
          style={{ scaleY: reducedMotion ? 1 : scaleY }}
        />
      </div>

      <ol className="space-y-8 sm:space-y-10">
        {principles.map((principle, index) => (
          <PrincipleRow
            key={principle.title}
            principle={principle}
            order={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </ol>
    </div>
  );
}

function PrincipleRow({
  principle,
  order,
  reducedMotion,
}: {
  principle: Principle;
  order: number;
  reducedMotion: boolean;
}) {
  const ref = React.useRef<HTMLLIElement>(null);
  const active = useInView(ref, { amount: 0.7, margin: "-10% 0px -35% 0px" });

  return (
    <motion.li
      ref={ref}
      className="group relative grid grid-cols-[2.25rem_1fr] gap-5 sm:grid-cols-[2.75rem_1fr] sm:gap-8"
      initial={reducedMotion ? false : { opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5, margin: "-6% 0px -12% 0px" }}
      transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex justify-start">
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
          {String(order + 1).padStart(2, "0")}
        </motion.span>
      </div>
      <div className="pb-2">
        <h3
          className={cn(
            "font-display text-2xl leading-tight transition-colors duration-300 sm:text-3xl",
            active ? "text-ink" : "text-ink-soft"
          )}
        >
          {principle.title}
        </h3>
        <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted">
          {principle.body}
        </p>
      </div>
    </motion.li>
  );
}
