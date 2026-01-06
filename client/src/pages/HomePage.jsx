import React from "react";

import HeroSection from "../components/HomePage/HeroSection.jsx";
import CourseSection from "../components/HomePage/CourseSection.jsx";
import AboutSection from "../components/HomePage/AboutSection.jsx";
import StatsSection from "../components/HomePage/StatsSection.jsx";
import ProductScrollSection from "../components/HomePage/ProductScrollSection.jsx";
import ContactSection from "../components/HomePage/ContactSection.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import MapSection from "../components/HomePage/MapSection.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CourseSection />
      <AboutSection />
      <StatsSection />
      <ProductScrollSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  );
};
export default HomePage;
