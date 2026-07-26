import { escapeHtml } from "@/lib/email/escape-html";
import { getTrackLabel } from "@/lib/forge/tracks";
import type { ContactValues } from "@/lib/validation/contact";
import type { ForgeApplicationValues } from "@/lib/validation/forge-application";
import type { WaitlistValues } from "@/lib/validation/waitlist";

export type EmailMessage = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

function shell(title: string, rows: Array<[string, string]>, intro: string) {
  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 0;color:#8992a5;font-size:12px;text-transform:uppercase;letter-spacing:0.12em;">${escapeHtml(label)}</td></tr><tr><td style="padding:0 0 16px;color:#f2f4f8;font-size:15px;line-height:1.5;">${escapeHtml(value).replaceAll("\n", "<br/>")}</td></tr>`
    )
    .join("");

  const html = `<!doctype html><html><body style="margin:0;background:#0b1020;color:#f2f4f8;font-family:Arial,sans-serif;"><div style="max-width:560px;margin:0 auto;padding:32px 24px;"><p style="margin:0 0 8px;color:#6ea8ff;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;">ORYVA AI</p><h1 style="margin:0 0 16px;font-size:24px;line-height:1.2;">${escapeHtml(title)}</h1><p style="margin:0 0 24px;color:#c4cad6;line-height:1.6;">${escapeHtml(intro)}</p><table style="width:100%;border-collapse:collapse;">${htmlRows}</table></div></body></html>`;

  const text = [
    title,
    "",
    intro,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  return { html, text };
}

export function buildContactEmails(values: ContactValues): {
  internal: EmailMessage;
  acknowledgement: EmailMessage;
} {
  const rows: Array<[string, string]> = [
    ["Name", values.name],
    ["Email", values.email],
    ["Topic", values.topic],
    ["Message", values.message],
  ];

  return {
    internal: {
      subject: `Contact form: ${values.topic} from ${values.name}`,
      replyTo: values.email,
      ...shell("New contact submission", rows, "A visitor sent a message through the website."),
    },
    acknowledgement: {
      subject: "We received your message",
      ...shell(
        "Message received",
        [["Topic", values.topic]],
        `Hi ${values.name}, thanks for writing to ORYVA AI. We received your message and will reply soon.`
      ),
    },
  };
}

export function buildWaitlistEmails(values: WaitlistValues): {
  internal: EmailMessage;
  acknowledgement: EmailMessage;
} {
  const name = values.name?.trim() || "Not provided";
  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", values.email],
  ];

  return {
    internal: {
      subject: `Waitlist signup from ${values.email}`,
      replyTo: values.email,
      ...shell("New waitlist signup", rows, "Someone joined the product waitlist."),
    },
    acknowledgement: {
      subject: "You are on the ORYVA AI waitlist",
      ...shell(
        "Waitlist received",
        [["Email", values.email]],
        `Thanks${values.name ? `, ${values.name}` : ""}. We received your waitlist request and will notify you as the product takes shape.`
      ),
    },
  };
}

export function buildForgeEmails(values: ForgeApplicationValues): {
  internal: EmailMessage;
  acknowledgement: EmailMessage;
} {
  const trackLabel = getTrackLabel(values.track);
  const rows: Array<[string, string]> = [
    ["Track", trackLabel],
    ["Full name", values.fullName],
    ["Email", values.email],
    ["Role", values.role],
    ["Members", String(values.memberCount)],
    ["Organization", values.organization || "Not provided"],
    ["Team name", values.teamName || "Not provided"],
    ["Motivation", values.motivation || "Not provided"],
    ["Portfolio", values.portfolio || "Not provided"],
    ["How they heard about us", values.message || "Not provided"],
  ];

  return {
    internal: {
      subject: `Forge application: ${trackLabel} from ${values.fullName}`,
      replyTo: values.email,
      ...shell(
        "New FORGE application",
        rows,
        "A builder submitted an ORYVA FORGE application."
      ),
    },
    acknowledgement: {
      subject: `We received your ${trackLabel} application`,
      ...shell(
        "Application received",
        [
          ["Track", trackLabel],
          ["Members", String(values.memberCount)],
        ],
        `Hi ${values.fullName}, thanks for applying to ORYVA FORGE. We received your ${trackLabel} application and will follow up by email.`
      ),
    },
  };
}
