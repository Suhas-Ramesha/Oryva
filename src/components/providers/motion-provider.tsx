"use client";

import { MotionConfig } from "framer-motion";

/**
 * Kept as the app-wide motion wrapper. Smooth scrolling now stays native so
 * wheel and trackpad movement can settle cleanly at the page bottom.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
