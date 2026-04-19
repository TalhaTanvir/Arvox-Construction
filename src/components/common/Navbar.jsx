import React from "react";
import { ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-40 w-full bg-transparent">
      <div className="mx-auto flex h-[88px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <span className="text-[36px] font-medium leading-none text-white">
            Arvox
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative pb-1 text-[15px] font-medium text-white/90 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#f8bc00] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#f8bc00] px-7 py-3 text-[15px] font-semibold text-[#111827] transition hover:brightness-95 md:inline-flex"
        >
          Contact <ArrowRight size={16} strokeWidth={2.4} />
        </a>

        <MobileMenu navItems={navItems} />
      </div>
    </header>
  );
}

export default Navbar;
