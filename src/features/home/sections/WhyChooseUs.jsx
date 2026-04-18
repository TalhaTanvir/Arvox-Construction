import React from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Handshake,
  HardHat,
  ChartLine,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality You Can Audit",
    text: "Every build follows structured quality checkpoints, material validation, and strict site documentation.",
    stat: "100%",
    label: "Quality-Mapped Workflows",
  },
  {
    icon: TimerReset,
    title: "Time-Controlled Delivery",
    text: "Clear milestones, disciplined supervision, and proactive risk handling keep work on schedule.",
    stat: "24/7",
    label: "Progress Monitoring",
  },
  {
    icon: HardHat,
    title: "Safety-First Operations",
    text: "From daily briefings to on-ground compliance, site safety remains non-negotiable across all teams.",
    stat: "Zero",
    label: "Compromise On Safety",
  },
  {
    icon: Handshake,
    title: "Transparent Collaboration",
    text: "You stay informed at every phase with honest communication, reporting clarity, and practical guidance.",
    stat: "1:1",
    label: "Client Communication",
  },
];

const impactStats = [
  { value: "320+", name: "Completed Projects" },
  { value: "14+", name: "Years Of Experience" },
  { value: "98%", name: "Repeat Client Trust" },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#0f1720] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -left-16 top-16 h-64 w-64 rounded-full bg-[#f8bc00]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <BadgeCheck size={14} className="text-[#f8bc00]" />
              Why Choose Us
            </p>

            <h2 className="mt-5 max-w-[620px] text-3xl font-semibold leading-tight sm:text-4xl md:text-[44px]">
              Built Around Precision, Accountability, And Long-Term Performance
            </h2>

            <p className="mt-5 max-w-[620px] text-base leading-relaxed text-slate-300">
              Arvox blends engineering rigor with practical site execution to deliver
              dependable outcomes. We focus on transparent processes, safer worksites,
              and measurable quality from planning to final handover.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#f8bc00]/60 bg-[#f8bc00] px-5 py-2.5 text-sm font-semibold text-[#0f1720] transition hover:bg-[#ffd04d]"
            >
              Discuss Your Project
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#f8bc00]/60 hover:bg-white/[0.1]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8bc00]/20 text-[#f8bc00] transition group-hover:bg-[#f8bc00]/30">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>

                  <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.text}</p>

                  <div className="mt-5 border-t border-white/15 pt-4">
                    <p className="text-2xl font-semibold text-[#f8bc00]">{item.stat}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-300">
                      {item.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-white/15 bg-white/[0.05] p-5 sm:mt-12 sm:grid-cols-3 sm:p-6">
          {impactStats.map((item) => (
            <article key={item.name} className="rounded-xl bg-white/[0.04] px-4 py-5 text-center">
              <p className="text-3xl font-semibold text-[#f8bc00]">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-300">{item.name}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-slate-300">
          <ChartLine size={16} className="text-[#f8bc00]" />
          Performance tracked with milestone-based progress reporting.
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
