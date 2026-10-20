import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { galleryPhotos, heroPhoto, photoDimensions, storyPhoto } from "@/lib/photos";

/** Real photos from `public/images/` only. Hidden when there are none besides the hero. */
export function Gallery() {
  const hero = heroPhoto(site.photos, site.heroImage);
  const story = storyPhoto(site.photos);
  const photos = galleryPhotos(site.photos).filter((photo) => photo.src !== hero?.src && photo.src !== story?.src);
  if (photos.length === 0) return null;

  return (
    <section id="photos" aria-labelledby="photos-title" className="border-b-4 border-ink bg-ink py-20 text-cream sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading id="photos-title" kicker="From the shop" title="Photos" tone="cream" />
        </Reveal>
        <ul className="mt-10 columns-2 gap-3 sm:gap-6 lg:columns-3">
          {photos.map((photo, index) => (
            <li key={photo.src} className="mb-3 break-inside-avoid sm:mb-6">
              <Reveal
                delay={(index % 3) * 0.06}
                className={cn("border-2 border-cream bg-cream p-1 shadow-[4px_4px_0_0_var(--uc-brand)] sm:border-4 sm:p-2 sm:shadow-[6px_6px_0_0_var(--uc-brand)]", index % 2 ? "rotate-1" : "-rotate-1")}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  {...photoDimensions(photo)}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="h-auto w-full"
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
