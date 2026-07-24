import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PullQuote } from "@/components/ui/pull-quote";
import { NumberedStep } from "@/components/ui/numbered-step";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "The belief behind ORYVA-AI, and how we turn intelligent tools into real, useful progress for the people who use them.",
};

const MATTERS = [
  "Useful over flashy.",
  "Human context over generic answers.",
  "Learning through real work.",
  "And community as a force that makes individual potential travel further.",
];

const STEPS = [
  {
    index: "01",
    title: "Start with what is real",
    body: "Every good product starts with a real question. We look for the friction, uncertainty, or possibility behind it before we think about features.",
  },
  {
    index: "02",
    title: "Make intelligence useful",
    body: "AI should feel like thoughtful support, not noise. We use it where it can bring context, perspective, and momentum to a person's next step.",
  },
  {
    index: "03",
    title: "Keep builders close",
    body: "ORYVA FORGE keeps us near the energy of people who are learning, experimenting, questioning, and building the future in their own way.",
  },
  {
    index: "04",
    title: "Grow through use",
    body: "A launch is not the end of the work. We listen, learn, improve, and keep making the experience more useful over time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <Container>
          <Reveal>
            <Eyebrow>About ORYVA-AI</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl md:text-7xl">
              We are here for the work after the idea.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              ORYVA-AI began with a simple belief: technology should not make
              people feel smaller. It should help them see more clearly what they
              can do next.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <PullQuote>There is no shortage of impressive technology.</PullQuote>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
                There are demos that look magical, tools that promise everything,
                and conversations that move faster than real progress. But when
                someone is choosing a direction, learning something new, or trying
                to turn a rough idea into a real one, they need more than a moment
                of surprise. They need context, care, and a product that stays
                useful after the first click.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What We Believe */}
      <section className="border-t border-hairline bg-paper-2 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <Eyebrow>What We Believe</Eyebrow>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl leading-tight text-ink sm:text-4xl">
                  Quietly powerful.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={0.1}>
                <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
                  We believe the best AI products are quietly powerful. They do
                  not demand attention; they earn trust. They help people notice
                  patterns, ask better questions, and take one meaningful step at
                  a time.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
              <Card className="h-full p-8">
                <Eyebrow>Mission</Eyebrow>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-soft">
                  To build intelligent products that help people move from
                  uncertainty to action — and to create spaces where more people
                  can learn to build with confidence.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full p-8">
                <Eyebrow>Vision</Eyebrow>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-soft">
                  A world where access to insight, direction, and the chance to
                  create is not limited to a small group of people.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What Matters to Us */}
      <section className="border-t border-hairline bg-paper-2 py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>What Matters to Us</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {MATTERS.map((phrase, i) => (
              <Reveal key={phrase} delay={0.1 + i * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-hairline bg-paper p-6">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                    aria-hidden
                  />
                  <p className="font-[family-name:var(--font-display)] text-xl leading-snug text-ink">
                    {phrase}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why ORYVA-AI */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Why ORYVA-AI</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight text-ink sm:text-4xl">
              How we work.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={0.1 + i * 0.08}>
                <NumberedStep index={step.index} title={step.title}>
                  {step.body}
                </NumberedStep>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA band */}
      <section className="border-t border-hairline py-24 sm:py-32">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <PullQuote className="max-w-3xl">
              Meet the product, or join the journey.
            </PullQuote>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/product">Meet the product</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/forge">Join the journey</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
