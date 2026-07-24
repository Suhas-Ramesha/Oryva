"use client";

import { BookOpen, Users, Rocket, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { selectForgeTrack, type Track } from "@/components/forms/forge-application-form";

const TRACKS: {
  title: string;
  track: Track;
  icon: typeof BookOpen;
  description: string;
}[] = [
  {
    title: "Workshops",
    track: "Workshop",
    icon: BookOpen,
    description:
      "Short, focused sessions for learning a useful skill and applying it immediately. You might explore AI tools, product thinking, interfaces, systems, or the art of making a rough idea tangible. The aim is simple: leave with a new capability and something you can point to.",
  },
  {
    title: "Mentorship",
    track: "Mentorship",
    icon: Users,
    description:
      "For builders who need an honest conversation and a clearer next step. Mentorship offers focused guidance on shaping a project, navigating a decision, improving a portfolio, or finding the confidence to keep going.",
  },
  {
    title: "Fellowships",
    track: "Fellowship",
    icon: Rocket,
    description:
      "For a small group ready to spend more time with one important idea. Fellows receive ongoing feedback, structure, and space to develop work that can travel beyond a single event.",
  },
];

export function ForgeInteractive() {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {TRACKS.map(({ title, track, icon: Icon, description }, i) => (
        <Reveal key={track} delay={i * 0.08}>
          <Card className="flex h-full flex-col p-8">
            <Icon className="h-7 w-7 text-brand" strokeWidth={1.5} aria-hidden />
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl leading-tight text-ink">
              {title}
            </h2>
            <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted">
              {description}
            </p>
            <Magnetic className="mt-8 inline-block w-fit" strength={0.25}>
              <Button variant="outline" onClick={() => selectForgeTrack(track)}>
                <span className="flex items-center gap-2">
                  Apply — {title}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Button>
            </Magnetic>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
