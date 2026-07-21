import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { SocialIcon } from "@/components/ui/social-icon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ORYVA-AI — for services, ORYVA FORGE, our product, or anything else.",
};

const SOCIALS = [
  { label: "LinkedIn", href: "#", short: "in" },
  { label: "Twitter / X", href: "#", short: "X" },
  { label: "Instagram", href: "#", short: "ig" },
  { label: "GitHub", href: "#", short: "gh" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <Container className="relative grid gap-16 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <Eyebrow>Contact Us</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            We&apos;d love to hear from you.
          </h1>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
            Whether you&apos;re a prospective client, an ORYVA FORGE applicant, or a
            partner — reach out directly.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:contact@oryva-ai.com"
              className="flex items-center gap-3 text-sm text-foreground/90 transition-colors hover:text-accent-bright"
            >
              <Mail className="h-4 w-4 text-muted-2" />
              contact@oryva-ai.com
            </a>
            <a
              href="tel:+910000000000"
              className="flex items-center gap-3 text-sm text-foreground/90 transition-colors hover:text-accent-bright"
            >
              <Phone className="h-4 w-4 text-muted-2" />
              +91 XXXXX XXXXX
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {SOCIALS.map(({ label, href, short }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-10 w-10 rounded-full border border-border-subtle text-muted transition-colors hover:border-accent/50 hover:text-accent-bright"
              >
                <SocialIcon label={short} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border-subtle bg-surface p-8 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
