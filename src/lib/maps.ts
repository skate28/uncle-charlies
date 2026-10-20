import type { SiteContent } from "@/content/types";
import { safeHref } from "@/lib/ordering";

/** Directions link. Uses `mapUrl` when set, otherwise a Google Maps directions URL for the street address. */
export function directionsHref(content: SiteContent): string | null {
  const explicit = safeHref(content.mapUrl);
  if (explicit) return explicit;
  const full = content.address.full.trim();
  if (!full) return null;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${content.name}, ${full}`)}`;
}

/** Keyless Google Maps embed. Coordinates when known, otherwise the street address. */
export function mapEmbedSrc(content: SiteContent): string | null {
  const { latitude, longitude } = content.geo;
  if (latitude != null && longitude != null) {
    return `https://maps.google.com/maps?q=${encodeURIComponent(`${latitude},${longitude}`)}&z=17&output=embed`;
  }
  const full = content.address.full.trim();
  if (!full) return null;
  const query = [content.name.trim(), full].filter(Boolean).join(", ");
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
}
