"use client";

import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  getTrackLabel,
  TRACKS,
  type Track,
} from "@/lib/forge/tracks";
import {
  forgeApplicationSchema,
  ROLE_OPTIONS,
  type ForgeApplicationValues,
} from "@/lib/validation/forge-application";
import { submitForm } from "@/lib/forms/submit-form";

const TRACK_COPY: Record<Track, { motivationLabel: string }> = {
  Workshop: { motivationLabel: "Anything you'd like us to know? (optional)" },
  Mentorship: {
    motivationLabel: "What are you working on / hoping to get guidance on? (optional)",
  },
  Fellowship: { motivationLabel: "Why do you want to join, and what's your project idea?" },
  "Signal-to-Ship": { motivationLabel: "What signal are you bringing? (optional)" },
};

export function ForgeApplicationForm({
  defaultTrack = "Workshop",
}: {
  defaultTrack?: Track;
}) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgeApplicationValues>({
    resolver: zodResolver(forgeApplicationSchema),
    defaultValues: {
      track: defaultTrack,
      memberCount: 1,
      role: "Student",
    },
  });

  const track = useWatch({ control, name: "track" }) ?? defaultTrack;

  const onSubmit = async (values: ForgeApplicationValues) => {
    setStatus("submitting");
    const result = await submitForm("/api/forms/forge", values);
    setStatus(result.ok ? "success" : "error");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-hairline bg-paper-2 px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand" aria-hidden />
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-ink">
          Application received.
        </h3>
        <p className="max-w-sm leading-relaxed text-muted">
          Thanks for applying to ORYVA FORGE, {getTrackLabel(track)}. We&apos;ll be in
          touch by email with next steps.
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
          {TRACKS.map((option) => (
            <option key={option} value={option}>
              {getTrackLabel(option)}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            placeholder="Jane Doe"
            {...register("fullName")}
            error={!!errors.fullName}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-signal">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@email.com"
            {...register("email")}
            error={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-signal">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="role">Current role</Label>
          <Select id="role" {...register("role")} error={!!errors.role}>
            {ROLE_OPTIONS.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </Select>
          {errors.role && (
            <p className="mt-1.5 text-xs text-signal">{errors.role.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="memberCount">Number of members</Label>
          <Input
            id="memberCount"
            type="number"
            min={1}
            max={20}
            {...register("memberCount", { valueAsNumber: true })}
            error={!!errors.memberCount}
          />
          {errors.memberCount && (
            <p className="mt-1.5 text-xs text-signal">{errors.memberCount.message}</p>
          )}
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
            <Input
              id="portfolio"
              placeholder="Recommended, but optional"
              {...register("portfolio")}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <Label htmlFor="motivation">{TRACK_COPY[track].motivationLabel}</Label>
        <Textarea
          id="motivation"
          {...register("motivation")}
          error={!!errors.motivation}
        />
        {errors.motivation && (
          <p className="mt-1.5 text-xs text-signal">{errors.motivation.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">How did you hear about us? (optional)</Label>
        <Input id="message" {...register("message")} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-signal">
          We could not deliver your application. Please try again in a moment.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
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
