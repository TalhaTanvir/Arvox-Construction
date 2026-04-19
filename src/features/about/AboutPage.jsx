import React from "react";
import PageHero from "../../components/shared/PageHero";

function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
    </>
  );
}

export default AboutPage;
