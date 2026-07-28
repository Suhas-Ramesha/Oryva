import type { z } from "zod";
import type { EmailConfig } from "@/lib/email/config";
import type { EmailMessage } from "@/lib/email/templates";
import type { EmailTransport } from "@/lib/email/transport";

export type FormResponse =
  | { ok: true }
  | { ok: false; error: "validation" | "spam" | "delivery" };

type HandlerOptions<T> = {
  schema: z.ZodType<T>;
  buildEmails: (values: T) => {
    internal: EmailMessage;
    acknowledgement: EmailMessage;
  };
  transport: EmailTransport;
  config: Pick<EmailConfig, "from" | "to">;
  getSubmitterEmail: (values: T) => string;
};

function json(body: FormResponse, status: number) {
  return Response.json(body, { status });
}

export function createFormHandler<T>(options: HandlerOptions<T>) {
  return async function POST(request: Request): Promise<Response> {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return json({ ok: false, error: "validation" }, 400);
    }

    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return json({ ok: false, error: "validation" }, 400);
    }

    const parsed = options.schema.safeParse(payload);
    if (!parsed.success) {
      const honeypotIssue = parsed.error.issues.some((issue) =>
        issue.path.includes("honeypot")
      );
      return json({ ok: false, error: honeypotIssue ? "spam" : "validation" }, 400);
    }

    const values = parsed.data;
    const honeypot =
      typeof values === "object" &&
      values !== null &&
      "honeypot" in values &&
      typeof (values as { honeypot?: unknown }).honeypot === "string"
        ? (values as { honeypot?: string }).honeypot
        : "";

    if (honeypot) {
      return json({ ok: false, error: "spam" }, 400);
    }

    const emails = options.buildEmails(values);

    try {
      await options.transport.send({
        ...emails.internal,
        from: options.config.from,
        to: options.config.to,
      });
    } catch {
      return json({ ok: false, error: "delivery" }, 502);
    }

    try {
      await options.transport.send({
        ...emails.acknowledgement,
        from: options.config.from,
        to: options.getSubmitterEmail(values),
      });
    } catch {
      // Internal delivery already succeeded; acknowledgement is best-effort.
    }

    return json({ ok: true }, 200);
  };
}
