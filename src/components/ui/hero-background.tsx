"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { NetworkNodes } from "@/components/ui/network-nodes";

/**
 * Animated hero backdrop: a dotted grid + a self-drawing node graph that
 * parallax-drift and fade on scroll, with a brand glow that eases in and two
 * slow-floating blobs. Decorative, sits behind the hero content.
 */
export function HeroBackground() {
  const { scrollY } = useScroll();
  const yFar = useTransform(scrollY, [0, 800], [0, 160]);
  const yNear = useTransform(scrollY, [0, 800], [0, 80]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: yNear, opacity: fade }}
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]"
      />

      <motion.div
        style={{ y: yFar, opacity: fade }}
        className="absolute inset-0 opacity-[0.4]"
      >
        <NetworkNodes className="h-full w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y: yNear }}
        className="absolute left-1/2 top-[-12%] h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]"
      />

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: yFar }}
        className="absolute -left-40 top-40 h-72 w-72 rounded-full bg-brand/10 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: yNear }}
        className="absolute -right-32 top-64 h-80 w-80 rounded-full bg-brand-bright/10 blur-[110px]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper" />
    </div>
  );
}
