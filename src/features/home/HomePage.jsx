import React from "react";
import Hero from "./sections/Hero";
import AboutCompany from "./sections/AboutCompany";
import OurServices from "./sections/OurServices";
import FeaturedProjects from "./sections/FeaturedProjects";
import WhyChooseUs from "./sections/WhyChooseUs";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import TrustedStat from "./sections/TrustedStat";
import Faqs from "./sections/Faqs";

function HomePage() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <OurServices />
      <FeaturedProjects />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <TrustedStat />
      <Faqs />
    </>
  );
}

export default HomePage;
