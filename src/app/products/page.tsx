import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Brain, TrendingUp, Target, Radar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WaitlistForm } from "@/components/forms/waitlist-form";

export const metadata: Metadata = {
  title: "Products",
  description:
    "ORYVA-AI's flagship product — an AI-powered career platform, currently in development.",
};

const PILLARS = [
  {
    icon: Brain,
    title: "AI-Guided Career Insights",
    description: "Signal, not noise — insight shaped around where you actually are.",
  },
  {
    icon: TrendingUp,
    title: "Personalized Growth Paths",
    description: "Paths that adapt as you build skills, not a static roadmap.",
  },
  {
    icon: Target,
    title: "Smart Opportunity Matching",
    description: "Surfacing what's genuinely relevant, not everything available.",
  },
  {
    icon: Radar,
    title: "Real-Time Signal Tracking",
    description: "A read on the market that updates as it moves, not once a year.",
  },
];

const STATUS_STEPS = ["Concept", "Design", "Build", "Beta", "Launch"];
const CURRENT_STEP = "Build";

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative text-center">
          <Reveal>
            <div className="flex justify-center">
              <Badge>In Development</Badge>
            </div>
            <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Our Product
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Product name to be announced. We&apos;re building an AI-powered career
              platform — helping people navigate career decisions, skill-building, and
              opportunities with AI as a genuine co-pilot.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border-subtle py-24">
        <Container className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <Eyebrow>What It Solves</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Career decisions are hard to make with static information.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Skills change, markets move, and most tools update once a year. We&apos;re
              building something that helps people navigate career decisions,
              skill-building, and opportunities using AI that stays current with
              them — kept intentionally broad while we&apos;re still building it.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border-subtle bg-surface p-8">
              <Eyebrow>Development Status</Eyebrow>
              <div className="mt-8 flex items-center justify-between">
                {STATUS_STEPS.map((step, i) => {
                  const currentIndex = STATUS_STEPS.indexOf(CURRENT_STEP);
                  const state =
                    i < currentIndex ? "done" : i === currentIndex ? "current" : "upcoming";
                  return (
                    <div key={step} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className={
                          "h-2.5 w-2.5 rounded-full " +
                          (state === "done"
                            ? "bg-accent-bright"
                            : state === "current"
                              ? "bg-accent-bright shadow-[0_0_0_4px_var(--accent-dim)]"
                              : "bg-border-strong")
                        }
                      />
                      <span
                        className={
                          "font-mono text-[10px] uppercase tracking-[0.1em] " +
                          (state === "upcoming" ? "text-muted-2" : "text-foreground/80")
                        }
                      >
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="relative mt-1 h-px w-full bg-border-subtle">
                <div
                  className="absolute inset-y-0 left-0 bg-accent-bright"
                  style={{
                    width: `${(STATUS_STEPS.indexOf(CURRENT_STEP) / (STATUS_STEPS.length - 1)) * 100}%`,
                  }}
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border-subtle bg-background-elevated py-24">
        <Container>
          <Reveal>
            <Eyebrow>Core Pillars</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight">
              What we&apos;re building around.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {PILLARS.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border-subtle p-8">
                  <Icon className="h-6 w-6 text-accent-bright" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-medium tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border-subtle py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow className="justify-center">Stay Updated</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Be the first to know when we launch.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex w-full justify-center">
            <WaitlistForm />
          </Reveal>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-border-strong bg-surface px-8 py-14 text-center md:px-16">
              <h2 className="mx-auto max-w-lg font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Interested in partnering or collaborating on this product?
              </h2>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
