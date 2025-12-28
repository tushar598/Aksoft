import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const roadmapData = [
      {
        step: "01",
        title: "Why C++ Programming?",
        points: [
          "Object-oriented programming",
          "Widely used in applications",
          "Easy to learn",
        ],
        bg: "/card01.jpg",
      },
      {
        step: "02",
        title: "Basic C++ Concepts",
        points: [
          "Data types & operators",
          "Loops and arrays",
          "Functions & basics",
        ],
        bg: "/c++basic.png",
      },
      {
        step: "03",
        title: "Classes & Objects",
        points: [
          "Class & object basics",
          "Function overloading",
          "Array of objects",
        ],
        bg: "/c++class.png",
      },
      {
        step: "04",
        title: "Constructor & Destructor",
        points: [
          "Types of constructors",
          "Constructor overloading",
          "Destructor",
        ],
        bg: "/roadmap/bg4.jpg",
      },
      {
        step: "05",
        title: "Properties of OOP",
        points: [
          "Encapsulation & abstraction",
          "OOP characteristics",
          "Static members",
        ],
        bg: "/roadmap/bg5.jpg",
      },
      {
        step: "06",
        title: "Inheritance in C++",
        points: [
          "Types of inheritance",
          "Diamond problem",
          "Function overriding",
        ],
        bg: "/roadmap/bg6.jpg",
      },
    ];

export default function MacBookAirShowcase() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

{/* HERO SECTION */}
<section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

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
      className="mt-4 text-base  lg:px-[30%] sm:text-lg md:text-xl text-gray-200"
      variants={fadeInUp}
      transition={{ delay: 0.2 }}
    >
      C++ is a general purpose programming language and widely used now a days for competitive programming. It has imperative, object-oriented and generic programming features.
    </motion.p>

    <motion.div
      className="mt-8 flex flex-col sm:flex-row justify-center  gap-4"
      variants={fadeInUp}
      transition={{ delay: 0.4 }}
    >
      <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition">
        Learn More
      </button>
    </motion.div>
  </div>
</section>



  {/* COURSE ROADMAP */}
<section className="py-24 px-6 bg-gray-50">
  <motion.div
    className="max-w-7xl mx-auto space-y-14"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.25 }}
  >
    {roadmapData.map((item, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
          index % 2 !== 0 ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Background Image */}
        <div
          className="relative h-[260px] md:h-[320px] rounded-2xl overflow-hidden shadow-xl"
          style={{
            backgroundImage: `url(${item.bg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
           
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-5 left-5 bg-white/90 px-4 py-1 rounded-full text-sm font-semibold">
            Step {item.step}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900">
            {item.title}
          </h3>

          <ul className="mt-5 space-y-3 text-gray-600">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <motion.h2
          className="text-4xl font-bold text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Engineered for performance
        </motion.h2>

        <motion.div
          className="mt-12 max-w-5xl mx-auto grid gap-10 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { title: "Thin & Light", desc: "Remarkably slim and easy to carry." },
            { title: "Liquid Retina Display", desc: "Bright, stunning visuals." },
            { title: "All-Day Battery", desc: "Up to 18 hours of battery life." }
          ].map((feat, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    

      {/* PERFORMANCE */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold">M4 Chip. A leap ahead.</h2>
          <p className="mt-4 text-gray-600">
            Up to 23× faster performance. Powerful Neural Engine. Immersive graphics.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">Ready to Order?</h2>
          <button className="mt-6 px-8 py-4 bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600 transition">
            Buy MacBook Air
          </button>
        </motion.div>
      </section>

    </div>
  );
}
