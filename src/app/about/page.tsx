import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PullQuote } from "@/components/ui/pull-quote";
import { Card } from "@/components/ui/card";
import { Magnetic } from "@/components/ui/magnetic";
import { AboutPrinciples } from "@/components/sections/about-principles";

export const metadata: Metadata = {
  title: "About",
  description:
    "The belief behind ORYVA AI, and how we turn intelligent tools into real, useful progress for the people who use them.",
};

const MATTERS = [
  "Useful over flashy.",
  "Human context over generic answers.",
  "Learning through real work.",
  "And community as a force that makes individual potential travel further.",
];

const PRINCIPLES = [
  {
    title: "Start with what is real",
    body: "Every good product starts with a real question. We look for the friction, uncertainty, or possibility behind it before we think about features.",
  },
  {
    title: "Make intelligence useful",
    body: "AI should feel like thoughtful support, not noise. We use it where it can bring context, perspective, and momentum to a person's next step.",
  },
  {
    title: "Keep builders close",
    body: "We stay near people who are learning, experimenting, questioning, and building in public, because that energy keeps our products honest.",
  },
  {
    title: "Grow through use",
    body: "A launch is not the end of the work. We listen, learn, improve, and keep making the experience more useful over time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>About ORYVA AI</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-x-8 gap-y-5 lg:grid-cols-12 lg:items-end">
            <Reveal delay={0.06} className="lg:col-span-7">
              <h1 className="font-display text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                We are here for the work after the idea.
              </h1>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-5">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft lg:border-l lg:border-hairline lg:pl-6">
                ORYVA AI began with a simple belief: technology should not make people
                feel smaller. It should help them see more clearly what they can do
                next.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <PullQuote className="mt-5 max-w-3xl">
              There is no shortage of impressive technology.
            </PullQuote>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-ink-soft">
              There are demos that look magical, tools that promise everything, and
              conversations that move faster than real progress. But when someone is
              choosing a direction, learning something new, or trying to turn a rough
              idea into a real one, they need more than a moment of surprise. They need
              context, care, and a product that stays useful after the first click.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-8">
            <Reveal className="md:col-span-4">
              <Eyebrow>What We Believe</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                Quietly powerful.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-8">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                We believe the best AI products are quietly powerful. They do not demand
                attention; they earn trust. They help people notice patterns, ask better
                questions, and take one meaningful step at a time.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <Card className="h-full p-6 sm:p-7">
                <Eyebrow>Mission</Eyebrow>
                <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                  To build intelligent products that help people move from uncertainty to
                  action, and to create spaces where more people can learn to build with
                  confidence.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full p-6 sm:p-7">
                <Eyebrow>Vision</Eyebrow>
                <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                  A world where access to insight, direction, and the chance to create is
                  not limited to a small group of people.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>What Matters to Us</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {MATTERS.map((phrase, i) => (
              <Reveal key={phrase} delay={0.06 + i * 0.05}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-hairline bg-paper p-5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                    aria-hidden
                  />
                  <p className="font-display text-lg leading-snug text-ink sm:text-xl">
                    {phrase}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Why ORYVA AI</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
              Principles we return to.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <AboutPrinciples className="mt-8" principles={PRINCIPLES} />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-hairline bg-paper-2 py-16 sm:py-20">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <PullQuote className="max-w-3xl">
              Meet the product, or join the journey.
            </PullQuote>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <Button size="lg" asChild>
                  <Link href="/product">Meet the product</Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/forge">Join the journey</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
