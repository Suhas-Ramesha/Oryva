import { Resend } from "resend";
import { EmailDeliveryError, type EmailTransport, type SendEmailInput } from "@/lib/email/transport";

export class ResendTransport implements EmailTransport {
  private readonly client: Resend;

  constructor(apiKey: string) {
    this.client = new Resend(apiKey);
  }

  async send(input: SendEmailInput): Promise<{ id: string }> {
    const { data, error } = await this.client.emails.send({
      from: input.from,
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      replyTo: input.replyTo,
    });

    if (error || !data?.id) {
      throw new EmailDeliveryError(error?.message);
    }

    return { id: data.id };
  }
}
