import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COURSES, CATEGORIES } from "./courseconstants";
import CourseCard from "./CourseCards";

gsap.registerPlugin(ScrollTrigger);

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState("Beginner");
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  // Filter courses
  const filteredCourses = useMemo(() => {
    if (activeCategory === "All") return COURSES;
    return COURSES.filter((course) => {
      if (activeCategory === "Web Dev") return course.category === "Web Dev";
      if (activeCategory === "Problem Solving")
        return course.category === "Problem Solving";
      if (activeCategory === "Beginner") return course.level === "Beginner";
      return course.category === activeCategory;
    });
  }, [activeCategory]);

  // Animation for category switch (blink removed)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".course-card",
        {
          y: 50,
          scale: 0.95,
        },
        {
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
        }
      );
    }, cardsRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="courses"
      className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen"
      ref={containerRef}
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-semibold text-[#fa4b37]">
          Featured Courses
        </h2>
        <p className="text-gray-500 mt-3">
          Learn step by step with structured and industry-ready content
        </p>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border
              ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-red-500 to-pink-600 text-white border-transparent shadow-lg shadow-red-200 transform scale-105"
                  : "bg-white text-slate-600 border-slate-300 hover:border-red-300 hover:text-red-500 hover:bg-red-50"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div ref={cardsRef}>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <p className="text-xl">No courses found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;
