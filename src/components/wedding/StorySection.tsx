import couplePortrait from "@/assets/couple-portrait.jpg";

const StorySection = () => {
  return (
    <section className="py-20 px-4 bg-ivory relative">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-script text-gold text-3xl mb-2">Our Love Story</p>
        <h2 className="font-display text-3xl md:text-4xl text-maroon font-bold mb-10">
          A Beautiful Journey
        </h2>

        <div className="relative inline-block mb-10">
          {/* Royal frame */}
          <div className="w-64 h-72 md:w-80 md:h-96 rounded-xl overflow-hidden border-4 border-gold gold-glow mx-auto">
            <img
              src={couplePortrait}
              alt="Couple portrait"
              className="w-full h-full object-cover object-top"
              loading="lazy"
              width={768}
              height={1024}
            />
          </div>
          {/* Corner ornaments */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-lg" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-lg" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-lg" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-lg" />
        </div>

        <p className="font-body text-xl md:text-2xl text-foreground/80 italic max-w-lg mx-auto leading-relaxed">
          "Two hearts, one beautiful journey, and a lifetime of togetherness"
        </p>

        <div className="mt-8 flex justify-center">
          <svg width="120" height="20" viewBox="0 0 120 20" className="text-gold opacity-60">
            <path d="M0 10 Q30 0 60 10 Q90 20 120 10" stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
