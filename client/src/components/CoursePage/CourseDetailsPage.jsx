import React from "react";
import { motion } from "framer-motion";
import Roadmap from "./Roadmap";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const roadmapData = [
  {
    step: "01",
    title: "Why C++ Programming?",
    points: [
      " 1. High-performance language",
      " 2. Object-oriented programming support",
      " 3. Used in system & application development",
    ],
    bg: "/card01.jpg",
  },
  {
    step: "02",
    title: "Basic C++ Concepts",
    points: [
      " 1. Data types, variables & constants",
      " 2. Operators and expressions",
      " 3. Input/output using cin & cout",
    ],
    bg: "/c++basic.png",
  },
  {
    step: "03",
    title: "Control Flow Statements",
    points: [
      " 1. Conditional statements (if, switch)",
      " 2. Loops (for, while, do-while)",
      " 3. Break and continue",
    ],
    bg: "/roadmap/bg3.jpg",
  },
  {
    step: "04",
    title: "Functions in C++",
    points: [
      " 1. Function declaration & definition",
      " 2. Call by value vs call by reference",
      " 3. Inline and recursive functions",
    ],
    bg: "/roadmap/bg4.jpg",
  },
  {
    step: "05",
    title: "Arrays & Strings",
    points: [
      " 1. One-dimensional & multi-dimensional arrays",
      " 2. Character arrays and strings",
      " 3. String manipulation functions",
    ],
    bg: "/roadmap/bg5.jpg",
  },
  {
    step: "06",
    title: "Pointers & Memory Basics",
    points: [
      " 1. Pointer basics and syntax",
      " 2. Pointer arithmetic",
      " 3. Pointers with arrays and functions",
    ],
    bg: "/roadmap/bg6.jpg",
  },
  {
    step: "07",
    title: "Structures & Unions",
    points: [
      " 1. Defining and using structures",
      " 2. Nested structures",
      " 3. Difference between structure and union",
    ],
    bg: "/roadmap/bg7.jpg",
  },
  {
    step: "08",
    title: "Classes & Objects",
    points: [
      " 1. Class & object fundamentals",
      " 2. Access specifiers",
      " 3. Array of objects",
    ],
    bg: "/c++class.png",
  },
  {
    step: "09",
    title: "Constructor & Destructor",
    points: [
      " 1. Default, parameterized & copy constructors",
      " 2. Constructor overloading",
      " 3. Destructor lifecycle",
    ],
    bg: "/roadmap/bg9.jpg",
  },
  {
    step: "10",
    title: "Properties of OOP",
    points: [
      " 1. Encapsulation & abstraction",
      " 2. Static data members & functions",
      " 3. Object-oriented design principles",
    ],
    bg: "/roadmap/bg10.jpg",
  },
  {
    step: "11",
    title: "Inheritance in C++",
    points: [
      " 1. Single, multiple & multilevel inheritance",
      " 2. Diamond problem & virtual inheritance",
      " 3. Function overriding",
    ],
    bg: "/roadmap/bg11.jpg",
  },
  {
    step: "12",
    title: "Polymorphism",
    points: [
      " 1. Compile-time polymorphism",
      " 2. Runtime polymorphism",
      " 3. Virtual functions",
    ],
    bg: "/roadmap/bg12.jpg",
  },
  {
    step: "13",
    title: "Operator Overloading",
    points: [
      " 1. Overloading unary & binary operators",
      " 2. Rules of operator overloading",
      " 3. Practical use cases",
    ],
    bg: "/roadmap/bg13.jpg",
  },
  {
    step: "14",
    title: "Templates",
    points: [
      " 1. Function templates",
      " 2. Class templates",
      " 3. Template specialization",
    ],
    bg: "/roadmap/bg14.jpg",
  },
  {
    step: "15",
    title: "Exception Handling",
    points: [
      " 1. try, catch & throw",
      " 2. Multiple catch blocks",
      " 3. User-defined exceptions",
    ],
    bg: "/roadmap/bg15.jpg",
  },
  {
    step: "16",
    title: "File Handling in C++",
    points: [
      " 1. File streams (ifstream, ofstream)",
      " 2. Reading and writing files",
      " 3. Binary file handling",
    ],
    bg: "/roadmap/bg16.jpg",
  },
  {
    step: "17",
    title: "STL (Standard Template Library)",
    points: [
      " 1. Containers (vector, list, map)",
      " 2. Iterators & algorithms",
      " 3. STL use cases",
    ],
    bg: "/roadmap/bg17.jpg",
  },
  {
    step: "18",
    title: "Dynamic Memory Management",
    points: [
      " 1. new and delete operators",
      " 2. Memory leaks",
      " 3. Smart pointers basics",
    ],
    bg: "/roadmap/bg18.jpg",
  },
  {
    step: "19",
    title: "Modern C++ (C++11 and Above)",
    points: [
      " 1. Auto keyword & range-based loops",
      " 2. Lambda expressions",
      " 3. Move semantics",
    ],
    bg: "/roadmap/bg19.jpg",
  },
  {
    step: "20",
    title: "Advanced C++ Concepts",
    points: [
      " 1. Multithreading basics",
      " 2. Concurrency and mutex",
      " 3. Performance optimization",
    ],
    bg: "/roadmap/bg20.jpg",
  },
  {
    step: "21",
    title: "C++ for Competitive Programming",
    points: [
      " 1. Fast I/O techniques",
      " 2. Time & space complexity",
      " 3. Problem-solving patterns",
    ],
    bg: "/roadmap/bg21.jpg",
  },
  {
    step: "22",
    title: "C++ in Real-World Applications",
    points: [
      " 1. Game development basics",
      " 2. System & embedded programming",
      " 3. C++ in finance & AI",
    ],
    bg: "/roadmap/bg22.jpg",
  },
];


export default function MacBookAirShowcase() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black">
         {/* BACKGROUND VIDEO */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="/large_2x.mp4"
    autoPlay
    muted
    playsInline
    preload="metadata"
  />

       {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] z-5" />

        {/* CONTENT */}
        <div className="relative z-10 px-6 lg:text-center lg:px-14">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            Learn C++: Introduction
          </motion.h1>

          <motion.p
            className="mt-4 text-base lg:px-[20%] sm:text-lg md:text-xl text-gray-100 font-medium"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            C++ is a general purpose programming language and widely used now a
            days for competitive programming. It has imperative, object-oriented
            and generic programming features.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition">
              View Syllabus
            </button>
          </motion.div>
        </div>
      </section>

      {/* NEW COURSE ROADMAP SECTION (Roadmap.sh Style) */}
      <section className="py-24 px-4 sm:px-6 bg-[#f8f9fa] relative">
        <div className="max-w-7xl mx-auto mb-16 text-center">
            <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">C++ Developer Path</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Step by step guide to becoming a modern C++ developer in 2025. Follow the yellow brick road to mastery.
            </p>
            
            {/* Legend similar to image */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br bg-gradient-to-r from-[#fa4b37] to-[#df2771] border border-black"></div>
                    <span>Core Topic</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-100 border border-gray-400"></div>
                    <span>Sub-concept</span>
                </div>
                 <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-dashed border-blue-400"></div>
                    <span>Learning Flow</span>
                </div>
            </div>
        </div>

        <Roadmap data={roadmapData} />
      </section>

   {/* FEATURES */}
<section className="py-24 px-6 bg-white">
  <motion.h2
    className="text-4xl font-bold text-center"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    Engineered for Performance & Control
  </motion.h2>

  <motion.div
    className="mt-12 max-w-5xl mx-auto grid gap-10 md:grid-cols-3"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
  >
    {[
      {
        title: "Object-Oriented Power",
        desc: "Build scalable systems using classes, inheritance, polymorphism, and abstraction.",
      },
      {
        title: "Low-Level Memory Control",
        desc: "Fine-grained control using pointers, stack/heap allocation, and custom memory management.",
      },
      {
        title: "STL & Modern C++",
        desc: "Rich Standard Template Library with containers, algorithms, lambdas, and smart pointers.",
      },
    ].map((feat, i) => (
      <motion.div
        key={i}
        variants={fadeInUp}
        className="text-center p-6 rounded-2xl hover:bg-gray-50 transition duration-300"
      >
        <h3 className="text-xl font-bold mb-2 text-gray-900">{feat.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
      </motion.div>
    ))}
  </motion.div>
</section>

{/* PERFORMANCE */}
<section className="py-24 px-6 border-t border-gray-100">
  <motion.div
    className="max-w-4xl mx-auto text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <h2 className="text-4xl font-bold text-gray-900">
      Native Speed. Zero Compromise.
    </h2>
    <p className="mt-4 text-gray-600 text-lg">
      Compiled directly to machine code for blazing-fast execution. Predictable performance,
      minimal runtime overhead, and trusted for game engines, operating systems,
      embedded devices, and high-frequency trading platforms.
    </p>
  </motion.div>
</section>


    </div>
  );
}