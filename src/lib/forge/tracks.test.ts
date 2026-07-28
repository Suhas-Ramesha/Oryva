import { describe, expect, it } from "vitest";
import {
  getTrackDescription,
  getTrackLabel,
  getTrackSlug,
  parseTrackSlug,
  TRACKS,
} from "./tracks";

describe("parseTrackSlug", () => {
  it("maps every supported slug", () => {
    expect(parseTrackSlug("workshop")).toBe("Workshop");
    expect(parseTrackSlug("mentorship")).toBe("Mentorship");
    expect(parseTrackSlug("fellowship")).toBe("Fellowship");
    expect(parseTrackSlug("signal-to-ship")).toBe("Signal-to-Ship");
  });

  it("uses the first array value and defaults unknown or missing input", () => {
    expect(parseTrackSlug(["mentorship", "workshop"])).toBe("Mentorship");
    expect(parseTrackSlug("membership")).toBe("Workshop");
    expect(parseTrackSlug(undefined)).toBe("Workshop");
  });
});

describe("track metadata", () => {
  it("round-trips every track and exposes labels", () => {
    for (const track of TRACKS) {
      expect(parseTrackSlug(getTrackSlug(track))).toBe(track);
      expect(getTrackLabel(track).length).toBeGreaterThan(0);
      expect(getTrackDescription(track).length).toBeGreaterThan(0);
    }
    expect(getTrackLabel("Signal-to-Ship")).toBe("Signal to Ship");
  });
});
