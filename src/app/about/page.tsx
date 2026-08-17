import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "ORYVA AI is a product company that builds intelligent tools for real people. Not demos. Not pitches.",
};

const WAVE_LINES = Array.from({ length: 34 }, (_, index) => {
  const offset = index * 7;
  const leftY = 296 + offset;
  const centerY = 415 - index * 2.4;
  const rightY = 160 + offset * 0.72;

  return `M -70 ${leftY} C 150 ${260 - offset * 1.1}, 315 ${455 - offset * 0.28}, 560 ${centerY} C 780 ${374 - offset * 0.18}, 930 ${60 + offset * 0.75}, 1270 ${rightY}`;
});

const MISSION_CARDS = [
  {
    title: "Mission",
    body: "Build intelligent products that help people move from confusion to action. And create spaces where more people get the confidence to build something of their own.",
  },
  {
    title: "Vision",
    body: "A world where access to clarity, direction, and the chance to create isn't something only a few people get.",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Useful first, always",
    body: "If it doesn't help someone do something better, it doesn't leave the building. We don't build things for applause.",
    position: "md:left-0 md:top-0",
  },
  {
    number: "02",
    title: "People before technology",
    body: "Every product begins with a real moment someone is stuck in. The technology shows up after we've sat with the problem long enough to understand it.",
    position: "md:right-0 md:top-[155px]",
  },
  {
    number: "03",
    title: "Stay close to the chaos",
    body: "We don't build from a distance. We stay near people testing, questioning, and poking holes in our work. That's where the good ideas come from.",
    position: "md:left-0 md:top-[340px]",
  },
  {
    number: "04",
    title: "Keep going after launch.",
    body: "Shipping is step one, not the finish line. We keep listening, keep fixing, keep making it better for the people who showed up and stayed.",
    position: "md:right-0 md:top-[515px]",
  },
];

const CTA_CARDS = [
  {
    title: "The Product",
    body: "See how your skills, interests, and experience connect to real next steps.",
    href: "/product",
    cta: "See the Product",
  },
  {
    title: "ORYVA FORGE",
    body: "Join workshops, get mentorship, or build something real through Signal to Ship.",
    href: "/forge",
    cta: "Enter FORGE",
  },
];

function BlueLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-label text-[19px] font-medium tracking-tight text-[#4eb0ff]">
      {children}
    </p>
  );
}

function WaveField() {
  return (
    <svg
      viewBox="0 0 1200 520"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-1/2 top-[-40px] h-[545px] w-[1280px] -translate-x-1/2 opacity-75"
      aria-hidden
    >
      <defs>
        <linearGradient id="about-wave-stroke" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#00c6df" stopOpacity="0.7" />
          <stop offset="46%" stopColor="#2448df" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#02bfd6" stopOpacity="0.68" />
        </linearGradient>
      </defs>
      {WAVE_LINES.map((line, index) => (
        <path
          key={`${line}-${index}`}
          d={line}
          fill="none"
          stroke="url(#about-wave-stroke)"
          strokeWidth="2.2"
          opacity={0.36 + index * 0.012}
        />
      ))}
    </svg>
  );
}

function MissionCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="flex min-h-[184px] flex-col justify-between rounded-[14px] bg-[#0d131c] px-6 py-5 shadow-[0_18px_36px_rgba(0,0,0,0.24)]">
      <BlueLabel>{title}</BlueLabel>
      <p className="max-w-[330px] text-[15px] leading-[1.2] text-[#c5c8d0]">{body}</p>
    </article>
  );
}

function PrincipleCard({
  number,
  title,
  body,
  position,
}: {
  number: string;
  title: string;
  body: string;
  position: string;
}) {
  return (
    <article
      className={`relative min-h-[260px] overflow-hidden rounded-[14px] border border-[#3d9fff] bg-[radial-gradient(circle_at_100%_0%,rgba(54,122,210,0.18),transparent_34%),#080d14] px-6 py-6 shadow-[0_18px_34px_rgba(0,0,0,0.22)] md:absolute md:w-[354px] ${position}`}
    >
      <span
        aria-hidden
        className="absolute right-4 top-3 h-5 w-5 rounded-br-[18px] bg-[#386fbd] [clip-path:polygon(60%_0,100%_0,100%_100%,0_100%)] opacity-80"
      />
      <p className="font-label text-[17px] font-medium tracking-tight text-[#4eb0ff]">
        {number}
      </p>
      <h3 className="mt-5 font-display text-[27px] font-normal leading-tight text-white">
        {title}
      </h3>
      <p className="mt-6 max-w-[315px] text-[14px] leading-[1.22] text-[#c3c7d0]">
        {body}
      </p>
    </article>
  );
}

function PathCard({ card }: { card: (typeof CTA_CARDS)[number] }) {
  return (
    <Link
      href={card.href}
      className="group flex min-h-[266px] flex-col justify-between rounded-[14px] border border-white/10 bg-[#050608] px-6 py-10 transition hover:border-[#4eb0ff]/70 sm:px-8"
    >
      <div>
        <h3 className="font-display text-[30px] font-normal leading-tight text-white">
          {card.title}
        </h3>
        <p className="mt-8 max-w-[450px] text-[15px] leading-[1.2] text-[#c5c8d0]">
          {card.body}
        </p>
      </div>
      <span className="inline-flex items-center gap-3 text-[19px] font-medium tracking-tight text-[#4eb0ff]">
        {card.cta}
        <ArrowUpRight
          className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-[#050608] text-white">
      <section className="relative px-6 pb-4 pt-[74px] text-center">
        <WaveField />
        <div className="relative z-10 mx-auto max-w-[1080px]">
          <BlueLabel>ABOUT</BlueLabel>
          <h1 className="mt-7 font-display text-[39px] font-normal leading-[1.04] tracking-[0] text-white sm:text-[39px] lg:text-[39px] lg:whitespace-nowrap">
            Why does technology forget about the person using it?
          </h1>
          <p className="mx-auto mt-8 max-w-[850px] text-[18px] leading-[1.25] text-[#c7cad2]">
            We&apos;re a product company that builds intelligent tools for real people.
            Not demos. Not pitches. Products that help someone think clearer, decide
            better, and actually move forward.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-[168px] max-w-[780px]">
          <BlueLabel>How we started</BlueLabel>
          <h2 className="mt-5 font-display text-[27px] font-normal leading-tight text-white">
            The problem wasn&apos;t the technology. It was who it was built for.
          </h2>
          <p className="mx-auto mt-7 max-w-[740px] text-[15px] leading-[1.18] text-[#c7cad2]">
            We kept seeing the same thing. Smart tools built for numbers, not for
            people. Career platforms that treat everyone like the same person. AI
            that looks great in a demo and gets forgotten after the first click. We
            started ORYVA AI because we felt someone should build the other kind.
            The kind that begins with a real person, sits with their real situation,
            and asks one honest question: what would actually help here?
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-4 max-w-[740px] rounded-[14px] bg-[#0d131c] px-6 py-7">
          <BlueLabel>In short</BlueLabel>
          <p className="mt-6 font-display text-[29px] font-normal leading-tight text-white">
            We build products. We back builders.
          </p>
        </div>
      </section>

      <section className="px-6 pb-[72px] pt-4">
        <div className="mx-auto grid max-w-[740px] gap-9 md:grid-cols-2">
          {MISSION_CARDS.map((card) => (
            <MissionCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="px-6 pb-[80px]">
        <div className="mx-auto max-w-[740px]">
          <BlueLabel>What shapes our decisions</BlueLabel>
          <h2 className="mt-4 font-display text-[30px] font-normal leading-tight text-white">
            The stuff we actually stick to.
          </h2>

          <div className="relative mt-12 grid gap-8 md:min-h-[810px] md:block">
            {PRINCIPLES.map((principle) => (
              <PrincipleCard key={principle.number} {...principle} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-[132px] text-center">
        <div className="relative mx-auto flex min-h-[210px] max-w-[820px] items-center justify-center">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_28px_10px_rgba(72,169,255,0.52)]"
          />
          <h2 className="relative z-10 font-display text-[28px] font-normal leading-tight text-white">
            Now that you know who we are, see what we&apos;re making
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1010px] gap-10 text-left md:grid-cols-2 md:gap-24">
          {CTA_CARDS.map((card) => (
            <PathCard key={card.href} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}
