"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { waitlistSchema, type WaitlistValues } from "@/lib/validation/waitlist";
import { submitForm } from "@/lib/forms/submit-form";
import { cn } from "@/lib/utils";

export function WaitlistForm({ layout = "inline" }: { layout?: "inline" | "centered" }) {
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
      <div
        className={cn(
          "flex items-center justify-center gap-2 rounded-xl border border-hairline bg-brand-dim px-6 py-4 text-sm text-ink",
          layout === "centered" && "mx-auto max-w-[480px] text-[14px]"
        )}
      >
        <CheckCircle2 className="h-4 w-4 text-brand-bright" aria-hidden />
        Thanks. We received your waitlist request and will notify you at launch.
      </div>
    );
  }

  const centered = layout === "centered";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("w-full", centered ? "max-w-[510px]" : "max-w-md")}
    >
      <div className={cn("flex flex-col gap-3", centered ? "items-center" : "sm:flex-row")}>
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />
        <div
          className={cn(
            "flex w-full flex-col gap-3",
            centered
              ? "max-w-[380px] items-center sm:flex-row sm:justify-center sm:gap-4"
              : "sm:flex-row"
          )}
        >
          <Input
            placeholder="Name (optional)"
            {...register("name")}
            className={cn(
              centered
                ? "h-9 w-full max-w-[240px] rounded-[7px] border-white/20 bg-[#050608] px-4 text-[12px] sm:w-[154px]"
                : "sm:flex-1"
            )}
          />
          <Input
            type="email"
            placeholder="you@email.com"
            {...register("email")}
            error={!!errors.email}
            className={cn(
              centered
                ? "h-9 w-full max-w-[240px] rounded-[7px] border-white/20 bg-[#050608] px-4 text-[12px] sm:w-[154px]"
                : "sm:flex-1"
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "shrink-0",
            centered &&
              "h-10 min-w-[130px] px-6 text-[13px] shadow-[inset_0_2px_6px_rgba(255,255,255,0.42),0_12px_28px_rgba(49,145,245,0.24)]"
          )}
        >
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
