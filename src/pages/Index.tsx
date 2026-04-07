import FloatingPetals from "@/components/wedding/FloatingPetals";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import StorySection from "@/components/wedding/StorySection";
import EventsSection from "@/components/wedding/EventsSection";
import VenueSection from "@/components/wedding/VenueSection";
import GallerySection from "@/components/wedding/GallerySection";
import FooterSection from "@/components/wedding/FooterSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const fadeClass = (visible: boolean) =>
  `transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

const Index = () => {
  const countdown = useScrollFadeIn();
  const story = useScrollFadeIn();
  const events = useScrollFadeIn();
  const venue = useScrollFadeIn();
  const gallery = useScrollFadeIn();
  const footer = useScrollFadeIn();

  return (
    <div className="relative overflow-x-hidden">
      <FloatingPetals />
      <HeroSection />
      <div ref={countdown.ref} className={fadeClass(countdown.visible)}>
        <CountdownSection />
      </div>
      <div ref={story.ref} className={fadeClass(story.visible)}>
        <StorySection />
      </div>
      <div ref={events.ref} className={fadeClass(events.visible)}>
        <EventsSection />
      </div>
      <div ref={venue.ref} className={fadeClass(venue.visible)}>
        <VenueSection />
      </div>
      <div ref={gallery.ref} className={fadeClass(gallery.visible)}>
        <GallerySection />
      </div>
      <div ref={footer.ref} className={fadeClass(footer.visible)}>
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
