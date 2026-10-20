# Uncle Charlie's Sandwiches

Pitch site for Uncle Charlie's Sandwiches — Italian subs, pizza & sandwiches, 1977 Lane Ave S, Jacksonville, FL 32210.

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · framer-motion · lucide-react · zod.

```bash
npm ci
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

- Content contract: [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md) and `src/content/types.ts`.
- Architecture and rules: [ARCHITECTURE.md](./ARCHITECTURE.md), [AGENTS.md](./AGENTS.md).
- Search indexing is OFF (`noindex, nofollow`, robots.txt `Disallow: /`, `X-Robots-Tag`). See `.env.example`.

Built by [nicklopacki.com](https://nicklopacki.com).
