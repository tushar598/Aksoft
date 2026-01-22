import { Link } from "react-router-dom";
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      <div className="flex flex-col h-full p-4">
        {/* Image Section */}
        <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-slate-100 mb-4">
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            className="w-full h-full object-fill md:object-cover"
          />

          {/* Level Badge */}
          <div className="absolute bottom-3 right-3 bg-white px-3 py-1.5 rounded-lg shadow-sm">
            <span className="text-sm font-bold text-slate-800">
              {course.level}
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 flex-grow">
          {/* Meta Row */}
          <div className="flex justify-between items-center text-xs font-medium text-slate-500">
            <span>{course.duration}</span>
            {course.lessons && <span>{course.lessons} Lessons</span>}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 line-clamp-3">
            {course.description}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
            {course.students && (
              <span className="text-xs font-semibold text-slate-500">
                {course.students.toLocaleString()} Students
              </span>
            )}

            <Link
              to={`/course/${course.link}`}
              className="px-3 py-3 md:px-10 rounded-full bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white text-sm hover:shadow-lg transition-all"
            >
              View Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
