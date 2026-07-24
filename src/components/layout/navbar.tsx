"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "ORYVA FORGE", href: "/forge" },
  { label: "Product", href: "/product" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [lastPathname, setLastPathname] = React.useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-hairline bg-paper/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-ink"
        >
          ORYVA<span className="text-brand">-AI</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative font-[family-name:var(--font-label)] text-[13px] font-medium tracking-tight transition-colors",
                  active ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex">
          <Button asChild size="sm" variant="primary">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-hairline bg-paper/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-paper-3 text-ink"
                      : "text-muted hover:bg-paper-3 hover:text-ink"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-3" size="md">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
