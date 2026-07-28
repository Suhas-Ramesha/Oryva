import { createFormHandler } from "@/lib/forms/create-form-handler";
import { getFormMailRuntime } from "@/lib/forms/server";
import { buildWaitlistEmails } from "@/lib/email/templates";
import { waitlistSchema } from "@/lib/validation/waitlist";

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<Response> {
  try {
    const { config, transport } = getFormMailRuntime();
    const handler = createFormHandler({
      schema: waitlistSchema,
      buildEmails: buildWaitlistEmails,
      transport,
      config,
      getSubmitterEmail: (values) => values.email,
    });
    return handler(request);
  } catch {
    return Response.json({ ok: false, error: "delivery" }, { status: 502 });
  }
}
