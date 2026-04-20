import React from "react";
import { Building2, Hammer, HardHat, Ruler } from "lucide-react";
import PageHero from "../../components/shared/PageHero";

const services = [
  {
    title: "General Construction",
    description: "End-to-end project execution from planning through final handover.",
    icon: Building2,
  },
  {
    title: "Renovation Work",
    description: "Upgrades and modernizations that improve function, safety, and value.",
    icon: Hammer,
  },
  {
    title: "Site Supervision",
    description: "On-site coordination with strict quality and timeline control.",
    icon: HardHat,
  },
  {
    title: "Design & Estimation",
    description: "Practical layouts with transparent cost planning before work begins.",
    icon: Ruler,
  },
];

function ServicePage() {
  return (
    <>
      <PageHero
        title="Our Services"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-[#f8fafc] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">Construction Services That Keep Projects Moving</h2>
          <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-[#475569] sm:text-base">
            We support residential and commercial builds with clear communication, reliable scheduling, and strong on-site delivery standards.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-[0_16px_45px_-35px_rgba(15,23,42,0.6)] sm:p-7"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] text-[#f8bc00]">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[#0f172a]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePage;
