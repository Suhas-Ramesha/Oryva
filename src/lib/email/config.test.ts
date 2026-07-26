import { describe, expect, it } from "vitest";
import { EmailConfigurationError, getEmailConfig } from "./config";

describe("getEmailConfig", () => {
  it("returns a valid configuration", () => {
    expect(
      getEmailConfig({
        RESEND_API_KEY: "re_test",
        FORMS_FROM_EMAIL: "ORYVA AI <contact@oryvaai.com>",
        FORMS_TO_EMAIL: "contact@oryvaai.com",
      })
    ).toEqual({
      apiKey: "re_test",
      from: "ORYVA AI <contact@oryvaai.com>",
      to: "contact@oryvaai.com",
    });
  });

  it("throws when required variables are missing", () => {
    expect(() => getEmailConfig({})).toThrow(EmailConfigurationError);
    try {
      getEmailConfig({});
    } catch (error) {
      expect(error).toBeInstanceOf(EmailConfigurationError);
      expect((error as EmailConfigurationError).missing).toEqual([
        "RESEND_API_KEY",
        "FORMS_FROM_EMAIL",
        "FORMS_TO_EMAIL",
      ]);
    }
  });
});
