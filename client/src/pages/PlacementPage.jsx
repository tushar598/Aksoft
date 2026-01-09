import React from "react";
import HeroSection from "../components/Placement/HeroSection";
import MainSection from "../components/Placement/MainSection";
import Footer from "../components/HomePage/Footer";
import CompanySlider from "../components/Placement/CompanySlider";

const PlacementPage = () => {
  return (
    <>
      <HeroSection />
      <CompanySlider />
      <MainSection/>
      <Footer />
    </>
  );
};

export default PlacementPage;
