import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[88px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span
            className={`text-[36px] font-medium leading-none transition-colors duration-300 ${
              isScrolled ? "text-[#111827]" : "text-white"
            }`}
          >
            Arvox
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`group relative pb-1 text-[15px] font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-[#111827]/90 hover:text-[#111827]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#f8bc00] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#f8bc00] px-7 py-3 text-[15px] font-semibold text-[#111827] transition hover:brightness-95 md:inline-flex"
        >
          Contact <ArrowRight size={16} strokeWidth={2.4} />
        </Link>

        <MobileMenu navItems={navItems} isScrolled={isScrolled} />
      </div>
    </header>
  );
}

export default Navbar;
