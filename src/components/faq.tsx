import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container, focusRing } from "@/components/styles";
import { cn } from "@/lib/cn";
import { faqItems } from "@/lib/faq";

/** Hidden when there are no complete Q&A pairs. */
export function Faq() {
  const items = faqItems();
  if (items.length === 0) return null;

  return (
    <section id="faq" aria-labelledby="faq-title" className="deli-paper py-20 sm:py-28">
      <div className={cn(container, "max-w-4xl")}>
        <Reveal>
          <SectionHeading id="faq-title" kicker="Good to know" title="FAQ" />
        </Reveal>
        <div className="mt-10 space-y-4">
          {items.map((item, index) => (
            <details key={index} className="group rounded-xl border-2 border-ink bg-paper shadow-[4px_4px_0_0_var(--uc-ink)]">
              <summary className={cn("flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-xl uppercase", focusRing)}>
                {item.question}
                <span aria-hidden="true" className="text-2xl text-brand transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-ink/80">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
