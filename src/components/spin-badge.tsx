/** Rotating round sticker. `text` runs around the edge; `center` sits in the middle. Decorative only. */
export function SpinBadge({ text, center, className }: { text: string; center: string; className?: string }) {
  const ring = `${text} • ${text} • `;
  return (
    <div aria-hidden="true" className={className}>
      <div className="relative grid aspect-square w-full place-items-center rounded-full border-4 border-ink bg-mustard shadow-[8px_8px_0_0_var(--uc-ink)]">
        <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-spin-slow">
          <defs>
            <path id="badge-ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text className="fill-ink font-display uppercase" style={{ fontSize: 15, letterSpacing: 2.5 }}>
            <textPath href="#badge-ring" textLength={480} lengthAdjust="spacing">
              {ring}
            </textPath>
          </text>
        </svg>
        <div className="grid size-[58%] place-items-center rounded-full border-4 border-ink bg-brand text-center">
          <span className="px-2 font-display text-[clamp(1.05rem,2.6vw,1.75rem)] uppercase leading-none text-cream">{center}</span>
        </div>
      </div>
    </div>
  );
}
