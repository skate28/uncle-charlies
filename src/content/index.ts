/**
 * The ONE place components get content from: `import { site } from "@/content"`.
 * Leads owns `./site.ts` (data only). Do not import `./site` directly elsewhere.
 */
export { site } from "./site";
export type * from "./types";
