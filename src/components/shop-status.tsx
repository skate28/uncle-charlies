"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import { getShopStatus, hoursFallback, statusLabel, weekdayKey, type ShopClockInput, type StatusTone } from "@/lib/hours";

/** Live open/closed pill. Renders nothing when hours are unknown. */
export function ShopStatusPill({ input, className }: { input: ShopClockInput; className?: string }) {
  const summary = hoursFallback(input.hours);
  const [live, setLive] = useState<{ label: string; tone: StatusTone } | null>(null);

  useEffect(() => {
    const update = () => setLive(statusLabel(new Date(), input));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, [input]);

  const label = live?.label ?? summary;
  const tone = live?.tone ?? "neutral";
  if (!label) return null;

  return (
    <p
      aria-live="polite"
      className={cn(
        "inline-flex max-w-full items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-2 text-sm font-bold text-ink shadow-[3px_3px_0_0_var(--uc-ink)]",
        className,
      )}
    >
      <span className="relative flex size-2.5 shrink-0">
        {tone === "open" && <span className="absolute inline-flex size-full animate-ping rounded-full bg-basil opacity-60" />}
        <span
          className={cn(
            "relative inline-flex size-2.5 rounded-full",
            tone === "open" && "bg-basil",
            tone === "closed" && "bg-brand",
            tone === "neutral" && "bg-mustard",
          )}
        />
      </span>
      <span>{label}</span>
    </p>
  );
}

/** Shown only while the shop is actually closed and a notice is set. */
export function ClosedNotice({ input, className }: { input: ShopClockInput; className?: string }) {
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    const update = () => setClosed(getShopStatus(new Date(), input).isOpen === false);
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, [input]);
  const text = input.closedNotice.trim();
  if (!closed || !text) return null;
  return <p className={className}>{text}</p>;
}

/** Highlights today's row in the hours table after hydration. */
export function TodayMarker({ timeZone, days }: { timeZone: string; days: string[] }) {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    const update = () => setToday(weekdayKey(new Date(), timeZone));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, [timeZone]);
  if (!today || !days.includes(today)) return null;
  return (
    <span className="ml-2 rounded-full bg-brand px-2 py-0.5 align-middle text-[0.65rem] font-bold uppercase tracking-wider text-cream">
      Today
    </span>
  );
}
