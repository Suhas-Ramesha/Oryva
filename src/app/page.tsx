import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PullQuote } from "@/components/ui/pull-quote";

const SIDES = [
  {
    label: "The Product",
    title: "For your next move",
    body: "Our first product is being designed for people who are trying to make sense of their next move.",
    href: "/product",
    cta: "Meet the product",
  },
  {
    label: "ORYVA FORGE",
    title: "For the builders",
    body: "ORYVA FORGE gives students, developers, designers, and first-time builders a place to get hands-on with ideas instead of only reading about them.",
    href: "/forge",
    cta: "Enter ORYVA FORGE",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* A little about us */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>A little about us</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-4xl font-[family-name:var(--font-display)] text-balance text-3xl leading-snug text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.18]">
              ORYVA-AI is a product company in motion. We are creating an AI-powered
              career platform and building a community for people who want to make,
              test, and grow with technology.
            </p>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              The two sides belong together: better products come from staying close to
              curious people and real questions.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What we are building */}
      <section className="border-t border-hairline bg-paper-2 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <Eyebrow>What we are building</Eyebrow>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl leading-tight text-ink sm:text-4xl">
                  Two sides, one intent.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={0.1}>
                <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
                  Our first product is being designed for people who are trying to make
                  sense of their next move. Alongside it, ORYVA FORGE gives students,
                  developers, designers, and first-time builders a place to get
                  hands-on with ideas instead of only reading about them.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {SIDES.map((side, i) => (
              <Reveal key={side.href} delay={0.1 + i * 0.08}>
                <Link
                  href={side.href}
                  className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-hairline bg-paper p-8 transition-colors hover:border-brand/40"
                >
                  <div>
                    <Eyebrow>{side.label}</Eyebrow>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-ink">
                      {side.title}
                    </h3>
                    <p className="mt-3 text-pretty leading-relaxed text-muted">
                      {side.body}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-label)] text-[13px] font-medium tracking-tight text-brand">
                    {side.cta}
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

      {/* Brand-line closing band */}
      <section className="py-24 sm:py-32">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <PullQuote className="max-w-3xl">
              Real ideas deserve more than a good presentation. They deserve a chance to
              become useful.
            </PullQuote>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/product">Explore Our Product</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/forge">Discover ORYVA FORGE</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
