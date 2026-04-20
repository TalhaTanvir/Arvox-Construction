import React, { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

function MobileMenu({ navItems = [], isScrolled = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 ${
          isOpen
            ? "border-[#f8bc00]/70 bg-[#f8bc00]/20 text-[#f8bc00] shadow-[0_0_0_4px_rgba(248,188,0,0.12)]"
            : isScrolled
              ? "border-black/15 bg-black/[0.03] text-[#111827] hover:bg-black/[0.06]"
              : "border-white/40 bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        <span className={`relative h-4 w-5 transition-all duration-300 ${isOpen ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}>
          <span
            className="absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current"
          />
          <span
            className="absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current"
          />
          <span
            className="absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current"
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-50 bg-black transition-all duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close mobile menu"
          onClick={() => setIsOpen(false)}
          className="group absolute right-5 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
        >
          <X
            size={22}
            strokeWidth={2.4}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-0 scale-100" : "-rotate-90 scale-50"
            } group-hover:rotate-90 group-hover:scale-110 group-active:rotate-180 group-active:scale-95`}
          />
        </button>

        <div className="flex h-full flex-col items-center justify-center px-6">
          <nav className="flex flex-col items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[30px] font-medium leading-none tracking-tight text-white/95 transition hover:text-[#f8bc00] sm:text-[34px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#f8bc00] px-8 py-3 text-base font-semibold text-[#111827] transition hover:brightness-95"
          >
            Contact <ArrowRight size={17} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
