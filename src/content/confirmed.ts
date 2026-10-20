import type { SiteContent } from "./types";

/**
 * Confirmed-facts-only content, used until Leads hands off `site.ts`.
 *
 * Every value here was confirmed by Leads on 2026-10-20: name, tagline, address, phone,
 * and the Google rating summary. Everything else is intentionally empty so its section
 * renders nothing. Do not add copy here — final content belongs in `site.ts` (Leads-owned).
 * Once `site.ts` lands, `src/content/index.ts` switches to it and this file can be deleted.
 */
export const site: SiteContent = {
  name: "Uncle Charlie's Sandwiches",
  tagline: "Italian subs, pizza & sandwiches",
  description: "Uncle Charlie's Sandwiches: Italian subs, pizza and sandwiches at 1977 Lane Ave S, Jacksonville, FL 32210.",
  opened: "",
  address: {
    street: "1977 Lane Ave S",
    suite: "",
    neighborhood: "",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32210",
    country: "US",
    full: "1977 Lane Ave S, Jacksonville, FL 32210",
  },
  locationHint: "",
  geo: { latitude: null, longitude: null },
  mapUrl: "",
  phone: { display: "(904) 781-4770", tel: "tel:+19047814770", e164: "+19047814770" },
  closedNotice: "",
  hours: { timezone: "America/New_York", summary: "", openTime: null, closeTime: null },
  priceRange: "",
  paymentNote: "",
  orderingLinks: [],
  socials: [],
  rating: { value: 4.7, count: 1261, source: "Google" },
  testimonials: [],
  faq: [],
  menuNote: "",
  menu: [],
  photos: [],
  about: { heading: "", paragraphs: [] },
  seo: {
    title: "Uncle Charlie's Sandwiches · Italian subs, pizza & sandwiches in Jacksonville",
    description: "Italian subs, pizza and sandwiches at 1977 Lane Ave S, Jacksonville, FL 32210. Call (904) 781-4770.",
  },
  footerCredit: "Built by nicklopacki.com",
};
