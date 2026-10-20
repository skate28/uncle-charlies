import { Faq } from "@/components/faq";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { MenuSection } from "@/components/menu-section";
import { Order } from "@/components/order";
import { Reviews } from "@/components/reviews";
import { Story } from "@/components/story";
import { Visit } from "@/components/visit";

/** Every section below returns null when its content is empty. */
export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <Marquee />
      <MenuSection />
      <Story />
      <Reviews />
      <Gallery />
      <Order />
      <Visit />
      <Faq />
    </main>
  );
}
