import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryJewelry from "@/assets/gallery-jewelry.jpg";
import gallerySaree from "@/assets/gallery-saree.jpg";
import galleryFlowers from "@/assets/gallery-flowers.jpg";
import galleryTemple from "@/assets/gallery-temple.jpg";
import haldiImg from "@/assets/haldi.jpg";
import mehendiImg from "@/assets/mehendi.jpg";

const images = [
  { src: galleryFlowers, alt: "Wedding Flowers & Garlands" },
  { src: galleryJewelry, alt: "Bridal Jewelry" },
  { src: gallerySaree, alt: "Silk Saree Details" },
  { src: galleryTemple, alt: "Temple Bells & Kolam" },
  { src: haldiImg, alt: "Haldi Celebration" },
  { src: mehendiImg, alt: "Mehendi Art" },
];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 px-4 bg-ivory-dark relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-script text-gold text-3xl mb-2">Moments</p>
          <h2 className="font-display text-3xl md:text-4xl text-maroon font-bold">Gallery</h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border-2 border-gold gold-glow">
            <div className="relative h-72 md:h-[28rem]">
              {images.map((img, i) => (
                <img
                  key={img.alt}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory/80 border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory/80 border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-gold w-6" : "bg-gold/30"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-center font-body text-muted-foreground mt-4 italic">
          {images[current].alt}
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
