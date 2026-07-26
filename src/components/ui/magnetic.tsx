"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subtle magnetic pull toward the cursor. The offset is clamped to `max`
 * pixels so the element never runs away from the pointer (which made the
 * button hard to click), and it is disabled for touch / coarse pointers.
 */
export function Magnetic({
  children,
  strength = 0.18,
  max = 10,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  max?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 });

  const clamp = (value: number) => Math.max(-max, Math.min(max, value));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    // Only pull for precise pointers (mouse/trackpad).
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(clamp(offsetX * strength));
    y.set(clamp(offsetY * strength));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
