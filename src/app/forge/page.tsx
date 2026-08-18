import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ForgeInteractive } from "@/components/sections/forge-interactive";
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
    body: "Find a real problem. Not a theme from a prompt list. Something you’ve seen, felt, or lived with. The more personal, the better.",
  },
  {
    index: "02",
    title: "Build the proof",
    body: "The goal isn’t a polished product or a perfect slide deck. It’s something another person can see, touch, try, or react to. Make it real enough to learn from.",
  },
  {
    index: "03",
    title: "Show what you learned",
    body: "Teams share what they made, why they made it, and what changed when real people tried it. We reward usefulness, honesty, and smart choices, not just polish.",
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
      <section className="forge-hero relative min-h-[760px] overflow-hidden bg-[#050608] sm:min-h-[820px]">
        <Container className="relative z-20 flex min-h-[760px] flex-col justify-center pt-20 pb-20 sm:min-h-[820px] lg:pt-24">
          <div className="relative z-[100] isolate">
            <div className="mx-auto mb-16 hidden text-center lg:block">
              <p className="font-label text-3xl font-medium tracking-tight text-[#4fa8ff]">
                ORYVA FORGE
              </p>
            </div>
            <div>
              <p className="mb-6 font-label text-2xl font-medium tracking-tight text-[#4fa8ff] lg:hidden">
                ORYVA FORGE
              </p>
              <h1 className="max-w-[920px] font-display text-[3.45rem] leading-[0.96] tracking-[-0.04em] text-white sm:text-[6rem] lg:text-[7.2rem]">
                <span className="block whitespace-nowrap">Stop Planning.</span>
                <span className="block whitespace-nowrap">Start Making.</span>
              </h1>
            </div>
            <div className="mt-8 sm:mt-10">
              <Button size="lg" asChild className="min-w-[190px] text-base font-bold sm:min-w-[220px]">
                <Link href="/forge/apply">Apply to FORGE</Link>
              </Button>
            </div>
            <p className="mx-auto mt-14 max-w-5xl text-pretty text-left text-xl font-medium leading-snug text-[#b8bdc7] sm:text-center sm:text-2xl">
              FORGE is where ideas stop being conversations and start becoming real
              things. A hands-on program for builders who learn best by doing the
              work, not watching someone else talk about it.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#050608] py-12 sm:py-20">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] bg-[#101720] px-6 py-16 text-center sm:rounded-[2.5rem] sm:px-16 sm:py-20">
              <p className="font-label text-2xl font-medium tracking-tight text-[#4fa8ff]">
                Built for
              </p>
              <h2 className="mx-auto mt-7 max-w-5xl font-display text-4xl leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                You don&apos;t need a perfect idea. You need a place to start.
              </h2>
              <p className="mx-auto mt-12 max-w-5xl text-pretty text-lg font-medium leading-snug text-[#b8bdc7] sm:text-2xl">
                FORGE is for students, early-career makers, aspiring founders,
                designers, developers, and anyone who has an idea sitting in their
                head but nowhere to test it. You might have a project that&apos;s stuck.
                A skill you want to get better at. Or maybe you just want to see how
                real products actually get built.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#050608] py-14 sm:py-24">
        <Container>
          <Reveal>
            <p className="font-label text-3xl font-medium tracking-tight text-[#4fa8ff]">
              Three ways
            </p>
            <h2 className="mt-7 max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Pick the track that matches where you are
            </h2>
          </Reveal>
          <ForgeInteractive />
        </Container>
      </section>

      <section className="bg-[#050608] py-16 sm:py-28">
        <Container>
          <Reveal className="text-center">
            <p className="font-label text-3xl font-medium tracking-tight text-[#4fa8ff]">
              Forge Hackathon
            </p>
            <div className="mt-10 flex items-center justify-center gap-3">
              <SignalMark />
              <h2 className="font-display text-4xl leading-none tracking-[-0.04em] text-white sm:text-6xl">
                Signal to Ship
              </h2>
            </div>
            <p className="mx-auto mt-12 max-w-3xl text-pretty text-xl font-medium leading-snug text-[#b8bdc7] sm:text-2xl">
              Not your typical hackathon. Every team starts with something
              they&apos;ve noticed in the real world, something broken, overlooked,
              or harder than it should be. Then they build working proof before time
              runs out.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 max-w-6xl sm:mt-20">
            <ScrollSteps steps={STEPS} />
          </div>

          <Reveal delay={0.1} className="text-center">
            <div className="mt-12 sm:mt-16">
              <Button size="lg" asChild className="min-w-[240px] text-base font-bold">
                <Link href="/forge/apply?track=signal-to-ship">Bring your signal</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#050608] py-20 sm:py-32">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-4xl font-display text-5xl leading-tight tracking-[-0.04em] text-white sm:text-6xl">
              The best way to learn is to make something that matters.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
              <Button size="lg" asChild className="min-w-[240px] text-base font-bold">
                <Link href="/forge/apply">Apply to FORGE</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="min-w-[240px] border-white/25 text-base font-bold hover:border-[#4fa8ff]"
              >
                <Link href="/contact">Talk to us first</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function SignalMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 52 52"
      className="h-10 w-10 text-[#3e7bfa] sm:h-14 sm:w-14"
      fill="none"
    >
      <path d="M8 44C8 24.1 24.1 8 44 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M8 32C8 18.7 18.7 8 32 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.78" />
      <path d="M8 20C8 13.4 13.4 8 20 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.56" />
    </svg>
  );
}
