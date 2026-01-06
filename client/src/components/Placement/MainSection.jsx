import React from "react";
import StudentSection from "./StudentSection";
import { STUDENTS } from "./constants";

const MainSection = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">
        {/* Intro Hero Section (Optional, gives context) */}
        <section className="text-center py-20 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-t from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] bg-clip-text text-transparent">
            Our Placed Students
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Students who got placed from AkSoft.
          </p>
        </section>

        {/* Student Sections List */}
        <div className="flex flex-col gap-12 pb-24">
          {STUDENTS.map((student, index) => (
            <StudentSection key={student.id} data={student} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainSection;
