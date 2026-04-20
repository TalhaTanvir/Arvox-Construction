import React from "react";
import { Award, ShieldCheck, Users } from "lucide-react";
import PageHero from "../../components/shared/PageHero";

const highlights = [
  {
    title: "Experienced Team",
    description: "Skilled engineers, managers, and site crews with practical field knowledge.",
    icon: Users,
  },
  {
    title: "Quality Standards",
    description: "Clear quality checks and disciplined processes at each build stage.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Delivery",
    description: "Reliable outcomes for industrial, residential, and commercial clients.",
    icon: Award,
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-10">
            <span className="inline-flex rounded-full border border-[#f8bc00]/45 bg-[#f8bc00]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7c5f00]">
              Who We Are
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#0f172a] sm:text-4xl">
              Building with integrity, precision, and long-term thinking.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#475569] sm:text-base">
              Arvox Construction delivers dependable construction services from concept to completion. We focus on practical planning, transparent communication, and detail-driven execution that supports both schedule and quality goals.
            </p>
          </article>

          <div className="grid gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-[0_15px_45px_-35px_rgba(15,23,42,0.6)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] text-[#f8bc00]">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
