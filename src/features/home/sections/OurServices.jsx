import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  DraftingCompass,
  HardHat,
  HousePlus,
  Paintbrush2,
  Ruler,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "House Renovation",
    icon: HousePlus,
    description:
      "Upgrade your home with practical redesign, structural refinement, and modern finishing.",
  },
  {
    title: "Flooring Installation",
    icon: Ruler,
    description:
      "Durable flooring solutions with accurate leveling and clean installation for every room.",
  },
  {
    title: "Building Architecture",
    icon: DraftingCompass,
    description:
      "Functional architectural planning that balances design vision, compliance, and efficiency.",
  },
  {
    title: "Interior Design",
    icon: Paintbrush2,
    description:
      "Smart interior concepts that improve comfort, flow, and visual appeal across spaces.",
  },
  {
    title: "Civil Maintenance",
    icon: Wrench,
    description:
      "Reliable maintenance services to preserve structural strength and site functionality.",
  },
  {
    title: "Site Supervision",
    icon: HardHat,
    description:
      "Disciplined on-site monitoring to keep execution quality, safety, and timelines on track.",
  },
];

function OurServices() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  useEffect(() => {
    if (!emblaApi) return undefined;

    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const formatTitleLines = (title) => {
    const words = title.split(" ");
    return [words[0], words.slice(1).join(" ")];
  };

  return (
    <section className="bg-[#ecebe5] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-7 sm:gap-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#0f1720]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f1720]">
                <BadgeCheck size={14} className="text-[#f8bc00]" />
                Our Services
              </p>
              <h2 className="mt-5 max-w-[700px] text-3xl font-semibold leading-tight text-[#0f1720] sm:text-4xl md:text-[44px]">
                Provide Quality Services
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous service"
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#0f1720]/10 bg-white text-[#111827] transition hover:bg-[#111827] hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next service"
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#0f1720]/10 bg-white text-[#111827] transition hover:bg-[#111827] hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-5 flex">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                  >
                    <article className="group flex h-[430px] flex-col rounded-xl border border-[#d7d6cf] bg-[#f5f5f5] p-8 text-[#1f2937] transition duration-300 hover:bg-black hover:text-white">
                      <span className="inline-flex text-[#222] transition-colors duration-300 group-hover:text-[#f8bc00]">
                        <Icon size={62} strokeWidth={1.8} />
                      </span>

                      <h3 className="mt-auto max-w-[230px] text-2xl font-bold leading-tight text-inherit">
                        {formatTitleLines(service.title)[0]}
                        <br />
                        {formatTitleLines(service.title)[1]}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-inherit/85">
                        {service.description}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
