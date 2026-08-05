import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

const WHY_ORYVA = [
  {
    heading: "“Make it useful or don’t make it.”",
    body: "That’s our filter. Every feature, every decision runs through one question: does this actually help someone?",
  },
  {
    heading: "“You’re more than a job title.”",
    body: "Our product exists because generic career advice fails real people. Your context matters. We build around it.",
  },
  {
    heading: "“We keep builders in the room.”",
    body: "The best ideas get sharper when real people poke holes in them. That’s why our community isn’t an add-on. It’s part of how we work.",
  },
];

const SIDES = [
  {
    label: "The Product",
    title: "The Product",
    body: "See how your skills, interests, and experience connect to real next steps.",
    href: "/product",
    cta: "See the Product",
  },
  {
    label: "ORYVA FORGE",
    title: "ORYVA FORGE",
    body: "Join workshops, get mentorship, or build something real through Signal to Ship.",
    href: "/forge",
    cta: "Enter FORGE",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* S2 — THE PROBLEM */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-8">
            <Reveal className="md:col-span-4">
              <Eyebrow>Sound familiar?</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                You have the ambition. What you don&apos;t have is a clear picture.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-8">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                You&apos;ve got skills, interests, and ideas, but no way to see how they
                connect. Career advice feels generic. Job boards show you titles, not
                directions. And when you want to build something of your own, there&apos;s
                no space to try without pressure to be perfect. You&apos;re not lost. You
                just don&apos;t have the right tools to see what&apos;s actually in front
                of you.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* S3 — PRODUCT TEASER */}
      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-6">
              <Eyebrow>The Product</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                It starts with what you already know about yourself.
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-ink-soft">
                Tell it your skills, interests, and experience. The platform finds patterns
                you&apos;d miss on your own and turns them into career paths, skill gaps to
                close, and opportunities worth exploring.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Button size="lg" asChild>
                    <Link href="/product">Join the Waitlist</Link>
                  </Button>
                </Magnetic>
                <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-4 py-1.5 font-label text-xs tracking-tight text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  In development
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* S4 — FORGE TEASER */}
      <section className="border-t border-hairline py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-6">
              <Eyebrow>ORYVA FORGE</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                A space where builders learn by doing.
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-ink-soft">
                FORGE is for people who want to go beyond thinking about ideas. Workshops to
                pick up real skills. Mentorship to get unstuck. Fellowships to develop one
                idea with depth. And Signal to Ship, a hackathon where teams turn real-world
                problems into working proof.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Workshops", "Mentorship", "Fellowships", "Signal to Ship"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-hairline bg-paper-2 px-3.5 py-1 font-label text-xs tracking-tight text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Magnetic>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/forge">Explore FORGE</Link>
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* S5 — WHAT DRIVES US */}
      <section className="border-t border-hairline bg-paper-2 py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Why ORYVA AI</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
              Built by people who&apos;d rather listen than pitch.
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-hairline border-y border-hairline">
            {WHY_ORYVA.map((item, i) => (
              <Reveal key={item.heading} delay={i * 0.06}>
                <div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr] md:items-baseline">
                  <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                    {item.heading}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link href="/about" className="flex items-center gap-2">
                  Get to know us
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* S6 — CHOOSE YOUR PATH */}
      <section className="border-t border-hairline py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Where to go next</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
              Pick the path that fits where you are.
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
    </>
  );
}
