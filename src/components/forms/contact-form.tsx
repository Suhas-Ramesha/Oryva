"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const TOPICS = ["Product", "ORYVA FORGE", "Partnership", "General"] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name"),
  email: z.string().trim().email("Enter a valid email address"),
  topic: z.enum(TOPICS),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)"),
  honeypot: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { topic: "Product" },
  });

  const onSubmit = async () => {
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-hairline bg-paper px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand" aria-hidden />
        <h3 className="font-[family-name:var(--font-display)] text-xl font-medium tracking-tight text-ink">
          Message sent.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thanks for reaching out. We&apos;ll get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />

      <div>
        <Label htmlFor="name">Your name</Label>
        <Input id="name" placeholder="Jane Doe" {...register("name")} error={!!errors.name} />
        {errors.name && <p className="mt-1.5 text-xs text-signal">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" placeholder="you@email.com" {...register("email")} error={!!errors.email} />
        {errors.email && <p className="mt-1.5 text-xs text-signal">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="topic">What would you like to talk about?</Label>
        <Select id="topic" {...register("topic")} error={!!errors.topic}>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Your message</Label>
        <Textarea
          id="message"
          placeholder="A few honest lines are enough."
          {...register("message")}
          error={!!errors.message}
        />
        {errors.message && <p className="mt-1.5 text-xs text-signal">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Start a conversation <Send className="h-4 w-4" aria-hidden />
          </span>
        )}
      </Button>
    </form>
  );
}
