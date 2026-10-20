import { MenuTabs, type MenuTabCategory } from "@/components/menu-tabs";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { menuView } from "@/lib/menu";
import { formatPrice } from "@/lib/money";

/** Priced menu. Hidden when there are no real categories. */
export function MenuSection() {
  const categories: MenuTabCategory[] = menuView(site).map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description?.trim() ?? "",
    items: category.items.map((item) => ({
      id: item.id,
      name: item.name.trim(),
      description: item.description?.trim() ?? "",
      isNew: Boolean(item.isNew),
      signature: Boolean(item.signature),
      prices: (item.sizes ?? [])
        .filter((size) => size.label.trim() && Number.isFinite(size.price))
        .map((size) => ({ label: size.label.trim(), price: formatPrice(size.price) })),
      price: typeof item.price === "number" ? formatPrice(item.price, item.priceFrom) : "",
    })),
  }));
  if (categories.length === 0) return null;

  return (
    <section id="menu" aria-labelledby="menu-title" className="deli-paper border-b-4 border-ink py-20 sm:py-28">
      <div className={cn(container)}>
        <Reveal>
          <SectionHeading id="menu-title" kicker="Mangia!" title="The Menu" note={site.menuNote.trim() || undefined} />
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <MenuTabs categories={categories} />
        </Reveal>
      </div>
    </section>
  );
}
