import { getEmailConfig } from "@/lib/email/config";
import { SmtpTransport } from "@/lib/email/smtp-transport";

export function getFormMailRuntime() {
  const config = getEmailConfig();
  return {
    config,
    transport: new SmtpTransport(config.smtp),
  };
}
