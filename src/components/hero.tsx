import { MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";

import { FlagStripe } from "@/components/flag-stripe";
import { HeroTitle } from "@/components/hero-title";
import { ShopStatusPill } from "@/components/shop-status";
import { SpinBadge } from "@/components/spin-badge";
import { buttonCream, buttonMustard, container, focusRing } from "@/components/styles";
import { nameLines } from "@/components/wordmark";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { hoursConfirmed } from "@/lib/hours";
import { directionsHref } from "@/lib/maps";
import { photoDimensions, heroPhoto } from "@/lib/photos";
import { formatCount, reviewScores } from "@/lib/reviews";

export function Hero() {
  const { main, script } = nameLines(site.name);
  const tel = telHref(site.phone);
  const directions = directionsHref(site);
  const scores = reviewScores(site);
  const photo = heroPhoto(site.photos, site.heroImage);
  const kicker = site.heroKicker?.trim() ?? "";
  const tagline = site.tagline.trim();
  const showStatus = hoursConfirmed(site.hours);
  const clock = { hours: site.hours, closedNotice: site.closedNotice, phone: site.phone };
  const badgeText = [tagline, site.address.city.trim()].filter(Boolean).join(" • ");

  return (
    <section aria-label="Welcome" className="relative overflow-hidden border-b-4 border-ink bg-brand text-cream">
      <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-brand-deep/60 blur-3xl" />

      <div className={cn(container, "relative grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.35fr_1fr] lg:pb-24")}>
        <div>
          {kicker && <p className="mb-4 font-display text-lg uppercase tracking-[0.2em] text-mustard">{kicker}</p>}
          <HeroTitle main={main} script={script} />
          {tagline && (
            <p className="mt-8 max-w-xl font-display text-2xl uppercase leading-tight tracking-wide text-cream sm:text-3xl">
              {tagline}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {scores.map((score) => (
              <a
                key={score.source}
                href={score.href ?? "#reviews"}
                {...(score.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-2 text-sm font-bold text-ink shadow-[3px_3px_0_0_var(--uc-ink)]",
                  focusRing,
                )}
              >
                <Star className="size-4 fill-mustard stroke-ink" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  {score.value.toFixed(1)} on {score.source} · {formatCount(score.count)} reviews
                </span>
              </a>
            ))}
            {showStatus && <ShopStatusPill input={clock} />}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {tel && (
              <a href={tel} className={buttonMustard}>
                <Phone className="size-5" aria-hidden="true" />
                Call {phoneLabel(site.phone)}
              </a>
            )}
            {directions && (
              <a href={directions} target="_blank" rel="noopener noreferrer" className={buttonCream}>
                <MapPin className="size-5" aria-hidden="true" />
                Directions
              </a>
            )}
          </div>
          {site.address.full.trim() && <p className="mt-5 text-sm font-medium text-cream/85">{site.address.full}</p>}
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          {photo ? (
            <figure className="relative rotate-2 border-4 border-ink bg-paper p-3 shadow-[10px_10px_0_0_var(--uc-ink)]">
              <Image
                src={photo.src}
                alt={photo.alt}
                {...photoDimensions(photo)}
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full object-cover"
              />
              <SpinBadge
                text={badgeText || site.name}
                center={site.opened.trim() ? `Est. ${site.opened.trim()}` : "★"}
                small
                className="absolute -bottom-10 -left-2 w-28 sm:-left-10 sm:w-36"
              />
            </figure>
          ) : (
            <SpinBadge
              text={badgeText || site.name}
              center={site.address.city.trim() || "★"}
              className="mx-auto w-52 sm:w-72 lg:w-80"
            />
          )}
        </div>
      </div>
      <FlagStripe className="h-3" />
    </section>
  );
}
