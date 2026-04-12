import { useState, useEffect } from "react";
import coupleIllustration from "@/assets/couple-illustration.png";


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
          "radial-gradient(ellipse at center, hsl(40 33% 96%) 0%, hsl(40 25% 92%) 60%, hsl(35 30% 86%) 100%)",
      }}
    >
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsl(20 20% 15% / 0.1) 100%)",
        }}
      />

      {/* Thin elegant gold border with corner patterns */}
      <div className="absolute inset-4 md:inset-8 pointer-events-none rounded-sm border border-[hsl(43_60%_55%_/_0.5)]">
        {/* Corner ornaments - minimal & classy */}
        {[
          "top-0 left-0",
          "top-0 right-0 -scale-x-100",
          "bottom-0 left-0 -scale-y-100",
          "bottom-0 right-0 -scale-x-100 -scale-y-100",
        ].map((pos, i) => (
          <svg
            key={i}
            className={`absolute ${pos} w-14 h-14 md:w-20 md:h-20`}
            viewBox="0 0 80 80"
          >
            <path
              d="M2 2 Q2 25 12 35 M2 2 Q25 2 35 12"
              stroke="hsl(43, 60%, 55%)"
              fill="none"
              strokeWidth="1.2"
              opacity="0.7"
            />
            <path
              d="M5 5 Q12 18 20 22 M5 5 Q18 12 22 20"
              stroke="hsl(43, 60%, 55%)"
              fill="none"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <circle cx="8" cy="8" r="2" fill="hsl(43, 60%, 55%)" opacity="0.6" />
          </svg>
        ))}
      </div>

      {/* Small traditional lamp (kuthu vilakku) at top */}
      <div
        className={`absolute top-8 md:top-14 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out ${
          stage >= 1 ? "opacity-60" : "opacity-0"
        }`}
      >
        <svg width="40" height="50" viewBox="0 0 40 50">
          {/* Flame */}
          <ellipse cx="20" cy="6" rx="4" ry="6" fill="hsl(43, 80%, 60%)" opacity="0.5" />
          <ellipse cx="20" cy="7" rx="2" ry="4" fill="hsl(43, 90%, 70%)" opacity="0.7" />
          {/* Lamp cup */}
          <path d="M15 14 L12 22 L28 22 L25 14 Z" fill="hsl(43, 55%, 48%)" opacity="0.7" />
          {/* Stem */}
          <line x1="20" y1="22" x2="20" y2="38" stroke="hsl(43, 55%, 48%)" strokeWidth="2" opacity="0.6" />
          {/* Base */}
          <ellipse cx="20" cy="40" rx="10" ry="3" fill="hsl(43, 55%, 48%)" opacity="0.5" />
          <ellipse cx="20" cy="42" rx="12" ry="3.5" fill="hsl(43, 55%, 48%)" opacity="0.4" />
          {/* Glow */}
          <circle cx="20" cy="6" r="8" fill="hsl(43, 80%, 65%)" opacity="0.15" />
        </svg>
      </div>

      {/* Floating soft particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(43 60% ${55 + Math.random() * 15}% / ${0.15 + Math.random() * 0.2})`,
              animation: `float-slow ${7 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* "WEDDING INVITATION" */}
        <p
          className={`font-display text-xs md:text-sm uppercase tracking-[0.4em] transition-all duration-1000 ease-out mt-8 ${
            stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ color: "hsl(43, 60%, 45%)" }}
        >
          Wedding Invitation
        </p>

        {/* Decorative line */}
        <div
          className={`mx-auto my-3 transition-all duration-1000 ease-out delay-200 ${
            stage >= 1 ? "opacity-100 w-20 md:w-28" : "opacity-0 w-0"
          }`}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, hsl(43 60% 55%), transparent)",
          }}
        />

        {/* Portrait with thoranams */}
        <div
          className={`relative flex items-center justify-center my-2 transition-all duration-1000 ease-out ${
            stage >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Portrait circle */}
          <div
            className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden relative"
            style={{
              border: "3px solid hsl(43 60% 55% / 0.6)",
              boxShadow:
                "0 0 25px hsl(43 60% 55% / 0.2), inset 0 0 20px hsl(43 60% 55% / 0.05)",
            }}
          >
            <img
              src={coupleIllustration}
              alt="Harshavardhan & Priyadharshini"
              className="w-full h-full object-cover object-top"
              width={512}
              height={512}
            />
          </div>
        </div>

        {/* Names */}
        <h1
          className={`font-heading-decorative text-2xl sm:text-3xl md:text-5xl leading-tight transition-all duration-1000 ease-out mt-3 ${
            stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            background:
              "linear-gradient(135deg, hsl(43 80% 35%), hsl(43 72% 50%), hsl(43 60% 60%), hsl(43 72% 50%), hsl(43 80% 35%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Harshavardhan
          <span
            className="block text-xl sm:text-2xl md:text-3xl my-0.5"
            style={{ WebkitTextFillColor: "hsl(345 55% 40%)" }}
          >
            ❤️
          </span>
          Priyadharshini
        </h1>

        {/* Harshapriya + cordially invites you */}
        <div
          className={`mt-3 transition-all duration-1000 ease-out ${
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
            className="text-base md:text-lg mt-0.5"
            style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(43, 55%, 48%)" }}
          >
            cordially invites you
          </p>
        </div>

        {/* Decorative line */}
        <div
          className={`mx-auto my-3 transition-all duration-1000 ease-out ${
            stage >= 3 ? "opacity-100 w-14 md:w-20" : "opacity-0 w-0"
          }`}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, hsl(43 60% 55%), transparent)",
          }}
        />

        {/* Open Invitation button */}
        <button
          onClick={handleOpen}
          className={`mt-1 px-8 py-2.5 md:px-10 md:py-3 rounded-full font-display text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-700 ease-out cursor-pointer
            hover:scale-105 active:scale-100
            ${stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            border: "1.5px solid hsl(43 60% 55% / 0.7)",
            color: "hsl(43 72% 40%)",
            fontFamily: "'Playfair Display', serif",
            background: "hsl(43 60% 55% / 0.06)",
            boxShadow: "0 0 15px hsl(43 60% 55% / 0.08)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 25px hsl(43 60% 55% / 0.25), 0 0 50px hsl(43 60% 55% / 0.08)";
            e.currentTarget.style.background = "hsl(43 60% 55% / 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 15px hsl(43 60% 55% / 0.08)";
            e.currentTarget.style.background = "hsl(43 60% 55% / 0.06)";
          }}
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
};

export default OpeningScreen;
