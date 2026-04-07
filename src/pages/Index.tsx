import FloatingPetals from "@/components/wedding/FloatingPetals";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import StorySection from "@/components/wedding/StorySection";
import EventsSection from "@/components/wedding/EventsSection";
import VenueSection from "@/components/wedding/VenueSection";
import GallerySection from "@/components/wedding/GallerySection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingPetals />
      <HeroSection />
      <CountdownSection />
      <StorySection />
      <EventsSection />
      <VenueSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
