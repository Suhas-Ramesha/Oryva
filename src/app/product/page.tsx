import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import { Magnetic } from "@/components/ui/magnetic";
import { ProductJourney } from "@/components/sections/product-journey";

export const metadata: Metadata = {
  title: "Product",
  description:
    "ORYVA AI is building a career platform that reads your full picture, not just your resume. It helps you see paths you would miss on your own and gives you a realistic next step, not a generic checklist.",
};

const STEPS = [
  {
    index: "01",
    title: "Tell it your story",
    body: "Share your skills, interests, experiences, and the questions on your mind. Not a form with 50 fields. A conversation that actually listens.",
  },
  {
    index: "02",
    title: "See what you’ve been missing",
    body: "The platform connects the dots across everything you shared. It surfaces patterns, overlaps, and possibilities that are nearly impossible to see when you’re looking at your own life from the inside.",
  },
  {
    index: "03",
    title: "Get a real next step",
    body: "Not a dream job title. Not a vague “follow your passion.” Actual paths to explore, skills to build, and opportunities that match where you are right now.",
  },
];

const PROBLEMS = [
  "You search for career options and get the same 10 listicles.",
  "Career counselors have 20 minutes and a template.",
  "Job boards show you titles, not directions.",
  "Personality quizzes give you a label, not a plan.",
];

const DIFFERENTIATORS = [
  {
    title: "It starts with you, not a job listing.",
    body: "Most career platforms start with the market and try to fit you into it. We start with you and help you see where you genuinely belong.",
  },
  {
    title: "It connects, not just collects.",
    body: "Filling out a profile is not the point. The platform actively finds relationships between your skills, interests, and real opportunities you wouldn’t spot on your own.",
  },
  {
    title: "It grows with you.",
    body: "Your career is not static. Neither is this. As you learn, explore, and change direction, the platform keeps up with who you’re becoming.",
  },
];

export default function ProductPage() {
  return (
    <div className="product-figma-page">
      <section className="product-figma-hero relative min-h-[540px] overflow-hidden pb-12 pt-12 sm:min-h-[700px] sm:pt-20 lg:min-h-[835px] lg:pb-16 lg:pt-[92px]">
        <div className="product-figma-ribbon pointer-events-none absolute inset-x-0 top-0 h-[540px] sm:h-[680px] lg:h-[910px]" />
        <Container className="relative max-w-[1420px]">
          <Reveal className="flex justify-center">
            <p className="font-label text-[16px] font-medium text-brand-bright sm:text-[20px] lg:text-[25px]">Gapdecipher</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-8 max-w-[1535px] font-display text-[36px] leading-[1.04] tracking-[-0.035em] text-ink sm:mt-12 sm:text-6xl lg:text-[103.687px] lg:leading-[135px]">
              <span>You have the skills, interests and experience</span>
              <br /> <span className="text-[#5aabff]">You just can’t see how they connect.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[1141px] text-pretty text-[14px] leading-[1.32] text-muted sm:mt-8 sm:text-xl lg:mt-[53px] lg:text-[22px] lg:leading-[27px]">
              ORYVA AI is building a career platform that reads your full picture, not just your resume. It helps you see paths you would miss on your own and gives you a realistic next step, not a generic checklist.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-6 lg:mt-[62px]">
              <Magnetic>
                <Button size="lg" asChild className="h-[52px] px-7 text-[15px] lg:h-[64px] lg:px-10 lg:text-[18px]">
                  <Link href="#waitlist" className="group flex items-center gap-2">
                    Join the waitlist <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 pt-5 sm:pb-28 lg:pb-[160px]">
        <Container className="max-w-[1420px]">
          <Reveal className="text-center">
            <p className="font-label text-[17px] font-medium text-brand-bright sm:text-[20px] lg:text-[25px]">Sounds Familiar?</p>
            <h2 className="mx-auto mt-5 max-w-[837px] font-display text-[38px] leading-[1.15] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[44px] lg:leading-[1.28]">
              Career advice wasn’t built for how people actually think.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-10 grid gap-5 md:grid-cols-2 md:gap-x-[16.3%] md:gap-y-[26px] lg:mt-[105px]">
              {PROBLEMS.map((problem) => (
                <li key={problem} className="product-figma-problem flex min-h-[108px] items-center px-7 text-center text-[16px] leading-snug text-muted sm:text-lg lg:px-10 lg:text-[20px] lg:leading-6">
                  {problem}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28 lg:pb-[128px]">
        <Container className="max-w-[1420px]">
          <Reveal>
            <div className="rounded-[25px] bg-paper-2 px-7 py-12 text-center sm:px-12 sm:py-16 lg:min-h-[343px] lg:px-24 lg:py-10">
              <p className="font-label text-[17px] font-medium text-brand-bright sm:text-[20px] lg:text-[25px]">What we’re building</p>
              <h2 className="mx-auto mt-5 max-w-[809px] font-display text-[38px] leading-[1.15] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[42px] lg:leading-[1.28]">
                A platform that understands context, not just credentials.
              </h2>
              <p className="mx-auto mt-8 max-w-[977px] text-pretty text-[15px] leading-[1.35] text-muted sm:text-lg lg:mt-8 lg:text-[20px] lg:leading-6">
                Your skills, interests, experience, and the questions you’re sitting with. It finds patterns you would have missed on your own. Skills that connect across fields. Interests that point somewhere real. Gaps worth closing. Paths worth exploring. The result is not a career plan carved in stone. It’s the clarity you need to make your own next move with confidence.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28 lg:pb-[129px]">
        <Container className="max-w-[1420px]">
          <Reveal>
            <p className="font-label text-[17px] font-medium text-brand-bright sm:text-[20px] lg:text-[25px]">The Experience</p>
            <h2 className="mt-5 max-w-[583px] font-display text-[38px] leading-[1.15] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[41px] lg:leading-[1.28]">
              From what you know to what you do next.
            </h2>
          </Reveal>
          <div className="mt-10 lg:mt-[92px]"><ProductJourney steps={STEPS} /></div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28 lg:pb-[160px]">
        <Container className="max-w-[1420px]">
          <Reveal>
            <div className="rounded-[25px] bg-paper-2 px-7 py-12 text-center sm:px-12 sm:py-16 lg:min-h-[566px] lg:px-[68px] lg:py-10">
              <p className="font-label text-[17px] font-medium text-brand-bright sm:text-[20px] lg:text-[25px]">How are we different?</p>
              <h2 className="mx-auto mt-5 max-w-[847px] font-display text-[38px] leading-[1.15] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[44px] lg:leading-[1.28]">
                What makes this different from everything else out there.
              </h2>
              <div className="mt-10 grid gap-9 text-left md:grid-cols-3 md:gap-[9.4%] lg:mt-[89px]">
                {DIFFERENTIATORS.map((item) => (
                  <div key={item.title} className="border-t border-[#334368] pt-8 lg:pt-[92px]">
                    <h3 className="font-display text-[31px] leading-[1.15] tracking-[-0.035em] text-ink lg:text-[40px] lg:leading-[1.3]">{item.title}</h3>
                    <p className="mt-5 text-pretty text-[15px] leading-[1.35] text-muted lg:mt-5 lg:text-[20px] lg:leading-6">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="waitlist" className="scroll-mt-28 pb-24 sm:pb-32 lg:pb-[92px]">
        <Container className="flex max-w-[1420px] flex-col items-center text-center">
          <Reveal>
            <p className="font-label text-[17px] font-medium text-brand-bright sm:text-[20px] lg:text-[25px]">Join the waitlist</p>
            <h2 className="mx-auto mt-5 max-w-[853px] font-display text-[38px] leading-[1.15] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[44px] lg:leading-[1.28]">
              Early access. Real input. You help shape what comes next.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-9 flex w-full justify-center lg:mt-[75px]"><WaitlistForm layout="centered" /></Reveal>
        </Container>
      </section>
    </div>
  );
}
