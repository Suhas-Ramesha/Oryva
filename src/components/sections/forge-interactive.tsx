"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getTrackSlug, type Track } from "@/lib/forge/tracks";

const TRACKS: {
  title: string;
  track: Track;
  description: string;
  cta: string;
}[] = [
  {
    title: "Workshops",
    track: "Workshop",
    description:
      "Short, focused sessions where you pick up something practical and use it before you leave. AI tools, product thinking, design, systems, or turning a messy idea into something you can actually show someone.",
    cta: "Apply for workshops",
  },
  {
    title: "Mentorship",
    track: "Mentorship",
    description:
      "One-on-one conversations with people who’ve been where you are. Whether you need help shaping a project, building your portfolio, making a hard call, or figuring out what deserves your focus next.",
    cta: "Apply for mentorship",
  },
  {
    title: "Fellowships",
    track: "Fellowship",
    description:
      "For a small group ready to commit real time to one project. You get ongoing feedback, structure, and the space to develop work with depth, not just speed.",
    cta: "Apply for fellowships",
  },
];

export function ForgeInteractive() {
  return (
    <div className="mt-12 grid items-stretch gap-7 lg:grid-cols-3">
      {TRACKS.map(({ title, track, description, cta }, i) => (
        <Reveal key={track} delay={i * 0.08} className="h-full">
          <article className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[1.6rem] border border-[#278de7] bg-[radial-gradient(circle_at_50%_-15%,rgba(36,136,218,0.18),transparent_38%),#06090d] p-7 transition duration-500 hover:-translate-y-1.5 hover:border-[#67b7ff] hover:shadow-[0_26px_60px_-42px_rgba(80,170,255,0.95)] sm:p-8 lg:min-h-[410px]">
            <span className="font-label text-2xl font-semibold text-[#4fa8ff]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden
              className="absolute right-7 top-7 h-8 w-8 rounded-br-[100%] bg-[#3e7bfa]/60 transition duration-500 group-hover:scale-125 group-hover:bg-[#67b7ff]/80"
            />
            <h3 className="mt-10 font-display text-4xl leading-none tracking-[-0.05em] text-white sm:text-5xl lg:text-[2.8rem]">
              {title}
            </h3>
            <p className="mt-8 flex-1 text-pretty text-base font-medium leading-relaxed text-[#aaaeb8] sm:text-lg lg:text-[1.05rem]">
              {description}
            </p>
            <Button
              variant="outline"
              asChild
              className="mt-8 w-fit min-w-[190px] border-white/25 text-sm font-bold hover:border-[#67b7ff]"
            >
              <Link href={`/forge/apply?track=${getTrackSlug(track)}`}>{cta}</Link>
            </Button>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
