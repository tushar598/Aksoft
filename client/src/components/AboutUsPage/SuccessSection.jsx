import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);



const SuccessSection = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats counting up (simulated with opacity/y for now)
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#fa4b37] to-[#df2771] bg-clip-text text-transparent mb-6 leading-tight">
              Our success depends on <br />
              <span className="text-[#fa4b37]">Student Success.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our core mission is to lead globally in AI-driven software
              training. We empower organizations to streamline processes,
              achieve sustainable growth, and deliver high-quality engineers to
              the industry.
            </p>
            <Link to="/placement" className="bg-ak-yellow px-8 py-3 text-center rounded-lg font-bold bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
              View Success Stories
            </Link>
          </div>

          <div className="relative h-[400px]">
            <div className="absolute inset-0 bg-gray-200 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
              <img
                src="/aboutsection.jpg"
                alt="Happy Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-gradient-to-r from-[#fa4b37] to-[#df2771] rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
