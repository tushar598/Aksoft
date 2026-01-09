import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconRenderer } from "./Icons";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const StudentSection = ({ data }) => {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const featuresRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Image Animation (Pop in and Scale)
      gsap.fromTo(
        imageWrapperRef.current,
        { scale: 0.8, opacity: 0, rotation: -2 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text Content Animation (Slide from right/left)
      gsap.fromTo(
        contentWrapperRef.current,
        { x: data.reverseLayout ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Features Cards Animation (Stagger up)
      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.4,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [data.reverseLayout]);

  return (
    <section
      ref={containerRef}
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 py-16 lg:py-24 overflow-hidden flex flex-col lg:flex-row items-center gap-6   ${
        data.reverseLayout ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Side */}
      <div
        className="w-full lg:w-1/2 flex justify-center relative"
        ref={imageWrapperRef}
      >
        {/* Main Image Card */}
        <div className="relative z-10 w-full max-w-md md:max-w-sm lg:max-w-xs aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] bg-brand-purple overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
          <img
            src={data.imageUrl}
            alt="Student"
            className="w-full h-full bg-gradient-to-t from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] object-cover object-top mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 space-y-8 " ref={contentWrapperRef}>
        <div className="space-y-6 ">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight uppercase
        bg-gradient-to-b from-[#fa4b37] to-[#df2771] bg-clip-text text-transparent"
          >
            {data.firstName}
            <span className="text-gray-800">{data.lastName}</span>
          </h2>

          <p
            className={`text-lg text-brand-muted leading-relaxed text-gray-600 max-w-xl transition-all duration-300 ${
              !expanded ? "line-clamp-3" : ""
            }`}
          >
            {data.description}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-semibold text-[#fa4b37] hover:underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Feature Cards Grid */}
        <div
          ref={featuresRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
        >
          {data.features.map((feature) => (
            <div
              key={feature.id}
              className="bg-brand-light rounded-3xl p-6 flex items-start gap-4 transition-all  
              hover:shadow-[0_0_50px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1 duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-brand-purple transition-colors duration-300">
                  <IconRenderer type={feature.icon} className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800 block mb-1">
                  {feature.role}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {feature.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSection;
