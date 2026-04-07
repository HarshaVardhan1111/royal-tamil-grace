const FooterSection = () => {
  return (
    <footer className="py-16 px-4 bg-maroon relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="font-script text-gold-light text-3xl md:text-4xl mb-4">
          Thank You
        </p>
        <p className="font-body text-xl text-ivory/80 italic leading-relaxed max-w-lg mx-auto">
          "We look forward to celebrating this beautiful occasion with you"
        </p>

        {/* Decorative divider */}
        <div className="my-8 flex justify-center">
          <svg width="200" height="20" viewBox="0 0 200 20" className="opacity-50">
            <path d="M0 10 Q50 0 100 10 Q150 20 200 10" stroke="hsl(43, 60%, 70%)" fill="none" strokeWidth="1" />
            <circle cx="100" cy="10" r="2" fill="hsl(43, 60%, 70%)" />
            <circle cx="80" cy="8" r="1.5" fill="hsl(43, 60%, 70%)" />
            <circle cx="120" cy="12" r="1.5" fill="hsl(43, 60%, 70%)" />
          </svg>
        </div>

        <p className="font-display text-2xl text-gold-light font-semibold">
          Harshaavardhan & Priyadharshini
        </p>
        <p className="font-body text-ivory/60 mt-2">May 29, 2026 • Vijaya Mahal, Chinnalapatti</p>

        {/* Social icons placeholder */}
        <div className="flex justify-center gap-6 mt-8">
          {["📧", "📞", "💌"].map((icon, i) => (
            <span
              key={i}
              className="w-10 h-10 rounded-full border border-gold-light/40 flex items-center justify-center text-lg hover:border-gold-light transition-colors cursor-pointer"
            >
              {icon}
            </span>
          ))}
        </div>

        <p className="font-body text-ivory/40 text-sm mt-8">
          Made with ♥ for our special day
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
