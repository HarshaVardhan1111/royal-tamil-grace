import { useRef, useState, useCallback, useEffect } from "react";
import couplePortrait from "@/assets/couple-portrait.jpg";
import engagementImg from "@/assets/engagement.jpg";

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

    // Gold overlay with rangoli-inspired pattern
    ctx.fillStyle = "#c9a84c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Rangoli dots pattern
    ctx.fillStyle = "#d4b65a";
    for (let x = 0; x < canvas.width; x += 24) {
      for (let y = 0; y < canvas.height; y += 24) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Diamond pattern overlay
    ctx.strokeStyle = "#b8963e";
    ctx.lineWidth = 0.5;
    for (let x = 0; x < canvas.width; x += 48) {
      for (let y = 0; y < canvas.height; y += 48) {
        ctx.beginPath();
        ctx.moveTo(x + 24, y);
        ctx.lineTo(x + 48, y + 24);
        ctx.lineTo(x + 24, y + 48);
        ctx.lineTo(x, y + 24);
        ctx.closePath();
        ctx.stroke();
      }
    }

    // Center text
    ctx.fillStyle = "#fff";
    ctx.font = "bold 18px 'Playfair Display', serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ Scratch to Reveal ✦", canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = "14px 'Cormorant Garamond', serif";
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
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    // Add sparkle
    sparkleId.current++;
    setSparkles((prev) => [...prev.slice(-8), { x: clientX - rect.left, y: clientY - rect.top, id: sparkleId.current }]);

    // Calculate reveal %
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    const percent = (transparent / (imageData.data.length / 4)) * 100;
    setRevealPercent(percent);

    if (percent > 55) {
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
        <p className="font-script text-gold text-3xl mb-2">✦ Mark Your Calendar ✦</p>
        <h2 className="font-display text-3xl md:text-4xl text-maroon font-bold mb-4">
          Save the Date
        </h2>
        <p className="font-display text-2xl text-gold font-semibold gold-text-shadow mb-8">
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
          {/* Revealed images underneath */}
          <div className="absolute inset-0 grid grid-rows-2">
            <img
              src={couplePortrait}
              alt="Couple"
              className="w-full h-full object-cover"
            />
            <img
              src={engagementImg}
              alt="Couple romantic"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay text on revealed image */}
          <div
            className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none transition-opacity duration-700"
            style={{ opacity: revealPercent > 40 ? 1 : 0 }}
          >
            <div className="bg-ivory/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gold">
              <p className="font-script text-gold text-xl">Harshapriya</p>
            </div>
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
          {revealPercent > 55 ? "✨ Revealed! We can't wait to celebrate with you" : "Scratch the golden card to reveal"}
        </p>
      </div>
    </section>
  );
};

export default SaveTheDateSection;
