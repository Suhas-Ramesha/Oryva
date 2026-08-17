import Link from "next/link";
import { Mail } from "lucide-react";
import { SocialIcon, SOCIALS } from "@/components/ui/social-icon";
import { BrandLogo } from "@/components/layout/brand-logo";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "ORYVA FORGE", href: "/forge" },
  { label: "Product", href: "/product" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#0b0f14]">
      <div className="mx-auto max-w-[880px] px-6 py-12 sm:py-[50px]">
        <p className="font-display text-[19px] italic leading-snug text-white sm:text-[22px]">
          Your next step starts here.
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.35fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center">
              <BrandLogo className="w-[88px]" />
            </Link>
            <p className="mt-5 max-w-[310px] text-[13px] leading-[1.55] text-[#8f98a8]">
              ORYVA AI helps you see where your skills and curiosity actually
              lead. And FORGE gives you a space to build, learn, and grow
              through real work.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ platform, label, href }) => (
                <a
                  key={platform}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[#8f98a8] transition-colors hover:border-[#4eb0ff] hover:text-[#4eb0ff]"
                >
                  <SocialIcon platform={platform} className="h-[13px] w-[13px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-label text-[11px] uppercase tracking-[0.24em] text-[#798397]">
              Explore
            </p>
            <ul className="mt-5 space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#8f98a8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-label text-[11px] uppercase tracking-[0.24em] text-[#798397]">
              Get In Touch
            </p>
            <ul className="mt-5 space-y-3 text-[13px] text-[#8f98a8]">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#8f98a8]" aria-hidden />
                <a href="mailto:contact@oryvaai.com" className="hover:text-white">
                  contact@oryvaai.com
                </a>
              </li>
            </ul>
            <p className="mt-6 max-w-[280px] text-[13px] leading-[1.55] text-[#8f98a8]">
              Got a question, an idea, or just want to say hi? We&apos;re at{" "}
              <a href="mailto:contact@oryvaai.com" className="text-white hover:text-[#4eb0ff]">
                contact@oryvaai.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[880px] flex-col items-center justify-between gap-3 px-6 py-5 text-[11px] text-[#798397] md:flex-row">
          <p>&copy; {year} ORYVA AI. All rights reserved.</p>
          <p className="font-label uppercase tracking-[0.24em]">
            Figure out what&apos;s next. Then go make it.
          </p>
        </div>
      </div>
    </footer>
  );
}
