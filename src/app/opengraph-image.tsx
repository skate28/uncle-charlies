import { ImageResponse } from "next/og";

import { site } from "@/content";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Text-only share card from confirmed content. No photos. */
export default function OpengraphImage() {
  const red = site.palette?.brand ?? "#c8281e";
  const cream = site.palette?.cream ?? "#fbf1dc";
  const mustard = site.palette?.mustard ?? "#f3b22e";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          background: red,
          color: cream,
          borderBottom: `24px solid ${mustard}`,
        }}
      >
        <div style={{ display: "flex", fontSize: 108, fontWeight: 900, lineHeight: 1, textTransform: "uppercase" }}>{site.name}</div>
        {site.tagline.trim() ? (
          <div style={{ display: "flex", marginTop: 28, fontSize: 44, color: mustard }}>{site.tagline}</div>
        ) : null}
        <div style={{ display: "flex", marginTop: 36, fontSize: 32 }}>
          {[site.address.full, site.phone.display].filter(Boolean).join("  ·  ")}
        </div>
      </div>
    ),
    size,
  );
}
