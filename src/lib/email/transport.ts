import type { EmailMessage } from "@/lib/email/templates";

export type SendEmailInput = EmailMessage & {
  from: string;
  to: string;
};

export interface EmailTransport {
  send(input: SendEmailInput): Promise<{ id: string }>;
}

export class EmailDeliveryError extends Error {
  constructor(message = "Email delivery failed") {
    super(message);
    this.name = "EmailDeliveryError";
  }
}
