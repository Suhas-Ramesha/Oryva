import Link from "next/link";
import { ArrowRight, Cpu, Code2, Hammer, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { ProductMockup } from "@/components/ui/product-mockup";
import { Hero } from "@/components/sections/hero";

const WHAT_WE_DO = [
  {
    icon: Cpu,
    title: "AI Platforms",
    description: "We architect and ship AI-driven platforms end-to-end — concept to production.",
    href: "/products",
  },
  {
    icon: Code2,
    title: "Product Engineering",
    description: "Architecture, infrastructure, and full-stack engineering for everything we build.",
    href: "/services",
  },
  {
    icon: Hammer,
    title: "ORYVA FORGE",
    description: "Workshops, mentorship, hackathons, and fellowships for the builder community.",
    href: "/forge",
  },
  {
    icon: Users,
    title: "Client Services",
    description: "Product-engineering partnerships for teams who need senior technical execution.",
    href: "/services",
  },
];

const WHY_ORYVA = [
  {
    n: "01",
    title: "AI-first approach",
    description: "Every system we design starts from what's newly possible with AI — not bolted on after.",
  },
  {
    n: "02",
    title: "Hands-on engineering",
    description: "We write the code, own the architecture, and run what we ship. No hand-off, no deck.",
  },
  {
    n: "03",
    title: "Community-driven",
    description: "ORYVA FORGE keeps us close to builders — the people testing ideas in real time.",
  },
  {
    n: "04",
    title: "Production-focused",
    description: "Demos are easy. We optimize for what survives contact with real users.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-t border-border-subtle py-28">
        <Container>
          <Reveal>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ideas into working intelligence.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {WHAT_WE_DO.map(({ icon: Icon, title, description, href }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <Link href={href} className="group block h-full">
                  <Card className="h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_40px_-12px_var(--accent)]">
                    <Icon className="h-7 w-7 text-accent-bright" strokeWidth={1.5} />
                    <h3 className="mt-6 font-display text-xl font-medium tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border-subtle bg-background-elevated py-28">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Featured Product</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Product name to be announced.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              We&apos;re building an AI-powered career platform — helping people navigate
              decisions, skills, and opportunities with AI as a genuine co-pilot, not a
              chatbot bolted onto a job board.
            </p>
            <Button className="mt-8" variant="secondary" asChild>
              <Link href="/products" className="flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.15}>
            <ProductMockup />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border-subtle py-28">
        <Container>
          <Reveal>
            <Eyebrow>Why ORYVA-AI</Eyebrow>
          </Reveal>
          <div className="mt-10 divide-y divide-border-subtle border-y border-border-subtle">
            {WHY_ORYVA.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.06}>
                <div className="grid gap-4 py-8 md:grid-cols-[100px_1fr_2fr] md:items-baseline">
                  <span className="font-mono text-sm text-muted-2">{item.n}</span>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-gradient-to-br from-surface to-surface-2 px-8 py-16 text-center md:px-16">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
              <div className="relative">
                <Eyebrow className="justify-center">ORYVA FORGE · Current Cohort</Eyebrow>
                <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Workshops. Mentorship. Hackathons. Fellowships.
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
                  One program, four ways in. Find the track that fits where you are.
                </p>
                <Magnetic className="mt-8 inline-block">
                  <Button size="lg" asChild>
                    <Link href="/forge">Join ORYVA FORGE</Link>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
