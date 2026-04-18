import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, BadgeCheck, Star } from "lucide-react";
import hero1 from "../../../assets/images/hero/hero1.jpg";

const testimonials = [
  {
    name: "Ahmed Raza",
    profession: "Residential Client",
    testimonial:
      "Arvox managed our entire project timeline with discipline and complete transparency. Every milestone was delivered exactly as committed.",
    rating: 5,
  },
  {
    name: "Sarah Khan",
    profession: "Commercial Owner",
    testimonial:
      "The team handled planning and execution professionally, and site quality checks gave us confidence at every stage.",
    rating: 5,
  },
  {
    name: "Usman Ali",
    profession: "Project Consultant",
    testimonial:
      "Communication was clear, practical, and fast. From consultation to handover, the process remained smooth and accountable.",
    rating: 4,
  },
  {
    name: "Hina Aslam",
    profession: "Interior Client",
    testimonial:
      "Their workmanship and supervision standards were impressive. We appreciated how problems were resolved before they became delays.",
    rating: 5,
  },
];

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    if (!emblaApi || isPaused) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#f8bc00]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0f1720]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0f1720]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f1720]">
              <BadgeCheck size={14} className="text-[#f8bc00]" />
              Testimonials
            </p>
            <h2 className="mt-5 max-w-[700px] text-3xl font-semibold leading-tight text-[#0f1720] sm:text-4xl md:text-[44px]">
              What Clients Say After Building With Arvox
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#0f1720]/10 bg-white text-[#111827] transition hover:bg-[#111827] hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#0f1720]/10 bg-white text-[#111827] transition hover:bg-[#111827] hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={emblaRef}
        >
          <div className="flex">
            {testimonials.map((item) => (
              <div key={item.name} className="min-w-0 flex-[0_0_100%] pr-0 md:flex-[0_0_50%] md:pr-5">
                <article className="h-full rounded-3xl border border-[#0f1720]/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,23,32,0.55)] sm:p-7">
                  <div className="flex items-center gap-4">
                    <img
                      src={hero1}
                      alt={`${item.name} client image`}
                      className="h-14 w-14 rounded-2xl object-cover sm:h-16 sm:w-16"
                    />
                    <div>
                      <p className="text-lg font-bold text-[#0f1720]">{item.name}</p>
                      <p className="text-xs uppercase tracking-[0.14em] text-[#64748b]">{item.profession}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-[#334155] sm:text-base">
                    "{item.testimonial}"
                  </p>

                  <div className="mt-6 flex items-center gap-1.5 text-[#f8bc00]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={16}
                        strokeWidth={1.9}
                        fill={starIndex < item.rating ? "currentColor" : "none"}
                        className={starIndex < item.rating ? "" : "text-[#cbd5e1]"}
                      />
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all ${
                selectedIndex === index
                  ? "w-9 bg-[#0f1720]"
                  : "w-2.5 bg-[#cbd5e1] hover:bg-[#94a3b8]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
