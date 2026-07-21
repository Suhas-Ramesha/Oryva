import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "ORYVA FORGE", href: "/forge" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "#", short: "in" },
  { label: "Twitter / X", href: "#", short: "X" },
  { label: "Instagram", href: "#", short: "ig" },
  { label: "GitHub", href: "#", short: "gh" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background-elevated">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
            ORYVA<span className="text-accent-bright">-AI</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            We build at the edge of what AI can actually do — AI platforms, technical
            product systems, and ORYVA FORGE, our program for builders.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map(({ label, href, short }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-9 w-9 rounded-full border border-border-subtle text-muted transition-colors hover:border-accent/50 hover:text-accent-bright"
              >
                <SocialIcon label={short} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2">
            Quick Links
          </p>
          <ul className="mt-4 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2">
            Get In Touch
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-2" />
              <a href="mailto:contact@oryva-ai.com" className="hover:text-foreground">
                contact@oryva-ai.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-2" />
              <a href="tel:+910000000000" className="hover:text-foreground">
                +91 XXXXX XXXXX
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border-subtle">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-2 md:flex-row">
          <p>© {year} ORYVA-AI. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.15em]">Building at the edge.</p>
        </Container>
      </div>
    </footer>
  );
}
