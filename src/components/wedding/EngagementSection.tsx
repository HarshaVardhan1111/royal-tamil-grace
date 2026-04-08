import engagementImg from "@/assets/engagement.jpg";

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
        <h2 className="font-display text-3xl md:text-4xl text-maroon font-bold mb-2">Engagement</h2>
        <p className="font-display text-xl text-gold font-semibold gold-text-shadow mb-8">May 28, 2026</p>

        {/* Image with floral frame */}
        <div className="relative inline-block">
          <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border-4 border-gold gold-glow">
            <img
              src={engagementImg}
              alt="Engagement ceremony"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          {/* Corner florals */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-lg" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-lg" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-lg" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-lg" />
        </div>

        <p className="font-body text-foreground/70 mt-6 text-lg italic leading-relaxed max-w-md mx-auto">
          "A special day marking the beginning of a lifelong bond, sealed with love and blessings"
        </p>
      </div>
    </section>
  );
};

export default EngagementSection;
