"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const TRACKS = ["Workshop", "Mentorship", "Hackathon", "Fellowship"] as const;
export type Track = (typeof TRACKS)[number];

const formSchema = z
  .object({
    track: z.enum(TRACKS),
    fullName: z.string().trim().min(2, "Enter your full name"),
    email: z.string().trim().email("Enter a valid email address"),
    phone: z.string().trim().min(7, "Enter a valid phone number"),
    organization: z.string().trim().optional(),
    teamName: z.string().trim().optional(),
    motivation: z.string().trim().optional(),
    portfolio: z.string().trim().optional(),
    message: z.string().trim().optional(),
    honeypot: z.string().max(0).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.track === "Fellowship" && (!data.motivation || data.motivation.length < 20)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["motivation"],
        message: "Tell us about your project idea (at least 20 characters).",
      });
    }
  });

type FormValues = z.infer<typeof formSchema>;

const TRACK_COPY: Record<Track, { motivationLabel: string; motivationRequired: boolean }> = {
  Workshop: { motivationLabel: "Anything you'd like us to know? (optional)", motivationRequired: false },
  Mentorship: {
    motivationLabel: "What are you working on / hoping to get guidance on? (optional)",
    motivationRequired: false,
  },
  Hackathon: { motivationLabel: "Anything you'd like us to know? (optional)", motivationRequired: false },
  Fellowship: { motivationLabel: "Why do you want to join, and what's your project idea?", motivationRequired: true },
};

export function ForgeApplicationForm({ defaultTrack = "Workshop" }: { defaultTrack?: Track }) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { track: defaultTrack },
  });

  const track = watch("track");

  React.useEffect(() => {
    setValue("track", defaultTrack);
  }, [defaultTrack, setValue]);

  const onSubmit = async () => {
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border-subtle bg-surface px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-bright" />
        <h3 className="font-display text-xl font-medium tracking-tight">
          Application received.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thanks for applying to ORYVA FORGE — {track}. We&apos;ll be in touch by
          email with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("honeypot")}
      />

      <div>
        <Label htmlFor="track">Track</Label>
        <Select id="track" {...register("track")}>
          {TRACKS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" placeholder="Jane Doe" {...register("fullName")} error={!!errors.fullName} />
          {errors.fullName && <p className="mt-1.5 text-xs text-red-400">{errors.fullName.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="you@email.com" {...register("email")} error={!!errors.email} />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+91 00000 00000" {...register("phone")} error={!!errors.phone} />
          {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="organization">College / Organization</Label>
          <Input id="organization" placeholder="Optional" {...register("organization")} />
        </div>
      </div>

      <AnimatePresence mode="popLayout" initial={false}>
        {track === "Hackathon" && (
          <motion.div
            key="teamName"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Label htmlFor="teamName">Team Name</Label>
            <Input id="teamName" placeholder="Optional" {...register("teamName")} />
          </motion.div>
        )}

        {(track === "Fellowship" || track === "Mentorship") && (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Label htmlFor="portfolio">Portfolio / GitHub / LinkedIn</Label>
            <Input id="portfolio" placeholder="Recommended, but optional" {...register("portfolio")} />
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <Label htmlFor="motivation">
          {TRACK_COPY[track ?? "Workshop"].motivationLabel}
        </Label>
        <Textarea id="motivation" {...register("motivation")} error={!!errors.motivation} />
        {errors.motivation && <p className="mt-1.5 text-xs text-red-400">{errors.motivation.message}</p>}
      </div>

      <div>
        <Label htmlFor="message">How did you hear about us? (optional)</Label>
        <Input id="message" {...register("message")} />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting
          </span>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}
