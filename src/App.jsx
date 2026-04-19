import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./features/home/HomePage";
import AboutPage from "./features/about/AboutPage";
import ServicePage from "./features/services/ServicePage";
import ContactPage from "./features/contact/ContactPage";
import ProjectPage from "./features/projects/ProjectPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="projects" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
}

export default App;
