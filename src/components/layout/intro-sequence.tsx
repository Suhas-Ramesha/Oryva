"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const LOGO_WIDTH = "min(74vw, 27rem)";

/**
 * Landing animation. The real ORYVA AI logo (exact brand font + mark) draws in
 * left-to-right behind a glowing scan edge, a light sweeps across, it holds,
 * then the overlay eases up and away to hand off to the page. Runs on every
 * full load and ignores the OS reduced-motion setting (brand intro). Uses the
 * raster logo so it renders identically on every device (no CSS background-clip
 * tricks that break on mobile); a hard timer guarantees removal.
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

  const revealDelay = 0.35;
  const revealDuration = 1.3;

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
        className="pointer-events-none absolute h-[34rem] w-[34rem] rounded-full"
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
        className="relative"
        style={{ width: LOGO_WIDTH }}
      >
        {/* logo draws in left-to-right via CSS (always ends visible). screen
            blend drops the image's dark background into the overlay so it reads
            as a floating wordmark, not a rectangular image. */}
        <div className="intro-logo">
          <Image
            src="/logo.jpeg"
            alt=""
            width={1206}
            height={438}
            priority
            className="block h-auto w-full [mask-image:radial-gradient(120%_135%_at_50%_50%,black_52%,transparent_92%)]"
            style={{ mixBlendMode: "screen" }}
          />
        </div>

        {/* glowing scan edge that leads the reveal (CSS-driven) */}
        <span
          aria-hidden
          className="intro-scan pointer-events-none absolute inset-y-0 w-[3%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(180,212,255,0.95), rgba(255,255,255,0.9))",
            filter: "blur(2px)",
            mixBlendMode: "screen",
          }}
        />

        {/* light sweep after the logo lands */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-1/3"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(180,212,255,0.55) 50%, transparent 70%)",
            mixBlendMode: "screen",
          }}
          initial={{ x: "-160%", opacity: 0 }}
          animate={{ x: "320%", opacity: [0, 1, 1, 0] }}
          transition={{
            delay: revealDelay + revealDuration + 0.15,
            duration: 1.0,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}
