import React from "react";
import HeroSection from "../components/CourseComponents/HeroSection";
import CourseSection from "../components/CourseComponents/CourseSection";
import CarousalSection from "../components/CourseComponents/CarousalSection";
import FAQSection from "../components/ContactPage/FAQSection";
import { questions } from "../components/CourseComponents/FAQcontent";

const CoursePage = () => {
  return (
    <div className="bg-[#f9fafb]">
      <HeroSection />
      <CarousalSection />
      <CourseSection />
      <FAQSection questions={questions} />
    </div>
  );
};

export default CoursePage;
