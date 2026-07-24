import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PullQuote } from "@/components/ui/pull-quote";
import { NumberedStep } from "@/components/ui/numbered-step";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How ORYVA-AI thinks about every product we build — from the first human insight to a living product in the world.",
};

const STEPS = [
  {
    index: "01",
    title: "Notice the real signal",
    body: "Every ORYVA-AI product begins with close attention. We look for the gaps people live with, the decisions that feel unclear, and the everyday moments where a better tool could create genuine momentum.",
  },
  {
    index: "02",
    title: "Find the useful core",
    body: "An idea becomes stronger when it becomes simpler. We define the smallest valuable outcome: what should change for a person when this product exists? That question guides the experience, the technology, and the choices we make.",
  },
  {
    index: "03",
    title: "Design the human experience",
    body: "Before a product can feel intelligent, it has to feel understandable. We map the journey, remove unnecessary friction, and make sure the product earns a place in someone's day instead of adding one more thing to manage.",
  },
  {
    index: "04",
    title: "Build the intelligence around it",
    body: "AI is a capability, not the starting point. We bring it in where it can add real context, reduce complexity, surface useful patterns, or make the product more responsive to the person using it.",
  },
  {
    index: "05",
    title: "Put it into real hands",
    body: "We learn early from real people, not only from internal assumptions. Feedback shows us what is useful, what is unclear, and where the idea needs to become sharper before it can grow.",
  },
  {
    index: "06",
    title: "Keep the product alive",
    body: "A good product is never frozen at launch. We keep listening, improving, and evolving it as people's needs, expectations, and opportunities change.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>How It Works</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-x-12 gap-y-10 lg:grid-cols-12 lg:items-end">
            <Reveal delay={0.08} className="lg:col-span-7">
              <h1 className="font-[family-name:var(--font-display)] text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                From a real idea to a product people return to.
              </h1>
            </Reveal>
            <div className="lg:col-span-5">
              <Reveal delay={0.16}>
                <p className="text-pretty text-lg leading-relaxed text-ink-soft lg:border-l lg:border-hairline lg:pl-6">
                  It shows how ORYVA-AI thinks about every product we build now and in
                  the future — from the first human insight to a living product in the
                  world.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:pl-6">
                  {STEPS.map((step) => (
                    <li key={step.index} className="flex items-baseline gap-2.5">
                      <span className="font-[family-name:var(--font-label)] text-xs tracking-[0.2em] text-signal">
                        {step.index}
                      </span>
                      <span className="text-sm text-ink-soft">{step.title}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* The ORYVA-AI product approach */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>The ORYVA-AI product approach</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl font-[family-name:var(--font-display)] text-balance text-2xl leading-snug text-ink sm:text-3xl md:text-[2.25rem] md:leading-[1.2]">
              We do not begin with technology and search for a reason to use it. We
              begin with a real situation: a question people keep asking, a process
              that feels harder than it should, or a possibility that deserves to be
              made real. From there, we shape the product around what would make a
              meaningful difference.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The 6-step process */}
      <section className="border-t border-hairline bg-paper-2 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <Eyebrow>The process</Eyebrow>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl leading-tight text-ink sm:text-4xl">
                  Six steps, one intent.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={0.1}>
                <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
                  The same path runs through everything we make — a discipline that
                  turns a human insight into a product worth returning to.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={0.1 + i * 0.06}>
                <NumberedStep index={step.index} title={step.title}>
                  {step.body}
                </NumberedStep>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What we are building for */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>What we are building for</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-pretty text-xl leading-relaxed text-ink-soft sm:text-2xl">
              The career platform is the first expression of this approach, not the
              only one. Over time, ORYVA-AI will create products wherever thoughtful
              intelligence can help people understand more, move forward with
              confidence, and turn potential into progress.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The promise we make + closing CTA */}
      <section className="border-t border-hairline bg-paper-2 py-24 sm:py-32">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow className="justify-center">The promise we make</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <PullQuote className="mt-8 max-w-3xl">
              Every future ORYVA-AI product should feel clear enough to begin with,
              useful enough to return to, and intelligent enough to grow with the person
              using it.
            </PullQuote>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/product" className="flex items-center gap-2">
                  Explore what we are building
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
