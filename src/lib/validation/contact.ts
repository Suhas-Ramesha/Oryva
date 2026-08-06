import { z } from "zod";

export const contactTopics = ["Product", "ORYVA FORGE", "Partnership", "Just saying hi"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  topic: z.enum(contactTopics),
  message: z.string().trim().min(10).max(3000),
  honeypot: z.string().max(0).optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;
