"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Sparkles, Hammer } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/lib/mock-auth";

export function AccountView() {
  const { user, ready, logout } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (ready && !user) router.replace("/login");
  }, [ready, user, router]);

  if (!ready || !user) {
    return (
      <Container className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-muted-2">Loading your account…</p>
      </Container>
    );
  }

  const initial = user.name.charAt(0).toUpperCase();

  return (
    <Container className="pt-40 pb-28">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border-strong bg-surface-2 font-display text-xl text-accent-bright">
            {initial}
          </div>
          <div>
            <Eyebrow>Your Account</Eyebrow>
            <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Welcome back, {user.name}.
            </h1>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            logout();
            router.push("/");
          }}
        >
          <span className="flex items-center gap-2">
            <LogOut className="h-4 w-4" /> Log Out
          </span>
        </Button>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Card className="p-8">
          <Sparkles className="h-6 w-6 text-accent-bright" strokeWidth={1.5} />
          <h3 className="mt-5 font-display text-lg font-medium tracking-tight">
            Early Product Access
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            You&apos;re on the list for our AI-powered career platform. We&apos;ll email{" "}
            {user.email} the moment it&apos;s ready.</p>
          <Link href="/products" className="mt-6 inline-block text-sm font-medium text-accent-bright hover:underline">
            View product status
          </Link>
        </Card>

        <Card className="p-8">
          <Hammer className="h-6 w-6 text-accent-bright" strokeWidth={1.5} />
          <h3 className="mt-5 font-display text-lg font-medium tracking-tight">
            ORYVA FORGE Applications
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            No applications yet. Apply to a track — Workshops, Mentorship,
            Hackathons, or Fellowships — and track it here.
          </p>
          <Link href="/forge" className="mt-6 inline-block text-sm font-medium text-accent-bright hover:underline">
            Browse ORYVA FORGE tracks
          </Link>
        </Card>
      </div>
    </Container>
  );
}
