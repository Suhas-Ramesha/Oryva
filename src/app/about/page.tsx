import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Compass, Hammer, Users2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "ORYVA-AI's story, mission, and the two pillars we build on: AI products and technical product systems.",
};

const VALUES = [
  {
    icon: Compass,
    title: "Innovation",
    description: "We start from what's newly possible, not what's safe to pitch.",
  },
  {
    icon: Hammer,
    title: "Craft",
    description: "Engineering quality is not negotiable — in our products or our client work.",
  },
  {
    icon: Users2,
    title: "Community",
    description: "ORYVA FORGE is not marketing. It's how we stay connected to builders.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description: "We say what we're building, what stage it's at, and what's still unproven.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>About ORYVA-AI</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              A company quietly building the future.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              ORYVA-AI builds at the edge of what AI can actually do — not what it can
              demo. No decks, no promises on a slide. Just systems, built and running
              in production.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border-subtle py-24">
        <Container className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Why we started
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              ORYVA-AI started from a simple frustration: most AI work stops at the
              demo. We wanted to build things that learn, adapt, and ship — real
              systems that survive contact with real users, not slide decks dressed
              up as products.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              That AI-first philosophy now runs through everything we do — the
              platforms we build ourselves, the technical systems we architect for
              others, and ORYVA FORGE, the program we run for the builders coming up
              behind us.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="h-full p-8">
              <Eyebrow>Mission &amp; Vision</Eyebrow>
              <p className="mt-6 font-display text-xl font-medium leading-snug tracking-tight text-foreground">
                &ldquo;We don&apos;t chase trends. We build at the edge of them.&rdquo;
              </p>
              <div className="mt-8 h-px w-full bg-border-subtle" />
              <p className="mt-8 text-sm leading-relaxed text-muted">
                Our vision is a world where AI systems are judged by what they run in
                production, not what they promise on stage — and where the next wave
                of builders has a real place to learn how that&apos;s done.
              </p>
            </Card>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border-subtle bg-background-elevated py-24">
        <Container>
          <Reveal>
            <Eyebrow>What We&apos;re Building</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight">
              Two pillars, one philosophy.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <Reveal>
              <Card className="h-full p-8">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-bright">
                  Pillar 01
                </span>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight">
                  Our own AI products
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Platforms we conceive, design, engineer, and launch ourselves —
                  starting with an AI-powered career platform currently in
                  development.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full p-8">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-bright">
                  Pillar 02
                </span>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight">
                  Technical product systems
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Architecture, infrastructure, and full-stack engineering delivered
                  as a client service — for teams who need senior technical
                  execution.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-border-subtle py-24">
        <Container>
          <Reveal>
            <Eyebrow>Our Values</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border-subtle p-6">
                  <Icon className="h-6 w-6 text-accent-bright" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-base font-medium tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-border-strong bg-surface px-8 py-16 text-center md:px-16">
              <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Want to work with us, or join our journey?
              </h2>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Get In Touch <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/forge">Join ORYVA FORGE</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
