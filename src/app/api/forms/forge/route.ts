import { createFormHandler } from "@/lib/forms/create-form-handler";
import { getFormMailRuntime } from "@/lib/forms/server";
import { buildForgeEmails } from "@/lib/email/templates";
import { forgeApplicationSchema } from "@/lib/validation/forge-application";

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<Response> {
  try {
    const { config, transport } = getFormMailRuntime();
    const handler = createFormHandler({
      schema: forgeApplicationSchema,
      buildEmails: buildForgeEmails,
      transport,
      config,
      getSubmitterEmail: (values) => values.email,
    });
    return handler(request);
  } catch {
    return Response.json({ ok: false, error: "delivery" }, { status: 502 });
  }
}
