import React from "react";
import { ChevronRight } from "lucide-react";
import breadcrumbImage from "../../assets/images/breadcrumb.jpg";

function PageHero({
  title = "Page Title",
  breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Page" }],
  backgroundImage = breadcrumbImage,
  centeredLinks = [],
}) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={backgroundImage}
        alt="Construction site background"
        className="h-[420px] w-full object-cover sm:h-[460px]"
      />

      <div className="absolute inset-0 bg-[#111827]/65" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1240px] px-5 pb-14 sm:px-8 sm:pb-16 md:pb-20">
          <h1 className="max-w-[760px] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>

          <nav aria-label="Breadcrumb" className="mt-4">
            <ol className="flex flex-wrap items-center gap-2.5 text-base text-white/85 sm:text-xl">
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;

                return (
                  <li key={`${item.label}-${index}`} className="flex items-center gap-2.5">
                    {item.href && !isLast ? (
                      <a
                        href={item.href}
                        className="transition-colors hover:text-[#f8bc00]"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className={isLast ? "text-[#f8bc00]" : "text-white/85"}>
                        {item.label}
                      </span>
                    )}

                    {!isLast && (
                      <ChevronRight
                        size={18}
                        className="text-[#f8bc00]"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          {centeredLinks.length > 0 && (
            <nav aria-label="Project categories" className="mt-7">
              <ul className="flex flex-wrap items-center justify-center gap-3">
                {centeredLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href || "#"}
                      className="inline-flex rounded-full border border-white/35 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:border-[#f8bc00] hover:bg-[#f8bc00]/20"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
