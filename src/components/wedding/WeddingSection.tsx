import weddingImg from "@/assets/wedding-grand.jpg";

const WeddingSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-ivory-dark">
      {/* Mandapam-inspired decorative arch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg mx-auto">
        <svg viewBox="0 0 400 60" className="w-full text-gold opacity-20" preserveAspectRatio="xMidYMin meet">
          <path d="M0 60 Q50 10 100 30 Q150 0 200 10 Q250 0 300 30 Q350 10 400 60" stroke="currentColor" fill="none" strokeWidth="1.5" />
          <path d="M20 60 Q70 20 120 35 Q170 10 200 18 Q230 10 280 35 Q330 20 380 60" stroke="currentColor" fill="none" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-lg mx-auto text-center relative z-10">
        <p className="font-script text-gold text-3xl mb-2">🪔</p>
        <h2 className="font-display text-3xl md:text-4xl text-maroon font-bold mb-2">Wedding</h2>
        <p className="font-display text-xl text-gold font-semibold gold-text-shadow mb-3">May 29, 2026</p>
        <p className="font-body text-foreground/60 text-sm uppercase tracking-[0.3em] mb-8">The Sacred Union</p>

        {/* Grand image frame with lamp decorations */}
        <div className="relative">
          {/* Brass lamp left */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-gold opacity-40 hidden md:block">
            <svg width="24" height="80" viewBox="0 0 24 80">
              <ellipse cx="12" cy="8" rx="4" ry="4" fill="currentColor" />
              <rect x="10" y="12" width="4" height="50" fill="currentColor" rx="2" />
              <ellipse cx="12" cy="68" rx="10" ry="6" fill="currentColor" />
            </svg>
          </div>
          {/* Brass lamp right */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-gold opacity-40 hidden md:block">
            <svg width="24" height="80" viewBox="0 0 24 80">
              <ellipse cx="12" cy="8" rx="4" ry="4" fill="currentColor" />
              <rect x="10" y="12" width="4" height="50" fill="currentColor" rx="2" />
              <ellipse cx="12" cy="68" rx="10" ry="6" fill="currentColor" />
            </svg>
          </div>

          <div className="rounded-2xl overflow-hidden border-4 border-gold gold-glow">
            <img
              src={weddingImg}
              alt="Grand South Indian wedding ceremony"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>

          {/* Garland decoration */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full border border-gold"
                style={{
                  background: i % 2 === 0 ? "hsl(var(--gold))" : "hsl(var(--maroon))",
                  transform: `translateY(${Math.sin(i * 0.8) * 4}px)`,
                }}
              />
            ))}
          </div>
        </div>

        <p className="font-body text-foreground/70 mt-8 text-lg italic leading-relaxed max-w-md mx-auto">
          "The sacred union of two hearts and two families, blessed by the divine"
        </p>

        {/* Decorative divider */}
        <div className="mt-6 flex justify-center">
          <svg width="120" height="20" viewBox="0 0 120 20" className="text-gold opacity-50">
            <path d="M0 10 Q30 0 60 10 Q90 20 120 10" stroke="currentColor" fill="none" strokeWidth="1" />
            <circle cx="60" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WeddingSection;
