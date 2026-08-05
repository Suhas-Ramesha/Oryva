import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PullQuote } from "@/components/ui/pull-quote";
import { Card } from "@/components/ui/card";
import { Magnetic } from "@/components/ui/magnetic";

export const metadata: Metadata = {
  title: "About",
  description:
    "ORYVA AI is a product company that builds intelligent tools for real people. Not demos. Not pitches.",
};

const VALUES = [
  {
    quote: "Useful first, always.",
    body: "If it doesn’t help someone do something better, it doesn’t ship. We don’t build for applause.",
  },
  {
    quote: "Start with the person, not the tech.",
    body: "Every product begins with a real situation someone is stuck in. The technology comes after we understand the problem.",
  },
  {
    quote: "Stay close to the mess.",
    body: "We don’t build from a distance. We stay near the people testing, questioning, and breaking our work. That’s where the good ideas come from.",
  },
  {
    quote: "Keep going after launch.",
    body: "Shipping is not the finish line. We keep listening, keep improving, keep making it better for the people who use it.",
  },
];

const CTA_CARDS = [
  {
    label: "The Product",
    title: "The Product",
    body: "An AI career platform shaped around you, not a checklist.",
    href: "/product",
    cta: "See the Product",
  },
  {
    label: "ORYVA FORGE",
    title: "ORYVA FORGE",
    body: "Workshops, mentorship, and a hackathon for people who learn by doing.",
    href: "/forge",
    cta: "Enter FORGE",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* S1 — HERO */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>About ORYVA AI</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-x-8 gap-y-5 lg:grid-cols-12 lg:items-end">
            <Reveal delay={0.06} className="lg:col-span-7">
              <h1 className="font-display text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                We started with one question. Why does most technology forget
                about the person using it?
              </h1>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-5">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft lg:border-l lg:border-hairline lg:pl-6">
                ORYVA AI is a product company that builds intelligent tools for
                real people. Not demos. Not pitches. Products that help someone
                think clearer, decide better, and actually move forward.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* S2 — THE BACKSTORY */}
      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>How it started</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <PullQuote className="mt-5 max-w-3xl">
              The problem wasn&apos;t the technology. It was who it was built
              for.
            </PullQuote>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-ink-soft">
              We kept seeing the same pattern. Smart tools built for scale, not
              for people. Career platforms that treat everyone the same. AI
              products that impress in a demo and disappear after the first use.
              We started ORYVA AI because we believed someone should build the
              other kind. The kind that starts with a real person, a real
              situation, and asks: what would actually help here?
            </p>
          </Reveal>
        </Container>
      </section>

      {/* S3 — WHAT WE DO */}
      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-8">
            <Reveal className="md:col-span-4">
              <Eyebrow>The short version</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                We build products. We support builders.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-8">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                Two things sit at the core of ORYVA AI. First, intelligent
                products that help people navigate real decisions with better
                context and clarity. Our first product is an AI career platform.
                Second, ORYVA FORGE, a hands-on program where builders learn,
                make, and grow through real work. The product and the community
                push each other forward. That&apos;s by design.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* S4 — MISSION AND VISION */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <Card className="h-full p-6 sm:p-7">
                <Eyebrow>Mission</Eyebrow>
                <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                  Build intelligent products that help people go from confusion
                  to action. And create spaces where more people get the chance
                  to build with confidence.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full p-6 sm:p-7">
                <Eyebrow>Vision</Eyebrow>
                <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                  A world where access to clarity, direction, and the chance to
                  create isn&apos;t limited to a small group of people.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* S5 — WHAT WE CARE ABOUT */}
      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-4">
              <Eyebrow>What shapes our decisions</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                The stuff we actually stick to.
              </h2>
            </Reveal>
            <div className="md:col-span-8">
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {VALUES.map((item, i) => (
                  <Reveal key={item.quote} delay={0.06 + i * 0.08}>
                    <div>
                      <span className="font-label text-xs font-medium tracking-[0.24em] text-signal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-3 font-display text-xl leading-snug text-ink sm:text-2xl">
                        {item.quote}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.body}
                      </p>
                      <span
                        aria-hidden
                        className="mt-4 block h-px w-12 bg-gradient-to-r from-brand to-transparent"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* S6 — CTA */}
      <section className="border-t border-hairline py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
              Now that you know who we are, see what we&apos;re making.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CTA_CARDS.map((card, i) => (
              <Reveal key={card.href} delay={0.08 + i * 0.06}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-hairline bg-paper p-7 transition-colors hover:border-brand/40"
                >
                  <div>
                    <Eyebrow>{card.label}</Eyebrow>
                    <h3 className="mt-4 font-display text-2xl text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-pretty leading-relaxed text-muted">
                      {card.body}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-label text-[13px] font-medium tracking-tight text-brand">
                    {card.cta}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
