/**
 * The ONE place components get content from: `import { site } from "@/content"`.
 *
 * Today this re-exports `./confirmed` (verified facts only; every other section renders nothing).
 * When Leads posts "handoff final" and `src/content/site.ts` exists, change the line below to:
 *
 *   export { site } from "./site";
 *
 * That is the only code change needed to wire final content. Nothing imports `./site` directly,
 * so the build passes before the handoff without any placeholder copy.
 */
export { site } from "./confirmed";
export type * from "./types";
