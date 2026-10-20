import { z } from "zod";

import type { OrderingLink, SiteContent } from "@/content/types";

const orderingLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  kind: z.enum(["phone", "online", "delivery"]),
});

export function safeHref(href: string | null | undefined): string | null {
  const value = href?.trim() ?? "";
  if (!value) return null;
  if (/^(https?:|tel:|mailto:|\/)/i.test(value)) return value;
  return null;
}

export function httpHref(href: string | null | undefined): string | null {
  const value = safeHref(href);
  return value && /^https?:/i.test(value) ? value : null;
}

/** Valid ordering links from content. Blank or malformed hrefs are dropped. Empty = no Order section. */
export function orderingLinks(content: SiteContent): OrderingLink[] {
  return content.orderingLinks.flatMap((link) => {
    const parsed = orderingLinkSchema.safeParse(link);
    if (!parsed.success) return [];
    const href = safeHref(parsed.data.href);
    const label = parsed.data.label.trim();
    if (!href || !label) return [];
    if (parsed.data.kind === "phone" && !/^tel:/i.test(href)) return [];
    if (parsed.data.kind !== "phone" && !/^https?:/i.test(href)) return [];
    return [{ ...parsed.data, href, label }];
  });
}
