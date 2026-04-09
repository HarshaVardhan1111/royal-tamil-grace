import { MapPin } from "lucide-react";
import venueImg from "@/assets/venue-vijaya-mahal.jpg";

const VenueShowcase = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-ivory">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43 72% 45% / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <p className="font-script text-gold text-3xl mb-2">🏛️</p>
        <h2 className="font-heading text-3xl md:text-4xl text-maroon font-bold mb-2 tracking-wider">Venue</h2>
        <p className="font-display text-xl text-gold font-semibold gold-text-shadow mb-8">Vijaya Mahal</p>

        <div className="relative max-w-sm mx-auto">
          <div className="absolute -inset-2 rounded-3xl border border-gold/30 animate-glow-pulse" />

          <div className="rounded-2xl border-4 border-gold shadow-2xl bg-ivory-dark relative overflow-hidden">
            {/* Venue image */}
            <div className="w-full h-48 md:h-56 overflow-hidden">
              <img src={venueImg} alt="Vijaya Mahal" className="w-full h-full object-cover" />
            </div>

            <div className="p-8 md:p-10">
              <h3 className="font-heading-decorative text-3xl text-maroon font-bold tracking-wider">
                Vijaya Mahal
              </h3>

              <div className="flex items-center justify-center gap-2 mt-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="font-body text-foreground/70 text-lg">Chinnalapatti</span>
              </div>

              <div className="w-16 h-px mx-auto my-6" style={{
                background: "linear-gradient(90deg, transparent, hsl(43 60% 55%), transparent)"
              }} />

              <p className="font-body text-foreground/60 italic text-lg">
                "A grand venue for a grand celebration"
              </p>
            </div>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/Vijaya+Mahal+Chinnalapatti"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 border-2 border-gold text-gold font-heading tracking-[0.15em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500 rounded-full text-sm"
        >
          View on Map
        </a>
      </div>
    </section>
  );
};

export default VenueShowcase;
