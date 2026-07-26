import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { PullQuote } from "@/components/ui/pull-quote";

const SIDES = [
  {
    label: "The Product",
    title: "For your next move",
    body: "Meet the career platform being shaped around personal context and practical next steps.",
    href: "/product",
    cta: "Meet the product",
  },
  {
    label: "ORYVA FORGE",
    title: "For the builders",
    body: "Enter the builder program for workshops, mentorship, fellowships, and Signal to Ship.",
    href: "/forge",
    cta: "Enter ORYVA FORGE",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-8">
            <Reveal className="md:col-span-4">
              <Eyebrow>A little about us</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                A product company in motion.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-8">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                We build intelligent products and a community for people who want to
                make, test, and grow with technology. Better products come from staying
                close to curious people and real questions.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Where to go next</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
              Choose the door that fits your next step.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {SIDES.map((side, i) => (
              <Reveal key={side.href} delay={0.08 + i * 0.06}>
                <Link
                  href={side.href}
                  className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-hairline bg-paper p-7 transition-colors hover:border-brand/40"
                >
                  <div>
                    <Eyebrow>{side.label}</Eyebrow>
                    <h3 className="mt-4 font-display text-2xl text-ink">{side.title}</h3>
                    <p className="mt-3 text-pretty leading-relaxed text-muted">
                      {side.body}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-label text-[13px] font-medium tracking-tight text-brand">
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

      <section className="border-t border-hairline bg-paper-2 py-16 sm:py-20">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <PullQuote className="max-w-4xl">
              Real ideas deserve more than a good presentation.
              <br className="hidden sm:block" />{" "}
              They deserve a chance to become useful.
            </PullQuote>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
