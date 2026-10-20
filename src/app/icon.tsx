import { ImageResponse } from "next/og";

import { site } from "@/content";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

/** Red sticker with the shop's initials. No raster logo. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: site.palette?.brand ?? "#c8281e",
          color: site.palette?.cream ?? "#fbf1dc",
          border: "12px solid #1b1411",
          borderRadius: 40,
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        {initials(site.name)}
      </div>
    ),
    size,
  );
}
