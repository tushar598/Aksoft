import { useContext } from "react";
import { CourseFilterContext } from "../context/CourseFilterContext";

const useCourseFilter = () => {
  const ctx = useContext(CourseFilterContext);

  if (!ctx) {
    throw new Error(
      "useCourseFilter must be used inside CourseFilterProvider"
    );
  }

  return ctx;
};

export default useCourseFilter;
