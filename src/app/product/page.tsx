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
    "ORYVA AI is building a career platform that reads your full picture, not just your resume. It helps you see paths you would miss on your own and gives you a realistic next step, not a generic checklist.",
};

const STEPS = [
  {
    index: "01",
    title: "Tell it your story",
    body: "Share your skills, interests, experiences, and the questions on your mind. Not a form with 50 fields. A conversation that actually listens.",
  },
  {
    index: "02",
    title: "See what you have been missing",
    body: "The platform connects the dots across everything you shared. It surfaces patterns, overlaps, and possibilities that are hard to see when you are looking at your own life from the inside.",
  },
  {
    index: "03",
    title: "Get a real next step",
    body: "Not a dream job title. Not a vague “follow your passion.” Actual paths to explore, skills to build, and opportunities that match where you are right now.",
  },
];

const PROBLEMS = [
  "You Google career options and get the same 10 listicles.",
  "Job boards show you titles, not directions.",
  "Personality quizzes give you a label, not a plan.",
  "Career counselors have 20 minutes and a template.",
];

const DIFFERENTIATORS = [
  {
    title: "It starts with you, not a job listing.",
    body: "Most career platforms start with the market and try to fit you into it. We start with you and help you see where you actually fit.",
  },
  {
    title: "It connects, not just collects.",
    body: "Filling out a profile is not the point. The platform actively finds relationships between your skills, interests, and real opportunities that you would not spot on your own.",
  },
  {
    title: "It grows with you.",
    body: "Your career is not static. Neither is this. As you learn, explore, and change direction, the platform keeps up.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />

        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <Eyebrow>The Product</Eyebrow>
                <Badge>In development</Badge>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                <span className="lg:block">You have skills, interests, and experience.</span>{" "}
                <span className="text-ink-soft lg:block">
                  You just can&apos;t see how they connect.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
                ORYVA AI is building a career platform that reads your full picture, not
                just your resume. It helps you see paths you would miss on your own and
                gives you a realistic next step, not a generic checklist.
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
              <Eyebrow>Sound familiar?</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                Career advice wasn&apos;t built for how people actually think.
              </h2>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal delay={0.08}>
                <ul className="divide-y divide-hairline border-y border-hairline">
                  {PROBLEMS.map((problem) => (
                    <li
                      key={problem}
                      className="flex items-start gap-3 py-4 text-lg leading-relaxed text-ink-soft"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                      />
                      {problem}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
                  None of it sees your full picture. None of it connects what you are good
                  at, what you are curious about, and what is actually possible right now.
                  You are not confused because you lack ambition. You are confused because
                  the tools available to you are shallow.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>What we&apos;re building</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                A platform that understands your context, not just your credentials.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.08}>
              <p className="font-display text-pretty text-xl leading-snug text-ink sm:text-2xl">
                It doesn&apos;t give you one fixed answer. It gives you a clearer picture.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
                The platform takes what you already know about yourself: your skills,
                interests, experience, and the questions you are sitting with. Then it
                finds patterns you would miss on your own. Skills that connect across
                fields. Interests that point somewhere real. Gaps worth closing. Paths
                worth exploring. The result isn&apos;t a career plan carved in stone. It is
                the context you need to make your own next move with confidence.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>The experience</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
              From what you know to what you do next.
            </h2>
          </Reveal>
          <div className="mt-10">
            <ProductJourney steps={STEPS} />
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Not another career tool</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
              What makes this different from everything else out there.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
              {DIFFERENTIATORS.map((item) => (
                <div
                  key={item.title}
                  className="group border-t-2 border-hairline-strong pt-6 transition-colors duration-300 hover:border-brand"
                >
                  <h3 className="font-display text-xl leading-snug text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        id="waitlist"
        className="scroll-mt-28 border-t border-hairline bg-paper-2 py-16 sm:py-20"
      >
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow className="justify-center">Join the Waitlist</Eyebrow>
            <h2 className="mt-4 font-display text-balance text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              We&apos;re building this with the first group of people who sign up.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted">
              Leave your email. You&apos;ll be the first to try it when it&apos;s ready. No
              spam. Just an update when there&apos;s something real to show you.
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
