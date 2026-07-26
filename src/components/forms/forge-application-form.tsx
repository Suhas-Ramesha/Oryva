"use client";

import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const TRACKS = ["Workshop", "Mentorship", "Fellowship", "Signal-to-Ship"] as const;
export type Track = (typeof TRACKS)[number];

// Shared preselect helpers so other client components (and hash-based CTA links)
// can drive the form's track and scroll it into view.
export const FORGE_SELECT_EVENT = "forge:select-track";
export const FORGE_FORM_ID = "apply";

export function selectForgeTrack(track: Track) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<Track>(FORGE_SELECT_EVENT, { detail: track }));
  document
    .getElementById(FORGE_FORM_ID)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const formSchema = z
  .object({
    track: z.enum(TRACKS),
    fullName: z.string().trim().min(2, "Enter your full name"),
    email: z.string().trim().email("Enter a valid email address"),
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

const TRACK_COPY: Record<Track, { motivationLabel: string }> = {
  Workshop: { motivationLabel: "Anything you'd like us to know? (optional)" },
  Mentorship: {
    motivationLabel: "What are you working on / hoping to get guidance on? (optional)",
  },
  Fellowship: { motivationLabel: "Why do you want to join, and what's your project idea?" },
  "Signal-to-Ship": { motivationLabel: "What signal are you bringing? (optional)" },
};

const TRACK_LABELS: Record<Track, string> = {
  Workshop: "Workshop",
  Mentorship: "Mentorship",
  Fellowship: "Fellowship",
  "Signal-to-Ship": "Signal to Ship",
};

export function ForgeApplicationForm({ defaultTrack = "Workshop" }: { defaultTrack?: Track }) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { track: defaultTrack },
  });

  const track = useWatch({ control, name: "track" });

  // Preselect via custom event dispatched from the track "Apply" buttons.
  React.useEffect(() => {
    const onSelect = (event: Event) => {
      const detail = (event as CustomEvent<Track>).detail;
      if ((TRACKS as readonly string[]).includes(detail)) {
        setValue("track", detail);
      }
    };
    window.addEventListener(FORGE_SELECT_EVENT, onSelect as EventListener);
    return () => window.removeEventListener(FORGE_SELECT_EVENT, onSelect as EventListener);
  }, [setValue]);

  // Preselect Signal-to-Ship via the "Bring Your Signal" hash link.
  React.useEffect(() => {
    const applyHash = () => {
      if (window.location.hash === "#apply-signal-to-ship") {
        setValue("track", "Signal-to-Ship");
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [setValue]);

  const onSubmit = async () => {
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-hairline bg-paper-2 px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand" aria-hidden />
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-ink">
          Application received.
        </h3>
        <p className="max-w-sm leading-relaxed text-muted">
          Thanks for applying to ORYVA FORGE, {TRACK_LABELS[track]}. We&apos;ll be in touch by
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
              {TRACK_LABELS[t]}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" placeholder="Jane Doe" {...register("fullName")} error={!!errors.fullName} />
          {errors.fullName && <p className="mt-1.5 text-xs text-signal">{errors.fullName.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="you@email.com" {...register("email")} error={!!errors.email} />
          {errors.email && <p className="mt-1.5 text-xs text-signal">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="organization">College / Organization</Label>
        <Input id="organization" placeholder="Optional" {...register("organization")} />
      </div>

      <AnimatePresence mode="popLayout" initial={false}>
        {track === "Signal-to-Ship" && (
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
        {errors.motivation && <p className="mt-1.5 text-xs text-signal">{errors.motivation.message}</p>}
      </div>

      <div>
        <Label htmlFor="message">How did you hear about us? (optional)</Label>
        <Input id="message" {...register("message")} />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Submitting
          </span>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}
