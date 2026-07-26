export const TRACKS = ["Workshop", "Mentorship", "Fellowship", "Signal-to-Ship"] as const;
export type Track = (typeof TRACKS)[number];
export type TrackSlug = "workshop" | "mentorship" | "fellowship" | "signal-to-ship";

const SLUG_TO_TRACK: Record<TrackSlug, Track> = {
  workshop: "Workshop",
  mentorship: "Mentorship",
  fellowship: "Fellowship",
  "signal-to-ship": "Signal-to-Ship",
};

const TRACK_TO_SLUG: Record<Track, TrackSlug> = {
  Workshop: "workshop",
  Mentorship: "mentorship",
  Fellowship: "fellowship",
  "Signal-to-Ship": "signal-to-ship",
};

const TRACK_LABELS: Record<Track, string> = {
  Workshop: "Workshop",
  Mentorship: "Mentorship",
  Fellowship: "Fellowship",
  "Signal-to-Ship": "Signal to Ship",
};

const TRACK_DESCRIPTIONS: Record<Track, string> = {
  Workshop:
    "Short, focused sessions for learning a useful skill and applying it immediately.",
  Mentorship:
    "Focused guidance for builders who need an honest conversation and a clearer next step.",
  Fellowship:
    "Ongoing structure and feedback for a small group ready to develop one important idea.",
  "Signal-to-Ship":
    "A sprint from a real world signal to working proof, with room to keep the strongest work alive.",
};

export function parseTrackSlug(value: string | string[] | undefined): Track {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return "Workshop";
  if ((Object.keys(SLUG_TO_TRACK) as TrackSlug[]).includes(raw as TrackSlug)) {
    return SLUG_TO_TRACK[raw as TrackSlug];
  }
  return "Workshop";
}

export function getTrackSlug(track: Track): TrackSlug {
  return TRACK_TO_SLUG[track];
}

export function getTrackLabel(track: Track): string {
  return TRACK_LABELS[track];
}

export function getTrackDescription(track: Track): string {
  return TRACK_DESCRIPTIONS[track];
}
