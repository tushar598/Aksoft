import { useState, useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
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
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);

  const [[index, direction], setIndex] = useState([0, 0]);
  const { setFilter } = useCourseFilter();

  // 🔹 NEW: Prevent rapid slide switching
  const swipeLock = useRef(false);

  const paginate = (newDirection) => {
    if (swipeLock.current) return;

    swipeLock.current = true;
    setIndex([
      (index + newDirection + slides.length) % slides.length,
      newDirection,
    ]);

    setTimeout(() => {
      swipeLock.current = false;
    }, 700); // matches animation duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [index]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, subtitleRef.current, descRef.current],
        {
          y: 80,
          opacity: 0,
          skewY: 5,
        },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
        }
      );
    });

    return () => ctx.revert();
  }, [index]); // 🔥 re-run on slide change

  const handleLearnMore = (filter) => {
    setFilter(filter);
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔹 NEW: Trackpad 2-finger swipe (wheel gesture)
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 40) paginate(1);
      if (e.deltaX < -40) paginate(-1);
    }
  };

  return (
    <section
      id="home"
      className="relative h-[800px] md:h-[1000px] lg:h-[800px]"
      onWheel={handleWheel} // 🔹 NEW
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          className="absolute inset-0 p-5 flex flex-col lg:flex-row items-center justify-center bg-[#f5f5f7] px-6 lg:px-20"
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
          style={{ touchAction: "pan-y" }} // 🔹 NEW (mobile friendly)
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -swipeConfidenceThreshold) paginate(1);
            else if (swipe > swipeConfidenceThreshold) paginate(-1);
          }}
        >
          

          {/* TEXT */}
          <div className="flex-1  z-1 text-center lg:text-left space-y-4 max-w-4xl">
            <h1
              ref={titleRef}
              className="text-[14vw] md:text-[8vw] leading-[0.9] tracking-tighter drop-shadow-xl font-black
            bg-gradient-to-r from-[#fa4b37] to-[#df2771] bg-clip-text text-transparent"
            >
              {slides[index].title}
            </h1>

            <h2 ref={subtitleRef} className="text-xl font-semibold sm:text-2xl text-gray-700">
              {slides[index].subtitle}
            </h2>

            <p ref={descRef} className="text-gray-500">
              {slides[index].desc}
            </p>

            <div className="flex justify-center lg:justify-start gap-1 pt-4">
              <button
                onClick={() => handleLearnMore(slides[index].link)}
                className="bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white px-6 py-2 rounded-full"
              >
                Learn more
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center mt-10 lg:mt-0">
            <img
              src={slides[index].image}
              alt={slides[index].title}
              loading="lazy"
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
