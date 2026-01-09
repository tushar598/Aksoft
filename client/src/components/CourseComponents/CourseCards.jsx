import { Link } from "react-router-dom";
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-black/70 rounded-full backdrop-blur">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Level */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase text-red-500 bg-red-50 rounded-full">
            {course.level}
          </span>
          <span className="text-slate-500 text-xs font-bold ml-2">{course.duration}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-red-500 transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {course.description}
        </p>

    

        {/* CTA */}
        <Link to={`/course/${course.link}`} className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-pink-600 text-white text-center font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-red-600 hover:to-pink-700 active:scale-[0.98] transition-all duration-200">
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
