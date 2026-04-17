import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const navItems = ["Home", "About", "Service", "Blog"];

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
              key={item}
              href="/"
              className="group relative pb-1 text-[15px] font-medium text-white/90 transition-colors hover:text-white"
            >
              {item}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#f8bc00] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}

          <a
            href="/"
            className="group relative flex items-center gap-1 pb-1 text-[15px] font-medium text-white/90 transition-colors hover:text-white"
          >
            Pages <ChevronDown size={15} strokeWidth={2.3} />
            <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#f8bc00] transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-[#f8bc00] px-7 py-3 text-[15px] font-semibold text-[#111827] transition hover:brightness-95"
        >
          Contact <ArrowRight size={16} strokeWidth={2.4} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
