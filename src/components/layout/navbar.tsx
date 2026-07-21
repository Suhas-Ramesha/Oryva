"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/mock-auth";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "ORYVA FORGE", href: "/forge" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
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
          ? "border-b border-border-subtle bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
          ORYVA<span className="text-accent-bright">-AI</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium tracking-tight transition-colors",
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent-bright transition-transform duration-300 group-hover:scale-x-100",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <Link
                href="/account"
                className="flex items-center gap-2 rounded-full border border-border-subtle py-1 pl-1 pr-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-2 font-display text-[11px] text-accent-bright">
                  {user.name.charAt(0).toUpperCase()}
                </span>
                {user.name.split(" ")[0]}
              </Link>
              <button
                aria-label="Log out"
                onClick={logout}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-muted transition-colors hover:text-foreground">
                Log In
              </Link>
              <Button asChild size="sm" variant="secondary">
                <Link href="/register" className="flex items-center gap-1.5">
                  Sign Up
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </>
          )}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border-subtle bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-surface-2 text-foreground"
                      : "text-muted hover:bg-surface-2 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              {user ? (
                <div className="mt-3 flex items-center gap-3">
                  <Link
                    href="/account"
                    className="flex flex-1 items-center gap-2 rounded-lg border border-border-subtle px-3 py-2.5 text-sm font-medium text-foreground"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-2 font-display text-[11px] text-accent-bright">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                    {user.name}
                  </Link>
                  <button
                    aria-label="Log out"
                    onClick={logout}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle text-muted"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="mt-3 flex items-center gap-3">
                  <Button asChild variant="secondary" className="flex-1" size="md">
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button asChild className="flex-1" size="md">
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
