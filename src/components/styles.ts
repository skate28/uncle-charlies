export const focusRing =
  "focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-mustard";

/** Chunky deli-sign buttons with a hard offset shadow. */
export const buttonBase = `inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-ink px-6 py-3 text-center font-display text-lg uppercase leading-none tracking-wide transition duration-150 shadow-[4px_4px_0_0_var(--uc-ink)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--uc-ink)] active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--uc-ink)] ${focusRing}`;

export const buttonMustard = `${buttonBase} bg-mustard text-ink`;

export const buttonRed = `${buttonBase} bg-brand text-cream`;

export const buttonCream = `${buttonBase} bg-cream text-ink`;

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export const eyebrow = "font-script text-2xl leading-none sm:text-3xl";

export const sectionTitle = "font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl";
