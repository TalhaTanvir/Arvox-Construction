import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageHero from "../../components/shared/PageHero";
import hero1 from "../../assets/images/hero/hero1.jpg";

const projectCategories = [
  { label: "All", value: null },
  { label: "Industrial", value: "industrial" },
  { label: "Building", value: "building" },
  { label: "Superstore", value: "superstore" },
];

const projects = [
  { title: "Skyline Residence", category: "building", location: "New York, NY" },
  { title: "Harbor Business Hub", category: "industrial", location: "Houston, TX" },
  { title: "Northway Interiors", category: "building", location: "Chicago, IL" },
  { title: "Evergreen Complex", category: "superstore", location: "Los Angeles, CA" },
  { title: "Crescent Plaza", category: "building", location: "Seattle, WA" },
  { title: "Atlas Logistics Yard", category: "industrial", location: "Phoenix, AZ" },
];

function ProjectPage() {
  const location = useLocation();
  const selectedCategory = new URLSearchParams(location.search).get("category");
  const visibleProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <>
      <PageHero
        title="Our Projects"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="bg-[#f4f4f5] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {projectCategories.map((category) => {
              const isActive =
                category.value === null
                  ? !selectedCategory
                  : selectedCategory === category.value;

              return (
                <Link
                  key={category.label}
                  to={category.value ? `/projects?category=${category.value}` : "/projects"}
                  className={`inline-flex min-w-24 justify-center rounded-md border px-4 py-2 text-sm transition ${
                    isActive
                      ? "border-[#f8bc00] bg-[#f8bc00] text-[#0f172a]"
                      : "border-[#d4d4d8] bg-white text-[#0f172a] hover:border-[#f8bc00]/50"
                  }`}
                >
                  {category.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl bg-white"
              >
                <img
                  src={hero1}
                  alt={project.title}
                  className="h-[290px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[320px]"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f8bc00]">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-[#0f172a]">{project.title}</h3>
                  <p className="mt-1 text-sm text-[#64748b]">{project.location}</p>
                </div>
              </article>
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <p className="mt-10 text-sm text-[#64748b]">
              No projects found for this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default ProjectPage;
