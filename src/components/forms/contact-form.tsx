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
import { Magnetic } from "@/components/ui/magnetic";
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
      <div className="flex flex-col items-center gap-4 rounded-[14px] border border-[#48a9ff]/50 bg-[#050608] px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-[#67b7ff]" aria-hidden />
        <h3 className="font-display text-[25px] font-normal leading-tight text-white">
          Message received.
        </h3>
        <p className="max-w-sm text-[15px] leading-[1.45] text-[#c5c8d0]">
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
        <Input id="name" placeholder="Your name" className="text-[15px]" {...register("name")} error={!!errors.name} />
        {errors.name && <p className="mt-1.5 text-xs text-signal">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" placeholder="you@email.com" className="text-[15px]" {...register("email")} error={!!errors.email} />
        {errors.email && <p className="mt-1.5 text-xs text-signal">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="topic">What would you like to talk about?</Label>
        <Select id="topic" className="text-[15px]" {...register("topic")} error={!!errors.topic}>
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
          className="text-[15px]"
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

      <Magnetic className="w-full sm:w-fit" strength={0.22}>
        <Button
          type="submit"
          size="lg"
          className="h-12 w-full bg-[#67b7ff] px-7 text-[15px] font-semibold text-black shadow-[inset_0_2px_6px_rgba(255,255,255,0.42),0_12px_30px_rgba(49,145,245,0.24)] hover:bg-[#80c4ff] sm:w-auto"
          disabled={status === "submitting"}
        >
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
      </Magnetic>
    </form>
  );
}
