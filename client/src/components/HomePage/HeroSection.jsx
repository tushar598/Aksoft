import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCourseFilter from "../../hooks/useCourseFilter";

const slides = [
  {
    title: "Foundation ",
    subtitle: "Gets you moving. Keeps you going.",
    desc: "Best for Beginners.",
    darkNav: false,
    link: "Beginner",
    image: "/temp01.png",
  },
  {
    title: "Web Development",
    subtitle: "Build modern, responsive websites.",
    desc: "Learn HTML, CSS, and JavaScript from scratch.",
    darkNav: true,
    link: "Web Dev",
    image: "/temp02.png",
  },
  {
    title: "Problem Solving",
    subtitle: "Enhance your coding skills.",
    desc: "Master algorithms and data structures.",
    darkNav: false,
    link: "Problem Solving",
    image: "/temp03.png",
  },
];

const swipeConfidenceThreshold = 10000;

const HeroSection = () => {
  const [[index, direction], setIndex] = useState([0, 0]);
  const { setFilter } = useCourseFilter();

  const handleLearnMore = (filter) => {
    setFilter(filter);

    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  const paginate = (newDirection) => {
    setIndex([
      (index + newDirection + slides.length) % slides.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="home" className="relative h-[800px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          className="absolute inset-0  p-5 flex flex-col lg:flex-row items-center justify-center bg-[#f5f5f7] px-6 lg:px-20"
          variants={{
            enter: { opacity: 0 },
            center: { opacity: 1 },
            exit: { opacity: 0 },
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;

            if (swipe < -swipeConfidenceThreshold) paginate(1);
            else if (swipe > swipeConfidenceThreshold) paginate(-1);
          }}
        >
          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left space-y-4 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
              {slides[index].title}
            </h1>

            <h2 className="text-xl sm:text-2xl text-gray-700">
              {slides[index].subtitle}
            </h2>

            <p className="text-gray-500">{slides[index].desc}</p>

            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => handleLearnMore(slides[index].link)}
                className="bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white px-6 py-2 rounded-full"
              >
                Learn more
              </button>
              <button className="border border-[#df2771] text-[#fa4b37]  px-6 py-2 rounded-full ">
                <a
                  href={slides[index].link}
                  className="hover:border-b-1  hover:border-[#fa4b37] "
                >
                  Try it free
                </a>
              </button>
            </div>
          </div>

          {/* IMAGE (Optimized) */}
          <div className="flex-1 flex justify-center mt-10 lg:mt-0">
            <img
              src={slides[index].image}
              alt={slides[index].title}
              loading="lazy"
              decoding="async"
              className="max-h-[70vh] sm:h-[30vh] lg:h-[70vh] md:h-[40vh] w-auto object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>

    

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
