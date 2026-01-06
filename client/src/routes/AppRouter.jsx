import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursePage from "../pages/CoursePage";
import ScrollToTop from "../components/ScrollToTop";
import CourseFilterProvider from "../context/CourseFilterProvider";
import PlacementPage from "../pages/PlacementPage";
import Navbar from "../components/HomePage/Navbar.jsx";
export const AppRouter = () => {
  return (
    <CourseFilterProvider>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:course" element={<CoursePage />} />
        <Route path="/placement" element={<PlacementPage />} />
      </Routes>
    </CourseFilterProvider>
  );
};
