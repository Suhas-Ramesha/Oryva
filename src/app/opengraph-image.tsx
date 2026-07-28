import { ImageResponse } from "next/og";

export const alt = "ORYVA AI | Build what people can actually use";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#08090c",
          color: "#f2f4f8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#3e7bfa",
            }}
          />
          <div
            style={{
              fontSize: 30,
              letterSpacing: 2,
              fontWeight: 600,
              color: "#6ea8ff",
            }}
          >
            ORYVA AI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 82,
            lineHeight: 1.05,
            fontWeight: 700,
            maxWidth: 980,
          }}
        >
          Build what people can actually use.
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#99a1b3", maxWidth: 900 }}>
          Real ideas deserve more than a good presentation. They deserve a chance to
          become useful.
        </div>
      </div>
    ),
    { ...size }
  );
}
