import React, { useState } from "react";
import StudentSection from "./StudentSection";
import { STUDENTS } from "./constants";

const MainSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleStudents = showAll ? STUDENTS : STUDENTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-5">
        {/* Intro Hero Section */}
        <section className="text-center py-20 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-t from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] bg-clip-text text-transparent">
            Our Placed Students
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Students who got placed from AkSoft.
          </p>
        </section>

        {/* Student Sections List */}
        <div className="flex flex-col  pb-16">
          {visibleStudents.map((student, index) => (
            <StudentSection key={student.id} data={student} index={index} />
          ))}
        </div>

        {/* Show More / Less Button */}
        {STUDENTS.length > 3 && (
          <div className="flex justify-center pb-24">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-[#fa4b37] to-[#df2771] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none
              hover:opacity-90 transition-all"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MainSection;
