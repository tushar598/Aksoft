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
    image: "/card01.jpg",
    link: "cpp",
  },
  {
    id: 2,
    title: "HTML, CSS & JS",
    desc: "Build modern and responsive websites from scratch.",
    level: "Web Dev",
    image: "/card05.jpg",
    link: "htmlcssjs",
  },
  {
    id: 3,
    title: "MERN Stack",
    desc: "Become a full-stack developer with MongoDB, Express, React & Node.",
    level: "Web Dev",
    image: "/card06.jpg",
    link: "mernstack",
  },
  {
    id: 4,
    title: "DSA Foundations",
    desc: "Strengthen logic with arrays, recursion & patterns.",
    level: "Problem Solving",
    image: "/card09.jpg",
    link: "dsafoundations",
  },
  {
    id: 5,
    title: "Advanced Java",
    desc: "Deep dive into advanced Java concepts and frameworks.",
    level: "Problem Solving",
    image: "/card10.jpg",
    link: "advancedjava",
  },
  {
    id: 6,
    title: "Core Java",
    desc: "Master object-oriented programming with Java.",
    level: "Beginner",
    image: "/card02.jpg",
    link: "corejava",
  },
  {
    id: 7,
    title: "Python Basics",
    desc: "Master the fundamentals of programming with Python.",
    level: "Beginner",
    image: "/card03.png",
    link: "pythonbasics",
  },
  {
    id: 8,
    title: "Basic C",
    desc: "Master the fundamentals of programming with C.",
    level: "Beginner",
    image: "/card04.jpg",
    link: "basicc",
  },
  {
    id: 9,
    title: "Basic JavaScript",
    desc: "Master the fundamentals of programming with JavaScript.",
    level: "Beginner",
    image: "/card07.jpg",
    link: "basicjavascript",
  },
  {
    id: 10,
    title: "DBMS",
    desc: "Master the fundamentals of Database Management Systems.",
    level: "Web Dev",
    image: "/card08.jpg",
    link: "dbms",
  },
];

const CourseSection = () => {
  const { filter, setFilter } = useCourseFilter();

  return (
    <section
      id="courses"
      className="relative py-24 px-6 bg-gradient-to-b from-[#eef5fb] to-white overflow-hidden"
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
                className="card_detail backdrop-blur-md bg-white/70 shadow-xl"
              >
                <div className="card_info flex flex-col h-full justify-between p-6">
                  {/* Image Section */}
                  <div className="w-full aspect-[16/9] rounded-2xl mb-4 bg-gray-100 flex items-center justify-center">
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-[#fcede5] text-[#fa4b37] font-semibold uppercase">
                      {course.level}
                    </span>

                    <h3 className="text-xl font-semibold mb-2">
                      {course.title}
                    </h3>

                    <p>{course.desc}</p>
                  </div>

                  <Link
                    to={`/course/${course.link}`}
                    className="mt-6 w-full text-center rounded-full bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white py-2 hover:shadow-lg transition-shadow"
                  >
                    View Course
                  </Link>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default CourseSection;
