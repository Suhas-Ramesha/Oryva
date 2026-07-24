"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

/**
 * App-wide smooth scrolling + motion config. Lenis no-ops under
 * prefers-reduced-motion, and MotionConfig reducedMotion="user" makes every
 * framer-motion animation honor the same user preference.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
