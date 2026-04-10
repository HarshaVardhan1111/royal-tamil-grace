import { useState, useEffect } from "react";
import couplePortrait from "@/assets/couple-portrait.jpg";

const OpeningScreen = ({ onOpen }: { onOpen: () => void }) => {
  const [stage, setStage] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 400),
      setTimeout(() => setStage(2), 1200),
      setTimeout(() => setStage(3), 2000),
      setTimeout(() => setStage(4), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleOpen = () => {
    setExiting(true);
    setTimeout(onOpen, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-[900ms] ease-in-out ${
        exiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(40 33% 96%) 0%, hsl(40 25% 90%) 70%, hsl(35 30% 82%) 100%)",
      }}
    >
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsl(20 20% 15% / 0.12) 100%)",
        }}
      />

      {/* Gold ornamental border */}
      <div className="absolute inset-3 md:inset-8 pointer-events-none rounded-lg border border-gold-light/40">
        <div className="absolute inset-2 rounded-lg border border-gold-light/20" />
        {["top-0 left-0", "top-0 right-0 rotate-90", "bottom-0 right-0 rotate-180", "bottom-0 left-0 -rotate-90"].map(
          (pos, i) => (
            <svg
              key={i}
              className={`absolute ${pos} w-16 h-16 md:w-24 md:h-24 opacity-40`}
              viewBox="0 0 100 100"
            >
              <path d="M5 5 Q5 30 15 40 Q5 35 5 50 M5 5 Q30 5 40 15 Q35 5 50 5" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="1.5" />
              <path d="M8 8 Q15 20 20 25 M8 8 Q20 15 25 20" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="1" />
              <circle cx="12" cy="12" r="2" fill="hsl(43, 60%, 55%)" opacity="0.6" />
            </svg>
          )
        )}
      </div>

      {/* Floating dust particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(43 60% ${50 + Math.random() * 20}% / ${0.2 + Math.random() * 0.3})`,
              animation: `float-slow ${6 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* "Wedding Invitation" in Playfair Display */}
        <p
          className={`font-display text-sm md:text-base uppercase tracking-[0.35em] transition-all duration-1000 ease-out ${
            stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ color: "hsl(43, 60%, 45%)" }}
        >
          Wedding Invitation
        </p>

        {/* Decorative line */}
        <div
          className={`mx-auto my-4 transition-all duration-1000 ease-out delay-200 ${
            stage >= 1 ? "opacity-100 w-24 md:w-32" : "opacity-0 w-0"
          }`}
          style={{ height: "1px", background: "linear-gradient(90deg, transparent, hsl(43 60% 55%), transparent)" }}
        />

        {/* Couple portrait image */}
        <div
          className={`mx-auto mb-4 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gold shadow-xl transition-all duration-1000 ease-out ${
            stage >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ boxShadow: "0 0 30px hsl(43 60% 55% / 0.3)" }}
        >
          <img src={couplePortrait} alt="Harshavardhan & Priyadharshini" className="w-full h-full object-cover object-top" />
        </div>

        {/* Names */}
        <h1
          className={`font-heading-decorative text-3xl sm:text-4xl md:text-6xl leading-tight transition-all duration-1000 ease-out gold-text-shadow ${
            stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            background: "linear-gradient(135deg, hsl(43 80% 35%), hsl(43 72% 50%), hsl(43 60% 65%), hsl(43 72% 50%), hsl(43 80% 35%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Harshavardhan
          <span className="block text-2xl sm:text-3xl md:text-4xl my-1" style={{ WebkitTextFillColor: "hsl(345 55% 35%)" }}>
            ❤️
          </span>
          Priyadharshini
        </h1>

        {/* Sub text */}
        <div
          className={`mt-4 transition-all duration-1000 ease-out ${
            stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p
            className="text-2xl md:text-3xl"
            style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(43, 60%, 42%)" }}
          >
            Harshapriya
          </p>
          <p
            className="text-base md:text-lg mt-1"
            style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(43, 55%, 48%)" }}
          >
            invites you
          </p>
        </div>

        {/* Decorative line */}
        <div
          className={`mx-auto my-4 transition-all duration-1000 ease-out ${
            stage >= 3 ? "opacity-100 w-16 md:w-20" : "opacity-0 w-0"
          }`}
          style={{ height: "1px", background: "linear-gradient(90deg, transparent, hsl(43 60% 55%), transparent)" }}
        />

        {/* "Open Invitation" button in Playfair Display */}
        <button
          onClick={handleOpen}
          className={`mt-3 px-8 py-3 md:px-10 md:py-3.5 rounded-full font-display text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-700 ease-out cursor-pointer
            hover:scale-105 active:scale-100
            ${stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            border: "1.5px solid hsl(43 60% 55%)",
            color: "hsl(43 72% 40%)",
            fontFamily: "'Playfair Display', serif",
            background: "hsl(43 60% 55% / 0.08)",
            boxShadow: "0 0 20px hsl(43 60% 55% / 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 30px hsl(43 60% 55% / 0.3), 0 0 60px hsl(43 60% 55% / 0.1)";
            e.currentTarget.style.background = "hsl(43 60% 55% / 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 20px hsl(43 60% 55% / 0.1)";
            e.currentTarget.style.background = "hsl(43 60% 55% / 0.08)";
          }}
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
};

export default OpeningScreen;
