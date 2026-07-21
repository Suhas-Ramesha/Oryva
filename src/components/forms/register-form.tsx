"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/mock-auth";

const schema = z
  .object({
    name: z.string().trim().min(2, "Enter your full name"),
    email: z.string().trim().email("Enter a valid email address"),
    password: z.string().min(8, "At least 8 characters"),
    confirmPassword: z.string(),
    honeypot: z.string().max(0).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

type FormValues = z.infer<typeof schema>;

export function RegisterForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const { register: registerUser } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    registerUser(values.name, values.email);
    router.push("/account");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />

      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Jane Doe" {...register("name")} error={!!errors.name} />
        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="you@email.com" {...register("email")} error={!!errors.email} />
        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <PasswordInput id="password" placeholder="At least 8 characters" {...register("password")} error={!!errors.password} />
        {errors.password && <p className="mt-1.5 text-xs text-red-400">{errors.password.message}</p>}
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <PasswordInput
          id="confirmPassword"
          placeholder="Re-enter your password"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
        />
        {errors.confirmPassword && (
          <p className="mt-1.5 text-xs text-red-400">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Creating account
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Create Account <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>

      <p className="text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-accent-bright hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
