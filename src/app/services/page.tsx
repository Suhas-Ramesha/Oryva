import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Cpu, Network, Layers, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product-engineering services from ORYVA-AI — AI product engineering, platform architecture, design systems, and applied AI integration.",
};

const SERVICES = [
  {
    icon: Cpu,
    title: "AI Product Engineering",
    description: "End-to-end build of AI-driven products — from architecture to a shipped, running system.",
  },
  {
    icon: Network,
    title: "Platform & Infrastructure",
    description: "Technical foundations designed to hold up under real load, not just a demo.",
  },
  {
    icon: Layers,
    title: "Design Systems & Frontend",
    description: "Reusable, well-architected UI systems that scale with your product, not against it.",
  },
  {
    icon: Sparkles,
    title: "Applied AI Integration",
    description: "Bringing AI into an existing product where it earns its place, not where it's decorative.",
  },
];

const PROCESS = [
  { step: "01", title: "Discover", description: "We learn the system, the constraints, and what success looks like." },
  { step: "02", title: "Scope", description: "A clear plan — architecture, milestones, and what we need from you." },
  { step: "03", title: "Build", description: "Senior engineering, shipped in increments you can see and use." },
  { step: "04", title: "Ship & Support", description: "Launch, then stick around for what production actually requires." },
];

const ENGAGEMENTS = [
  {
    title: "Sprint",
    description: "A focused, fixed-scope build — for a defined feature or a proof of concept.",
  },
  {
    title: "Embedded Team",
    description: "Our engineers work inside your team on an ongoing roadmap.",
  },
  {
    title: "Retainer",
    description: "Ongoing architecture and engineering support at a predictable cadence.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Product-engineering services for teams who need senior execution.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              The same architecture and engineering discipline we use to build our
              own products — available as a partnership for yours.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border-subtle py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <Card className="h-full p-8">
                  <Icon className="h-6 w-6 text-accent-bright" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-medium tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border-subtle bg-background-elevated py-24">
        <Container>
          <Reveal>
            <Eyebrow>How We Engage</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.06}>
                <span className="font-mono text-sm text-muted-2">{item.step}</span>
                <h3 className="mt-3 font-display text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border-subtle py-24">
        <Container>
          <Reveal>
            <Eyebrow>Engagement Models</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ENGAGEMENTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border-subtle p-8 transition-colors hover:border-accent/40">
                  <h3 className="font-display text-lg font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-28 pt-4">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-border-strong bg-surface px-8 py-16 text-center md:px-16">
              <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Have a system you need built right?
              </h2>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Get In Touch <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
