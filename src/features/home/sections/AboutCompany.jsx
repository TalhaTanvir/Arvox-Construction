import React from "react";
import { ArrowUpRight, BadgeCheck, Building2, Hammer, Ruler, Users } from "lucide-react";
import hero2 from "../../../assets/images/hero/hero2.jpg";

const highlights = [
  {
    icon: Building2,
    title: "End-to-End Execution",
    text: "From concept planning to final handover, every phase is managed with precision and accountability.",
  },
  {
    icon: Ruler,
    title: "Engineering-Led Quality",
    text: "Detailed site supervision, modern construction methods, and strict quality checkpoints on every build.",
  },
  {
    icon: Hammer,
    title: "On-Site Safety Standards",
    text: "Structured protocols, trained teams, and compliance-first operations to keep projects safe and smooth.",
  },
];

function AboutCompany() {
  return (
    <section className="relative overflow-hidden bg-[#f6f8fb] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-[#f8bc00]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#0f1720]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0f1720]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f1720]">
              <BadgeCheck size={14} className="text-[#f8bc00]" />
              About Our Company
            </p>

            <h2 className="mt-5 max-w-[700px] text-3xl font-semibold leading-tight text-[#0f1720] sm:text-4xl md:text-[44px]">
              We Build Future-Ready Spaces With Discipline, Craft, And Trust
            </h2>

            <p className="mt-5 max-w-[660px] text-base leading-relaxed text-[#334155]">
              Arvox delivers residential and commercial construction with a focus on
              durability, transparency, and measurable results. Our teams combine
              technical planning with practical site execution to keep every milestone
              clear, efficient, and on schedule.
            </p>

            <div className="mt-8 grid gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-[#0f1720]/10 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#f8bc00]/60 hover:shadow-[0_22px_50px_-35px_rgba(15,23,32,0.55)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8bc00]/20 text-[#0f1720]">
                        <Icon size={19} strokeWidth={2.3} />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-[#0f1720]">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#475569]">{item.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <article className="relative overflow-hidden rounded-[28px] border border-[#0f1720]/10 bg-[#0f1720] p-4 shadow-[0_26px_70px_-40px_rgba(2,8,23,0.85)] sm:p-5">
              <img
                src={hero2}
                alt="Arvox construction team on site"
                className="h-[390px] w-full rounded-2xl object-cover sm:h-[460px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

              <div className="absolute bottom-9 left-9 right-9 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f8bc00]">
                  <Users size={14} />
                  Client-First Approach
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-white">
                  Transparent communication and reliable execution in every project stage.
                </h3>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#f8bc00]"
                >
                  Explore our work
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
