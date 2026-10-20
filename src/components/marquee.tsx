import { site } from "@/content";
import { menuView } from "@/lib/menu";

/** Scrolling deli ticker. Menu category names when a menu exists, otherwise the tagline. Empty = hidden. */
export function Marquee() {
  const categories = menuView(site).map((category) => category.name);
  const words = categories.length > 0 ? categories : [site.tagline.trim()].filter(Boolean);
  if (words.length === 0) return null;
  const run = Array.from({ length: Math.max(2, Math.ceil(8 / words.length)) }, () => words).flat();

  return (
    <div aria-hidden="true" className="overflow-hidden border-b-4 border-ink bg-mustard py-4">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {run.map((word, index) => (
              <li key={`${copy}-${index}`} className="flex items-center font-display text-3xl uppercase tracking-wide text-ink sm:text-4xl">
                <span className="px-6">{word}</span>
                <span className="text-brand">★</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
