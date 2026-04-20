import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/shared/ScrollToTop";
import WhatsApp from "../components/shared/WhatsApp";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
      <ScrollToTop />
    </>
  );
}

export default MainLayout;
