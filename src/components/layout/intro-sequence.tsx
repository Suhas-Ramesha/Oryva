"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Full-screen landing animation. Plays on every full page load: the logo fades
 * and sharpens in while a gradient light sweeps across the wordmark, then the
 * overlay fades out and unmounts. Total ~3.3s. A hard timer guarantees removal
 * regardless of animation state; reduced-motion gets a short, static reveal.
 */
export function IntroSequence() {
  const reducedMotion = useReducedMotion() ?? false;
  const [mounted, setMounted] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    const hold = reducedMotion ? 700 : 3000;
    const fade = window.setTimeout(() => setHidden(true), hold);
    const remove = window.setTimeout(() => setMounted(false), hold + 650);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(remove);
    };
  }, [reducedMotion]);

  if (!mounted) return null;

  return (
    <div
      data-testid="intro-sequence"
      className="intro-sequence fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-[600ms] ease-out"
      style={{
        background:
          "radial-gradient(130% 120% at 50% 42%, #0e1626 0%, #080b14 55%, #05070d 100%)",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <motion.div
        className="relative w-[min(78vw,30rem)]"
        initial={
          reducedMotion
            ? { opacity: 0 }
            : { opacity: 0, scale: 0.94, filter: "blur(8px)" }
        }
        animate={
          reducedMotion
            ? { opacity: 1 }
            : { opacity: 1, scale: 1, filter: "blur(0px)" }
        }
        transition={{ duration: reducedMotion ? 0.4 : 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/logo.jpeg"
          alt="ORYVA AI"
          width={1206}
          height={438}
          priority
          className="h-auto w-full [mask-image:radial-gradient(125%_130%_at_50%_50%,black_58%,transparent_100%)]"
        />
        {!reducedMotion && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-1/2"
            style={{
              background:
                "linear-gradient(105deg, transparent 32%, rgba(180,212,255,0.6) 50%, transparent 68%)",
              mixBlendMode: "screen",
            }}
            initial={{ x: "-140%" }}
            animate={{ x: "260%" }}
            transition={{ delay: 0.55, duration: 1.15, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    </div>
  );
}
