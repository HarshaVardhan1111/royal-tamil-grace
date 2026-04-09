import haldiImg from "@/assets/haldi.png";
import mehendiImg from "@/assets/mehendi.png";
import engagementImg from "@/assets/engagement.jpg";
import weddingImg from "@/assets/wedding-grand.jpg";

const events = [
  { name: "Haldi", date: "May 26", emoji: "🌼", desc: "Turmeric blessings", image: haldiImg },
  { name: "Mehendi", date: "May 27", emoji: "🌿", desc: "Henna celebrations", image: mehendiImg },
  { name: "Engagement", date: "May 28", emoji: "💍", desc: "Ring ceremony", image: engagementImg },
  { name: "Wedding", date: "May 29", emoji: "🪔", desc: "Sacred union", image: weddingImg },
];

const PreWeddingEvents = () => {
  return (
    <section className="py-20 px-4 bg-ivory-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30Z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3Ccircle cx='30' cy='30' r='4' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-lg mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="font-script text-gold text-3xl mb-2">✦ Celebrations ✦</p>
          <h2 className="font-heading text-3xl md:text-4xl text-maroon font-bold tracking-wider">Wedding Events</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />

          <div className="space-y-8">
            {events.map((evt, i) => (
              <div key={evt.name} className="flex items-start gap-5 group" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-ivory border-2 border-gold flex items-center justify-center text-xl group-hover:bg-gold group-hover:border-gold-light transition-all duration-500 shadow-md">
                  {evt.emoji}
                </div>

                <div className="flex-1 bg-ivory rounded-xl border border-gold-light overflow-hidden shadow-sm hover:gold-glow transition-all duration-500 hover:-translate-y-0.5">
                  {/* Event image */}
                  <div className="w-full h-40 overflow-hidden">
                    <img src={evt.image} alt={evt.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-heading text-xl text-maroon font-semibold tracking-wider">{evt.name}</h3>
                      <span className="font-body text-gold text-sm uppercase tracking-widest">{evt.date}</span>
                    </div>
                    <p className="font-body text-foreground/60 text-base">{evt.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center opacity-40">
          <svg width="160" height="30" viewBox="0 0 160 30" className="text-gold">
            <path d="M0 15 Q20 5 40 15 Q60 25 80 15 Q100 5 120 15 Q140 25 160 15" stroke="currentColor" fill="none" strokeWidth="1" />
            <circle cx="80" cy="15" r="3" fill="currentColor" />
            <circle cx="40" cy="15" r="2" fill="currentColor" />
            <circle cx="120" cy="15" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PreWeddingEvents;
