import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursePage from "../pages/CoursePage";
import ScrollToTop from "../components/ScrollToTop";
export const AppRouter = () => {
  return (
    <>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </>
  );
};
