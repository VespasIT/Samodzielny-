import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hospitalAerial from "@/assets/hospital-aerial.jpg";
import hospitalEntrance from "@/assets/hospital-entrance.jpg";
import hospitalRoom from "@/assets/hospital-room.jpg";

const slides = [
  {
    image: hospitalAerial,
    titleKey: "hero.title1",
    subtitleKey: "hero.subtitle1",
    alt: "SPZOZ w Kraśniku - widok z lotu ptaka",
  },
  {
    image: hospitalEntrance,
    titleKey: "hero.slide2.title",
    subtitleKey: "hero.slide2.subtitle",
    alt: "Wejście do szpitala SPZOZ Kraśnik",
  },
  {
    image: hospitalRoom,
    titleKey: "hero.slide3.title",
    subtitleKey: "hero.slide3.subtitle",
    alt: "Nowoczesna sala szpitalna SPZOZ Kraśnik",
  },
];

const HeroSection = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[420px] md:h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground leading-tight mb-2">
              {t(slides[current].titleKey)}
            </h1>
            <p className="text-xl md:text-3xl font-serif text-primary-foreground/90 mb-6">
              {t(slides[current].subtitleKey)}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity">
                {t("hero.cta")}
              </a>
              <a href="#about" className="inline-flex items-center px-6 py-3 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors">
                {t("hero.more")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-secondary" : "bg-primary-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
