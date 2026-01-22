import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import useCourseFilter from "../../hooks/useCourseFilter";

const filters = ["Beginner", "Web Dev", "Problem Solving"];

const courses = [
  {
    id: 1,
    title: "C++",
    desc: "Learn the fundamentals of programming with C++.",
    level: "Beginner",
    lessons: 25,
    duration: "6h 30m",
    students: 1200,
    image: "/card01.jpg",
    link: "cpp",
  },
  {
    id: 2,
    title: "HTML, CSS & JS",
    desc: "Build modern and responsive websites from scratch.",
    level: "Web Dev",
    lessons: 30,
    duration: "8h 15m",
    students: 1500,
    image: "/card05.jpg",
    link: "htmlcssjs",
  },
  {
    id: 3,
    title: "MERN Stack",
    desc: "Become a full-stack developer with MongoDB, Express, React & Node.",
    level: "Web Dev",
    lessons: 40,
    duration: "10h 45m",
    students: 2000,
    image: "/card06.jpg",
    link: "mernstack",
  },
  {
    id: 4,
    title: "DSA Foundations",
    desc: "Strengthen logic with arrays, recursion & patterns.",
    level: "Problem Solving",
    lessons: 35,
    duration: "9h 20m",
    students: 1800,
    image: "/card09.jpg",
    link: "dsafoundations",
  },
  {
    id: 5,
    title: "Advanced Java",
    desc: "Deep dive into advanced Java concepts and frameworks.",
    level: "Problem Solving",
    lessons: 28,
    duration: "7h 10m",
    students: 1300,
    image: "/card10.jpg",
    link: "advancedjava",
  },
  {
    id: 6,
    title: "Core Java",
    desc: "Master object-oriented programming with Java.",
    level: "Beginner",
    lessons: 32,
    duration: "8h 45m",
    students: 1600,
    image: "/card02.jpg",
    link: "corejava",
  },
  {
    id: 7,
    title: "Python Basics",
    desc: "Master the fundamentals of programming with Python.",
    level: "Beginner",
    lessons: 29,
    duration: "7h 50m",
    students: 1400,
    image: "/card03.png",
    link: "pythonbasics",
  },
  {
    id: 8,
    title: "Basic C",
    desc: "Master the fundamentals of programming with C.",
    level: "Beginner",
    lessons: 30,
    duration: "8h 15m",
    students: 1500,
    image: "/card04.jpg",
    link: "basicc",
  },
  {
    id: 9,
    title: "Basic JavaScript",
    desc: "Master the fundamentals of programming with JavaScript.",
    level: "Beginner",
    lessons: 30,
    duration: "8h 15m",
    students: 1500,
    image: "/card07.jpg",
    link: "basicjavascript",
  },
  {
    id: 10,
    title: "DBMS",
    desc: "Master the fundamentals of Database Management Systems.",
    level: "Web Dev",
    lessons: 27,
    duration: "7h 5m",
    students: 1250,
    image: "/card08.jpg",
    link: "dbms",
  },
];

const CourseSection = () => {
  const { filter, setFilter } = useCourseFilter();

  return (
    <section
      id="courses"
      className="relative py-24 px-6  bg-[#f9fafb] overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#fa4b37] to-[#df2771] bg-clip-text text-transparent">
          Featured Courses
        </h2>
        <p className="text-gray-500 mt-3">
          Learn step by step with structured and industry-ready content
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-3 mb-14 flex-wrap">
        {filters.map((item) => (
          <button
            key={item}
            id={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-2  ${item} rounded-full text-sm transition ${
              filter === item
                ? "bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white shadow-md"
                : "bg-white text-gray-600 border hover:bg-blue-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {courses
            .filter((course) => course.level === filter)
            .map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -8 }}
                className="rounded-3xl  bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col h-full p-4">
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      className="w-full h-full object-fill md:object-cover"
                    />

                    {/* Badge */}
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
                      <span>{course.lessons} Lessons</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 line-clamp-3">
                      {course.desc}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-500">
                        {course.students?.toLocaleString()} Students
                      </span>

                      <Link
                        to={`/course/${course.link}`}
                        className="px-3 py-3 md:px-10 rounded-full bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white text-sm  hover:shadow-lg transition-all"
                      >
                        View Course
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default CourseSection;
