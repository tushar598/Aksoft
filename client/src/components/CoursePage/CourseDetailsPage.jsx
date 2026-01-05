import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../HomePage/Footer";
import Roadmap from "./Roadmap";
import roadmapData from "../../data/roadmapData.json";
import coreJavaRoadmapData from "../../data/coreJavaRoadmapData.json";
import pythonRoadmapData from "../../data/pythonRoadmapData.json";
import advanceJavaRoadmapData from "../../data/advanceJavaRoadmapData.json";
import basicCRoadmapData from "../../data/basicCRoadmapData.json";
import basicJavaScriptRoadmapData from "../../data/basicJavaScriptRoadmapData.json";
import htmlCssJsRoadmapData from "../../data/htmlCssJsRoadmapData.json";
import mernStackRoadmapData from "../../data/mernStackRoadmapData.json";
import dbmsRoadmapData from "../../data/dbmsRoadmapData.json";
import dsaRoadmapData from "../../data/dsaRoadmapData.json";
import FaqSection from "./FaqSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const CourseRoadmapData = {
  cpp: roadmapData,
  corejava: coreJavaRoadmapData,
  pythonbasics: pythonRoadmapData,
  advancedjava: advanceJavaRoadmapData,
  basicc: basicCRoadmapData,
  basicjavascript: basicJavaScriptRoadmapData,
  htmlcssjs: htmlCssJsRoadmapData,
  mernstack: mernStackRoadmapData,
  dbms: dbmsRoadmapData,
  dsafoundations: dsaRoadmapData,
};

export default function MacBookAirShowcase() {
  const { course } = useParams();
  let courseTitle = course || "cpp";

  const activeRoadmapData =
    CourseRoadmapData[courseTitle] || CourseRoadmapData.cpp;

  courseTitle =
    course === "cpp"
      ? [
          "C++ Programming",
          "This course covers C++ programming from basics to intermediate concepts, including object-oriented programming, memory management, STL, and performance-oriented coding. It is ideal for competitive programming and system-level development.",
        ]
      : course === "corejava"
      ? [
          "Core Java",
          "This course covers Core Java concepts including OOP principles, exception handling, collections, multithreading, file handling, and JVM internals. It builds a strong base for backend development, enterprise applications, and advanced Java frameworks.",
        ]
      : course === "pythonbasics"
      ? [
          "Python Basics",
          "This course introduces Python programming with a focus on clean syntax, data structures, functions, file handling, and basic OOP. It is suitable for beginners and serves as a foundation for data science, automation, and backend development.",
        ]
      : course === "advancedjava"
      ? [
          "Advanced Java",
          "This course focuses on enterprise-level Java development. Topics include JDBC, Servlets, JSP, Spring fundamentals, REST APIs, and backend architecture, preparing learners for real-world Java backend roles.",
        ]
      : course === "basicc"
      ? [
          "Basic C Programming",

          "This course introduces the fundamentals of C programming, focusing on core concepts like syntax, data types, control structures, functions, arrays, and pointers. It helps learners build a strong programming foundation and understand low-level memory concepts essential for computer science.",
        ]
      : course === "basicjavascript"
      ? [
          "Basic JavaScript",
          "This course teaches JavaScript fundamentals required for web development. It covers variables, functions, arrays, objects, DOM manipulation, events, and asynchronous programming concepts, helping learners build interactive and dynamic web applications.",
        ]
      : course === "htmlcssjs"
      ? [
          "HTML, CSS & JavaScript",
          "This course provides a complete frontend foundation by combining HTML for structure, CSS for styling, and JavaScript for interactivity. Learners gain practical skills to build responsive, user-friendly, and visually appealing web pages.",
        ]
      : course === "mernstack"
      ? [
          "MERN Stack Development",
          "This course teaches full-stack web development using MongoDB, Express, React, and Node.js. Learners build scalable web applications, understand REST APIs, authentication, and deployment, gaining real-world project experience.",
        ]
      : course === "dbms"
      ? [
          "Database Management Systems",
          "This course explains how data is stored, managed, and retrieved efficiently. Topics include ER models, normalization, SQL, indexing, transactions, concurrency control, and database design, which are crucial for backend and system design.",
        ]
      : course === "dsafoundations"
      ? [
          "Data Structures & Algorithms",
          "This course builds problem-solving skills using data structures and algorithms. It covers arrays, linked lists, stacks, queues, trees, graphs, recursion, sorting, searching, and complexity analysis, essential for coding interviews and competitive programming.",
        ]
      : [
          "C++ Programming",
          "This course covers C++ programming from basics to intermediate concepts, including object-oriented programming, memory management, STL, and performance-oriented coding. It is ideal for competitive programming and system-level development.",
        ];

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
            Learn {courseTitle[0]}
          </motion.h1>

          <motion.p
            className="mt-4 text-base lg:px-[20%] sm:text-lg md:text-xl text-gray-100 font-medium"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {courseTitle[1]}
          </motion.p>
        </div>
      </section>

      {/* NEW COURSE ROADMAP SECTION (Roadmap.sh Style) */}
      <section className="py-24 px-4 sm:px-6 bg-[#f8f9fa] relative">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">
            Curriculum
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            {courseTitle[0]} Path
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Step by step guide to learn {courseTitle[0]}.
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

        <Roadmap data={activeRoadmapData.slice(1)} />
      </section>

      {/* COURSE DESCRIPTION + FEATURES */}
      <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br bg-gradient-to-r from-[#fa4b37] to-[#df2771]  text-white">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2  w-[600px] h-[600px] bg-indigo-500 blur-[140px]" />
        </div>

        {/* COURSE DESCRIPTION */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Master {courseTitle[0]} with Precision & Performance
          </h2>

          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            {courseTitle[1]}
          </p>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          className="mt-20 max-w-6xl mx-auto grid gap-10 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {activeRoadmapData?.[0]?.features.map((feat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-[#df2771]/40 hover:shadow-[0_0_50px_-10px_rgba(250,75,55,0.4)]"
            >
              <h3 className="text-xl font-bold mb-3 text-white">
                {feat.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section>
        <FaqSection />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
