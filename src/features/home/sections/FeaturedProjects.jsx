import React from "react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import hero1 from "../../../assets/images/hero/hero1.jpg";
import hero2 from "../../../assets/images/hero/hero2.jpg";
import hero3 from "../../../assets/images/hero/hero3.jpg";
import hero4 from "../../../assets/images/hero/hero4.jpg";

const projects = [
  {
    title: "Skyline Residence",
    category: "Residential Development",
    image: hero1,
  },
  {
    title: "Harbor Business Hub",
    category: "Commercial Build",
    image: hero2,
  },
  {
    title: "Northway Interiors",
    category: "Interior Execution",
    image: hero3,
  },
  {
    title: "Evergreen Complex",
    category: "Mixed-Use Project",
    image: hero4,
  },
];

function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-[#f8bc00]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#0f1720]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0f1720]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f1720]">
              <BadgeCheck size={14} className="text-[#f8bc00]" />
              Featured Projects
            </p>
            <h2 className="mt-5 max-w-[720px] text-3xl font-semibold leading-tight text-[#0f1720] sm:text-4xl md:text-[44px]">
              Projects That Reflect Precision, Speed, And Craft
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0f1720]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f1720] transition hover:border-[#f8bc00]/70 hover:text-[#0f1720]"
          >
            View All Projects
            <ArrowUpRight size={16} strokeWidth={2.4} />
          </button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[24px] border border-[#0f1720]/10 bg-[#0f1720] shadow-[0_22px_60px_-35px_rgba(2,8,23,0.65)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[340px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f8bc00]">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-[30px]">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
