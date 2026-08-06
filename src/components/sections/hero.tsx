"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { Carousel } from "@/components/ui/carousel";
import { ProductMockup } from "@/components/ui/product-mockup";
import { HeroBackground } from "@/components/ui/hero-background";

function SlideShell({
  label,
  title,
  body,
  children,
}: {
  label: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[28rem] flex-col gap-3 rounded-3xl border border-hairline bg-paper-2 p-6 sm:h-[30rem] sm:p-8">
      <div className="shrink-0">
        <Eyebrow>{label}</Eyebrow>
        <h2 className="mt-3 font-display text-2xl leading-tight text-ink sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-md text-pretty leading-relaxed text-muted">{body}</p>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center">{children}</div>
    </div>
  );
}

const SLIDES = [
  <SlideShell
    key="product"
    label="The Product"
    title="Guidance for your next move"
    body="A career platform shaped around context, connections, and realistic next steps."
  >
    <div className="w-full max-w-[15rem]">
      <ProductMockup />
    </div>
  </SlideShell>,
  <SlideShell
    key="forge"
    label="ORYVA FORGE"
    title="A place to make the idea real"
    body="Workshops, mentorship, and fellowships for builders who learn by shipping proof."
  >
    <div className="grid w-full max-w-xs grid-cols-1 gap-3">
      {["Workshops", "Mentorship", "Fellowships"].map((t) => (
        <div
          key={t}
          className="flex items-center justify-between rounded-xl border border-hairline bg-paper px-4 py-3"
        >
          <span className="font-label text-sm tracking-tight text-ink">{t}</span>
          <span className="h-2 w-2 rounded-full bg-signal" />
        </div>
      ))}
    </div>
  </SlideShell>,
  <SlideShell
    key="company"
    label="The Company"
    title="Products and builders, side by side"
    body="We stay close to real questions so the work we ship keeps earning its place."
  >
    <div className="flex w-full max-w-xs flex-col gap-3 rounded-2xl border border-hairline bg-paper p-5">
      <p className="font-display text-xl leading-snug text-ink">
        Useful products grow from curious people.
      </p>
      <p className="text-sm leading-relaxed text-muted">
        Explore the product, join FORGE, or talk with us about what you are building.
      </p>
    </div>
  </SlideShell>,
];

export function Hero() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 150, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 30, mass: 0.5 });
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${springX}px ${springY}px, var(--brand-dim), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16"
    >
      <HeroBackground />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="min-w-0">
          <Reveal>
            <Eyebrow>ORYVA AI</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-2xl font-display text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              For people figuring out what to do next.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
              ORYVA AI builds an AI-powered career platform that connects your skills,
              curiosity, and experience into realistic next steps. And through ORYVA FORGE,
              we give builders a place to learn, make, and grow through real work.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Magnetic>
                <Button size="lg" asChild>
                  <Link href="/product" className="group flex items-center gap-2">
                    See the Product
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/forge">Explore FORGE</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="min-w-0">
          <Carousel slides={SLIDES} ariaLabel="What we are building" />
        </Reveal>
      </Container>
    </section>
  );
}
