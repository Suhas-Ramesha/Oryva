import { describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { createFormHandler } from "./create-form-handler";
import type { EmailTransport } from "@/lib/email/transport";
import { EmailDeliveryError } from "@/lib/email/transport";

const schema = z.object({
  email: z.string().email(),
  honeypot: z.string().max(0).optional(),
});

function makeRequest(body: unknown, contentType = "application/json") {
  return new Request("http://localhost/api/forms/test", {
    method: "POST",
    headers: { "content-type": contentType },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

describe("createFormHandler", () => {
  it("rejects malformed JSON and invalid payloads", async () => {
    const transport: EmailTransport = { send: vi.fn() };
    const handler = createFormHandler({
      schema,
      buildEmails: () => ({
        internal: { subject: "i", html: "i", text: "i", replyTo: "a@b.com" },
        acknowledgement: { subject: "a", html: "a", text: "a" },
      }),
      transport,
      config: { from: "from@oryvaai.com", to: "contact@oryvaai.com" },
      getSubmitterEmail: (values) => values.email,
    });

    const malformed = await handler(makeRequest("{"));
    expect(malformed.status).toBe(400);
    expect(await malformed.json()).toEqual({ ok: false, error: "validation" });

    const invalid = await handler(makeRequest({ email: "nope" }));
    expect(invalid.status).toBe(400);
    expect(await invalid.json()).toEqual({ ok: false, error: "validation" });
  });

  it("treats honeypot hits as spam", async () => {
    const transport: EmailTransport = { send: vi.fn() };
    const handler = createFormHandler({
      schema,
      buildEmails: () => ({
        internal: { subject: "i", html: "i", text: "i" },
        acknowledgement: { subject: "a", html: "a", text: "a" },
      }),
      transport,
      config: { from: "from@oryvaai.com", to: "contact@oryvaai.com" },
      getSubmitterEmail: (values) => values.email,
    });

    const response = await handler(
      makeRequest({ email: "user@example.com", honeypot: "bot" })
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ ok: false, error: "spam" });
    expect(transport.send).not.toHaveBeenCalled();
  });

  it("returns delivery failure when internal send fails", async () => {
    const transport: EmailTransport = {
      send: vi.fn().mockRejectedValue(new EmailDeliveryError()),
    };
    const handler = createFormHandler({
      schema,
      buildEmails: () => ({
        internal: { subject: "i", html: "i", text: "i", replyTo: "user@example.com" },
        acknowledgement: { subject: "a", html: "a", text: "a" },
      }),
      transport,
      config: { from: "from@oryvaai.com", to: "contact@oryvaai.com" },
      getSubmitterEmail: (values) => values.email,
    });

    const response = await handler(makeRequest({ email: "user@example.com" }));
    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ ok: false, error: "delivery" });
  });

  it("succeeds when acknowledgement fails after internal delivery", async () => {
    const transport: EmailTransport = {
      send: vi
        .fn()
        .mockResolvedValueOnce({ id: "internal" })
        .mockRejectedValueOnce(new EmailDeliveryError()),
    };
    const handler = createFormHandler({
      schema,
      buildEmails: () => ({
        internal: { subject: "i", html: "i", text: "i", replyTo: "user@example.com" },
        acknowledgement: { subject: "a", html: "a", text: "a" },
      }),
      transport,
      config: { from: "from@oryvaai.com", to: "contact@oryvaai.com" },
      getSubmitterEmail: (values) => values.email,
    });

    const response = await handler(makeRequest({ email: "user@example.com" }));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(transport.send).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ to: "contact@oryvaai.com" })
    );
    expect(transport.send).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ to: "user@example.com" })
    );
  });
});
