"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Big stacked sign lettering. Words drop in like a sign going up. */
export function HeroTitle({ main, script }: { main: string; script: string }) {
  const reduce = useReducedMotion();
  const words = main.split(/\s+/).filter(Boolean);

  return (
    <h1 className="relative">
      <span className="sr-only">{[main, script].filter(Boolean).join(" ")}</span>
      <span aria-hidden="true" className="block">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="block font-display text-[clamp(4.25rem,15vw,10.5rem)] uppercase leading-[0.84] tracking-tight text-cream drop-shadow-[5px_5px_0_var(--uc-ink)]"
            initial={reduce ? false : { opacity: 0, y: -60, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 18, delay: 0.1 + index * 0.12 }}
          >
            {word}
          </motion.span>
        ))}
        {script && (
          <motion.span
            className="-mt-2 ml-2 block -rotate-6 font-script text-[clamp(3rem,10vw,6.5rem)] leading-none text-mustard drop-shadow-[4px_4px_0_var(--uc-ink)] sm:ml-10"
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 200, damping: 14, delay: 0.2 + words.length * 0.12 }}
          >
            {script}
          </motion.span>
        )}
      </span>
    </h1>
  );
}
