"use client";

import * as React from "react";
import { motion } from "framer-motion";

const LETTERS = ["r", "y", "v", "a"];
const WORD_GRADIENT =
  "linear-gradient(105deg,#f4f7ff 4%,#a8c8ff 32%,#6ea8ff 56%,#5d72d9 80%,#dce7ff 100%)";
const EASE = [0.16, 1, 0.3, 1] as const;
const LETTER_START = 0.65;

/**
 * Landing animation. The O-mark draws and its core blooms, then the "ryva"
 * letters reveal one by one under a gradient wordmark while a light sweeps
 * across, and "AI" lands last. It holds, then the overlay eases up and away to
 * hand off to the page. Runs on every full load and intentionally ignores the
 * OS reduced-motion setting (this is the brand intro); a hard timer guarantees
 * removal. All motion is JS-driven so it plays even when CSS motion is reduced.
 */
export function IntroSequence() {
  const [mounted, setMounted] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    const fade = window.setTimeout(() => setHidden(true), 3000);
    const remove = window.setTimeout(() => setMounted(false), 3750);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(remove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      data-testid="intro-sequence"
      className="intro-sequence fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(130% 120% at 50% 42%, #0e1626 0%, #080b14 55%, #05070d 100%)",
        pointerEvents: hidden ? "none" : "auto",
      }}
      initial={{ opacity: 1 }}
      animate={
        hidden
          ? { opacity: 0, scale: 1.04, filter: "blur(6px)" }
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      transition={{ duration: 0.7, ease: EASE }}
    >
      {/* soft brand glow behind the mark */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(110,168,255,0.16) 0%, transparent 62%)",
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      />

      <div
        role="img"
        aria-label="ORYVA AI"
        className="relative flex select-none items-center text-[clamp(2.75rem,11vw,6rem)] font-semibold tracking-tight"
      >
        {/* O-mark — the "o" of oryva */}
        <OMark />

        {/* wordmark "ryva" — gradient-filled, letters reveal one by one.
            WebkitTextFillColor keeps the gradient text visible on mobile. */}
        <span
          className="relative -ml-[0.02em] font-[family-name:var(--font-label)]"
          style={{
            backgroundImage: WORD_GRADIENT,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          {LETTERS.map((letter, i) => (
            <motion.span
              key={letter + i}
              className="inline-block"
              initial={{ opacity: 0, y: "0.35em", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: LETTER_START + i * 0.1, ease: EASE }}
            >
              {letter}
            </motion.span>
          ))}

          {/* light sweep across the wordmark */}
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
        </span>

        {/* "AI" */}
        <motion.span
          className="ml-[0.16em] font-[family-name:var(--font-label)] text-brand-bright"
          initial={{ opacity: 0, y: "0.35em", filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.55,
            delay: LETTER_START + LETTERS.length * 0.1 + 0.05,
            ease: EASE,
          }}
        >
          AI
        </motion.span>
      </div>
    </motion.div>
  );
}

function OMark() {
  return (
    <span
      aria-hidden
      className="relative inline-block h-[0.9em] w-[0.9em] shrink-0"
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
        {["M50 2 L50 16", "M50 84 L50 98", "M2 50 L16 50", "M84 50 L98 50"].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="url(#oryva-ring)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.55 + i * 0.05, ease: EASE }}
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
          initial={{ pathLength: 0, opacity: 0.4 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
        />

        {/* glowing core */}
        <motion.circle
          cx="50"
          cy="50"
          r="13"
          fill="url(#oryva-core)"
          style={{ transformOrigin: "50px 50px" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: [
              "drop-shadow(0 0 2px rgba(110,168,255,0.6))",
              "drop-shadow(0 0 12px rgba(160,200,255,0.95))",
              "drop-shadow(0 0 6px rgba(110,168,255,0.8))",
            ],
          }}
          transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
        />
      </svg>
    </span>
  );
}
