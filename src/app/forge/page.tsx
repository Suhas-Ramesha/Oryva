import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { NumberedStep } from "@/components/ui/numbered-step";
import { ForgeInteractive } from "@/components/sections/forge-interactive";
import { ForgeApplicationForm } from "@/components/forms/forge-application-form";
import { Magnetic } from "@/components/ui/magnetic";

export const metadata: Metadata = {
  title: "ORYVA FORGE",
  description:
    "ORYVA FORGE is a builder program for people who learn best by getting their hands on the work through workshops, mentorship, fellowships, and the Signal to Ship hackathon.",
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
    body: "The goal is not a perfect product or a beautiful set of slides. The goal is a working proof, something another person can see, touch, try, or respond to before time runs out.",
  },
  {
    index: "04",
    title: "Show the learning",
    body: "Teams share what they made, why they made it, and what changed when they tested the idea. We reward usefulness, courage, clarity, and smart choices, not just polish.",
  },
  {
    index: "05",
    title: "Keep the signal alive",
    body: "Strong projects do not have to end when the event does. Selected teams can be invited to keep developing through continued critique, mentorship, or a future FORGE pathway.",
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
                Come with a question. Leave with proof.
              </h1>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-5">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft lg:border-l lg:border-hairline lg:pl-6">
                ORYVA FORGE is a builder program for people who learn best by getting
                their hands on the work. It is not a classroom where you wait for the
                right answer. It is a place to try, make, share, rethink, and make
                again.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <Button size="lg" asChild>
                  <a href="#apply">Enter ORYVA FORGE</a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline" asChild>
                  <a href="#apply-signal-to-ship">Bring Your Signal</a>
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
              <Eyebrow>What FORGE feels like</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                Everyone begins somewhere.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-8 space-y-4">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                Some people arrive with an early stage idea. Some arrive with a project
                that has stopped moving. Some simply want to understand how intelligent
                products are made.
              </p>
              <p className="text-pretty leading-relaxed text-muted">
                All are welcome to begin somewhere. FORGE gives each person a practical
                way in.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Three tracks</Eyebrow>
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
                  Signal to Ship is ORYVA FORGE&apos;s own kind of hackathon. Instead of
                  beginning with a generic theme, every team begins with a signal:
                  something they have noticed in the real world that feels broken,
                  overlooked, frustrating, or full of possibility.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map(({ index, title, body }, i) => (
              <Reveal key={index} delay={0.05 + i * 0.05}>
                <NumberedStep index={index} title={title} surface="paper">
                  {body}
                </NumberedStep>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="mt-10">
              <Magnetic>
                <Button size="lg" asChild>
                  <a href="#apply-signal-to-ship">Bring Your Signal</a>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        id="apply"
        className="scroll-mt-28 border-t border-hairline py-14 sm:py-20"
      >
        <Container>
          <span id="apply-signal-to-ship" aria-hidden className="block scroll-mt-28" />
          <Reveal>
            <div className="mx-auto max-w-2xl">
              <Eyebrow>Application</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                Apply to ORYVA FORGE.
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted">
                Pick your track below. The form adapts to what we need to know for each
                one.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-hairline bg-paper-2 p-8 md:p-10">
              <ForgeApplicationForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
