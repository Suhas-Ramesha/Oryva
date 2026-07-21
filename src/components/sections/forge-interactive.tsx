"use client";

import * as React from "react";
import { BookOpen, Users, Zap, Rocket, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ForgeApplicationForm, type Track } from "@/components/forms/forge-application-form";

const TRACKS: {
  key: Track;
  icon: typeof BookOpen;
  format: string;
  description: string;
}[] = [
  {
    key: "Workshop",
    icon: BookOpen,
    format: "Short, hands-on sessions",
    description: "Practical sessions on AI tooling, product engineering, and system design — led by the ORYVA-AI team.",
  },
  {
    key: "Mentorship",
    icon: Users,
    format: "1:1 / small-group guidance",
    description: "Ongoing guidance from ORYVA-AI builders and invited mentors for people working on their own projects.",
  },
  {
    key: "Hackathon",
    icon: Zap,
    format: "Timed build events",
    description: "Competitive, time-boxed events where teams build and ship a working product — judged, sometimes prized.",
  },
  {
    key: "Fellowship",
    icon: Rocket,
    format: "Extended, selective track",
    description: "A longer, selective track for a small cohort to build a real project with sustained mentorship and support.",
  },
];

export function ForgeInteractive() {
  const [selectedTrack, setSelectedTrack] = React.useState<Track>("Workshop");
  const formRef = React.useRef<HTMLDivElement>(null);

  const handleApply = (track: Track) => {
    setSelectedTrack(track);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {TRACKS.map(({ key, icon: Icon, format, description }, i) => (
          <Reveal key={key} delay={i * 0.07}>
            <Card className="flex h-full flex-col p-8">
              <Icon className="h-7 w-7 text-accent-bright" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{key}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-2">
                {format}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{description}</p>
              <Button
                variant="secondary"
                className="mt-6 w-fit"
                onClick={() => handleApply(key)}
              >
                <span className="flex items-center gap-2">
                  Apply — {key}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Button>
            </Card>
          </Reveal>
        ))}
      </div>

      <div ref={formRef} id="apply" className="mt-28 scroll-mt-28">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-border-subtle bg-surface p-8 md:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-bright">
              Application
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Apply to ORYVA FORGE
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Pick your track below — the form adapts to what we need to know for
              each one.
            </p>
            <div className="mt-8">
              <ForgeApplicationForm defaultTrack={selectedTrack} key={selectedTrack} />
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
