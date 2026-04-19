import React, { useState } from "react";
import { BadgeCheck, ChevronDown, CircleHelp, MessageSquareText } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical residential project take?",
    answer:
      "Timeline depends on scope, approvals, and finishing standards, but most residential builds move through structured milestones with weekly progress visibility and clear handover targets.",
  },
  {
    question: "Do you handle both design and construction execution?",
    answer:
      "Yes. We support planning, design coordination, BOQ alignment, site execution, and supervision so decisions stay connected from concept to completion.",
  },
  {
    question: "How do you control quality during on-site work?",
    answer:
      "Quality is managed through stage-wise inspections, material verification, and documented checklists across civil, finishing, and MEP activities.",
  },
  {
    question: "Can I track progress and budget updates regularly?",
    answer:
      "Absolutely. You receive milestone-based updates, issue logs, and practical cost visibility to keep decisions informed throughout the project cycle.",
  },
  {
    question: "Do you work on renovation and commercial projects too?",
    answer:
      "We deliver residential, renovation, and commercial work, including interior upgrades, structural refinement, and complete site management.",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#f8bc00]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-[#0f1720]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0f1720]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f1720]">
              <BadgeCheck size={14} className="text-[#f8bc00]" />
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 max-w-[620px] text-3xl font-semibold leading-tight text-[#0f1720] sm:text-4xl md:text-[44px]">
              Common Questions About Working With Arvox
            </h2>

            <p className="mt-5 max-w-[560px] text-base leading-relaxed text-[#334155]">
              We keep our process transparent, practical, and easy to follow. If you
              are planning a new build or renovation, these answers cover what most
              clients want to know before getting started.
            </p>

            <article className="mt-7 rounded-2xl border border-[#0f1720]/10 bg-white p-5 shadow-[0_20px_50px_-38px_rgba(15,23,32,0.6)]">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8bc00]/20 text-[#0f1720]">
                  <MessageSquareText size={19} strokeWidth={2.3} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                    Still Need Help?
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#475569]">
                    Share your scope and we will guide you with a practical next-step
                    plan based on your timeline and budget.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                    isOpen
                      ? "border-[#f8bc00]/70 shadow-[0_24px_52px_-38px_rgba(15,23,32,0.6)]"
                      : "border-[#0f1720]/10 hover:border-[#f8bc00]/45"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f8bc00]/20 text-[#0f1720]">
                        <CircleHelp size={16} strokeWidth={2.3} />
                      </span>
                      <span className="text-base font-semibold leading-snug text-[#0f1720] sm:text-lg">
                        {item.question}
                      </span>
                    </span>

                    <span
                      className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0f1720]/10 text-[#0f1720] transition ${
                        isOpen ? "rotate-180 border-[#f8bc00]/60 text-[#f8bc00]" : ""
                      }`}
                    >
                      <ChevronDown size={16} strokeWidth={2.4} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-[#475569] sm:px-6 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
