import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const FaqItem = ({ service, isActive, onActivate }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const leftTitleRef = useRef(null);
  const rightTitleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isActive) {
        // OPEN ANIMATION

        gsap.to(containerRef.current, {
          height: "auto",
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(contentRef.current, {
          opacity: 1,
          duration: 0.5,
          delay: 0.1,
          ease: "power2.out",
        });

        gsap.fromTo(
          leftTitleRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "power2.out" }
        );

        gsap.fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.25, ease: "power2.out" }
        );

        gsap.to(rightTitleRef.current, {
          opacity: 0,
          x: 20,
          duration: 0.3,
          ease: "power2.in",
        });
      } else {
        // CLOSE ANIMATION

        gsap.to(containerRef.current, {
          height: "96px",
          duration: 0.5,
          ease: "power3.inOut",
        });

        gsap.to(contentRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });

        gsap.to(rightTitleRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          delay: 0.2,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={onActivate}
      className={`relative w-full border-b border-gray-300 overflow-hidden cursor-pointer group ${
        isActive ? "bg-white" : "hover:bg-gray-50"
      } transition-colors duration-300`}
      style={{ height: "96px" }}
    >
      <div
        className="
          w-full h-full relative
          flex flex-col
          px-4 sm:px-6 md:px-8
          py-6 sm:py-7 md:py-8
        "
      >
        {/* Number */}
        <div className="text-sm sm:text-base md:text-lg font-medium text-gray-500 mb-2 ">
          /{service.number}
        </div>

        {/* ACTIVE CONTENT */}
       <div
  ref={contentRef}
  className="
    opacity-0
    flex flex-col gap-4
    relative
    mt-4 md:mt-0
    w-full
    px-0 md:px-4
    pb-6 md:pb-0
    z-10
    pointer-events-none md:pointer-events-auto
  "
>

          <h2
            ref={leftTitleRef}
            className="
              font-bold ml-1 tracking-tight text-black
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              leading-snug 
            "
          >
            {service.title}
          </h2>

          <p
            ref={descRef}
            className="
              text-gray-600
              text-sm sm:text-base
              leading-relaxed
              max-w-3xl
            "
          >
            {service.description}
          </p>
        </div>

        {/* INACTIVE TITLE */}
        <div className="absolute right-4 sm:right-6 md:right-0 top-0 h-24 flex items-center pointer-events-none">
          <h2
            ref={rightTitleRef}
            className={`font-bold tracking-tight text-black text-right transition-opacity duration-300
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              ${isActive ? "opacity-0" : "opacity-100"}
            `}
          >
            {service.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
