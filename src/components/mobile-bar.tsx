import { MapPin, Phone, UtensilsCrossed } from "lucide-react";

import { focusRing } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { directionsHref } from "@/lib/maps";
import { menuView } from "@/lib/menu";

/** Sticky phone bar: big tap-to-call, plus Menu (when a menu exists) and Directions. */
export function MobileBar() {
  const tel = telHref(site.phone);
  const directions = directionsHref(site);
  const hasMenu = menuView(site).length > 0;
  if (!tel && !directions) return null;
  const item = "flex min-h-12 items-center justify-center gap-1.5 rounded-xl text-sm font-bold uppercase tracking-wide";

  return (
    <nav
      aria-label="Quick actions"
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 grid gap-1.5 rounded-2xl border-2 border-ink bg-ink p-1.5 text-cream shadow-[4px_4px_0_0_var(--uc-brand)] md:hidden",
        hasMenu ? "grid-cols-[1.5fr_1fr_1fr]" : "grid-cols-[1.6fr_1fr]",
      )}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      {tel && (
        <a href={tel} className={cn(item, "bg-brand font-display text-lg text-cream", focusRing)}>
          <Phone className="size-5" aria-hidden="true" />
          Call now
        </a>
      )}
      {hasMenu && (
        <a href="#menu" className={cn(item, focusRing)}>
          <UtensilsCrossed className="size-4" aria-hidden="true" />
          Menu
        </a>
      )}
      {directions && (
        <a href={directions} target="_blank" rel="noopener noreferrer" className={cn(item, focusRing)}>
          <MapPin className="size-4" aria-hidden="true" />
          Directions
        </a>
      )}
    </nav>
  );
}
