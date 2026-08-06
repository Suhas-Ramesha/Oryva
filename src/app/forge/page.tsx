import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ForgeInteractive } from "@/components/sections/forge-interactive";
import { Magnetic } from "@/components/ui/magnetic";
import { ScrollSteps } from "@/components/sections/scroll-steps";

export const metadata: Metadata = {
  title: "ORYVA FORGE",
  description:
    "ORYVA FORGE is a builder program for people who learn best by getting their hands on the work through workshops, mentorship, fellowships, and the Signal to Ship hackathon.",
};

const STEPS = [
  {
    index: "01",
    title: "Spot the signal",
    body: "Find a real problem. Not a theme from a prompt list. Something you’ve seen, felt, or lived with. The more specific, the better.",
  },
  {
    index: "02",
    title: "Build the proof",
    body: "The goal isn’t a polished product or a perfect slide deck. It’s something another person can see, touch, try, or react to. Make it real enough to test.",
  },
  {
    index: "03",
    title: "Show what you learned",
    body: "Teams present what they made, why they made it, and what happened when real people tried it. We reward usefulness, clarity, and smart decisions, not just polish.",
  },
  {
    index: "04",
    title: "Keep going",
    body: "Strong projects don’t die when the event ends. Selected teams get invited into continued mentorship, feedback, or a future FORGE track to keep building.",
  },
];

export default function ForgePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]"
          aria-hidden
        />
        <Container className="relative pt-28 pb-12 sm:pt-32 sm:pb-16">
          <Reveal>
            <Eyebrow>ORYVA FORGE</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-x-8 gap-y-6 lg:grid-cols-12 lg:items-end">
            <Reveal delay={0.06} className="lg:col-span-7">
              <h1 className="font-display text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Stop planning. Start making.
              </h1>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-5">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft lg:border-l lg:border-hairline lg:pl-6">
                FORGE is where ideas stop being conversations and start becoming real
                things. A hands-on program for builders who learn best by doing the
                work, not watching someone else do it.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <div className="mt-8">
              <Magnetic>
                <Button size="lg" asChild>
                  <Link href="/forge/apply">Apply to FORGE</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-12 md:items-start md:gap-8">
            <Reveal className="md:col-span-4">
              <Eyebrow>Built for</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                You don&apos;t need a perfect idea. You need a place to start.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-8 space-y-4">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                FORGE is for students, early-career makers, aspiring founders, designers,
                developers, and anyone who has an idea sitting in their head but no space
                to test it. You might have a project that&apos;s stuck. You might have a
                skill you want to sharpen. You might just want to understand how real
                products get built.
              </p>
              <p className="text-pretty leading-relaxed text-muted">
                All of that belongs here.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Three ways in</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Pick the track that matches where you are.
            </h2>
          </Reveal>
          <ForgeInteractive />
        </Container>
      </section>

      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <Reveal>
                <Eyebrow>The FORGE Hackathon</Eyebrow>
                <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
                  Signal to Ship
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={0.08}>
                <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                  Not your typical hackathon. Every team starts with something
                  they&apos;ve noticed in the real world, something broken, overlooked,
                  or harder than it should be. Then they build working proof before time
                  runs out.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-12">
            <ScrollSteps steps={STEPS} />
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <Magnetic>
                <Button size="lg" asChild>
                  <Link href="/forge/apply?track=signal-to-ship">Bring your signal</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-hairline py-14 sm:py-16">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-3xl font-display text-3xl leading-tight text-ink sm:text-4xl">
              The best way to learn is to make something that matters.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Magnetic>
                <Button size="lg" asChild>
                  <Link href="/forge/apply">Apply to FORGE</Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to us first</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
