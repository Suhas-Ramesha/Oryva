import { afterEach, describe, expect, it, vi } from "vitest";
import { submitForm } from "./submit-form";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("submitForm", () => {
  it("returns success for ok responses", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: async () => ({ ok: true }),
      })
    );
    await expect(submitForm("/api/forms/contact", { email: "a@b.com" })).resolves.toEqual({
      ok: true,
    });
  });

  it("normalizes validation, delivery, network, and malformed responses", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValueOnce({
        json: async () => ({ ok: false, error: "validation" }),
      })
    );
    await expect(submitForm("/api/forms/contact", {})).resolves.toEqual({
      ok: false,
      error: "validation",
    });

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValueOnce({
        json: async () => ({ ok: false, error: "delivery" }),
      })
    );
    await expect(submitForm("/api/forms/contact", {})).resolves.toEqual({
      ok: false,
      error: "delivery",
    });

    vi.stubGlobal("fetch", vi.fn().mockRejectedValueOnce(new Error("offline")));
    await expect(submitForm("/api/forms/contact", {})).resolves.toEqual({
      ok: false,
      error: "delivery",
    });

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValueOnce({
        json: async () => ({ weird: true }),
      })
    );
    await expect(submitForm("/api/forms/contact", {})).resolves.toEqual({
      ok: false,
      error: "delivery",
    });
  });
});
