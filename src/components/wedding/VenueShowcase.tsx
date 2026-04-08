import { MapPin } from "lucide-react";
import venueImg from "@/assets/venue-vijaya-mahal.jpg";

const VenueShowcase = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-ivory">
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43 72% 45% / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <p className="font-script text-gold text-3xl mb-2">🏛️</p>
        <h2 className="font-display text-3xl md:text-4xl text-maroon font-bold mb-2">Venue</h2>
        <p className="font-display text-xl text-gold font-semibold gold-text-shadow mb-8">Vijaya Mahal</p>

        {/* Featured venue card */}
        <div className="relative">
          {/* Outer glow frame */}
          <div className="absolute -inset-2 rounded-3xl border border-gold/30 animate-glow-pulse" />

          <div className="rounded-2xl overflow-hidden border-4 border-gold shadow-2xl">
            <div className="relative">
              <img
                src={venueImg}
                alt="Vijaya Mahal venue"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="font-display text-ivory text-2xl font-bold drop-shadow-lg">Vijaya Mahal</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="font-body text-ivory/90 text-sm">Chinnalapatti</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/Vijaya+Mahal+Chinnalapatti"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 border-2 border-gold text-gold font-display tracking-widest uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500 rounded-full text-sm"
        >
          View on Map
        </a>
      </div>
    </section>
  );
};

export default VenueShowcase;
