import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { ScrollSteps } from "@/components/sections/scroll-steps";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How we work at ORYVA AI: a simple, disciplined process that keeps the person at the center and the technology in its place.",
};

const STEPS = [
  {
    index: "01",
    title: "Find the real problem",
    body: "We look for the specific moment where someone is stuck. Not a market gap on a spreadsheet. A real person, a real frustration, a real decision that is harder than it should be. If we can't name the problem clearly, we're not ready to build.",
  },
  {
    index: "02",
    title: "Design for the person first",
    body: "Before we think about AI or features, we figure out the experience. What should this feel like to use? Where does it fit in someone's day? If the product isn't clear and easy on day one, the technology behind it doesn't matter.",
  },
  {
    index: "03",
    title: "Add intelligence where it helps",
    body: "AI isn't the starting point. It's a tool we bring in where it actually makes things better. Surfacing patterns someone would miss. Reducing complexity. Making the product smarter the more you use it. If AI doesn't make it more useful, we don't add it.",
  },
  {
    index: "04",
    title: "Ship, learn, keep going",
    body: "Launching is not the end. It's where the real work begins. We put products in front of real people early, listen to what works and what doesn't, and keep improving. A product that stops evolving stops being useful.",
  },
];

const PROMISES = [
  "Clear enough to start using without a tutorial.",
  "Useful enough that people come back on their own.",
  "Smart enough to grow with the person using it.",
];

export default function OurApproachPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>Our Approach</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-x-8 gap-y-8 lg:grid-cols-12 lg:items-end">
            <Reveal delay={0.06} className="lg:col-span-7">
              <h1 className="font-display text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Every product starts with a real problem. Not a trend.
              </h1>
            </Reveal>
            <div className="lg:col-span-5 lg:self-center">
              <Reveal delay={0.12}>
                <p className="text-pretty text-lg leading-relaxed text-ink-soft lg:border-l lg:border-hairline lg:pl-6">
                  This is how we work at ORYVA AI. A simple, disciplined process that keeps
                  the person at the center and the technology in its place.
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
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                We don&apos;t start with what&apos;s possible. We start with what&apos;s
                needed.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-8">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                Most companies fall in love with their technology and go looking for a
                problem to attach it to. We do it the other way. We find a real moment
                where someone is stuck, confused, or underserved. Then we ask: what is the
                simplest thing we could build that would genuinely help? Everything else
                follows from that.
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
                  Four stages. One rule: stay useful.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={0.08}>
                <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                  Each stage builds on the one before it. Scroll to follow the path from a
                  real problem to a product worth returning to.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-12">
            <ScrollSteps steps={STEPS} />
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-16 sm:py-20">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow className="justify-center">What we commit to</Eyebrow>
            <h2 className="mt-4 font-display text-balance text-3xl leading-tight text-ink sm:text-4xl">
              Every product we make should be three things.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mx-auto mt-9 grid max-w-4xl gap-4 sm:grid-cols-3 sm:gap-5">
              {PROMISES.map((promise, i) => (
                <li
                  key={promise}
                  className="group relative overflow-hidden rounded-2xl border border-hairline bg-paper p-6 text-left transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_20px_44px_-28px_rgba(110,168,255,0.65)]"
                >
                  <span className="font-label text-sm font-medium tracking-[0.22em] text-signal">
                    0{i + 1}
                  </span>
                  <p className="mt-3 text-pretty text-lg leading-snug text-ink">{promise}</p>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-bright to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-10">
              <Magnetic>
                <Button size="lg" asChild>
                  <Link href="/product" className="group flex items-center gap-2">
                    See what we&apos;re building
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
