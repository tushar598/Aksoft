import React from "react";
import MissionSection from "../components/AboutUsPage/MissionSection";
import SuccessSection from "../components/AboutUsPage/SuccessSection";
import TestimonialsSection from "../components/AboutUsPage/TestimonialsSection";
import Footer from "../components/HomePage/Footer";
import HeroSection from "../components/AboutUsPage/HeroSection";

const AboutPage = () => {
  return (
    <>
    <HeroSection />
      <MissionSection />
      <SuccessSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default AboutPage;
