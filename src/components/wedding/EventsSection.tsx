import haldiImg from "@/assets/haldi.jpg";
import mehendiImg from "@/assets/mehendi.jpg";
import engagementImg from "@/assets/engagement.jpg";
import weddingImg from "@/assets/wedding-ceremony.jpg";

const events = [
  {
    title: "Haldi",
    date: "May 26, 2026",
    description: "A joyful celebration filled with turmeric, laughter and family blessings",
    image: haldiImg,
  },
  {
    title: "Mehandhi",
    date: "May 27, 2026",
    description: "A vibrant evening of henna, music and celebration",
    image: mehendiImg,
  },
  {
    title: "Engagement",
    date: "May 28, 2026",
    description: "A special day marking the beginning of a lifelong bond",
    image: engagementImg,
  },
  {
    title: "Wedding",
    date: "May 29, 2026",
    description: "The sacred union of two hearts and two families",
    image: weddingImg,
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 px-4 bg-ivory-dark relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-script text-gold text-3xl mb-2">Celebrations</p>
          <h2 className="font-display text-3xl md:text-4xl text-maroon font-bold">Wedding Events</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((evt, i) => (
            <div
              key={evt.title}
              className="group bg-ivory rounded-xl border-2 border-gold-light overflow-hidden shadow-lg hover:gold-glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={640}
                  height={640}
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display text-2xl text-maroon font-semibold">{evt.title}</h3>
                <p className="font-body text-gold text-sm uppercase tracking-widest mt-1">{evt.date}</p>
                <p className="font-body text-foreground/70 mt-3 text-base leading-relaxed">{evt.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
