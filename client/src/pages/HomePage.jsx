import React from "react";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import CourseSection from "../components/HomePage/CourseSection.jsx";
import CourseFilterProvider from "../context/CourseFilterProvider";
import AboutSection from "../components/HomePage/AboutSection.jsx";
import StatsSection from "../components/HomePage/StatsSection.jsx";
import ProductScrollSection from "../components/HomePage/ProductScrollSection.jsx";
import ContactSection from "../components/HomePage/ContactSection.jsx";
const HomePage = () => {
  return (
    <CourseFilterProvider>
      <HeroSection />
      <CourseSection />
      <AboutSection />
      <StatsSection />
      <ProductScrollSection />
      <ContactSection />
    </CourseFilterProvider>
  );
};
export default HomePage;
