"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { Carousel } from "@/components/ui/carousel";
import { ProductMockup } from "@/components/ui/product-mockup";

function SlideShell({
  label,
  title,
  body,
  href,
  cta,
  children,
}: {
  label: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[26rem] flex-col justify-between gap-6 rounded-3xl border border-hairline bg-paper-2 p-8 sm:min-h-[30rem]">
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl leading-tight text-ink sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted">{body}</p>
      </div>
      <div className="flex flex-1 items-center justify-center py-2">{children}</div>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 font-[family-name:var(--font-label)] text-[13px] font-medium tracking-tight text-brand hover:text-brand-bright"
      >
        {cta}
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}

const SLIDES = [
  <SlideShell
    key="product"
    label="The Product"
    title="An intelligent career platform"
    body="Understand your options without being reduced to a single score, role, or checklist."
    href="/product"
    cta="Explore the product"
  >
    <div className="w-full max-w-[15rem]">
      <ProductMockup />
    </div>
  </SlideShell>,
  <SlideShell
    key="forge"
    label="ORYVA FORGE"
    title="Come with a question. Leave with proof."
    body="A builder program for people who learn best by getting their hands on the work."
    href="/forge"
    cta="Enter ORYVA FORGE"
  >
    <div className="grid w-full max-w-xs grid-cols-1 gap-3">
      {["Workshops", "Mentorship", "Fellowships"].map((t) => (
        <div
          key={t}
          className="flex items-center justify-between rounded-xl border border-hairline bg-paper px-4 py-3"
        >
          <span className="font-[family-name:var(--font-label)] text-sm tracking-tight text-ink">
            {t}
          </span>
          <span className="h-2 w-2 rounded-full bg-signal" />
        </div>
      ))}
    </div>
  </SlideShell>,
  <SlideShell
    key="approach"
    label="How We Build"
    title="From a real idea to a product people return to."
    body="We begin with a real situation — then shape the product around what makes a meaningful difference."
    href="/how-it-works"
    cta="See how it works"
  >
    <ol className="w-full max-w-xs space-y-3">
      {[
        ["01", "Notice the real signal"],
        ["02", "Find the useful core"],
        ["03", "Build the intelligence around it"],
      ].map(([n, t]) => (
        <li key={n} className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-label)] text-sm tracking-[0.2em] text-signal">
            {n}
          </span>
          <span className="text-sm text-ink-soft">{t}</span>
        </li>
      ))}
    </ol>
  </SlideShell>,
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <Eyebrow>ORYVA-AI</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl md:text-7xl">
              Build what people can actually use.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
              ORYVA-AI is where thoughtful technology, practical design, and human
              ambition meet. We are building intelligent products for the moments when
              people need more clarity, more confidence, and a better way forward.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted">
              The future is not built by talking about what AI could do. It is built by
              finding the moments where it can make life, learning, and work feel less
              confusing — then creating something people will genuinely return to.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Magnetic>
                <Button size="lg" asChild>
                  <Link href="/product" className="flex items-center gap-2">
                    Explore Our Product
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/forge">Discover ORYVA FORGE</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Carousel slides={SLIDES} ariaLabel="What we are building" />
        </Reveal>
      </Container>
    </section>
  );
}
