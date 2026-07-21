import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { RegisterForm } from "@/components/forms/register-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your ORYVA-AI account for early product access and ORYVA FORGE applications.",
};

export default function RegisterPage() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <Container className="relative flex justify-center">
        <Reveal className="w-full max-w-md">
          <div className="rounded-3xl border border-border-subtle bg-surface p-8 md:p-10">
            <div className="text-center">
              <Link href="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
                ORYVA<span className="text-accent-bright">-AI</span>
              </Link>
              <Eyebrow className="mt-6 justify-center">Create Account</Eyebrow>
              <h1 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Get early access
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                One account for early product access and your ORYVA FORGE applications.
              </p>
            </div>
            <div className="mt-8">
              <RegisterForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
