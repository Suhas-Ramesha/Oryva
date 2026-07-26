import { z } from "zod";
import { TRACKS } from "@/lib/forge/tracks";

export const ROLE_OPTIONS = [
  "Student",
  "Employee",
  "Founder",
  "Freelancer",
  "Educator",
  "Other",
] as const;

export const forgeApplicationSchema = z
  .object({
    track: z.enum(TRACKS),
    fullName: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    role: z.enum(ROLE_OPTIONS),
    memberCount: z.number().int().min(1).max(20),
    organization: z.string().trim().max(150).optional(),
    teamName: z.string().trim().max(120).optional(),
    motivation: z.string().trim().max(2000).optional(),
    portfolio: z.string().trim().max(300).optional(),
    message: z.string().trim().max(500).optional(),
    honeypot: z.string().max(0).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.track === "Fellowship" && (!data.motivation || data.motivation.length < 20)) {
      ctx.addIssue({
        code: "custom",
        path: ["motivation"],
        message: "Tell us about your project idea (at least 20 characters).",
      });
    }
  });

export type ForgeApplicationValues = z.infer<typeof forgeApplicationSchema>;
