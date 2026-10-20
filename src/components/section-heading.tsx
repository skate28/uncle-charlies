import { eyebrow, sectionTitle } from "@/components/styles";
import { cn } from "@/lib/cn";

export function SectionHeading({
  id,
  kicker,
  title,
  note,
  tone = "ink",
  className,
}: {
  id: string;
  kicker?: string;
  title: string;
  note?: string;
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {kicker && <p className={cn(eyebrow, tone === "cream" ? "text-mustard" : "text-brand")}>{kicker}</p>}
      <h2 id={id} className={cn(sectionTitle, "mt-2", tone === "cream" ? "text-cream" : "text-ink")}>
        {title}
      </h2>
      {note && <p className={cn("mt-4 text-lg", tone === "cream" ? "text-cream/80" : "text-ink/75")}>{note}</p>}
    </div>
  );
}
