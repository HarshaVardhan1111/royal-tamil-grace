import { useState, useEffect } from "react";
import couplePortrait from "@/assets/couple-portrait.jpg";

const OpeningScreen = ({ onOpen }: { onOpen: () => void }) => {
  const [stage, setStage] = useState(0);
  const [doorsOpening, setDoorsOpening] = useState(false);

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
    setDoorsOpening(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(40 33% 96%) 0%, hsl(40 25% 90%) 60%, hsl(35 30% 82%) 100%)",
        }}
      />

      {/* Palace doors */}
      <div className="absolute inset-0 z-50 pointer-events-none flex">
        {/* Left door */}
        <div
          className="w-1/2 h-full relative transition-transform ease-in-out"
          style={{
            transformOrigin: "left center",
            transform: doorsOpening ? "perspective(1200px) rotateY(-85deg)" : "perspective(1200px) rotateY(0deg)",
            transitionDuration: "1.6s",
            background: "linear-gradient(135deg, hsl(35 30% 25%) 0%, hsl(30 25% 18%) 50%, hsl(35 30% 22%) 100%)",
            boxShadow: "inset -20px 0 40px hsl(0 0% 0% / 0.3)",
          }}
        >
          {/* Door panel decoration */}
          <div className="absolute inset-4 md:inset-8 border border-gold-light/30 rounded-t-[60px]">
            <div className="absolute inset-3 border border-gold-light/20 rounded-t-[50px]" />
            {/* Arch pattern */}
            <svg className="absolute top-0 left-0 w-full h-40 opacity-30" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path d="M0 100 Q100 0 200 100" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="1" />
              <path d="M20 100 Q100 20 180 100" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="0.8" />
            </svg>
            {/* Jaali pattern */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-25">
                <circle cx="30" cy="30" r="25" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="0.8" />
                <circle cx="30" cy="30" r="18" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="0.6" />
                <circle cx="30" cy="30" r="10" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="0.5" />
                <line x1="30" y1="5" x2="30" y2="55" stroke="hsl(43, 60%, 55%)" strokeWidth="0.4" />
                <line x1="5" y1="30" x2="55" y2="30" stroke="hsl(43, 60%, 55%)" strokeWidth="0.4" />
              </svg>
            </div>
          </div>
          {/* Door handle */}
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-12 rounded-full"
            style={{ background: "linear-gradient(180deg, hsl(43 72% 55%), hsl(43 60% 35%))" }}
          />
        </div>

        {/* Right door */}
        <div
          className="w-1/2 h-full relative transition-transform ease-in-out"
          style={{
            transformOrigin: "right center",
            transform: doorsOpening ? "perspective(1200px) rotateY(85deg)" : "perspective(1200px) rotateY(0deg)",
            transitionDuration: "1.6s",
            background: "linear-gradient(225deg, hsl(35 30% 25%) 0%, hsl(30 25% 18%) 50%, hsl(35 30% 22%) 100%)",
            boxShadow: "inset 20px 0 40px hsl(0 0% 0% / 0.3)",
          }}
        >
          <div className="absolute inset-4 md:inset-8 border border-gold-light/30 rounded-t-[60px]">
            <div className="absolute inset-3 border border-gold-light/20 rounded-t-[50px]" />
            <svg className="absolute top-0 left-0 w-full h-40 opacity-30" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path d="M0 100 Q100 0 200 100" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="1" />
              <path d="M20 100 Q100 20 180 100" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="0.8" />
            </svg>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-25">
                <circle cx="30" cy="30" r="25" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="0.8" />
                <circle cx="30" cy="30" r="18" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="0.6" />
                <circle cx="30" cy="30" r="10" stroke="hsl(43, 60%, 55%)" fill="none" strokeWidth="0.5" />
                <line x1="30" y1="5" x2="30" y2="55" stroke="hsl(43, 60%, 55%)" strokeWidth="0.4" />
                <line x1="5" y1="30" x2="55" y2="30" stroke="hsl(43, 60%, 55%)" strokeWidth="0.4" />
              </svg>
            </div>
          </div>
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-12 rounded-full"
            style={{ background: "linear-gradient(180deg, hsl(43 72% 55%), hsl(43 60% 35%))" }}
          />
        </div>
      </div>

      {/* Light rays visible when doors open */}
      <div
        className="absolute inset-0 z-40 pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: doorsOpening ? 1 : 0,
          background: "radial-gradient(ellipse at center, hsl(43 60% 80% / 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Sparkle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(43 60% ${50 + Math.random() * 20}% / ${0.15 + Math.random() * 0.3})`,
              animation: `float-slow ${6 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content behind doors */}
      <div className="relative z-20 text-center px-6">
        {/* "Wedding Invitation" */}
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

        {/* Couple portrait in ornate palace frame */}
        <div
          className={`mx-auto mb-4 relative transition-all duration-1000 ease-out ${
            stage >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Outer ornate frame */}
          <div className="relative w-44 h-52 md:w-52 md:h-60 mx-auto">
            {/* Gold carved frame border */}
            <div
              className="absolute -inset-3 rounded-t-[60px] rounded-b-lg"
              style={{
                background: "linear-gradient(135deg, hsl(43 80% 35%), hsl(43 72% 50%), hsl(43 60% 65%), hsl(43 72% 50%), hsl(43 80% 35%))",
                padding: "3px",
              }}
            >
              <div
                className="w-full h-full rounded-t-[58px] rounded-b-lg"
                style={{ background: "hsl(40 33% 96%)" }}
              />
            </div>
            {/* Inner frame */}
            <div
              className="absolute -inset-1 rounded-t-[55px] rounded-b-lg"
              style={{
                background: "linear-gradient(135deg, hsl(43 72% 40%), hsl(43 60% 55%), hsl(43 72% 40%))",
                padding: "2px",
              }}
            >
              <div
                className="w-full h-full rounded-t-[53px] rounded-b-lg overflow-hidden"
                style={{ boxShadow: "inset 0 0 20px hsl(0 0% 0% / 0.15)" }}
              >
                <img
                  src={couplePortrait}
                  alt="Harshavardhan & Priyadharshini"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Golden glow */}
            <div
              className="absolute -inset-4 rounded-t-[65px] rounded-b-xl pointer-events-none"
              style={{
                boxShadow: "0 0 40px hsl(43 60% 55% / 0.25), 0 0 80px hsl(43 60% 55% / 0.1)",
              }}
            />
          </div>
        </div>

        {/* Text: We request the honour... */}
        <div
          className={`mt-5 transition-all duration-1000 ease-out ${
            stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-body text-base md:text-lg italic" style={{ color: "hsl(20, 20%, 35%)" }}>
            We request the honour of your presence
          </p>
          <p className="font-body text-base md:text-lg italic" style={{ color: "hsl(20, 20%, 35%)" }}>
            at the wedding of
          </p>
        </div>

        {/* Harshapriya */}
        <div
          className={`mt-3 transition-all duration-1000 ease-out ${
            stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
              background: "linear-gradient(135deg, hsl(43 80% 35%), hsl(43 72% 50%), hsl(43 60% 60%), hsl(43 72% 50%), hsl(43 80% 35%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              filter: "drop-shadow(0 0 8px hsl(43 60% 55% / 0.3))",
            }}
          >
            Harshapriya
          </p>
        </div>

        {/* Decorative line */}
        <div
          className={`mx-auto my-3 transition-all duration-1000 ease-out ${
            stage >= 3 ? "opacity-100 w-16 md:w-20" : "opacity-0 w-0"
          }`}
          style={{ height: "1px", background: "linear-gradient(90deg, transparent, hsl(43 60% 55%), transparent)" }}
        />

        {/* Open Invitation button */}
        <button
          onClick={handleOpen}
          className={`relative mt-2 px-8 py-3 md:px-10 md:py-3.5 rounded-full font-display text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-700 ease-out cursor-pointer z-[60]
            hover:scale-105 active:scale-100
            ${stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            border: "1.5px solid hsl(43 60% 55%)",
            color: "hsl(43 72% 40%)",
            fontFamily: "'Playfair Display', serif",
            background: "hsl(43 60% 55% / 0.08)",
            boxShadow: "0 0 20px hsl(43 60% 55% / 0.15)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 30px hsl(43 60% 55% / 0.3), 0 0 60px hsl(43 60% 55% / 0.1)";
            e.currentTarget.style.background = "hsl(43 60% 55% / 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 20px hsl(43 60% 55% / 0.15)";
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
