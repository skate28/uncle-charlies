import { Clock, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ClosedNotice, ShopStatusPill, TodayMarker } from "@/components/shop-status";
import { buttonCream, buttonRed, container } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { hoursConfirmed, scheduleRows } from "@/lib/hours";
import { directionsHref, mapEmbedSrc } from "@/lib/maps";

const card = "rounded-2xl border-4 border-ink bg-paper p-6 shadow-[8px_8px_0_0_var(--uc-ink)] sm:p-8";
const label = "flex items-center gap-2 font-display text-2xl uppercase tracking-wide text-brand";

/** Hours (only when confirmed), address, tap-to-call, directions, and a keyless Google Maps embed. */
export function Visit() {
  const tel = telHref(site.phone);
  const directions = directionsHref(site);
  const map = mapEmbedSrc(site);
  const showHours = hoursConfirmed(site.hours);
  const rows = showHours ? scheduleRows(site.hours) : [];
  const summary = site.hours.summary.trim();
  const clock = { hours: site.hours, closedNotice: site.closedNotice, phone: site.phone };
  const extras = [site.priceRange.trim() ? `Price range ${site.priceRange.trim()}` : "", site.paymentNote.trim()].filter(Boolean);
  const hint = site.locationHint.trim();
  const neighborhood = site.address.neighborhood.trim();

  return (
    <section id="visit" aria-labelledby="visit-title" className="deli-paper border-b-4 border-ink py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading id="visit-title" kicker="Come on by" title={showHours ? "Hours & Location" : "Find Us"} />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            {showHours && (
              <Reveal className={card}>
                <h3 className={label}>
                  <Clock className="size-6" aria-hidden="true" />
                  Hours
                </h3>
                <ShopStatusPill input={clock} className="mt-4" />
                {rows.length > 0 ? (
                  <table className="mt-5 w-full text-left">
                    <caption className="sr-only">Weekly hours</caption>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.label} className="border-b-2 border-dashed border-ink/20 last:border-0">
                          <th scope="row" className="py-2.5 pr-4 font-bold">
                            {row.label}
                            <TodayMarker timeZone={site.hours.timezone} days={row.days} />
                          </th>
                          <td className={cn("py-2.5 text-right font-display text-xl", row.value === "Closed" && "text-brand")}>
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  summary && <p className="mt-4 text-lg font-bold">{summary}</p>
                )}
                <ClosedNotice input={clock} className="mt-4 rounded-lg bg-mustard/40 px-3 py-2 text-sm font-medium" />
                {extras.length > 0 && <p className="mt-4 text-sm text-ink/70">{extras.join(" · ")}</p>}
              </Reveal>
            )}

            <Reveal delay={0.05} className={card}>
              <h3 className={label}>
                <MapPin className="size-6" aria-hidden="true" />
                Location
              </h3>
              <address className="mt-4 not-italic">
                <span className="block font-display text-3xl uppercase leading-tight">{site.address.street}</span>
                <span className="block text-lg">
                  {[site.address.city, [site.address.region, site.address.postalCode].filter(Boolean).join(" ")]
                    .filter(Boolean)
                    .join(", ")}
                </span>
                {neighborhood && <span className="mt-1 block text-ink/70">{neighborhood}</span>}
              </address>
              {hint && <p className="mt-3 text-ink/75">{hint}</p>}
              {!showHours && extras.length > 0 && <p className="mt-3 text-sm text-ink/70">{extras.join(" · ")}</p>}
              <div className="mt-6 flex flex-wrap gap-3">
                {tel && (
                  <a href={tel} className={buttonRed}>
                    <Phone className="size-5" aria-hidden="true" />
                    {phoneLabel(site.phone)}
                  </a>
                )}
                {directions && (
                  <a href={directions} target="_blank" rel="noopener noreferrer" className={buttonCream}>
                    Directions
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          {map && (
            <Reveal delay={0.1} className="min-h-[22rem] overflow-hidden rounded-2xl border-4 border-ink shadow-[8px_8px_0_0_var(--uc-ink)]">
              <iframe
                title={`Map to ${site.name}`}
                src={map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full min-h-[22rem] border-0"
                allowFullScreen
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
