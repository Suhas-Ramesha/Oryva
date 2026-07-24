import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { SocialIcon, SOCIALS } from "@/components/ui/social-icon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ORYVA-AI — about the product, ORYVA FORGE, a partnership, or simply to say hello.",
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <Container>
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Let&apos;s start somewhere.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Whether you have a question about the product, want to join ORYVA FORGE, are
            interested in a partnership, or simply want to say hello, we would love to hear
            from you.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* LEFT column */}
          <Reveal>
            <div className="flex flex-col">
              <p className="max-w-md text-pretty text-lg leading-relaxed text-ink-soft">
                Tell us a little about what is on your mind. You do not need a polished
                proposal. A few honest lines are enough to start the conversation.
              </p>

              <div className="mt-10">
                <div className="font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.22em] text-muted-2">
                  Email us
                </div>
                <a
                  href="mailto:contact@oryva-ai.com"
                  className="mt-3 inline-flex items-center gap-3 text-ink transition-colors hover:text-brand"
                >
                  <Mail className="h-5 w-5 text-brand" aria-hidden />
                  contact@oryva-ai.com
                </a>
              </div>

              <div className="mt-10 flex items-center gap-3">
                {SOCIALS.map(({ platform, label, href }) => (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline-strong text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>

              <p className="mt-12 max-w-sm text-pretty text-sm leading-relaxed text-muted">
                Good things often begin with a small message, a curious question, or an idea
                that is not fully formed yet. Send it anyway.
              </p>
            </div>
          </Reveal>

          {/* RIGHT column */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-hairline bg-paper-2 p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
