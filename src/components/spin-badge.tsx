/** Rotating round sticker. `text` runs around the edge; `center` sits in the middle. Decorative only. */
export function SpinBadge({
  text,
  center,
  small = false,
  className,
}: {
  text: string;
  center: string;
  small?: boolean;
  className?: string;
}) {
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
          <span className={`px-1 text-center font-display uppercase leading-none text-cream ${small ? "text-sm" : "text-xl sm:text-2xl"}`}>{center}</span>
        </div>
      </div>
    </div>
  );
}
