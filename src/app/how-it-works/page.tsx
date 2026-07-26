import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PullQuote } from "@/components/ui/pull-quote";
import { Magnetic } from "@/components/ui/magnetic";
import { ProcessTimeline } from "@/components/sections/process-timeline";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How ORYVA AI thinks about every product we build, from the first human insight to a living product in the world.",
};

const STEPS = [
  {
    index: "01",
    title: "Notice the real signal",
    body: "We begin with close attention. The goal is to name the gap people live with, the decision that feels unclear, or the everyday moment where a better tool would create genuine momentum. Without that signal, the rest of the process has nothing honest to serve.",
  },
  {
    index: "02",
    title: "Find the useful core",
    body: "An idea becomes stronger when it becomes simpler. We define the smallest valuable outcome, then let that outcome guide the experience, the technology, and the tradeoffs we accept. Order matters here: clarity before capability.",
  },
  {
    index: "03",
    title: "Design the human experience",
    body: "Before a product can feel intelligent, it has to feel understandable. We map the journey, remove unnecessary friction, and make sure the product earns a place in someone's day instead of adding one more thing to manage.",
  },
  {
    index: "04",
    title: "Build the intelligence around it",
    body: "AI is a capability, not the starting point. We bring it in only where it can add real context, reduce complexity, surface useful patterns, or make the product more responsive to the person using it.",
  },
  {
    index: "05",
    title: "Put it into real hands",
    body: "We learn early from real people, not only from internal assumptions. Feedback shows us what is useful, what is unclear, and where the idea needs to become sharper before it can grow.",
  },
  {
    index: "06",
    title: "Keep the product alive",
    body: "A good product is never frozen at launch. We keep listening, improving, and evolving it as people's needs, expectations, and opportunities change. The method continues after shipment.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>How It Works</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-x-8 gap-y-8 lg:grid-cols-12 lg:items-end">
            <Reveal delay={0.06} className="lg:col-span-7">
              <h1 className="font-display text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                From a real idea to a product people return to.
              </h1>
            </Reveal>
            <div className="lg:col-span-5 lg:self-center">
              <Reveal delay={0.12}>
                <p className="text-pretty text-lg leading-relaxed text-ink-soft lg:border-l lg:border-hairline lg:pl-6">
                  This is the canonical method behind every ORYVA AI product: a
                  disciplined path from human insight to a living product in the world.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-12 md:items-start md:gap-8">
            <Reveal className="md:col-span-4">
              <Eyebrow>The ORYVA AI product approach</Eyebrow>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-8">
              <p className="font-display text-pretty text-xl leading-snug text-ink sm:text-2xl md:text-[1.75rem] md:leading-[1.25]">
                We do not begin with technology and search for a reason to use it. We
                begin with a real situation, then shape the product around what would
                make a meaningful difference. Each stage exists because the previous one
                made the next decision clearer.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <Reveal>
                <Eyebrow>The process</Eyebrow>
                <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                  Six stages, one intent.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={0.08}>
                <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                  Scroll the stages to see what changes at each point and why the order
                  protects usefulness from becoming noise.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-10">
            <ProcessTimeline steps={STEPS} />
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-paper-2 py-16 sm:py-20">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow className="justify-center">The promise we make</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <PullQuote className="mt-5 max-w-3xl">
              Every future ORYVA AI product should feel clear enough to begin with,
              useful enough to return to, and intelligent enough to grow with the person
              using it.
            </PullQuote>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8">
              <Magnetic>
                <Button size="lg" asChild>
                  <Link href="/product" className="group flex items-center gap-2">
                    Explore what we are building
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
