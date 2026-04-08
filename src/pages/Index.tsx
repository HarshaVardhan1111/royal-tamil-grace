import { useState } from "react";
import FloatingPetals from "@/components/wedding/FloatingPetals";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import SaveTheDateSection from "@/components/wedding/SaveTheDateSection";
import EngagementSection from "@/components/wedding/EngagementSection";
import WeddingSection from "@/components/wedding/WeddingSection";
import VenueShowcase from "@/components/wedding/VenueShowcase";
import PreWeddingEvents from "@/components/wedding/PreWeddingEvents";
import FooterSection from "@/components/wedding/FooterSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import OpeningScreen from "@/components/wedding/OpeningScreen";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const fadeClass = (visible: boolean) =>
  `transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

const Index = () => {
  const [opened, setOpened] = useState(false);
  const countdown = useScrollFadeIn();
  const saveDate = useScrollFadeIn();
  const engagement = useScrollFadeIn();
  const wedding = useScrollFadeIn();
  const venue = useScrollFadeIn();
  const preEvents = useScrollFadeIn();
  const footer = useScrollFadeIn();

  return (
    <>
      {!opened && <OpeningScreen onOpen={() => setOpened(true)} />}
      <div className={`relative overflow-x-hidden transition-opacity duration-700 ${opened ? "opacity-100" : "opacity-0"}`}>
        <MusicPlayer />
        <FloatingPetals />
        <HeroSection />
        <div ref={countdown.ref} className={fadeClass(countdown.visible)}>
          <CountdownSection />
        </div>
        <div ref={saveDate.ref} className={fadeClass(saveDate.visible)}>
          <SaveTheDateSection />
        </div>
        <div ref={preEvents.ref} className={fadeClass(preEvents.visible)}>
          <PreWeddingEvents />
        </div>
        <div ref={engagement.ref} className={fadeClass(engagement.visible)}>
          <EngagementSection />
        </div>
        <div ref={wedding.ref} className={fadeClass(wedding.visible)}>
          <WeddingSection />
        </div>
        <div ref={venue.ref} className={fadeClass(venue.visible)}>
          <VenueShowcase />
        </div>
        <div ref={footer.ref} className={fadeClass(footer.visible)}>
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default Index;
