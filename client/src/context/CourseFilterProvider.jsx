import { useState } from "react";
import { CourseFilterContext } from "./CourseFilterContext";

const CourseFilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <CourseFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </CourseFilterContext.Provider>
  );
};

export default CourseFilterProvider;
