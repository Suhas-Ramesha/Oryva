export type EmailConfig = {
  apiKey: string;
  from: string;
  to: string;
};

export class EmailConfigurationError extends Error {
  constructor(public readonly missing: string[]) {
    super(`Missing email configuration: ${missing.join(", ")}`);
    this.name = "EmailConfigurationError";
  }
}

export function getEmailConfig(env: NodeJS.ProcessEnv = process.env): EmailConfig {
  const missing: string[] = [];
  const apiKey = env.RESEND_API_KEY?.trim() ?? "";
  const from = env.FORMS_FROM_EMAIL?.trim() ?? "";
  const to = env.FORMS_TO_EMAIL?.trim() ?? "";

  if (!apiKey) missing.push("RESEND_API_KEY");
  if (!from) missing.push("FORMS_FROM_EMAIL");
  if (!to) missing.push("FORMS_TO_EMAIL");

  if (missing.length > 0) {
    throw new EmailConfigurationError(missing);
  }

  return { apiKey, from, to };
}
