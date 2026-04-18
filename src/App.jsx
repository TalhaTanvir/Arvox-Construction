import React from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./features/home/sections/Hero";
import TrustedStat from "./features/home/sections/TrustedStat";
import AboutCompany from "./features/home/sections/AboutCompany";
import WhyChooseUs from "./features/home/sections/WhyChooseUs";
import OurServices from "./features/home/sections/OurServices";
import FeaturedProjects from "./features/home/sections/FeaturedProjects";
import Process from "./features/home/sections/Process";
import Testimonials from "./features/home/sections/Testimonials";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedStat />
      <AboutCompany />
      <WhyChooseUs />
      <OurServices />
      <Process />
      <Testimonials />
      <FeaturedProjects />
      <Footer />
    </>
  );
}

export default App;
