import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().trim().max(100).optional(),
  email: z.string().trim().email().max(254),
  honeypot: z.string().max(0).optional(),
});

export type WaitlistValues = z.infer<typeof waitlistSchema>;
