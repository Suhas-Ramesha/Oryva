"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { contactSchema, contactTopics, type ContactValues } from "@/lib/validation/contact";
import { submitForm } from "@/lib/forms/submit-form";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { topic: "Product" },
  });

  const onSubmit = async (values: ContactValues) => {
    setStatus("submitting");
    const result = await submitForm("/api/forms/contact", values);
    setStatus(result.ok ? "success" : "error");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-hairline bg-paper px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand" aria-hidden />
        <h3 className="font-[family-name:var(--font-display)] text-xl font-medium tracking-tight text-ink">
          Message received.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thanks for reaching out. We received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />

      <div>
        <Label htmlFor="name">Your name</Label>
        <Input id="name" placeholder="Your name" {...register("name")} error={!!errors.name} />
        {errors.name && <p className="mt-1.5 text-xs text-signal">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" placeholder="you@email.com" {...register("email")} error={!!errors.email} />
        {errors.email && <p className="mt-1.5 text-xs text-signal">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="topic">What&apos;s this about?</Label>
        <Select id="topic" {...register("topic")} error={!!errors.topic}>
          {contactTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Your message</Label>
        <Textarea
          id="message"
          placeholder="What are you thinking about?"
          {...register("message")}
          error={!!errors.message}
        />
        {errors.message && <p className="mt-1.5 text-xs text-signal">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-signal">
          We could not deliver your message. Please try again in a moment.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Send it <Send className="h-4 w-4" aria-hidden />
          </span>
        )}
      </Button>
    </form>
  );
}
