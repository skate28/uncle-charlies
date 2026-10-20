import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { photoDimensions, storyPhoto } from "@/lib/photos";
import Image from "next/image";

/** "Our story". Hidden when `about.paragraphs` is empty. */
export function Story() {
  const paragraphs = site.about.paragraphs.map((p) => p.trim()).filter(Boolean);
  if (paragraphs.length === 0) return null;
  const heading = site.about.heading.trim() || "Our story";
  const opened = site.opened.trim();
  const photo = storyPhoto(site.photos);

  return (
    <section id="story" aria-labelledby="story-title" className="border-b-4 border-ink bg-basil py-20 text-cream sm:py-28">
      <div className={cn(container, "grid gap-10 lg:grid-cols-[1fr_1.2fr]")}>
        <Reveal>
          <SectionHeading id="story-title" kicker={opened ? `Since ${opened}` : undefined} title={heading} tone="cream" />
          {photo && (
            <figure className="mt-10 -rotate-2 border-4 border-ink bg-cream p-2 shadow-[8px_8px_0_0_var(--uc-mustard)]">
              <Image src={photo.src} alt={photo.alt} {...photoDimensions(photo)} sizes="(min-width: 1024px) 40vw, 90vw" className="h-auto w-full" />
            </figure>
          )}
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 self-center text-lg leading-relaxed text-cream/90">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
