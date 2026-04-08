import { useRef, useState, useCallback, useEffect } from "react";

const SaveTheDateSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [revealPercent, setRevealPercent] = useState(0);
  const [sparkles, setSparkles] = useState<{ x: number; y: number; id: number }[]>([]);
  const sparkleId = useRef(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Gold overlay
    ctx.fillStyle = "#c9a84c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Rangoli dots
    ctx.fillStyle = "#d4b65a";
    for (let x = 0; x < canvas.width; x += 20) {
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Diamond pattern
    ctx.strokeStyle = "#b8963e";
    ctx.lineWidth = 0.5;
    for (let x = 0; x < canvas.width; x += 40) {
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(x + 20, y);
        ctx.lineTo(x + 40, y + 20);
        ctx.lineTo(x + 20, y + 40);
        ctx.lineTo(x, y + 20);
        ctx.closePath();
        ctx.stroke();
      }
    }

    // Center text
    ctx.fillStyle = "#fff";
    ctx.font = "bold 18px 'Cinzel', serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ Scratch to Reveal ✦", canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = "14px 'EB Garamond', serif";
    ctx.fillText("Swipe here gently", canvas.width / 2, canvas.height / 2 + 16);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, [initCanvas]);

  const scratch = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();

    sparkleId.current++;
    setSparkles((prev) => [...prev.slice(-8), { x: clientX - rect.left, y: clientY - rect.top, id: sparkleId.current }]);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    const percent = (transparent / (imageData.data.length / 4)) * 100;
    setRevealPercent(percent);

    if (percent > 50) {
      canvas.style.opacity = "0";
      canvas.style.transition = "opacity 0.8s ease-out";
    }
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isScratching) return;
      const point = "touches" in e ? e.touches[0] : e;
      scratch(point.clientX, point.clientY);
    },
    [isScratching, scratch]
  );

  return (
    <section className="py-20 px-4 bg-ivory relative overflow-hidden">
      <div className="max-w-lg mx-auto text-center">
        <p className="font-marcellus text-gold text-xl md:text-2xl mb-2 uppercase tracking-[0.3em]">
          ✦ Mark Your Calendar ✦
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-maroon font-bold mb-4">
          Save the Date
        </h2>
        <p className="font-heading text-2xl text-gold font-semibold gold-text-shadow mb-8 tracking-widest">
          29 . 05 . 2026
        </p>

        {/* Scratch card */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden border-4 border-gold gold-glow select-none"
          onMouseDown={() => setIsScratching(true)}
          onMouseUp={() => setIsScratching(false)}
          onMouseLeave={() => setIsScratching(false)}
          onMouseMove={handleMove}
          onTouchStart={() => setIsScratching(true)}
          onTouchEnd={() => setIsScratching(false)}
          onTouchMove={handleMove}
        >
          {/* Revealed content: TEXT ONLY */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-ivory-dark">
            {/* Decorative top arc */}
            <svg className="absolute top-4 w-3/4 opacity-30 text-gold" viewBox="0 0 200 30">
              <path d="M0 30 Q50 0 100 10 Q150 0 200 30" stroke="currentColor" fill="none" strokeWidth="1" />
            </svg>

            {/* Kolam pattern bg */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30Z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3Ccircle cx='30' cy='30' r='4' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
            }} />

            <p className="font-heading text-sm uppercase tracking-[0.4em] text-gold/70 mb-6">Save the Date</p>

            {/* Main name reveal */}
            <h3
              className="font-heading-decorative text-6xl md:text-7xl font-bold tracking-[0.15em] leading-none gold-gradient-text"
              style={{
                filter: "drop-shadow(0 0 20px hsl(43 72% 45% / 0.3))",
              }}
            >
              SHAYA
            </h3>

            {/* Decorative line */}
            <div className="w-24 h-px my-6" style={{
              background: "linear-gradient(90deg, transparent, hsl(43 60% 55%), transparent)"
            }} />

            {/* Date */}
            <p className="font-heading text-3xl md:text-4xl text-maroon font-semibold tracking-[0.2em]">
              29/05/26
            </p>

            <p className="font-body text-foreground/50 text-base mt-4 italic">
              The Sacred Union
            </p>

            {/* Decorative bottom arc */}
            <svg className="absolute bottom-4 w-3/4 opacity-30 text-gold" viewBox="0 0 200 30">
              <path d="M0 0 Q50 30 100 20 Q150 30 200 0" stroke="currentColor" fill="none" strokeWidth="1" />
            </svg>
          </div>

          {/* Sparkle effects */}
          {sparkles.map((s) => (
            <span
              key={s.id}
              className="absolute pointer-events-none animate-ping"
              style={{
                left: s.x - 4,
                top: s.y - 4,
                width: 8,
                height: 8,
                background: "radial-gradient(circle, #ffd700 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />
          ))}

          {/* Scratch canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
            style={{ touchAction: "none" }}
          />
        </div>

        <p className="font-body text-muted-foreground mt-4 italic text-sm">
          {revealPercent > 50 ? "✨ Revealed! We can't wait to celebrate with you" : "Scratch the golden card to reveal"}
        </p>
      </div>
    </section>
  );
};

export default SaveTheDateSection;
