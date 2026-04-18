import React from "react";
import { BadgeCheck, Building2, Clock3, ShieldCheck, Star } from "lucide-react";

const stats = [
  {
    value: "250+",
    label: "Projects Completed",
    detail: "Residential, commercial, and infrastructure work delivered with consistency.",
    icon: Building2,
  },
  {
    value: "18",
    label: "Years Experience",
    detail: "A proven track record of durable builds and dependable timelines.",
    icon: Clock3,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    detail: "Long-term client relationships built through transparency and quality.",
    icon: Star,
  },
  {
    value: "100%",
    label: "Safety Compliance",
    detail: "Strict site protocols, certified teams, and regulated execution standards.",
    icon: ShieldCheck,
  },
];

const trustPoints = [
  "Licensed & insured professionals",
  "ISO-aligned quality processes",
  "Transparent budgeting and reporting",
  "On-time milestone delivery commitment",
];

function TrustedStat() {
  return (
    <section className="relative overflow-hidden bg-[#0c131a] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#f8bc00]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#17c2ff]/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f8bc00]">
              <BadgeCheck size={14} />
              Trusted Performance
            </p>

            <h2 className="mt-5 max-w-[640px] text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[44px]">
              Built On Results, Backed By Reliability
            </h2>

            <p className="mt-5 max-w-[620px] text-base leading-relaxed text-white/75">
              From first blueprint to final handover, we combine modern construction
              methods with disciplined execution to deliver measurable outcomes.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur-sm"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f8bc00] text-[#0f1720]">
                    <BadgeCheck size={12} strokeWidth={2.6} />
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.04] p-5 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.7)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#f8bc00]/45"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#f8bc00]/15 blur-2xl transition group-hover:bg-[#f8bc00]/25" />

                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8bc00]/20 text-[#f8bc00]">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>

                  <p className="mt-5 text-3xl font-semibold leading-none text-white sm:text-[34px]">
                    {item.value}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedStat;
