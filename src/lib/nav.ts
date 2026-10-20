import { site } from "@/content";
import { hasFaq } from "@/lib/faq";
import { hoursConfirmed } from "@/lib/hours";
import { menuView } from "@/lib/menu";
import { orderingLinks } from "@/lib/ordering";
import { galleryPhotos } from "@/lib/photos";
import { hasReviews } from "@/lib/reviews";

export type NavLink = {
  href: string;
  label: string;
};

export function hasAbout(): boolean {
  return site.about.paragraphs.some((paragraph) => paragraph.trim());
}

/** Header links. A link exists only when its section renders. */
export function primaryNav(): NavLink[] {
  return [
    { href: "#menu", label: "Menu", show: menuView(site).length > 0 },
    { href: "#story", label: "Our story", show: hasAbout() },
    { href: "#reviews", label: "Reviews", show: hasReviews(site) },
    { href: "#photos", label: "Photos", show: galleryPhotos(site.photos).length > 0 },
    { href: "#order", label: "Order", show: orderingLinks(site).length > 0 },
    { href: "#visit", label: hoursConfirmed(site.hours) ? "Hours & location" : "Location", show: true },
    { href: "#faq", label: "FAQ", show: hasFaq() },
  ]
    .filter((link) => link.show)
    .map(({ href, label }) => ({ href, label }));
}
