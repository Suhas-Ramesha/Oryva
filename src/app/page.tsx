import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { NetworkNodes } from "@/components/ui/network-nodes";

const HERO_CARDS = [
  {
    title: "Products and people, side by side",
    body: "We stay close to real questions so the work we ship keeps earning its place.",
    kind: "quote",
  },
  {
    title: "Where ideas become real things",
    body: "Workshops, mentorship, and fellowships for builders who learn by shipping proof.",
    kind: "tracks",
  },
  {
    title: "Built to help you see the way forward",
    body: "A career platform shaped around context, connections, and realistic next steps.",
    kind: "product",
  },
];

const WHY_ITEMS = [
  "Make it useful or don't make it.",
  "You're more than a job title.",
  "We keep builders in the room.",
];

const PATHS = [
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

function HomeNetworkBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(23,92,181,0.13),transparent_34%),linear-gradient(180deg,rgba(4,5,8,0)_0%,#050608_92%)]" />
      <NetworkNodes className="absolute left-1/2 top-0 h-full w-[132%] -translate-x-1/2 opacity-[0.42]" />
      <NetworkNodes className="absolute left-1/2 top-[24%] h-[70%] w-[150%] -translate-x-1/2 opacity-[0.22] blur-[1px]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050608_0%,rgba(5,6,8,0.2)_18%,rgba(5,6,8,0.2)_82%,#050608_100%)]" />
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  withArrow = false,
}: {
  href: string;
  children: ReactNode;
  withArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-12 min-w-[164px] items-center justify-center gap-2 rounded-full bg-[#67b7ff] px-7 text-[15px] font-semibold tracking-tight text-black shadow-[inset_0_2px_6px_rgba(255,255,255,0.42),0_12px_30px_rgba(49,145,245,0.3)] transition hover:bg-[#80c4ff]"
    >
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden /> : null}
    </Link>
  );
}

function OutlineButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-12 min-w-[164px] items-center justify-center rounded-full border border-white/[0.22] bg-black/20 px-7 text-[15px] font-semibold tracking-tight text-white transition hover:border-[#67b7ff] hover:text-[#67b7ff]"
    >
      {children}
    </Link>
  );
}

function TrackPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-8 items-center justify-center rounded-full border border-white/[0.14] bg-[linear-gradient(180deg,#1a222d_0%,#07101a_100%)] px-9 text-[13px] font-semibold text-white shadow-[inset_0_2px_7px_rgba(255,255,255,0.18),0_8px_18px_rgba(0,0,0,0.35)]">
      {children}
    </span>
  );
}

function MiniProductPreview() {
  return (
    <div className="rounded-[12px] bg-[#07090d] p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
      <div className="rounded-[10px] border border-white/[0.08] bg-[#0c1119] p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#55aefa]" />
          </div>
          <span className="font-label text-[7px] uppercase tracking-[0.22em] text-[#778195]">
            Preview
          </span>
        </div>
        <div className="mt-5 flex h-[42px] items-end justify-center gap-1.5 border-b border-white/[0.06] pb-3">
          {[18, 29, 22, 36, 27, 42, 34].map((height, index) => (
            <span
              key={`${height}-${index}`}
              className="w-2 rounded-full bg-[linear-gradient(180deg,#72bcff_0%,#217ce9_100%)]"
              style={{ height }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          <span className="text-[10px] text-[#55aefa]">*</span>
          <span className="font-label text-[8px] uppercase tracking-[0.18em] text-[#778195]">
            In development
          </span>
        </div>
      </div>
    </div>
  );
}

function HeroCard({ card }: { card: (typeof HERO_CARDS)[number] }) {
  return (
    <article className="flex min-h-[292px] min-w-0 flex-col overflow-hidden rounded-[18px] bg-[#0d131c] px-5 py-7 shadow-[0_18px_42px_rgba(0,0,0,0.25)] xl:min-h-[360px] xl:px-7 xl:py-8">
      <h2 className="max-w-[340px] break-words font-display text-[24px] font-normal leading-[1.12] text-white xl:text-[29px]">
        {card.title}
      </h2>
      <p className="mt-6 max-w-[260px] text-[11px] leading-[1.6] text-[#8f98a8] xl:max-w-[320px] xl:text-[13px]">
        {card.body}
      </p>

      {card.kind === "quote" ? (
        <div className="mt-auto w-full max-w-[290px] self-center rounded-[8px] bg-[#06080c] px-4 py-3.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] xl:px-5 xl:py-4">
          <p className="font-display text-[16px] leading-[1.2] text-white xl:text-[18px]">
            Useful products grow from
            <br />
            curious people.
          </p>
          <p className="mt-2.5 max-w-[170px] text-[10px] leading-[1.55] text-[#8f98a8] xl:max-w-[215px] xl:text-[11px]">
            Explore the product, join FORGE, or talk with us about what you are building.
          </p>
        </div>
      ) : null}

      {card.kind === "tracks" ? (
        <div className="mt-auto w-full space-y-2.5 px-2 xl:px-4">
          {["Workshops", "Mentorship", "Fellowships"].map((track) => (
            <div
              key={track}
              className="flex h-7 items-center justify-between rounded-[7px] bg-[#05070a] px-4 text-[11px] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] xl:h-8 xl:text-[12px]"
            >
              {track}
              <span className="h-1.5 w-1.5 rounded-full bg-[#55aefa]" />
            </div>
          ))}
        </div>
      ) : null}

      {card.kind === "product" ? (
        <div className="mt-auto flex justify-center">
          <div className="w-[140px] xl:w-[154px]">
            <MiniProductPreview />
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[760px] pt-[104px] xl:min-h-[820px] xl:pt-[128px]">
        <HomeNetworkBackdrop className="top-0 h-full" />

        <div className="relative z-10 mx-auto max-w-[1120px] px-6 text-center xl:max-w-[1360px]">
          <h1 className="mx-auto max-w-[960px] font-display text-[44px] font-normal leading-[1.06] tracking-[0] text-white sm:text-[47px] lg:text-[49px] lg:whitespace-nowrap xl:max-w-[1280px] xl:text-[61px]">
            For people figuring out what to do next.
          </h1>
          <p className="mx-auto mt-6 max-w-[610px] text-[18px] leading-[1.35] text-[#c2c6cf] xl:max-w-[760px] xl:text-[20px]">
            We build tools that give people clarity when they need it most. And a
            space where builders learn by making, not just watching.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <PrimaryButton href="/product" withArrow>
              See the Product
            </PrimaryButton>
            <OutlineButton href="/forge">Explore FORGE</OutlineButton>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-[62px] grid max-w-[930px] gap-5 px-6 md:grid-cols-3 xl:mt-[70px] xl:max-w-[1210px] xl:gap-6 2xl:max-w-[1280px]">
          {HERO_CARDS.map((card) => (
            <HeroCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="relative pb-16 pt-8">
        <HomeNetworkBackdrop className="-top-[230px] h-[630px]" />

        <div className="relative z-10 mx-auto max-w-[1060px] px-6">
          <div className="text-center">
            <h2 className="font-display text-[28px] font-normal leading-tight text-white sm:text-[30px]">
              You have the ambition. What you need, is a clear picture
            </h2>
            <p className="mx-auto mt-7 max-w-[490px] text-[17px] leading-[1.1] text-[#c1c5ce]">
              You know what you&apos;re good at.
              <br />
              The hard part is knowing where to go next.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-[960px] rounded-[18px] bg-[#0d131c] px-8 py-12 sm:px-[102px] sm:py-[66px]">
            <h2 className="max-w-[790px] font-display text-[29px] font-normal leading-[1.14] text-white sm:text-[31px]">
              It starts with what you already know about yourself.
            </h2>
            <p className="mt-9 text-[15px] leading-[1.3] text-[#c5c8d0]">
              Tell us your skills, interests, and experience.
            </p>
            <p className="mt-5 max-w-[510px] text-[15px] leading-[1.3] text-[#c5c8d0]">
              We turn them into career paths, skill gaps to close, and opportunities
              worth exploring.
            </p>
            <div className="mt-9">
              <PrimaryButton href="/product">Join the Waitlist</PrimaryButton>
            </div>
          </div>

          <div className="mt-[74px] rounded-[18px] border border-[#48a9ff] px-6 py-12 text-center sm:px-12 sm:py-[46px]">
            <p className="font-label text-[22px] font-medium tracking-tight text-[#4eb0ff]">
              ORYVA FORGE
            </p>
            <h2 className="mt-5 font-display text-[29px] font-normal leading-tight text-white sm:text-[31px]">
              A space where builders learn by doing
            </h2>
            <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-[1.15] text-[#c7cad2]">
              FORGE is for people who are done thinking about ideas and ready
              <br className="hidden sm:block" />
              to start making them real.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              {["Workshops", "Mentorship", "Fellowships", "Signal to Ship"].map((track) => (
                <TrackPill key={track}>{track}</TrackPill>
              ))}
            </div>
            <Link
              href="/forge"
              className="mt-9 inline-flex items-center gap-2 text-[21px] font-medium tracking-tight text-[#4eb0ff] underline decoration-[#4eb0ff]/80 underline-offset-4 transition hover:text-[#80c4ff]"
            >
              Enter FORGE
              <ArrowUpRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-14 pt-12 sm:pb-[86px] sm:pt-12">
        <div className="mx-auto max-w-[1248px] px-6">
          <div className="mx-auto max-w-[1060px] rounded-[18px] bg-[#0d131c] px-8 py-12 sm:px-[112px] sm:py-[34px]">
            <p className="font-label text-[19px] font-medium tracking-tight text-[#4eb0ff]">
              Why ORYVA?
            </p>
            <h2 className="mt-8 font-display text-[30px] font-normal leading-tight text-white sm:text-[32px]">
              Built by people who&apos;d rather listen than pitch.
            </h2>
            <div className="mt-10 max-w-[980px] divide-y divide-white/[0.08]">
              {WHY_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[74px] items-center justify-between gap-6"
                >
                  <p className="font-display text-[20px] font-normal leading-tight text-white sm:text-[22px]">
                    {item}
                  </p>
                  <Plus className="h-5 w-5 shrink-0 text-white/[0.14]" strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-[120px] max-w-[1248px]">
            <p className="font-label text-[19px] font-medium tracking-tight text-[#4eb0ff]">
              Where to go next?
            </p>
            <h2 className="mt-7 font-display text-[30px] font-normal leading-tight text-white sm:text-[32px]">
              Pick the path that fits where you are.
            </h2>

            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
              {PATHS.map((path) => (
                <Link
                  key={path.href}
                  href={path.href}
                  className="group flex min-h-[346px] flex-col rounded-[18px] border border-white/[0.07] bg-[#050608] px-8 py-[52px] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#4eb0ff]/70 hover:shadow-[0_24px_58px_rgba(49,145,245,0.1)] sm:px-10"
                >
                  <div>
                    <h3 className="font-display text-[30px] font-normal leading-tight text-white">
                      {path.title}
                    </h3>
                    <p className="mt-11 max-w-[480px] text-[17px] leading-[1.16] text-[#c2c6cf]">
                      {path.body}
                    </p>
                  </div>
                  <span className="mt-11 inline-flex items-center gap-3 text-[21px] font-medium tracking-tight text-[#4eb0ff]">
                    {path.cta}
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
