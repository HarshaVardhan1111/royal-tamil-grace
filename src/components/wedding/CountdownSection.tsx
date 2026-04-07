import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-05-29T09:00:00").getTime();

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = WEDDING_DATE - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-20 px-4 bg-ivory-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-script text-gold text-3xl md:text-4xl mb-2">Counting down to</p>
        <h2 className="font-display text-3xl md:text-4xl text-maroon font-bold mb-12">Our Forever</h2>

        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {units.map((u) => (
            <div
              key={u.label}
              className="w-24 h-28 md:w-32 md:h-36 flex flex-col items-center justify-center rounded-lg border-2 border-gold bg-ivory animate-glow-pulse"
            >
              <span className="font-display text-3xl md:text-5xl font-bold text-maroon">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="font-body text-sm md:text-base text-gold uppercase tracking-widest mt-1">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
