import { MapPin } from "lucide-react";

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
        <h2 className="font-heading text-3xl md:text-4xl text-maroon font-bold mb-2 tracking-wider">Venue</h2>
        <p className="font-display text-xl text-gold font-semibold gold-text-shadow mb-8">Vijaya Mahal</p>

        {/* Premium venue card - text only */}
        <div className="relative max-w-sm mx-auto">
          <div className="absolute -inset-2 rounded-3xl border border-gold/30 animate-glow-pulse" />

          <div className="rounded-2xl border-4 border-gold shadow-2xl bg-ivory-dark p-8 md:p-10 relative overflow-hidden">
            {/* Temple pillar decorations */}
            <div className="absolute left-0 top-0 bottom-0 w-8 opacity-10">
              <div className="h-full w-full" style={{
                backgroundImage: `repeating-linear-gradient(180deg, hsl(43 72% 45%), hsl(43 72% 45%) 2px, transparent 2px, transparent 20px)`,
              }} />
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-8 opacity-10">
              <div className="h-full w-full" style={{
                backgroundImage: `repeating-linear-gradient(180deg, hsl(43 72% 45%), hsl(43 72% 45%) 2px, transparent 2px, transparent 20px)`,
              }} />
            </div>

            {/* Temple gopuram icon */}
            <div className="flex justify-center mb-6">
              <svg width="60" height="80" viewBox="0 0 60 80" className="text-gold">
                <path d="M30 5 L45 20 L42 20 L42 70 L18 70 L18 20 L15 20 Z" stroke="currentColor" fill="none" strokeWidth="1.5" />
                <rect x="25" y="55" width="10" height="15" stroke="currentColor" fill="none" strokeWidth="1" />
                <circle cx="30" cy="12" r="2" fill="currentColor" />
                <line x1="22" y1="30" x2="38" y2="30" stroke="currentColor" strokeWidth="0.8" />
                <line x1="22" y1="42" x2="38" y2="42" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            </div>

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
