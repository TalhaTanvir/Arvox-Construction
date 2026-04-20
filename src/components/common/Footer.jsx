import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import hero1 from "../../assets/images/hero/hero1.jpg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const officeLocations = [
  {
    title: "Head Office",
    address: ["1234 Elm Street", "Springfield, IL 62704"],
  },
  {
    title: "Branch Office",
    address: ["2464 Royal Ln. Mesa,", "New Jersey 45463"],
  },
];

const socialLinks = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/", Icon: FaFacebookF },
  { id: "twitter", label: "X", href: "https://x.com/", Icon: FaXTwitter },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/", Icon: FaInstagram },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/", Icon: FaLinkedinIn },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-[#1f2024] pb-14 pt-48 text-white">
      <div className="absolute -top-24 left-1/2 w-full max-w-[1240px] -translate-x-1/2 px-5 sm:px-8">
        <article className="relative overflow-hidden rounded-[26px]">
          <img src={hero1} alt="Construction site background" className="h-[220px] w-full object-cover sm:h-[250px]" />
          <div className="absolute inset-0 bg-[#0f1720]/55" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h2 className="text-xl font-semibold leading-tight sm:text-3xl">
              Begin Your Dream Project Today!
            </h2>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#f8bc00] px-5 py-2.5 text-xs font-bold tracking-[0.01em] text-[#111827] transition hover:brightness-95 sm:mt-6 sm:px-6 sm:text-sm"
            >
              <span>BOOK NOW TODAY</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e5ad00] sm:h-9 sm:w-9">
                <ArrowUpRight size={18} strokeWidth={2.6} />
              </span>
            </Link>
          </div>
        </article>
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <section className="max-w-[360px]">
            <a href="/" className="inline-flex items-center gap-2 text-4xl font-semibold leading-none">
              Arvox
            </a>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Redefining the construction industry with innovative solutions, cutting-edge technology and
              sustainable practices
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-[#f8bc00] hover:text-[#111827]"
                    aria-label={`${social.label} link`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </section>

          <section className="lg:border-l lg:border-r lg:border-white/15 lg:px-10">
            <h3 className="text-xl font-semibold leading-none sm:text-2xl">Quick Links</h3>
            <nav className="mt-5 flex flex-col items-start gap-2">
              {navLinks.map((link) =>
                link.href === "#" ? (
                  <span key={link.label} className="whitespace-nowrap text-sm font-medium text-white/45">
                    {link.label}
                  </span>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="whitespace-nowrap text-sm font-medium text-white/80 transition hover:text-[#f8bc00]"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </section>

          <section>
            {officeLocations.map((office) => (
              <div key={office.title} className="mt-6 first:mt-0">
                <h3 className="text-xl font-semibold leading-none sm:text-2xl">{office.title}</h3>
                <div className="mt-4 flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#f8bc00]">
                    <MapPin size={18} />
                  </span>
                  <p className="text-base leading-relaxed text-white/80">
                    {office.address[0]}
                    <br />
                    {office.address[1]}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="mt-10 border-t border-white/15 pt-5 text-center text-sm text-white/65 sm:text-left">
          <p>© {currentYear} Arvox Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
