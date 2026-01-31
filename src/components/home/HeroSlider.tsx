import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroBg from "@/assets/banners/hero-devotional.jpg";
import heroDiya from "@/assets/banners/hero-diya.jpg";
import heroStatue from "@/assets/banners/hero-statue.jpg";

const slides = [
  {
    title: "shri sai marketing",
    subtitle: "Welcome to",
    description: "Devotional & Puja Essentials",
    image: heroBg,
  },
  {
    title: "Sacred Space",
    subtitle: "Illuminate Your",
    description: "Premium Diyas, Candles & Incense",
    image: heroDiya,
  },
  {
    title: "God Statues",
    subtitle: "Divine Collection of",
    description: "Handcrafted Idols for Your Mandir",
    image: heroStatue,
  },
];

const HeroSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      Autoplay({
        delay: 4000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative rounded-2xl overflow-hidden mx-4 md:mx-0">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-[300px] md:h-[400px] lg:h-[450px]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-8 md:px-16">
                  <div className="max-w-lg text-white">
                    <p className="text-lg md:text-xl font-script mb-2">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-6">
                      {slide.description}
                    </p>
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg"
                    >
                      <Link to="/shop">Shop Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-primary w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
