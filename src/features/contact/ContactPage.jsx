import React from "react";
import { ArrowUpRight, BadgeCheck, Mail, MapPin, PhoneCall } from "lucide-react";
import PageHero from "../../components/shared/PageHero";

const contactInfo = [
  {
    title: "Phone:",
    value: "+1 (217) 555-0148",
    icon: PhoneCall,
  },
  {
    title: "Email Address:",
    value: "projects@arvoxbuild.com",
    icon: Mail,
  },
  {
    title: "Location:",
    value: "1234 Elm Street, Springfield, IL 62704",
    icon: MapPin,
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="bg-[#f3f3f2] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <article>
            <span className="inline-flex items-center rounded-full border border-[#0f1720]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f1720]">
              <BadgeCheck size={14} className="mr-2 text-[#f8bc00]" />
              Contact Us
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-[#0f1720] sm:text-[40px] md:text-[46px]">
              Get In Touch
            </h2>

            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-[#475569] sm:text-[15px]">
              We&apos;re here to assist you. Please reach out with any questions, feedback,
              or project inquiries.
            </p>

            <div className="mt-10 space-y-6 sm:space-y-7">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="grid grid-cols-[58px_1fr] items-start gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-[#0f1720]/55">
                      <Icon size={37} strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="text-[26px] font-semibold leading-tight text-[#334155] sm:text-[28px]">
                        {item.title}
                      </h3>
                      <p className="mt-1 max-w-[26ch] text-[15px] leading-snug text-[#1e293b] sm:text-lg">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-[24px] border border-[#d9d7d0] bg-[#e9e7df] p-6 shadow-[0_24px_55px_-45px_rgba(15,23,42,0.55)] sm:p-8 md:p-10 lg:p-12">
            <h3 className="text-3xl font-semibold text-[#0f1720] sm:text-[42px]">Send Message</h3>

            <form className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-14 w-full rounded-xl border border-[#d7d7d0] bg-[#f8f8f8] px-5 text-base text-[#0f1720] outline-none transition placeholder:text-[#64748b] focus:border-[#f8bc00] focus:bg-white"
                  />
                </label>

                <label className="block">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 w-full rounded-xl border border-[#d7d7d0] bg-[#f8f8f8] px-5 text-base text-[#0f1720] outline-none transition placeholder:text-[#64748b] focus:border-[#f8bc00] focus:bg-white"
                  />
                </label>
              </div>

              <label className="block">
                <input
                  type="text"
                  placeholder="Subject"
                  className="h-14 w-full rounded-xl border border-[#d7d7d0] bg-[#f8f8f8] px-5 text-base text-[#0f1720] outline-none transition placeholder:text-[#64748b] focus:border-[#f8bc00] focus:bg-white"
                />
              </label>

              <label className="block">
                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full resize-y rounded-xl border border-[#d7d7d0] bg-[#f8f8f8] px-5 py-4 text-base text-[#0f1720] outline-none transition placeholder:text-[#64748b] focus:border-[#f8bc00] focus:bg-white"
                />
              </label>

              <button
                type="submit"
                className="group inline-flex items-center rounded-full bg-[#f8bc00] p-1.5 text-sm font-semibold uppercase tracking-[0.02em] text-[#0f1720] transition hover:bg-[#ffca2c]"
              >
                <span className="px-6 py-3 sm:px-8">Submit Message</span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c340] text-[#0f1720] transition group-hover:bg-[#f2b814]">
                  <ArrowUpRight size={19} />
                </span>
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
