import React from "react";
import PageHero from "../../components/shared/PageHero";

function ProjectPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
    </>
  );
}

export default ProjectPage;
