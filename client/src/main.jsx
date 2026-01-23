import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import CourseFilterProvider from "./context/CourseFilterProvider";

// 🔥 FORCE TOP ON HARD REFRESH
window.addEventListener("pageshow", () => {
  window.scrollTo(0, 0);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CourseFilterProvider>
      <App />
    </CourseFilterProvider>
  </BrowserRouter>,
);
