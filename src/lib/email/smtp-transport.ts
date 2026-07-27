import nodemailer, { type Transporter } from "nodemailer";
import { EmailDeliveryError, type EmailTransport, type SendEmailInput } from "@/lib/email/transport";

export type SmtpOptions = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
};

export class SmtpTransport implements EmailTransport {
  private readonly transporter: Transporter;

  constructor(options: SmtpOptions) {
    this.transporter = nodemailer.createTransport({
      host: options.host,
      port: options.port,
      secure: options.secure,
      auth: { user: options.user, pass: options.password },
    });
  }

  async send(input: SendEmailInput): Promise<{ id: string }> {
    try {
      const info = await this.transporter.sendMail({
        from: input.from,
        to: input.to,
        subject: input.subject,
        html: input.html,
        text: input.text,
        replyTo: input.replyTo,
      });

      return { id: info.messageId };
    } catch (error) {
      throw new EmailDeliveryError(error instanceof Error ? error.message : undefined);
    }
  }
}
