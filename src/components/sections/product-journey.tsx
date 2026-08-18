"use client";

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
    <ol className={cn("grid gap-5 md:grid-cols-3 md:gap-[47px]", className)}>
      {steps.map((step, index) => (
        <motion.li
          key={step.index}
          className="product-figma-journey group relative min-h-[310px] overflow-hidden rounded-[25px] border border-[#5aabff] bg-paper-2 p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#8ec3ff] hover:shadow-[0_20px_44px_-28px_rgba(90,171,255,0.75)] sm:min-h-[350px] sm:p-8 lg:min-h-[376px] lg:p-[29px]"
          initial={reducedMotion ? false : { opacity: 0, y: 26, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35, margin: "-8% 0px -10% 0px" }}
          transition={{ duration: reducedMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1], delay: reducedMotion ? 0 : index * 0.1 }}
        >
          <span className="font-label text-[20px] font-medium text-brand-bright lg:text-[25px]">{step.index}</span>
          <h3 className="mt-7 font-display text-[34px] leading-[1.08] tracking-[-0.035em] text-ink sm:text-[39px] lg:mt-8 lg:text-[42px] lg:leading-[1.28]">{step.title}</h3>
          <p className="mt-9 max-w-[353px] text-pretty text-[16px] leading-[1.35] text-muted sm:text-[17px] lg:mt-[38px] lg:text-[20px] lg:leading-6">{step.body}</p>
          <span aria-hidden className="product-figma-corner absolute right-5 top-4 h-[29px] w-[29px]" />
        </motion.li>
      ))}
    </ol>
  );
}
