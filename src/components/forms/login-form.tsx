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

const schema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password"),
  honeypot: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    login(values.email);
    router.push("/account");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="you@email.com" {...register("email")} error={!!errors.email} />
        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="mb-0">
            Password
          </Label>
          <button
            type="button"
            className="mb-2 text-xs font-medium text-muted transition-colors hover:text-accent-bright"
          >
            Forgot password?
          </button>
        </div>
        <PasswordInput id="password" placeholder="••••••••" {...register("password")} error={!!errors.password} />
        {errors.password && <p className="mt-1.5 text-xs text-red-400">{errors.password.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Logging in
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Log In <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>

      <p className="text-center text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-accent-bright hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
