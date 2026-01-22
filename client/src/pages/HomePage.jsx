import React from "react";

import CourseSection from "../components/HomePage/CourseSection.jsx";
import AboutSection from "../components/HomePage/AboutSection.jsx";
import StatsSection from "../components/HomePage/StatsSection.jsx";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import MapSection from "../components/HomePage/MapSection.jsx";
import PlacedStudent from "../components/HomePage/PlacedStudent.jsx";
// import CarousalSection from "../components/HomePage/CarousalSection.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <CarousalSection /> */}
      <CourseSection />
      <AboutSection />
      <StatsSection />
      <PlacedStudent />
      <MapSection />
    </>
  );
};
export default HomePage;
