import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import { Magnetic } from "@/components/ui/magnetic";
import { ProductJourney } from "@/components/sections/product-journey";

export const metadata: Metadata = {
  title: "Product",
  description:
    "ORYVA AI is building an intelligent career platform for people who want to understand their options without being reduced to a single score, role, or checklist.",
};

const STEPS = [
  {
    index: "01",
    title: "Begin with your story",
    body: "First, you begin with your story: the skills, interests, experiences, and questions you already carry.",
  },
  {
    index: "02",
    title: "Notice the connections",
    body: "Next, the platform helps you notice connections that are easy to miss when you are looking at everything alone.",
  },
  {
    index: "03",
    title: "Turn insight into next moves",
    body: "Then, it helps turn those connections into practical next moves, including areas to explore, capabilities to develop, and opportunities worth considering.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />

        <Container className="relative">
          <div className="max-w-6xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <Eyebrow>The Product</Eyebrow>
                <Badge>In development</Badge>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4rem]">
                <span className="lg:block lg:whitespace-nowrap">
                  A career is not a straight line.
                </span>{" "}
                <span className="lg:block lg:whitespace-nowrap">
                  Your guidance should not be either.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
                ORYVA AI is building an intelligent career platform for people who want
                to understand their options without being reduced to a single score,
                role, or checklist.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8">
                <Magnetic>
                  <Button size="lg" asChild>
                    <Link href="#waitlist" className="group flex items-center gap-2">
                      Join the waitlist
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-12 md:items-start md:gap-8">
            <Reveal className="md:col-span-4">
              <Eyebrow>The problem</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                Incomplete information, clearer paths.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-8">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                People often make career decisions with incomplete information. They know
                they want change, but cannot always see where their strengths fit, which
                skills will matter next, or how to turn curiosity into a realistic
                direction. Our product is being shaped to make that process feel more
                personal, more connected, and less overwhelming.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>What it supports</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                Better context, not a fixed answer.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.08}>
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                It will help people pause and reflect on where they are, surface
                meaningful patterns in what they already know and do, and turn those
                insights into a path they can keep refining. The aim is not one fixed
                answer. It is better context for the next useful step.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>The experience in three parts</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
              From what you carry to what you do next.
            </h2>
          </Reveal>
          <div className="mt-10">
            <ProductJourney steps={STEPS} />
          </div>
        </Container>
      </section>

      <section
        id="waitlist"
        className="scroll-mt-28 border-t border-hairline bg-paper-2 py-16 sm:py-20"
      >
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow className="justify-center">Join the waitlist</Eyebrow>
            <h2 className="mt-4 font-display text-balance text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              Be part of the first meaningful interaction.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted">
              Leave your email and we will let you know as the product takes shape.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-8 flex w-full justify-center">
            <WaitlistForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
