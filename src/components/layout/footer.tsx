import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialIcon, SOCIALS } from "@/components/ui/social-icon";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "ORYVA FORGE", href: "/forge" },
  { label: "Product", href: "/product" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-paper-3">
      <Container className="py-12 sm:py-14">
        <p className="max-w-xl font-display text-balance text-xl italic leading-snug text-ink sm:text-2xl">
          Ideas, made useful.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-ink"
            >
              ORYVA<span className="text-brand">-AI</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A product company in motion — building intelligent products and a
              community for people who want to make, test, and grow with technology.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ platform, label, href }) => (
                <a
                  key={platform}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-strong text-muted transition-colors hover:border-brand hover:text-brand"
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.2em] text-muted-2">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.2em] text-muted-2">
              Get In Touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-2" aria-hidden />
                <a href="mailto:contact@oryva-ai.com" className="hover:text-ink">
                  contact@oryva-ai.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-hairline">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-2 md:flex-row">
          <p>© {year} ORYVA-AI. All rights reserved.</p>
          <p className="font-[family-name:var(--font-label)] uppercase tracking-[0.15em]">
            Ideas, made useful.
          </p>
        </Container>
      </div>
    </footer>
  );
}
