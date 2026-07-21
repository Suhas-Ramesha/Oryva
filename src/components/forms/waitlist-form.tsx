"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().trim().optional(),
  email: z.string().trim().email("Enter a valid email address"),
  honeypot: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function WaitlistForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 rounded-xl border border-border-subtle bg-surface-2/60 px-6 py-4 text-sm text-foreground">
        <CheckCircle2 className="h-4 w-4 text-accent-bright" />
        Thanks — we&apos;ll notify you at launch.
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
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <span className="flex items-center gap-1.5">
              Notify Me <ArrowRight className="h-3.5 w-3.5" />
            </span>
          )}
        </Button>
      </div>
      {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email.message}</p>}
    </form>
  );
}
