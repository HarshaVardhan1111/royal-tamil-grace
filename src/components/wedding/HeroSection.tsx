import couplePortrait from "@/assets/couple-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-ivory px-4 py-12 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 gradient-gold" />

      {/* Mandala background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" viewBox="0 0 200 200">
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 100 100)`}>
              <ellipse cx="100" cy="30" rx="25" ry="40" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="0.5" />
            </g>
          ))}
          <circle cx="100" cy="100" r="70" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="85" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Kolam corner patterns */}
      {["top-4 left-4", "top-4 right-4 -scale-x-100", "bottom-4 left-4 -scale-y-100", "bottom-4 right-4 -scale-x-100 -scale-y-100"].map((pos, i) => (
        <svg key={i} className={`absolute ${pos} w-24 h-24 md:w-32 md:h-32 opacity-25`} viewBox="0 0 100 100">
          <path d="M5 5 Q5 50 50 50 Q50 5 95 5" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="1" />
          <path d="M5 15 Q15 50 50 40" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="0.8" />
          <path d="M10 5 Q10 40 40 50" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="3" fill="hsl(43,72%,45%)" opacity="0.5" />
          <circle cx="25" cy="25" r="2" fill="hsl(43,72%,45%)" opacity="0.4" />
          <circle cx="15" cy="35" r="1.5" fill="hsl(43,72%,45%)" opacity="0.3" />
        </svg>
      ))}

      {/* Royal ornamental divider top */}
      <div className="mb-4 opacity-80">
        <svg width="260" height="30" viewBox="0 0 260 30" className="text-gold">
          <path d="M0 15 Q30 5 65 15 Q100 25 130 15 Q160 5 195 15 Q230 25 260 15" stroke="currentColor" fill="none" strokeWidth="1" />
          <path d="M20 15 Q65 8 130 15 Q195 22 240 15" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.5" />
          <circle cx="130" cy="15" r="4" fill="currentColor" />
          <circle cx="65" cy="12" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="195" cy="18" r="2" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      <p className="font-display text-sm md:text-base uppercase tracking-[0.35em] text-gold mb-4 animate-fade-in-up">
        Wedding Invitation
      </p>

      {/* Couple portrait with double gold ring */}
      <div className="mb-6 animate-fade-in-up relative" style={{ animationDelay: "0.15s" }}>
        {/* Outer decorative ring */}
        <div
          className="absolute -inset-3 rounded-full"
          style={{
            border: "2px solid hsl(43 60% 55% / 0.4)",
            boxShadow: "0 0 20px hsl(43 60% 55% / 0.15)",
          }}
        />
        {/* Decorative dots around ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <span
            key={deg}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: "hsl(43 60% 55%)",
              opacity: 0.5,
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translate(${window?.innerWidth > 768 ? 140 : 110}px) translate(-50%, -50%)`,
            }}
          />
        ))}
        <div
          className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-gold mx-auto relative"
          style={{ boxShadow: "0 0 50px hsl(43 60% 55% / 0.35), 0 0 80px hsl(43 60% 55% / 0.1), 0 8px 30px hsl(0 0% 0% / 0.15)" }}
        >
          <img src={couplePortrait} alt="Harshavardhan & Priyadharshini" className="w-full h-full object-cover object-top" />
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
        <p className="text-3xl md:text-4xl" style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(43, 60%, 42%)" }}>
          Harshapriya
        </p>
        <p className="text-lg md:text-xl mt-1" style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(43, 55%, 48%)" }}>
          cordially invites you
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
        <svg width="200" height="20" viewBox="0 0 200 20" className="text-gold">
          <path d="M0 10 Q50 20 100 10 Q150 0 200 10" stroke="currentColor" fill="none" strokeWidth="1.5" />
          <circle cx="100" cy="10" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
