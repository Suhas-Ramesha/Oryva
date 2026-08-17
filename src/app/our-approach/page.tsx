import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import {
  ApproachProcessList,
  type ApproachProcessStep,
} from "@/components/sections/approach-process-list";
import { HeroBackground } from "@/components/ui/hero-background";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How we work at ORYVA AI: a simple, honest process that keeps the person at the center and the technology in its place.",
};

const PROCESS_STEPS: ApproachProcessStep[] = [
  {
    title: "Find the real problem",
    body: "We look for the specific moment where someone gets stuck. Not a market gap on a spreadsheet. A real person, a real frustration, a real decision that feels harder than it should. If we can't name the problem in one sentence, we're not ready to build.",
  },
  {
    title: "Design for the person first",
    body: "Before we think about AI or features, we figure out the experience. What should this feel like to use? Where does it fit in someone's day? If the product isn't clear and easy the first time someone opens it, the technology behind it doesn't matter.",
  },
  {
    title: "Add intelligence where it helps",
    body: "AI is not the starting point. It's a tool we bring in only where it genuinely makes things better. Surfacing patterns someone would miss. Reducing complexity. Making the product smarter the more you use it. If AI doesn't make it more useful, we leave it out.",
  },
  {
    title: "Ship, learn, keep going",
    body: "Launching is not the end. It's where the real learning begins. We put products in front of real people early, listen to what works and what breaks, and keep improving. A product that stops evolving stops being useful.",
  },
];

const PROMISES = [
  "Clear enough to start using without a tutorial.",
  "Useful enough that people come back on their own.",
  "Smart enough to grow with the person using it.",
];

function BlueLabel({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <p
      className={`font-label text-[17px] font-medium tracking-tight text-[#4eb0ff] ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}

function GlowDisc() {
  return (
    <div
      aria-hidden
      className="absolute left-1/2 top-[32px] h-[265px] w-[265px] -translate-x-1/2 rounded-full bg-black shadow-[0_0_38px_18px_rgba(72,169,255,0.5)] sm:h-[268px] sm:w-[268px]"
    />
  );
}

function PromiseCard({ promise, index }: { promise: string; index: number }) {
  return (
    <article className="relative min-h-[126px] rounded-[14px] border border-[#3d9fff] bg-[radial-gradient(circle_at_100%_0%,rgba(54,122,210,0.18),transparent_34%),#080d14] px-5 py-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#67b7ff] hover:shadow-[0_20px_44px_rgba(49,145,245,0.12)]">
      <span
        aria-hidden
        className="absolute right-4 top-3 h-5 w-5 rounded-br-[18px] bg-[#386fbd] [clip-path:polygon(60%_0,100%_0,100%_100%,0_100%)] opacity-80"
      />
      <p className="font-label text-[16px] font-medium tracking-tight text-[#4eb0ff]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-5 font-display text-[23px] font-normal leading-[1.18] text-white">
        {promise}
      </p>
    </article>
  );
}

export default function OurApproachPage() {
  return (
    <div className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[760px] px-6 pt-[68px]">
        <HeroBackground />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[430px] bg-[linear-gradient(180deg,rgba(13,19,28,0.66)_0%,rgba(5,6,8,0)_100%)]"
        />
        <GlowDisc />

        <div className="relative z-10 mx-auto max-w-[1020px]">
          <div className="text-center">
            <Reveal>
              <BlueLabel centered>Our Approach</BlueLabel>
            </Reveal>
          </div>

          <div className="mt-[54px]">
            <Reveal delay={0.06}>
              <h1 className="max-w-[940px] font-display text-[50px] font-normal leading-[1.08] tracking-[0] text-white sm:text-[62px] lg:text-[65px]">
                Every product starts with a real problem.
                <br />
                <span className="text-[#4eb0ff]">Not a trend.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-12 max-w-[630px] text-[17px] leading-[1.28] text-[#c5c8d0]">
                This is how we work at ORYVA AI. A simple, honest process that keeps
                the person at the center and the technology in its place.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Magnetic className="mt-10 inline-block" strength={0.22}>
                <Link
                  href="#approach-waitlist"
                  className="inline-flex h-12 min-w-[156px] items-center justify-center gap-2 rounded-full bg-[#67b7ff] px-7 text-[15px] font-semibold tracking-tight text-black shadow-[inset_0_2px_6px_rgba(255,255,255,0.42),0_12px_30px_rgba(49,145,245,0.3)] transition hover:bg-[#80c4ff]"
                >
                  Join the waitlist
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Magnetic>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-[98px] rounded-[14px] bg-[#0d131c] px-8 py-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.24)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(49,145,245,0.13)] sm:px-16 sm:py-[52px]">
              <h2 className="mx-auto max-w-[820px] font-display text-[30px] font-normal leading-tight text-white">
                We don&apos;t start with what&apos;s possible. We start with what&apos;s
                needed.
              </h2>
              <p className="mx-auto mt-8 max-w-[705px] text-[14px] leading-[1.18] text-[#c5c8d0]">
                Most companies fall in love with their technology and then go searching
                for a problem to attach it to. We do it the other way around. We find a
                real moment where someone is stuck, confused, or underserved. Then we ask:
                what is the simplest thing we could build that would genuinely help?
                Everything else follows from that.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-[70px] pt-8">
        <div className="mx-auto max-w-[708px]">
          <Reveal>
            <BlueLabel>The Process</BlueLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-[27px] font-normal leading-tight text-white">
              Four stages. One rule: stay useful.
            </h2>
          </Reveal>

          <ApproachProcessList steps={PROCESS_STEPS} />
        </div>
      </section>

      <section className="px-6 pb-[118px] pt-2 text-center">
        <div className="mx-auto max-w-[780px]">
          <Reveal>
            <BlueLabel centered>What we commit to</BlueLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-7 font-display text-[28px] font-normal leading-tight text-white">
              Every product we make should be three things.
            </h2>
          </Reveal>

          <div className="mt-9 grid gap-6 text-left md:grid-cols-3">
            {PROMISES.map((promise, index) => (
              <Reveal key={promise} delay={index * 0.06} className="h-full">
                <PromiseCard promise={promise} index={index} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Magnetic className="mt-10 inline-block" strength={0.22}>
              <Link
                href="/product"
                className="inline-flex h-8 min-w-[145px] items-center justify-center gap-1.5 rounded-full bg-[#67b7ff] px-5 text-[10px] font-semibold tracking-tight text-black shadow-[inset_0_2px_6px_rgba(255,255,255,0.42),0_10px_24px_rgba(49,145,245,0.22)] transition hover:bg-[#80c4ff]"
              >
                See what we&apos;re building
                <ArrowRight className="h-3 w-3" aria-hidden />
              </Link>
            </Magnetic>
          </Reveal>

          <div id="approach-waitlist" className="mt-[58px] scroll-mt-20">
            <Reveal>
              <BlueLabel centered>Join the waitlist</BlueLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mx-auto mt-7 max-w-[640px] font-display text-[28px] font-normal leading-tight text-white">
                Early access. Real input. You help shape what comes next.
              </h2>
            </Reveal>
            <Reveal delay={0.12} className="mt-6 flex justify-center">
              <WaitlistForm layout="centered" />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
