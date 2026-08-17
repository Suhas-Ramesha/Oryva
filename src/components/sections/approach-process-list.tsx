"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

export type ApproachProcessStep = {
  title: string;
  body: string;
};

function ProcessCard({
  step,
  index,
  progress,
}: {
  step: ApproachProcessStep;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * 0.2;
  const end = start + 0.2;
  const opacity = useTransform(progress, [Math.max(0, start - 0.08), end], [0, 1]);
  const y = useTransform(progress, [Math.max(0, start - 0.08), end], [34, 0]);
  const scale = useTransform(progress, [Math.max(0, start - 0.06), end], [0.985, 1]);

  return (
    <motion.article
      aria-label={`Step ${index + 1}: ${step.title}`}
      style={{ opacity, y, scale }}
      className="rounded-[14px] border border-[#3d9fff] bg-[#050608] px-6 py-9 shadow-[0_0_0_rgba(49,145,245,0)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#67b7ff] hover:shadow-[0_20px_44px_rgba(49,145,245,0.12)] sm:px-8"
    >
      <h3 className="font-display text-[25px] font-normal leading-tight text-white">
        {step.title}
      </h3>
      <p className="mt-5 max-w-[620px] text-[13px] leading-[1.2] text-[#c5c8d0] sm:text-[14px]">
        {step.body}
      </p>
    </motion.article>
  );
}

export function ApproachProcessList({ steps }: { steps: ApproachProcessStep[] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 46%"],
  });

  return (
    <div ref={ref} className="mt-9 space-y-7">
      {steps.map((step, index) => (
        <ProcessCard
          key={step.title}
          step={step}
          index={index}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}
