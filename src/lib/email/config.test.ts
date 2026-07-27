import { describe, expect, it } from "vitest";
import { EmailConfigurationError, getEmailConfig } from "./config";

describe("getEmailConfig", () => {
  it("returns a valid configuration with Gmail defaults", () => {
    expect(
      getEmailConfig({
        SMTP_USER: "contact@oryvaai.com",
        SMTP_PASSWORD: "app-password",
        FORMS_FROM_EMAIL: "ORYVA AI <contact@oryvaai.com>",
        FORMS_TO_EMAIL: "contact@oryvaai.com",
      })
    ).toEqual({
      from: "ORYVA AI <contact@oryvaai.com>",
      to: "contact@oryvaai.com",
      smtp: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        user: "contact@oryvaai.com",
        password: "app-password",
      },
    });
  });

  it("honors host/port overrides and uses STARTTLS for port 587", () => {
    const config = getEmailConfig({
      SMTP_HOST: "smtp.example.com",
      SMTP_PORT: "587",
      SMTP_USER: "contact@oryvaai.com",
      SMTP_PASSWORD: "app-password",
      FORMS_FROM_EMAIL: "ORYVA AI <contact@oryvaai.com>",
      FORMS_TO_EMAIL: "contact@oryvaai.com",
    });

    expect(config.smtp).toEqual({
      host: "smtp.example.com",
      port: 587,
      secure: false,
      user: "contact@oryvaai.com",
      password: "app-password",
    });
  });

  it("throws when required variables are missing", () => {
    expect(() => getEmailConfig({})).toThrow(EmailConfigurationError);
    try {
      getEmailConfig({});
    } catch (error) {
      expect(error).toBeInstanceOf(EmailConfigurationError);
      expect((error as EmailConfigurationError).missing).toEqual([
        "SMTP_USER",
        "SMTP_PASSWORD",
        "FORMS_FROM_EMAIL",
        "FORMS_TO_EMAIL",
      ]);
    }
  });
});
