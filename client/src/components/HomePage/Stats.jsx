import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Sparkles } from "lucide-react";

const Stats = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const numbers = gsap.utils.toArray(".stat-number");

      numbers.forEach((num) => {
        gsap.from(num, {
          textContent: 0,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        });
      });

      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={containerRef} className="w-full">
      <div className="flex justify-start gap-10 items-center  text-white  rounded-2xl p-4 shadow-xl">

        {/* Stats Grid */}
        <div className="col-span-1 lg:col-span-8 grid grid-cols-3 gap-6">
          <div className="stat-item">
            <div className="text-xl md:text-4xl  font-bold text-brand-dark">
              <span className="stat-number" data-value="140">
                140
              </span>
              +
            </div>
            <p className="text-gray-200 text-sm md:text-xl ">Courses & Subjects</p>
          </div>

          <div className="stat-item">
            <div className="text-xl md:text-4xl  font-bold text-brand-dark">
              <span className="stat-number" data-value="120">
                120
              </span>
              +
            </div>
            <p className="text-gray-200 text-sm md:text-xl ">Expert Instructors</p>
          </div>

          <div className="stat-item">
            <div className="text-xl md:text-4xl font-bold text-brand-dark">
              <span className="stat-number" data-value="32">
                32
              </span>
              +
            </div>
            <p className="text-gray-200 text-sm md:text-xl ">Active Platforms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
