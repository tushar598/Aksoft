import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CourseDetailsPage from "../pages/CourseDetailsPage.jsx";
import ScrollToTop from "../components/ScrollToTop";
import CourseFilterProvider from "../context/CourseFilterProvider";
import PlacementPage from "../pages/PlacementPage";
import Navbar from "../components/HomePage/Navbar.jsx";
import CoursePage from "../pages/CoursePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import AllStudent from "../pages/AllStudent.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import ContactPage from "../pages/ContactPage.jsx";
export const AppRouter = () => {
  return (
    <CourseFilterProvider>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/:course" element={<CourseDetailsPage />} />
        <Route path="/placement" element={<PlacementPage />} />
        <Route path="/students" element={<AllStudent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </CourseFilterProvider>
  );
};
