import couplePortrait from "@/assets/couple-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-ivory px-4 py-12 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 gradient-gold" />

      {/* Ornamental divider top */}
      <div className="mb-6 opacity-70">
        <svg width="200" height="20" viewBox="0 0 200 20" className="text-gold">
          <path d="M0 10 Q50 0 100 10 Q150 20 200 10" stroke="currentColor" fill="none" strokeWidth="1.5" />
          <circle cx="100" cy="10" r="3" fill="currentColor" />
        </svg>
      </div>

      <p className="font-script text-gold text-2xl md:text-3xl mb-4 animate-fade-in-up">
        ✦ Wedding Invitation ✦
      </p>

      {/* Couple portrait */}
      <div className="relative mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="w-64 h-80 md:w-80 md:h-[26rem] rounded-[2rem] overflow-hidden border-4 border-gold gold-glow">
          <img
            src={couplePortrait}
            alt="Bride and Groom"
            className="w-full h-full object-cover object-top"
            width={768}
            height={1024}
          />
        </div>
      </div>

      {/* Names */}
      <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-maroon tracking-wide">
          Harshaavardhan
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mt-1">
          Son of Rajalakshmi & Subramani
        </p>

        <p className="font-script text-gold text-4xl md:text-5xl my-4">&</p>

        <h1 className="font-display text-4xl md:text-6xl font-bold text-maroon tracking-wide">
          Priyadharshini
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mt-1">
          Daughter of Selvi & Saravanaseenivasan
        </p>
      </div>

      {/* Invitation text */}
      <p
        className="font-body text-lg md:text-xl text-foreground/80 text-center max-w-xl mt-8 italic animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        "Together with the blessings of our families, we invite you to celebrate our wedding"
      </p>

      {/* Date & Venue */}
      <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
        <p className="font-display text-2xl md:text-3xl text-gold font-semibold gold-text-shadow">
          May 29, 2026
        </p>
        <p className="font-body text-lg text-foreground/70 mt-1">Vijaya Mahal, Chinnalapatti</p>
      </div>

      {/* Save the Date button */}
      <a
        href="#countdown"
        className="mt-8 px-8 py-3 border-2 border-gold text-gold font-display text-lg tracking-widest uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500 animate-fade-in-up gold-glow rounded-sm"
        style={{ animationDelay: "1s" }}
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
