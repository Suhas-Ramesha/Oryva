"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

const LETTERS = ["r", "y", "v", "a"];
const WORD_GRADIENT =
  "linear-gradient(105deg,#f4f7ff 4%,#a8c8ff 32%,#6ea8ff 56%,#5d72d9 80%,#dce7ff 100%)";

/**
 * Landing animation. The O-mark draws and its core blooms, then the "ryva"
 * letters reveal one by one under a gradient wordmark while a light sweeps
 * across, and "AI" lands last. It holds, then the overlay eases up and away to
 * hand off to the page. Plays on every full load; reduced-motion gets a short
 * static reveal. A hard timer guarantees removal.
 */
export function IntroSequence() {
  const reducedMotion = useReducedMotion() ?? false;
  const [mounted, setMounted] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    const hold = reducedMotion ? 700 : 3000;
    const fade = window.setTimeout(() => setHidden(true), hold);
    const remove = window.setTimeout(() => setMounted(false), hold + 750);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(remove);
    };
  }, [reducedMotion]);

  if (!mounted) return null;

  const ease = [0.16, 1, 0.3, 1] as const;
  const letterStart = 0.65;

  return (
    <div
      data-testid="intro-sequence"
      className="intro-sequence fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-[opacity,transform,filter] duration-700 ease-out"
      style={{
        background:
          "radial-gradient(130% 120% at 50% 42%, #0e1626 0%, #080b14 55%, #05070d 100%)",
        opacity: hidden ? 0 : 1,
        transform: hidden ? "scale(1.04) translateY(-1.5%)" : "none",
        filter: hidden ? "blur(6px)" : "none",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      {/* soft brand glow behind the mark */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(110,168,255,0.16) 0%, transparent 62%)",
        }}
        initial={reducedMotion ? false : { opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reducedMotion ? 0.3 : 1.2, ease }}
      />

      <div
        role="img"
        aria-label="ORYVA AI"
        className="relative flex select-none items-center gap-[0.12em] text-[clamp(3rem,12vw,6.5rem)] font-semibold tracking-tight"
      >
        {/* O-mark */}
        <OMark reducedMotion={reducedMotion} />

        {/* wordmark "ryva" — gradient-filled, letters reveal one by one */}
        <span
          className="relative bg-clip-text font-[family-name:var(--font-label)] text-transparent"
          style={{ backgroundImage: WORD_GRADIENT }}
        >
          {LETTERS.map((letter, i) => (
            <motion.span
              key={letter + i}
              className="inline-block"
              initial={
                reducedMotion ? false : { opacity: 0, y: "0.35em", filter: "blur(8px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: reducedMotion ? 0.3 : 0.55,
                delay: reducedMotion ? 0 : letterStart + i * 0.1,
                ease,
              }}
            >
              {letter}
            </motion.span>
          ))}

          {/* light sweep across the wordmark */}
          {!reducedMotion && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 w-1/3"
              style={{
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.85) 50%, transparent 70%)",
                mixBlendMode: "screen",
              }}
              initial={{ x: "-160%", opacity: 0 }}
              animate={{ x: "420%", opacity: [0, 1, 1, 0] }}
              transition={{ delay: 1.25, duration: 1.1, ease: "easeInOut" }}
            />
          )}
        </span>

        {/* "AI" */}
        <motion.span
          className="ml-[0.18em] font-[family-name:var(--font-label)] text-brand-bright"
          initial={reducedMotion ? false : { opacity: 0, y: "0.35em", filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: reducedMotion ? 0.3 : 0.55,
            delay: reducedMotion ? 0 : letterStart + LETTERS.length * 0.1 + 0.05,
            ease,
          }}
        >
          AI
        </motion.span>
      </div>
    </div>
  );
}

function OMark({ reducedMotion }: { reducedMotion: boolean }) {
  const ease = [0.16, 1, 0.3, 1] as const;
  return (
    <span
      aria-hidden
      className="relative inline-block h-[0.92em] w-[0.92em] shrink-0 translate-y-[0.02em]"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="oryva-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dce7ff" />
            <stop offset="55%" stopColor="#6ea8ff" />
            <stop offset="100%" stopColor="#5d72d9" />
          </linearGradient>
          <radialGradient id="oryva-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#cfe0ff" />
            <stop offset="100%" stopColor="#6ea8ff" />
          </radialGradient>
        </defs>

        {/* crosshair ticks */}
        {[
          "M50 2 L50 16",
          "M50 84 L50 98",
          "M2 50 L16 50",
          "M84 50 L98 50",
        ].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="url(#oryva-ring)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={reducedMotion ? false : { opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: reducedMotion ? 0.2 : 0.4, delay: reducedMotion ? 0 : 0.55 + i * 0.05, ease }}
          />
        ))}

        {/* ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="url(#oryva-ring)"
          strokeWidth="9"
          strokeLinecap="round"
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0.4 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: reducedMotion ? 0.3 : 0.8, ease }}
        />

        {/* glowing core */}
        <motion.circle
          cx="50"
          cy="50"
          r="13"
          fill="url(#oryva-core)"
          initial={reducedMotion ? false : { scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: [
              "drop-shadow(0 0 2px rgba(110,168,255,0.6))",
              "drop-shadow(0 0 12px rgba(160,200,255,0.95))",
              "drop-shadow(0 0 6px rgba(110,168,255,0.8))",
            ],
          }}
          style={{ transformOrigin: "50px 50px" }}
          transition={{
            duration: reducedMotion ? 0.3 : 0.9,
            delay: reducedMotion ? 0 : 0.45,
            ease,
          }}
        />
      </svg>
    </span>
  );
}
