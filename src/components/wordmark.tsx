import { cn } from "@/lib/cn";

/** Splits a shop name into a bold sign line and a script tail, e.g. "Uncle Charlie's" + "Sandwiches". */
export function nameLines(name: string): { main: string; script: string } {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length < 3) return { main: words.join(" "), script: "" };
  return { main: words.slice(0, -1).join(" "), script: words[words.length - 1] };
}

export function Wordmark({ name, tone = "ink", className }: { name: string; tone?: "ink" | "cream"; className?: string }) {
  const { main, script } = nameLines(name);
  return (
    <span className={cn("inline-flex items-baseline gap-2 leading-none", className)}>
      <span className={cn("font-display text-2xl uppercase tracking-tight", tone === "ink" ? "text-ink" : "text-cream")}>
        {main}
      </span>
      {script && (
        <span className={cn("font-script text-xl", tone === "ink" ? "text-brand" : "text-mustard")}>{script}</span>
      )}
    </span>
  );
}
