import couplePortrait from "@/assets/couple-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-ivory px-4 py-12 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 gradient-gold" />

      {/* Mughal arch corners */}
      {["top-4 left-4", "top-4 right-4 -scale-x-100", "bottom-4 left-4 -scale-y-100", "bottom-4 right-4 -scale-x-100 -scale-y-100"].map((pos, i) => (
        <svg key={i} className={`absolute ${pos} w-24 h-24 md:w-32 md:h-32 opacity-15`} viewBox="0 0 120 120">
          <path d="M5 5 Q5 60 60 60 Q60 5 115 5" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="0.8" />
          <path d="M10 10 Q10 50 50 50 Q50 10 90 10" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="0.6" />
          <path d="M15 15 Q15 40 40 40" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="3" fill="hsl(43,72%,45%)" opacity="0.3" />
          <circle cx="15" cy="15" r="1.5" fill="hsl(43,72%,45%)" opacity="0.4" />
        </svg>
      ))}

      {/* Subtle jaali background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(43 72% 45%) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Ornamental divider top */}
      <div className="mb-4 opacity-70">
        <svg width="220" height="24" viewBox="0 0 220 24" className="text-gold">
          <path d="M0 12 Q55 0 110 12 Q165 24 220 12" stroke="currentColor" fill="none" strokeWidth="1.2" />
          <path d="M30 12 Q70 4 110 12 Q150 20 190 12" stroke="currentColor" fill="none" strokeWidth="0.8" opacity="0.5" />
          <circle cx="110" cy="12" r="3" fill="currentColor" />
          <circle cx="60" cy="9" r="1.5" fill="currentColor" opacity="0.5" />
          <circle cx="160" cy="15" r="1.5" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <p className="font-display text-sm md:text-base uppercase tracking-[0.35em] text-gold mb-4 animate-fade-in-up">
        Wedding Invitation
      </p>

      {/* Couple portrait in palace frame */}
      <div className="mb-6 animate-fade-in-up relative" style={{ animationDelay: "0.15s" }}>
        {/* Palace arch frame */}
        <div className="relative w-48 h-56 md:w-60 md:h-68 mx-auto">
          {/* Outer gold frame */}
          <div
            className="absolute -inset-3 rounded-t-[70px] rounded-b-lg"
            style={{
              background: "linear-gradient(135deg, hsl(43 80% 35%), hsl(43 72% 50%), hsl(43 60% 65%), hsl(43 72% 50%), hsl(43 80% 35%))",
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-t-[68px] rounded-b-lg bg-ivory" />
          </div>
          {/* Inner frame with image */}
          <div
            className="absolute -inset-1 rounded-t-[65px] rounded-b-lg overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(43 72% 40%), hsl(43 60% 55%), hsl(43 72% 40%))",
              padding: "2px",
            }}
          >
            <div className="w-full h-full rounded-t-[63px] rounded-b-lg overflow-hidden">
              <img
                src={couplePortrait}
                alt="Harshavardhan & Priyadharshini"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          {/* Glow */}
          <div
            className="absolute -inset-5 rounded-t-[75px] rounded-b-xl pointer-events-none"
            style={{ boxShadow: "0 0 50px hsl(43 60% 55% / 0.2), 0 8px 30px hsl(0 0% 0% / 0.08)" }}
          />
          {/* Royal drape hints on sides */}
          <div className="absolute -left-6 top-8 bottom-8 w-4 opacity-20 rounded-r-full"
            style={{ background: "linear-gradient(180deg, hsl(345 55% 30% / 0.5), hsl(345 55% 30% / 0.1))" }} />
          <div className="absolute -right-6 top-8 bottom-8 w-4 opacity-20 rounded-l-full"
            style={{ background: "linear-gradient(180deg, hsl(345 55% 30% / 0.5), hsl(345 55% 30% / 0.1))" }} />
        </div>
      </div>

      {/* Names */}
      <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <h1 className="font-heading-decorative text-3xl md:text-5xl font-bold text-maroon tracking-wider leading-tight">
          Harshaavardhan
        </h1>
        <p className="font-script text-gold text-4xl md:text-5xl my-2">&</p>
        <h1 className="font-heading-decorative text-3xl md:text-5xl font-bold text-maroon tracking-wider leading-tight">
          Priyadharshini
        </h1>
      </div>

      {/* Parents */}
      <div className="text-center animate-fade-in-up mt-6" style={{ animationDelay: "0.5s" }}>
        <p className="font-body text-lg md:text-xl text-muted-foreground">
          Son of <span className="text-maroon font-semibold">Subramani</span> & <span className="text-maroon font-semibold">Rajalakshmi</span>
        </p>
        <p className="font-body text-lg md:text-xl text-muted-foreground mt-1">
          Daughter of <span className="text-maroon font-semibold">Saravanaseenivasan</span> & <span className="text-maroon font-semibold">Selvi</span>
        </p>
      </div>

      {/* Harshapriya invites you */}
      <div className="text-center mt-6 animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
        <p
          className="text-3xl md:text-4xl"
          style={{
            fontFamily: "'Great Vibes', cursive",
            background: "linear-gradient(135deg, hsl(43 80% 35%), hsl(43 72% 50%), hsl(43 60% 60%), hsl(43 72% 50%), hsl(43 80% 35%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 6px hsl(43 60% 55% / 0.3))",
          }}
        >
          Harshapriya
        </p>
        <p className="text-lg md:text-xl mt-1" style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(43, 55%, 48%)" }}>
          invites you
        </p>
      </div>

      {/* Invitation text */}
      <p
        className="font-body text-base md:text-lg text-foreground/80 text-center max-w-xl mt-4 italic animate-fade-in-up"
        style={{ animationDelay: "0.7s" }}
      >
        "We request the honour of your presence at the wedding of Harshapriya"
      </p>

      {/* Date & Venue */}
      <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
        <p className="font-heading text-2xl md:text-3xl text-gold font-semibold gold-text-shadow tracking-wider">
          May 29, 2026
        </p>
        <p className="font-body text-lg text-foreground/70 mt-1">Vijaya Mahal, Chinnalapatti</p>
      </div>

      {/* Save the Date button */}
      <a
        href="#countdown"
        className="mt-8 px-8 py-3 border-2 border-gold text-gold font-display text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500 animate-fade-in-up gold-glow rounded-sm"
        style={{ animationDelay: "1.1s" }}
      >
        Save the Date
      </a>

      {/* Ornamental divider bottom */}
      <div className="mt-10 opacity-70">
        <svg width="220" height="24" viewBox="0 0 220 24" className="text-gold">
          <path d="M0 12 Q55 24 110 12 Q165 0 220 12" stroke="currentColor" fill="none" strokeWidth="1.2" />
          <circle cx="110" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
