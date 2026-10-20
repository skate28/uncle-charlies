import Link from "next/link";

import { buttonRed, container } from "@/components/styles";

export default function NotFound() {
  return (
    <main id="content" className={`${container} flex min-h-[60vh] flex-col items-start justify-center gap-6 py-24`}>
      <p className="font-script text-3xl text-brand">Whoops</p>
      <h1 className="font-display text-6xl uppercase leading-none sm:text-8xl">Page not found</h1>
      <Link href="/" className={buttonRed}>
        Back to the home page
      </Link>
    </main>
  );
}
