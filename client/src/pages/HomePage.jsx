import React from "react";

import CourseSection from "../components/HomePage/CourseSection.jsx";
import AboutSection from "../components/HomePage/AboutSection.jsx";
import StatsSection from "../components/HomePage/StatsSection.jsx";
import ProductScrollSection from "../components/HomePage/ProductScrollSection.jsx";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import MapSection from "../components/HomePage/MapSection.jsx";
// import CarousalSection from "../components/HomePage/CarousalSection.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <CarousalSection /> */}
      <CourseSection />
      <AboutSection />
      <StatsSection />
      <ProductScrollSection />
      <MapSection />
    </>
  );
};
export default HomePage;
