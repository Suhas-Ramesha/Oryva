import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          This page took a turn we did not map.
        </h1>
        <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted">
          The page you are looking for is not here. Let&apos;s get you back to
          something useful.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
