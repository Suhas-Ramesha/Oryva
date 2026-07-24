import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PullQuote } from "@/components/ui/pull-quote";
import { NumberedStep } from "@/components/ui/numbered-step";
import { ForgeInteractive } from "@/components/sections/forge-interactive";
import { ForgeApplicationForm } from "@/components/forms/forge-application-form";

export const metadata: Metadata = {
  title: "ORYVA FORGE",
  description:
    "ORYVA FORGE is a builder program for people who learn best by getting their hands on the work — workshops, mentorship, fellowships, and the Signal-to-Ship hackathon.",
};

const STEPS = [
  {
    index: "01",
    title: "Find the signal",
    body: "It might be a small everyday problem, a challenge on campus, a gap in the way people learn, or a moment that should be easier than it is. The best signals are specific enough to feel real.",
  },
  {
    index: "02",
    title: "Turn it into a useful question",
    body: "Teams work through a simple challenge: Who is this for? What is getting in their way? What is the smallest thing we could make that would genuinely help?",
  },
  {
    index: "03",
    title: "Build the proof",
    body: "The goal is not a perfect product or a beautiful set of slides. The goal is a working proof — something another person can see, touch, try, or respond to before time runs out.",
  },
  {
    index: "04",
    title: "Show the learning",
    body: "Teams share what they made, why they made it, and what changed when they tested the idea. We reward usefulness, courage, clarity, and smart choices — not just polish.",
  },
  {
    index: "05",
    title: "Keep the signal alive",
    body: "Strong projects do not have to end when the event does. Selected teams can be invited to keep developing through follow-up critique, mentorship, or a future FORGE pathway.",
  },
];

export default function ForgePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]"
          aria-hidden
        />
        <Container className="relative pt-28 pb-16 sm:pt-32 sm:pb-24">
          <Reveal>
            <Eyebrow>ORYVA FORGE</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-end">
            <Reveal delay={0.08} className="lg:col-span-7">
              <h1 className="font-[family-name:var(--font-display)] text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Come with a question. Leave with proof.
              </h1>
            </Reveal>
            <Reveal delay={0.16} className="lg:col-span-5">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft lg:border-l lg:border-hairline lg:pl-6">
                ORYVA FORGE is a builder program for people who learn best by getting
                their hands on the work. It is not a classroom where you wait for the
                right answer. It is a place to try, make, share, rethink, and make
                again.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#apply">Enter ORYVA FORGE</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#apply-signal-to-ship">Bring Your Signal</a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* What FORGE feels like */}
      <section className="border-t border-hairline bg-paper-2 py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>What FORGE feels like</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-4xl font-[family-name:var(--font-display)] text-balance text-2xl leading-snug text-ink sm:text-3xl md:text-[2.5rem] md:leading-[1.2]">
              Some people arrive with a half-formed idea. Some arrive with a project
              that has stopped moving. Some simply want to understand how intelligent
              products are made.
            </p>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              All are welcome to begin somewhere. FORGE gives each person a practical
              way in.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Three tracks */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Three tracks</Eyebrow>
          </Reveal>

          <ForgeInteractive />
        </Container>
      </section>

      {/* The FORGE Hackathon: Signal-to-Ship */}
      <section className="border-t border-hairline bg-paper-2 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <Eyebrow>The FORGE Hackathon</Eyebrow>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
                  Signal-to-Ship
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={0.1}>
                <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
                  Signal-to-Ship is ORYVA FORGE&apos;s own kind of hackathon. Instead of
                  beginning with a generic theme, every team begins with a signal:
                  something they have noticed in the real world that feels broken,
                  overlooked, frustrating, or full of possibility.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map(({ index, title, body }, i) => (
              <Reveal key={index} delay={0.1 + i * 0.06}>
                <NumberedStep index={index} title={title}>
                  {body}
                </NumberedStep>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <Button size="lg" asChild>
                <a href="#apply-signal-to-ship">Bring Your Signal</a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Application */}
      <section id="apply" className="scroll-mt-28 border-t border-hairline py-20 sm:py-28">
        <Container>
          <span id="apply-signal-to-ship" aria-hidden className="block scroll-mt-28" />
          <Reveal>
            <div className="mx-auto max-w-2xl">
              <Eyebrow>Application</Eyebrow>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl leading-tight text-ink sm:text-4xl">
                Apply to ORYVA FORGE.
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted">
                Pick your track below — the form adapts to what we need to know for each
                one.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-hairline bg-paper-2 p-8 md:p-12">
              <ForgeApplicationForm />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Closing band */}
      <section className="py-24 sm:py-32">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <PullQuote className="max-w-3xl">
              Come with a question. Leave with proof.
            </PullQuote>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#apply">Enter ORYVA FORGE</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#apply-signal-to-ship">Bring Your Signal</a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
