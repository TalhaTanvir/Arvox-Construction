import React from "react";
import {
  ArrowUpRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import PageHero from "../../components/shared/PageHero";

const contactCards = [
  {
    title: "Direct Line",
    value: "+1 (217) 555-0148",
    note: "Mon-Fri, 9:00 AM to 6:00 PM",
    icon: PhoneCall,
  },
  {
    title: "Project Desk",
    value: "projects@arvoxbuild.com",
    note: "Share drawings or scope docs",
    icon: Mail,
  },
  {
    title: "Office",
    value: "1234 Elm Street, Springfield, IL",
    note: "On-site meetings by appointment",
    icon: MapPin,
  },
];

const processSteps = [
  "Tell us your goals and project context",
  "We respond with timing, budget range, and next actions",
  "Book a site visit or virtual planning call",
];

function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="relative bg-[#0f172a] pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[linear-gradient(130deg,rgba(248,188,0,0.13),transparent_38%,transparent_62%,rgba(248,188,0,0.12))]" />
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111827] p-7 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#f8bc00]/20 blur-3xl" />
            <span className="relative inline-flex rounded-full border border-[#f8bc00]/45 bg-[#f8bc00]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#f8bc00]">
              Contact Arvox
            </span>

            <h2 className="relative mt-5 max-w-[20ch] text-3xl font-semibold leading-tight sm:text-[42px]">
              Planning a project? Talk to the team that builds it right.
            </h2>

            <p className="relative mt-4 max-w-[60ch] text-[15px] leading-relaxed text-slate-300 sm:text-base">
              We keep communication direct and practical from first call to final handover. Share your scope and we will map the clearest next step.
            </p>

            <div className="relative mt-8 grid gap-3">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="group grid grid-cols-[44px_1fr] items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#f8bc00]/45 hover:bg-white/[0.06]"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-[#f8bc00] transition group-hover:bg-[#f8bc00]/20">
                      <Icon size={19} />
                    </span>
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-[0.08em] text-slate-300">{card.title}</h3>
                      <p className="mt-1 text-base font-semibold text-white">{card.value}</p>
                      <p className="mt-1 text-sm text-slate-400">{card.note}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <article className="rounded-[30px] bg-white p-7 shadow-[0_28px_80px_-48px_rgba(15,23,42,0.65)] sm:p-10">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-[#0f172a] sm:text-3xl">Request Consultation</h2>
              <span className="rounded-full bg-[#f8bc00]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#7c5f00]">
                24h Reply
              </span>
            </div>

            <form className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#1e293b]">Name</span>
                  <input
                    type="text"
                    placeholder="John Carter"
                    className="h-12 w-full rounded-xl border border-[#d5dce7] bg-[#f8fafc] px-4 text-sm text-[#0f172a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#f8bc00] focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#1e293b]">Phone</span>
                  <input
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                    className="h-12 w-full rounded-xl border border-[#d5dce7] bg-[#f8fafc] px-4 text-sm text-[#0f172a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#f8bc00] focus:bg-white"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#1e293b]">Email</span>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="h-12 w-full rounded-xl border border-[#d5dce7] bg-[#f8fafc] px-4 text-sm text-[#0f172a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#f8bc00] focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#1e293b]">Project Type</span>
                  <select className="h-12 w-full rounded-xl border border-[#d5dce7] bg-[#f8fafc] px-4 text-sm text-[#0f172a] outline-none transition focus:border-[#f8bc00] focus:bg-white">
                    <option>Residential Build</option>
                    <option>Commercial Build</option>
                    <option>Renovation</option>
                    <option>Consulting</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#1e293b]">Scope Brief</span>
                <textarea
                  rows={5}
                  placeholder="Share location, expected timeline, and what you need built."
                  className="w-full rounded-xl border border-[#d5dce7] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#f8bc00] focus:bg-white"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1e293b] sm:w-auto"
              >
                Send Inquiry <ArrowUpRight size={16} />
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1240px] gap-6 px-5 sm:px-8 md:grid-cols-3">
          <article className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-6 sm:p-7">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] text-[#f8bc00]">
              <Building2 size={19} />
            </span>
            <h3 className="mt-4 text-xl font-semibold text-[#0f172a]">Built on Experience</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
              12+ years delivering residential and commercial construction with practical execution on site.
            </p>
          </article>

          <article className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-6 sm:p-7">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] text-[#f8bc00]">
              <Clock3 size={19} />
            </span>
            <h3 className="mt-4 text-xl font-semibold text-[#0f172a]">Fast, Clear Response</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
              Most inquiries receive a meaningful first response within one business day.
            </p>
          </article>

          <article className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-6 sm:p-7">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] text-[#f8bc00]">
              <ShieldCheck size={19} />
            </span>
            <h3 className="mt-4 text-xl font-semibold text-[#0f172a]">Reliable Process</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
              Transparent milestones, documented progress, and no hidden surprises.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-8 w-full max-w-[1240px] px-5 sm:mt-10 sm:px-8">
          <article className="rounded-3xl border border-[#e2e8f0] bg-[#111827] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">What happens after you contact us</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <span className="text-sm font-semibold text-[#f8bc00]">0{index + 1}</span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
