import { describe, expect, it } from "vitest";
import { forgeApplicationSchema } from "./forge-application";

const validBase = {
  track: "Workshop" as const,
  fullName: "Jane Doe",
  email: "jane@example.com",
  role: "Student" as const,
  memberCount: 1,
};

describe("forgeApplicationSchema", () => {
  it("accepts a valid single-person Workshop application", () => {
    expect(forgeApplicationSchema.safeParse(validBase).success).toBe(true);
  });

  it("accepts a Signal to Ship team", () => {
    const result = forgeApplicationSchema.safeParse({
      ...validBase,
      track: "Signal-to-Ship",
      memberCount: 4,
      teamName: "Signal Crew",
      role: "Founder",
    });
    expect(result.success).toBe(true);
  });

  it("rejects member counts outside 1 to 20", () => {
    expect(forgeApplicationSchema.safeParse({ ...validBase, memberCount: 0 }).success).toBe(false);
    expect(forgeApplicationSchema.safeParse({ ...validBase, memberCount: 21 }).success).toBe(false);
  });

  it("requires a role", () => {
    expect(
      forgeApplicationSchema.safeParse({
        track: "Workshop",
        fullName: "Jane Doe",
        email: "jane@example.com",
        memberCount: 1,
      }).success
    ).toBe(false);
  });

  it("requires meaningful Fellowship motivation", () => {
    expect(
      forgeApplicationSchema.safeParse({
        ...validBase,
        track: "Fellowship",
        motivation: "too short",
      }).success
    ).toBe(false);
  });

  it("rejects a filled honeypot", () => {
    expect(
      forgeApplicationSchema.safeParse({ ...validBase, honeypot: "bot" }).success
    ).toBe(false);
  });
});
