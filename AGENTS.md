# Uncle Charlie's Sandwiches

## Ownership

- **Leads** owns `src/content/site.ts`, `public/images/`, and `/workspace/unclecharlies/` on the box.
- **Code** owns everything else. See ARCHITECTURE.md and CONTENT_SCHEMA.md.

Never invent prices, hours, reviews, ordering links, or photos. No AI or stock photos of the food or the shop. No owner personal names, reviewer names, or photo-source URLs anywhere in the repo. No "Coming soon" / pitch-feature sections (text pre-orders, AI phone answering, catering, waitlists). No placeholder copy: empty content renders nothing. Indexing stays off (`noindex, nofollow`) until the owner approves.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
