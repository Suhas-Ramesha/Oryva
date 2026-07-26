"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "./brand-logo";

const INTRO_SESSION_KEY = "oryva:intro-seen";

const overlayVariants = {
  initial: { opacity: 1 },
  finish: (reducedMotion: boolean) => ({
    opacity: 0,
    transition: reducedMotion
      ? { duration: 0.25, ease: "easeOut" as const }
      : { delay: 1.25, duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const logoVariants = {
  initial: { opacity: 0.22, scale: 0.96 },
  reveal: (reducedMotion: boolean) => ({
    opacity: 1,
    scale: 1,
    transition: reducedMotion
      ? { duration: 0.15, ease: "easeOut" as const }
      : { delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function IntroSequence() {
  const reducedMotion = useReducedMotion() ?? false;
  const [visible, setVisible] = React.useState(true);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const complete = React.useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, "true");
      document.documentElement.dataset.intro = "skip";
    } catch {
      // Storage can be unavailable in privacy-restricted browser contexts.
    }
    setVisible(false);
  }, []);

  React.useEffect(() => {
    try {
      if (sessionStorage.getItem(INTRO_SESSION_KEY) === "true") {
        const timeout = window.setTimeout(complete, 0);
        return () => window.clearTimeout(timeout);
      }
    } catch {
      // The intro still runs when session storage is unavailable.
    }
  }, [complete]);

  React.useEffect(() => {
    const overlay = overlayRef.current;
    overlay?.addEventListener("animationend", complete);
    return () => overlay?.removeEventListener("animationend", complete);
  }, [complete]);

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      ref={overlayRef}
      data-testid="intro-sequence"
      role="img"
      aria-label="Oryva AI"
      aria-hidden={false}
      className="intro-sequence fixed inset-0 z-[100] flex items-center justify-center bg-paper"
      custom={reducedMotion}
      variants={overlayVariants}
      initial="initial"
      animate="finish"
      onAnimationComplete={complete}
    >
      <motion.div
        className="w-[min(58vw,18rem)]"
        custom={reducedMotion}
        variants={logoVariants}
        initial="initial"
        animate="reveal"
      >
        <BrandLogo gradient className="w-full" />
      </motion.div>
    </motion.div>
  );
}
