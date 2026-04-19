import React from "react";
import PageHero from "../../components/shared/PageHero";

function ServicePage() {
  return (
    <>
      <PageHero
        title="Our Services"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
    </>
  );
}

export default ServicePage;
