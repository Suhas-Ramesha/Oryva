"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroBackground } from "@/components/ui/hero-background";
import { Magnetic } from "@/components/ui/magnetic";

export function Hero() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 150, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 30, mass: 0.5 });
  const background = useMotionTemplate`radial-gradient(480px circle at ${springX}px ${springY}px, var(--accent-dim), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-28"
    >
      <HeroBackground />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background }} />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>AI Platforms · Product Engineering · ORYVA FORGE</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-4xl font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            We build at the edge of what AI can{" "}
            <span className="text-accent-bright">actually</span> do.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
            No decks, no promises on a slide. ORYVA-AI architects AI platforms and
            technical product systems, and runs ORYVA FORGE for the next generation
            of builders.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Magnetic>
              <Button size="lg" asChild>
                <Link href="/products" className="flex items-center gap-2">
                  Explore Our Product
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" asChild>
                <Link href="/forge">Join ORYVA FORGE</Link>
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <ChevronDown className="h-5 w-5 text-muted-2" />
      </div>
    </section>
  );
}
