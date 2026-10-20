"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

import { focusRing } from "@/components/styles";
import { cn } from "@/lib/cn";

export type MenuTabItem = {
  id: string;
  name: string;
  description: string;
  isNew: boolean;
  signature: boolean;
  prices: { label: string; price: string }[];
  price: string;
};

export type MenuTabCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuTabItem[];
};

export function MenuTabs({ categories }: { categories: MenuTabCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const reduce = useReducedMotion();
  const baseId = useId();
  const current = categories.find((category) => category.id === active) ?? categories[0];
  if (!current) return null;

  return (
    <div>
      {categories.length > 1 && (
        <div role="tablist" aria-label="Menu categories" className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const selected = category.id === current.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${category.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                onClick={() => setActive(category.id)}
                className={cn(
                  "rounded-lg border-2 border-ink px-4 py-2 font-display text-lg uppercase tracking-wide transition",
                  selected ? "bg-brand text-cream shadow-[3px_3px_0_0_var(--uc-ink)]" : "bg-paper text-ink hover:bg-mustard",
                  focusRing,
                )}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      )}

      <div
        role={categories.length > 1 ? "tabpanel" : undefined}
        id={`${baseId}-panel`}
        aria-labelledby={categories.length > 1 ? `${baseId}-tab-${current.id}` : undefined}
        className="mt-8 rounded-2xl border-4 border-ink bg-paper p-6 shadow-[8px_8px_0_0_var(--uc-ink)] sm:p-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <h3 className="font-display text-4xl uppercase text-brand">{current.name}</h3>
            {current.description && <p className="mt-2 max-w-2xl text-ink/75">{current.description}</p>}
            {current.items.length > 0 && (
              <ul className="mt-6 grid gap-x-12 gap-y-6 md:grid-cols-2">
                {current.items.map((item) => (
                  <li key={item.id} className="border-b-2 border-dashed border-ink/25 pb-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-2xl uppercase leading-tight tracking-wide">{item.name}</span>
                      {item.signature && (
                        <span className="rounded-full bg-mustard px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-ink">
                          Favorite
                        </span>
                      )}
                      {item.isNew && (
                        <span className="rounded-full bg-basil px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-cream">
                          New
                        </span>
                      )}
                      <span aria-hidden="true" className="mx-1 flex-1 translate-y-[-0.3em] border-b-2 border-dotted border-ink/30" />
                      {item.prices.length === 0 && item.price && (
                        <span className="font-display text-2xl text-brand">{item.price}</span>
                      )}
                    </div>
                    {item.prices.length > 0 && (
                      <p className="mt-1 flex flex-wrap gap-x-4 font-display text-lg text-brand">
                        {item.prices.map((size) => (
                          <span key={size.label}>
                            <span className="text-ink/70">{size.label}</span> {size.price}
                          </span>
                        ))}
                      </p>
                    )}
                    {item.description && <p className="mt-1 text-[0.95rem] text-ink/75">{item.description}</p>}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
