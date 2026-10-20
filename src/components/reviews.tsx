import { Star } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container, focusRing } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { formatCount, reviewQuotes, reviewScores } from "@/lib/reviews";

function Stars({ value, className }: { value: number; className?: string }) {
  const full = Math.round(value);
  return (
    <span className={cn("flex", className)} role="img" aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn("size-5 stroke-ink", i < full ? "fill-mustard" : "fill-transparent")}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

/**
 * Verbatim review quotes with star rating and source label. No reviewer names exist in the data.
 * Hidden unless at least one quote has text and a source label.
 */
export function Reviews() {
  const quotes = reviewQuotes(site.testimonials);
  if (quotes.length === 0) return null;
  const scores = reviewScores(site);

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="gingham border-b-4 border-ink py-20 sm:py-28">
      <div className={container}>
        <Reveal className="rounded-2xl border-4 border-ink bg-cream p-6 shadow-[8px_8px_0_0_var(--uc-ink)] sm:p-10">
          <SectionHeading id="reviews-title" kicker="What folks say" title="Reviews" />
          {scores.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-3">
              {scores.map((score) => {
                const body = (
                  <>
                    <span className="font-display text-3xl leading-none">{score.value.toFixed(1)}</span>
                    <Stars value={score.value} />
                    <span className="text-sm font-bold">
                      {formatCount(score.count)} {score.source} reviews
                    </span>
                  </>
                );
                const cls = "inline-flex items-center gap-3 rounded-xl border-2 border-ink bg-paper px-4 py-2";
                return (
                  <li key={score.source}>
                    {score.href ? (
                      <a href={score.href} target="_blank" rel="noopener noreferrer" className={cn(cls, focusRing)}>
                        {body}
                      </a>
                    ) : (
                      <span className={cls}>{body}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote, index) => (
            <li key={index}>
              <Reveal
                delay={(index % 3) * 0.08}
                className={cn(
                  "flex h-full flex-col rounded-2xl border-4 border-ink bg-paper p-6 shadow-[6px_6px_0_0_var(--uc-ink)]",
                  index % 2 === 0 ? "-rotate-1" : "rotate-1",
                )}
              >
                <figure className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span aria-hidden="true" className="-mt-2 font-display text-7xl leading-none text-brand">
                      “
                    </span>
                    {quote.rating !== null && <Stars value={quote.rating} />}
                  </div>
                  <blockquote className="mt-1 flex-1 text-lg font-medium leading-relaxed">
                    <p>{quote.quote}</p>
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-bold uppercase tracking-wider text-ink/70">
                    {quote.href ? (
                      <a href={quote.href} target="_blank" rel="noopener noreferrer" className={cn("underline underline-offset-4 hover:text-brand", focusRing)}>
                        {quote.sourceLabel}
                      </a>
                    ) : (
                      quote.sourceLabel
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
