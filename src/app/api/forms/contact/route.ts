import { createFormHandler } from "@/lib/forms/create-form-handler";
import { getFormMailRuntime } from "@/lib/forms/server";
import { buildContactEmails } from "@/lib/email/templates";
import { contactSchema } from "@/lib/validation/contact";

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<Response> {
  try {
    const { config, transport } = getFormMailRuntime();
    const handler = createFormHandler({
      schema: contactSchema,
      buildEmails: buildContactEmails,
      transport,
      config,
      getSubmitterEmail: (values) => values.email,
    });
    return handler(request);
  } catch {
    return Response.json({ ok: false, error: "delivery" }, { status: 502 });
  }
}
