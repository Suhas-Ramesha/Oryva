import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { PulseRadar } from "@/components/ui/pulse-radar";
import { ForgeInteractive } from "@/components/sections/forge-interactive";

export const metadata: Metadata = {
  title: "ORYVA FORGE",
  description:
    "ORYVA FORGE is ORYVA-AI's program for builders — Workshops, Mentorship, Hackathons, and Fellowships. One program, four ways in.",
};

const STEPS = [
  "Choose a track",
  "Apply / Register",
  "Get matched or join your cohort",
  "Build, learn, or ship",
  "Present, graduate, or get recognized",
];

const BENEFITS = [
  "Direct mentorship from ORYVA-AI builders",
  "Hands-on skill-building, not just theory",
  "Real build experience under real constraints",
  "Certificates and recognition for what you ship",
  "A path from workshop to fellowship for standout builders",
];

export default function ForgePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>ORYVA FORGE</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Workshops. Mentorship. Hackathons. Fellowships.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              One program, four ways in. It runs from a first skill learned in a
              workshop, to guidance from a mentor, to a working prototype at a
              hackathon, to a sustained fellowship for those who want to go the
              distance.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border-subtle py-24">
        <Container>
          <Reveal>
            <Eyebrow>The Four Tracks</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight">
              Find the track that fits where you are.
            </h2>
          </Reveal>

          <ForgeInteractive />
        </Container>
      </section>

      <section className="border-t border-border-subtle bg-background-elevated py-24">
        <Container>
          <Reveal>
            <Eyebrow>Current Cohort</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-col items-start gap-6 rounded-2xl border border-dashed border-border-strong p-10 sm:flex-row sm:items-center">
              <PulseRadar />
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-lg font-medium tracking-tight">
                    Applications open soon
                  </h3>
                  <Badge>Coming Soon</Badge>
                </div>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                  We&apos;re finalizing dates for the next intake. Apply below to any
                  track and we&apos;ll reach out the moment a cohort opens that fits
                  you.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border-subtle py-24">
        <Container className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <Eyebrow>How It Works</Eyebrow>
            <ol className="mt-8 space-y-6">
              {STEPS.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong font-mono text-xs text-accent-bright">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm leading-relaxed text-foreground/90">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Why Join ORYVA FORGE</Eyebrow>
            <ul className="mt-8 space-y-5">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 border-b border-border-subtle pb-5 text-sm leading-relaxed text-muted last:border-0">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border-subtle py-24">
        <Container>
          <Reveal>
            <Eyebrow>Past Cohorts</Eyebrow>
            <div className="mt-8 rounded-2xl border border-border-subtle p-10">
              <div className="flex items-center justify-between">
                {["01", "02", "03"].map((n, i) => (
                  <div key={n} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-border-strong font-mono text-xs text-muted-2">
                        {n}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-2">
                        Cohort
                      </span>
                    </div>
                    {i < 2 && (
                      <div className="mx-3 h-px flex-1 border-t border-dashed border-border-strong" />
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-sm leading-relaxed text-muted">
                Our first cohorts are just getting underway — highlights from past
                workshops, hackathons, and fellowships will appear here once
                available.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
