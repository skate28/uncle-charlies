import { ExternalLink, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonCream, buttonMustard, container } from "@/components/styles";
import { site } from "@/content";
import { orderingLinks } from "@/lib/ordering";

/** Links to ordering services the shop already uses. Renders nothing when content lists none. */
export function Order() {
  const links = orderingLinks(site);
  if (links.length === 0) return null;

  return (
    <section id="order" aria-labelledby="order-title" className="border-b-4 border-ink bg-brand py-20 text-cream sm:py-24">
      <div className={container}>
        <Reveal>
          <SectionHeading id="order-title" kicker="Order up" title="Order" tone="cream" />
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap gap-4">
            {links.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.kind === "phone" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className={index === 0 ? buttonMustard : buttonCream}
                >
                  {link.kind === "phone" ? <Phone className="size-5" aria-hidden="true" /> : <ExternalLink className="size-5" aria-hidden="true" />}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
