import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Heart, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image slide in from left
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // Content slide in from right
      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-[#eef5fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with organic shape */}
          <div ref={imageRef} className="relative">
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-gray-300 rounded-[2rem] z-0"></div>
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://picsum.photos/seed/meeting/800/600"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#fa4b37] to-[#df2771] p-6 rounded-xl shadow-lg max-w-xs z-20 hidden md:block">
              <p className="font-serif text-xl italic text-white">
                "Quality education for a bright future."
              </p>
            </div>
          </div>

          {/* Right: Text Content */}
          <div ref={contentRef}>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#fa4b37] to-[#df2771] bg-clip-text text-transparent mb-8">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Aksoft, we provide tailored AI wellness and productivity
              solutions to boost efficiency, drive innovation, and support
              growth. We help individuals and businesses optimize their routines
              for lasting success.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  desc: "To set the global standard in software training, empowering students worldwide through innovative technology.",
                },
                {
                  icon: Heart,
                  title: "Our Value",
                  desc: "We believe in building concepts from scratch, especially for students with zero knowledge but strong passion.",
                },
                {
                  icon: Zap,
                  title: "Our Vision",
                  desc: "Strengthening programming concepts and providing skilled job seekers to top MNCs like TCS and Infosys.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-[#fa4b37]/[0.9] to-[#df2771]/[0.9]"
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 ">
                      {item.title}:
                    </h3>
                    <p className="text-gray-200 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
