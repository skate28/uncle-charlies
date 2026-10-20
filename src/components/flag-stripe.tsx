import { cn } from "@/lib/cn";

/** Green / cream / red band. */
export function FlagStripe({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("grid h-2 grid-cols-3", className)}>
      <span className="bg-basil" />
      <span className="bg-cream" />
      <span className="bg-brand" />
    </div>
  );
}
