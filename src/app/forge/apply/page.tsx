import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ForgeApplicationForm } from "@/components/forms/forge-application-form";
import {
  getTrackDescription,
  getTrackLabel,
  parseTrackSlug,
} from "@/lib/forge/tracks";

export const metadata: Metadata = {
  title: "Apply to ORYVA FORGE",
  description:
    "Apply to ORYVA FORGE for Workshops, Mentorship, Fellowships, or Signal to Ship.",
};

type ApplyPageProps = {
  searchParams: Promise<{ track?: string | string[] }>;
};

export default async function ForgeApplyPage({ searchParams }: ApplyPageProps) {
  const params = await searchParams;
  const track = parseTrackSlug(params.track);

  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container>
        <Reveal>
          <Eyebrow>ORYVA FORGE Application</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Apply for {getTrackLabel(track)}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
            {getTrackDescription(track)}
          </p>
          <Link
            href="/forge"
            className="mt-4 inline-flex font-label text-sm font-medium tracking-tight text-brand-bright hover:text-signal-bright"
          >
            Back to ORYVA FORGE
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-hairline bg-paper-2 p-8 md:p-10">
            <ForgeApplicationForm defaultTrack={track} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
