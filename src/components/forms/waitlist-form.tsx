"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { waitlistSchema, type WaitlistValues } from "@/lib/validation/waitlist";
import { submitForm } from "@/lib/forms/submit-form";

export function WaitlistForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistValues>({ resolver: zodResolver(waitlistSchema) });

  const onSubmit = async (values: WaitlistValues) => {
    setStatus("submitting");
    const result = await submitForm("/api/forms/waitlist", values);
    setStatus(result.ok ? "success" : "error");
  };

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 rounded-xl border border-hairline bg-brand-dim px-6 py-4 text-sm text-ink">
        <CheckCircle2 className="h-4 w-4 text-brand-bright" aria-hidden />
        Thanks. We received your waitlist request and will notify you at launch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />
        <Input placeholder="Name (optional)" {...register("name")} className="sm:flex-1" />
        <Input
          type="email"
          placeholder="you@email.com"
          {...register("email")}
          error={!!errors.email}
          className="sm:flex-1"
        />
        <Button type="submit" disabled={status === "submitting"} className="shrink-0">
          {status === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          ) : (
            <span className="flex items-center gap-1.5">
              Notify Me <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          )}
        </Button>
      </div>
      {errors.email && <p className="mt-2 text-xs text-signal">{errors.email.message}</p>}
      {status === "error" && (
        <p role="alert" className="mt-2 text-xs text-signal">
          We could not save your request. Please try again.
        </p>
      )}
    </form>
  );
}
