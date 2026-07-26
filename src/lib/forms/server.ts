import { getEmailConfig } from "@/lib/email/config";
import { ResendTransport } from "@/lib/email/resend-transport";

export function getFormMailRuntime() {
  const config = getEmailConfig();
  return {
    config,
    transport: new ResendTransport(config.apiKey),
  };
}
