import React, { useState, useEffect, useRef } from "react";
import { cppFaqData } from "../../data/faqData/cppfaq.js";
import FaqItem from "./FaqItem.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(listRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-white
        py-14 sm:py-16 md:py-20 lg:py-24
        px-4 sm:px-6 md:px-12 lg:px-24
      "
    >
      {/* Header Section */}
      <div
        ref={headerRef}
        className="
          text-center
          mb-12 sm:mb-14 md:mb-16 lg:mb-24
        "
      >
        <h1
          className="
            font-bold tracking-tighter text-[#fa4b37]
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          "
        >
          The Services We Provide
        </h1>
      </div>

      {/* FAQ List */}
      <div
        ref={listRef}
        className="
          max-w-7xl mx-auto
          border-t border-gray-300
        "
      >
        {cppFaqData.map((service, index) => (
          <FaqItem
            key={service.id}
            service={service}
            isActive={index === activeIndex}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
