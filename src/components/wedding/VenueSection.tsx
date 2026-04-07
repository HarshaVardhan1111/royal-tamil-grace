import { MapPin } from "lucide-react";
import venueImg from "@/assets/venue.jpg";

const VenueSection = () => {
  return (
    <section className="py-20 px-4 bg-ivory relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-script text-gold text-3xl mb-2">The Venue</p>
          <h2 className="font-display text-3xl md:text-4xl text-maroon font-bold">Where We Celebrate</h2>
        </div>

        <div className="rounded-2xl overflow-hidden border-2 border-gold gold-glow">
          <div className="h-64 md:h-96 overflow-hidden">
            <img
              src={venueImg}
              alt="Vijaya Mahal"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
          <div className="bg-ivory p-8 text-center">
            <h3 className="font-display text-3xl text-maroon font-bold">Vijaya Mahal</h3>
            <div className="flex items-center justify-center gap-2 mt-2 text-gold">
              <MapPin className="w-5 h-5" />
              <span className="font-body text-lg">Chinnalapatti</span>
            </div>
            <a
              href="https://www.google.com/maps/search/Vijaya+Mahal+Chinnalapatti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-3 border-2 border-gold text-gold font-display tracking-widest uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500 rounded-sm"
            >
              View Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
