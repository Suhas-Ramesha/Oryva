"use client";

import { motion, useReducedMotion } from "framer-motion";
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

  return (
    <ol className={cn("divide-y divide-hairline border-y border-hairline", className)}>
      {principles.map((principle, index) => (
        <motion.li
          key={principle.title}
          className="group grid gap-4 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-8 sm:py-8"
          initial={reducedMotion ? false : { opacity: 0.45, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55, margin: "-10% 0px -25% 0px" }}
          transition={{
            duration: reducedMotion ? 0 : 0.55,
            ease: [0.16, 1, 0.3, 1],
            delay: reducedMotion ? 0 : index * 0.04,
          }}
        >
          <span className="font-label text-sm font-medium tracking-[0.22em] text-signal transition-colors group-[.opacity-100]:text-brand-bright">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
              {principle.title}
            </h3>
            <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted">
              {principle.body}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
