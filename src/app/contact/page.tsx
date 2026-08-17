import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { HeroBackground } from "@/components/ui/hero-background";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon, SOCIALS } from "@/components/ui/social-icon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ORYVA AI about the product, ORYVA FORGE, a partnership, or simply to say hello.",
};

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-[#050608] text-white">
      <section className="relative px-6 pb-[120px] pt-[86px] sm:pt-[102px]">
        <HeroBackground />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[430px] bg-[linear-gradient(180deg,rgba(13,19,28,0.72)_0%,rgba(5,6,8,0)_100%)]"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-[132px] h-px w-[980px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(72,169,255,0.55),transparent)]"
        />

        <div className="relative z-10 mx-auto grid max-w-[1010px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="pt-2">
            <Reveal>
              <p className="font-label text-[19px] font-medium tracking-tight text-[#4eb0ff]">
                Contact
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-7 max-w-[500px] font-display text-[44px] font-normal leading-[1.04] tracking-[0] text-white sm:text-[52px]">
                Let&apos;s start somewhere.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[475px] text-[18px] leading-[1.35] text-[#c7cad2]">
                A question about the product, interest in FORGE, a partnership idea,
                or just a hello. Whatever it is, we&apos;d like to hear it.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-11 border-y border-white/[0.08] py-8">
                <p className="font-label text-[12px] uppercase tracking-[0.24em] text-[#798397]">
                  Email us
                </p>
                <a
                  href="mailto:contact@oryvaai.com"
                  className="mt-4 inline-flex items-center gap-3 text-[18px] font-medium tracking-tight text-white transition-colors hover:text-[#67b7ff]"
                >
                  <Mail className="h-5 w-5 text-[#67b7ff]" aria-hidden />
                  contact@oryvaai.com
                </a>

                <div className="mt-8 flex items-center gap-3">
                  {SOCIALS.map(({ platform, label, href }) => (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#c5c8d0] transition-[transform,border-color,color] duration-300 hover:-translate-y-1 hover:border-[#67b7ff] hover:text-[#67b7ff]"
                    >
                      <SocialIcon platform={platform} className="h-[16px] w-[16px]" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-8 max-w-[420px] font-display text-[25px] italic leading-tight text-white">
                Good things often begin with a few honest lines.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="group rounded-[18px] border border-white/10 bg-[#0d131c]/95 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.26)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#67b7ff]/55 hover:shadow-[0_26px_54px_rgba(49,145,245,0.16)] sm:p-8">
              <p className="text-[16px] leading-[1.45] text-[#c5c8d0]">
                Tell us what&apos;s on your mind. We&apos;ll get back to you.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
