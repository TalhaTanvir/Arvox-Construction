import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "../../../assets/images/hero/hero1.jpg";
import hero2 from "../../../assets/images/hero/hero2.jpg";
import hero3 from "../../../assets/images/hero/hero3.jpg";
import hero4 from "../../../assets/images/hero/hero4.jpg";

const heroSlides = [
  {
    id: 1,
    image: hero1,
    title: "Building Better Spaces",
    description:
      "Trusted construction services with solid execution, modern methods, and long-term durability.",
  },
  {
    id: 2,
    image: hero2,
    title: "Precision From Ground Up",
    description:
      "From planning to completion, every phase is delivered with accuracy and complete transparency.",
  },
  {
    id: 3,
    image: hero3,
    title: "Built For Lasting Value",
    description:
      "We deliver high-quality residential and commercial projects tailored to your goals.",
  },
  {
    id: 4,
    image: hero4,
    title: "Your Vision, Engineered",
    description:
      "A dependable team focused on timelines, quality standards, and smooth project delivery.",
  },
];

function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="relative min-w-0 flex-[0_0_100%]">
              <img
                src={slide.image}
                alt={`Hero slide ${slide.id}`}
                className="h-screen min-h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

              <div className="absolute inset-0 flex items-end p-6 pb-24 sm:p-10 sm:pb-24 md:p-14 md:pb-28">
                <div className="max-w-[620px] text-white">
                  <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#f8bc00]">
                    0{slide.id}
                  </p>
                  <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-[540px] text-sm leading-relaxed text-white/85 sm:text-base">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:left-6 sm:h-12 sm:w-12"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:right-6 sm:h-12 sm:w-12"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all ${
                selectedIndex === index
                  ? "w-9 bg-[#f8bc00]"
                  : "w-2.5 bg-white/65 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
