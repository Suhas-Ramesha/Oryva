"use client";

import Link from "next/link";
import { BookOpen, Users, Rocket, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { getTrackSlug, type Track } from "@/lib/forge/tracks";

const TRACKS: {
  title: string;
  track: Track;
  icon: typeof BookOpen;
  subtitle: string;
  description: string;
}[] = [
  {
    title: "Workshops",
    track: "Workshop",
    icon: BookOpen,
    subtitle: "Learn a skill. Use it the same day.",
    description:
      "Short, focused sessions where you pick up something practical and apply it before you leave. AI tools, product thinking, design, systems, or turning a messy idea into something tangible.",
  },
  {
    title: "Mentorship",
    track: "Mentorship",
    icon: Users,
    subtitle: "Get unstuck with honest guidance.",
    description:
      "One-on-one conversations with people who’ve been through it. Whether you need help shaping a project, improving your portfolio, making a tough call, or just figuring out what to focus on next.",
  },
  {
    title: "Fellowships",
    track: "Fellowship",
    icon: Rocket,
    subtitle: "Go deeper with one idea that matters.",
    description:
      "For a small group ready to commit real time to one project. You get ongoing feedback, structure, and the space to develop work with depth, not just speed.",
  },
];

export function ForgeInteractive() {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {TRACKS.map(({ title, track, icon: Icon, subtitle, description }, i) => (
        <Reveal key={track} delay={i * 0.08} className="h-full">
          <Card className="group flex h-full flex-col p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_22px_48px_-30px_rgba(110,168,255,0.7)]">
            <Icon
              className="h-7 w-7 text-brand transition-colors duration-300 group-hover:text-brand-bright"
              strokeWidth={1.5}
              aria-hidden
            />
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl leading-tight text-ink">
              {title}
            </h2>
            <p className="mt-2 font-display text-base italic text-ink-soft">
              {subtitle}
            </p>
            <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted">
              {description}
            </p>
            <Magnetic className="mt-8 inline-block w-fit" strength={0.25}>
              <Button variant="outline" asChild>
                <Link href={`/forge/apply?track=${getTrackSlug(track)}`}>
                  <span className="flex items-center gap-2">
                    Apply for {title}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              </Button>
            </Magnetic>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
