import couplePortrait from "@/assets/couple-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-ivory px-4 py-12 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 gradient-gold" />

      {/* Kolam corner patterns */}
      {["top-4 left-4", "top-4 right-4 -scale-x-100", "bottom-4 left-4 -scale-y-100", "bottom-4 right-4 -scale-x-100 -scale-y-100"].map((pos, i) => (
        <svg key={i} className={`absolute ${pos} w-20 h-20 md:w-28 md:h-28 opacity-20`} viewBox="0 0 100 100">
          <path d="M5 5 Q5 50 50 50 Q50 5 95 5" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="1" />
          <path d="M5 15 Q15 50 50 40" stroke="hsl(43,72%,45%)" fill="none" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="3" fill="hsl(43,72%,45%)" opacity="0.5" />
          <circle cx="25" cy="25" r="2" fill="hsl(43,72%,45%)" opacity="0.4" />
        </svg>
      ))}

      {/* Ornamental divider top */}
      <div className="mb-4 opacity-70">
        <svg width="200" height="20" viewBox="0 0 200 20" className="text-gold">
          <path d="M0 10 Q50 0 100 10 Q150 20 200 10" stroke="currentColor" fill="none" strokeWidth="1.5" />
          <circle cx="100" cy="10" r="3" fill="currentColor" />
        </svg>
      </div>

      <p className="font-display text-sm md:text-base uppercase tracking-[0.35em] text-gold mb-4 animate-fade-in-up">
        Wedding Invitation
      </p>

      {/* Couple portrait image */}
      <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        <div
          className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold mx-auto"
          style={{ boxShadow: "0 0 40px hsl(43 60% 55% / 0.3), 0 8px 30px hsl(0 0% 0% / 0.1)" }}
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

      {/* Invitation text */}
      <p
        className="font-body text-lg md:text-xl text-foreground/80 text-center max-w-xl mt-8 italic animate-fade-in-up"
        style={{ animationDelay: "0.7s" }}
      >
        "Together with the blessings of our families, we invite you to celebrate our wedding"
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
