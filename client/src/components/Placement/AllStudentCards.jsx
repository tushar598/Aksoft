import React from "react";
import HeroSection from "./HeroSection";
import { STUDENTS } from "./constants";
import { StudentCard } from "./StudentCard";

const AllStudentCards = () => {
  const reamainingStudents = STUDENTS.slice(3);
  return (
    <>
      <HeroSection />
      {/* Intro Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-t from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] bg-clip-text text-transparent">
          Our Placed Students
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Students who got placed from AkSoft.
        </p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 p-4 md:p-12 place-items-center">
        {reamainingStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </>
  );
};

export default AllStudentCards;
