import React from "react";
import {
  BadgeCheck,
  ClipboardList,
  Compass,
  Handshake,
  HardHat,
  ShieldCheck,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: Compass,
    title: "Discovery And Planning",
    description:
      "We align goals, budget, and site constraints through practical consultation and structured feasibility checks.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Design And Documentation",
    description:
      "Detailed drawings, BOQs, and execution plans are prepared to keep every trade clear before site mobilization.",
  },
  {
    step: "03",
    icon: HardHat,
    title: "Execution And Supervision",
    description:
      "Our on-site teams coordinate labor, materials, and timeline checkpoints with disciplined supervision each day.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Quality And Handover",
    description:
      "Final inspections, snag resolution, and handover documentation ensure reliable performance after completion.",
  },
];

const processStats = [
  { value: "4-Stage", label: "Delivery Framework" },
  { value: "100%", label: "Milestone Visibility" },
  { value: "On-Time", label: "Schedule Commitment" },
];

function Process() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf0] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-14 top-16 h-64 w-64 rounded-full bg-[#f8bc00]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#0f1720]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0f1720]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f1720]">
              <BadgeCheck size={14} className="text-[#f8bc00]" />
              Our Process
            </p>
            <h2 className="mt-5 max-w-[740px] text-3xl font-semibold leading-tight text-[#0f1720] sm:text-4xl md:text-[44px]">
              A Clear Construction Workflow From First Brief To Final Handover
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-4">
          {processSteps.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-[#0f1720]/10 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#f8bc00]/60 hover:shadow-[0_24px_50px_-36px_rgba(15,23,32,0.55)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8bc00]/20 text-[#0f1720]">
                    <Icon size={20} strokeWidth={2.3} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#94a3b8]">
                    STEP {item.step}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug text-[#0f1720]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl border border-[#0f1720]/10 bg-white p-5 sm:grid-cols-3 sm:p-6">
          {processStats.map((item) => (
            <article key={item.label} className="rounded-xl bg-[#f8f9fc] px-4 py-5 text-center">
              <p className="text-3xl font-semibold text-[#0f1720]">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#64748b]">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#0f1720]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#334155]">
          <Handshake size={14} className="text-[#f8bc00]" />
          Client updates at every critical milestone
        </div>
      </div>
    </section>
  );
}

export default Process;
