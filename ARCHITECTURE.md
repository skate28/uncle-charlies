# Uncle Charlie's Sandwiches — architecture

Pitch site for a Westside Jacksonville Italian sub, pizza and sandwich shop.
Next.js App Router · React · TypeScript · Tailwind CSS v4 · framer-motion · lucide-react · zod.

Folder layout mirrors `skate28/cafe-genovese` and `skate28/catullos-italian`. The design is new: a bold
deli-sign look — tomato red, mustard, basil green, deli-paper cream and near-black ink; Anton (sign
lettering), Yellowtail (script) and DM Sans (body); hard offset shadows, halftone hero, gingham, flag stripe.

## Files

| Owner | Files |
| --- | --- |
| **Leads** | `src/content/site.ts` (data only), `public/images/` |
| **Code** | `src/app/`, `src/components/`, `src/lib/`, `src/content/types.ts`, `src/content/index.ts`, `src/content/confirmed.ts`, config, docs |

```
src/
  app/          layout (metadata, robots), page, robots.ts, sitemap.ts, icon, OG/Twitter images, not-found
  components/   one file per section + small client islands (hero-title, menu-tabs, shop-status, reveal)
  content/      types.ts (contract), index.ts (the single import point), confirmed.ts (pre-handoff facts)
                site.ts  ← Leads-owned, added at handoff
  lib/          pure helpers: hours, menu, money, ordering, reviews, photos, maps, contact, nav, faq, indexing, site-url
public/images/  Leads-owned real photos only
```

## How content is wired

Components import content only via `import { site } from "@/content"` (`src/content/index.ts`).

- **Before handoff:** `index.ts` re-exports `./confirmed` — only Leads-confirmed facts (name, tagline,
  address, phone, Google rating 4.7 / 1,261). Every other field is empty, so those sections render nothing.
- **At handoff** ("handoff final"): Leads adds `src/content/site.ts` (`export const site: SiteContent = {...}`)
  and Code changes one line in `index.ts` to `export { site } from "./site";`, then deletes `confirmed.ts`.

No dynamic/try-import tricks: a plain static re-export keeps the build green before handoff and ships
no placeholder copy.

## Page order

Header (flag stripe, wordmark, section links, call button) → Hero (sign lettering, tagline, Google rating
chip, live open/closed pill when hours exist, Call + Directions, hero photo or rotating badge) → ticker
(menu categories or tagline) → Menu (tabs) → Our story → Reviews → Photos → Order → Hours & location (map) → FAQ → Footer.
Phones get a sticky Call / Menu / Directions bar.

Every section returns `null` when its content is empty, and its header link disappears with it.

## Reviews

`src/lib/reviews.ts`. The rating summary (`rating`) shows in the hero. The Reviews section renders only when
at least one testimonial has a quote and a `sourceLabel`; it shows rating badges, then verbatim quotes with
optional stars and the source label (linked when `sourceUrl` is http(s)). `Testimonial` has no author field.
No Review/AggregateRating JSON-LD.

## Indexing

Off. Only `ALLOW_INDEXING=true` enables it (owner sign-off). Otherwise robots.txt disallows `/`, metadata
robots is `noindex, nofollow` (also googleBot), and every response sends `X-Robots-Tag: noindex, nofollow`.

## Not on this site

No "Coming soon" cards, text pre-orders, AI phone answering, catering, or waitlist UI. The types don't
even carry those fields.

## Deploy

Vercel, Next.js preset, repo root. No env vars required. Set `ALLOW_INDEXING=true` only after owner sign-off.
