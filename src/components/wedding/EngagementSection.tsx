const EngagementSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(var(--ivory)) 0%, hsl(var(--ivory-dark)) 100%)" }}>
      {/* Jasmine string decorations */}
      <div className="absolute top-0 left-4 w-px h-32 bg-gradient-to-b from-gold to-transparent opacity-40" />
      <div className="absolute top-0 right-4 w-px h-32 bg-gradient-to-b from-gold to-transparent opacity-40" />
      <div className="absolute top-8 left-3 flex flex-col items-center gap-2 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full bg-ivory border border-gold" />
        ))}
      </div>
      <div className="absolute top-8 right-3 flex flex-col items-center gap-2 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full bg-ivory border border-gold" />
        ))}
      </div>

      <div className="max-w-lg mx-auto text-center">
        <p className="font-script text-gold text-3xl mb-2">💍</p>
        <h2 className="font-heading text-3xl md:text-4xl text-maroon font-bold mb-2 tracking-wider">Engagement</h2>
        <p className="font-display text-xl text-gold font-semibold gold-text-shadow mb-8">May 28, 2026</p>

        {/* Decorative ring ceremony frame */}
        <div className="relative max-w-sm mx-auto p-8 rounded-2xl border-2 border-gold/40 bg-ivory gold-glow">
          {/* Corner florals */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-lg" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-lg" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-lg" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-lg" />

          {/* Ring icon */}
          <div className="flex justify-center mb-4">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-gold">
              <circle cx="22" cy="30" r="12" stroke="currentColor" fill="none" strokeWidth="2" />
              <circle cx="38" cy="30" r="12" stroke="currentColor" fill="none" strokeWidth="2" />
              <circle cx="22" cy="22" r="2" fill="currentColor" opacity="0.6" />
              <circle cx="38" cy="22" r="2" fill="currentColor" opacity="0.6" />
            </svg>
          </div>

          <h3 className="font-heading-decorative text-2xl text-maroon font-bold tracking-wider mb-2">Ring Ceremony</h3>
          <p className="font-body text-lg text-foreground/70 italic">
            "A special day marking the beginning of a lifelong bond, sealed with love and blessings"
          </p>

          <div className="mt-4 flex justify-center">
            <svg width="120" height="20" viewBox="0 0 120 20" className="text-gold opacity-50">
              <path d="M0 10 Q30 0 60 10 Q90 20 120 10" stroke="currentColor" fill="none" strokeWidth="1" />
              <circle cx="60" cy="10" r="2" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
