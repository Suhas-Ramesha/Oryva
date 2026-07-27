export type EmailConfig = {
  from: string;
  to: string;
  smtp: {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    password: string;
  };
};

export class EmailConfigurationError extends Error {
  constructor(public readonly missing: string[]) {
    super(`Missing email configuration: ${missing.join(", ")}`);
    this.name = "EmailConfigurationError";
  }
}

export function getEmailConfig(env: NodeJS.ProcessEnv = process.env): EmailConfig {
  const missing: string[] = [];
  const user = env.SMTP_USER?.trim() ?? "";
  const password = env.SMTP_PASSWORD?.trim() ?? "";
  const from = env.FORMS_FROM_EMAIL?.trim() ?? "";
  const to = env.FORMS_TO_EMAIL?.trim() ?? "";

  if (!user) missing.push("SMTP_USER");
  if (!password) missing.push("SMTP_PASSWORD");
  if (!from) missing.push("FORMS_FROM_EMAIL");
  if (!to) missing.push("FORMS_TO_EMAIL");

  if (missing.length > 0) {
    throw new EmailConfigurationError(missing);
  }

  // Host/port default to Gmail's SSL endpoint; override for other providers.
  const host = env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(env.SMTP_PORT?.trim() || "465");
  // Port 465 uses implicit TLS; 587 uses STARTTLS (secure: false).
  const secure = port === 465;

  return { from, to, smtp: { host, port, secure, user, password } };
}
