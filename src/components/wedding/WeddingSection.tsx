const WeddingSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-ivory-dark">
      {/* Mandapam arch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg mx-auto">
        <svg viewBox="0 0 400 80" className="w-full text-gold opacity-20" preserveAspectRatio="xMidYMin meet">
          <path d="M0 80 Q50 10 100 30 Q150 0 200 10 Q250 0 300 30 Q350 10 400 80" stroke="currentColor" fill="none" strokeWidth="1.5" />
          <path d="M20 80 Q70 20 120 35 Q170 10 200 18 Q230 10 280 35 Q330 20 380 80" stroke="currentColor" fill="none" strokeWidth="1" />
          {/* Temple pillars */}
          <rect x="40" y="40" width="6" height="40" fill="currentColor" opacity="0.3" rx="1" />
          <rect x="354" y="40" width="6" height="40" fill="currentColor" opacity="0.3" rx="1" />
        </svg>
      </div>

      {/* Kolam bg pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='20' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3Ccircle cx='40' cy='40' r='10' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3Cpath d='M40 20 L40 60 M20 40 L60 40' stroke='%23000' stroke-width='0.3'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <p className="font-script text-gold text-3xl mb-2">🪔</p>
        <h2 className="font-heading-decorative text-3xl md:text-5xl text-maroon font-bold mb-3 tracking-wider">Wedding</h2>

        {/* Grand mandapam card */}
        <div className="relative max-w-md mx-auto mt-8">
          {/* Brass lamps */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-gold opacity-50 hidden md:block">
            <svg width="28" height="90" viewBox="0 0 28 90">
              <ellipse cx="14" cy="8" rx="5" ry="5" fill="currentColor" />
              <ellipse cx="14" cy="4" rx="3" ry="3" fill="hsl(43,72%,65%)" className="animate-pulse" />
              <rect x="12" y="13" width="4" height="55" fill="currentColor" rx="2" />
              <ellipse cx="14" cy="75" rx="12" ry="7" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-gold opacity-50 hidden md:block">
            <svg width="28" height="90" viewBox="0 0 28 90">
              <ellipse cx="14" cy="8" rx="5" ry="5" fill="currentColor" />
              <ellipse cx="14" cy="4" rx="3" ry="3" fill="hsl(43,72%,65%)" className="animate-pulse" />
              <rect x="12" y="13" width="4" height="55" fill="currentColor" rx="2" />
              <ellipse cx="14" cy="75" rx="12" ry="7" fill="currentColor" />
            </svg>
          </div>

          <div className="p-8 md:p-10 rounded-2xl border-4 border-gold gold-glow bg-ivory relative">
            {/* Garland top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "hsl(var(--gold))" : "hsl(var(--maroon))",
                    transform: `translateY(${Math.sin(i * 0.7) * 4}px)`,
                  }}
                />
              ))}
            </div>

            <p className="font-heading text-sm uppercase tracking-[0.4em] text-gold/70 mb-4">The Sacred Union</p>

            <h3 className="font-heading-decorative text-4xl md:text-5xl text-maroon font-bold tracking-wider mb-4 gold-text-shadow">
              May 29, 2026
            </h3>

            <p className="font-heading text-lg text-gold font-semibold tracking-wider mb-6">Friday</p>

            <div className="w-20 h-px mx-auto mb-6" style={{
              background: "linear-gradient(90deg, transparent, hsl(43 60% 55%), transparent)"
            }} />

            <p className="font-body text-xl text-foreground/80 mb-2">From <span className="font-semibold text-maroon">6:00 AM</span> onwards</p>

            <p className="font-body text-lg text-foreground/60 italic">at</p>

            <p className="font-heading text-2xl md:text-3xl text-maroon font-bold mt-2 tracking-wider">
              Vijaya Mahal
            </p>
            <p className="font-body text-lg text-foreground/60 mt-1">Chinnalapatti</p>

            {/* Garland bottom */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "hsl(var(--maroon))" : "hsl(var(--gold))",
                    transform: `translateY(${Math.sin(i * 0.7) * 4}px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="font-body text-foreground/70 mt-10 text-lg italic leading-relaxed max-w-md mx-auto">
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
