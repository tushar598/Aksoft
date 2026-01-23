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
        gsap.killTweensOf(rightTitleRef.current);

        gsap.to(containerRef.current, {
          height: "auto",
          duration: 0.35, // was 0.6
          ease: "power3.out",
        });

        gsap.to(contentRef.current, {
          opacity: 1,
          duration: 0.25, // was 0.5
          delay: 0.05, // was 0.1
          ease: "power2.out",
        });

        gsap.fromTo(
          leftTitleRef.current,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.08, // was 0.1
            ease: "power1.out",
          }
        );

        gsap.fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.08, // was 0.1
            ease: "power2.out",
          }
        );

        gsap.to(rightTitleRef.current, {
          opacity: 0,
          x: 20,
          duration: 0.05,
          ease: "none",
          overwrite: "auto",
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
  onClick={onActivate}
  className={`relative w-full overflow-hidden cursor-pointer group
    border-b border-gray-200
    ${isActive ? "bg-gray-50" : "bg-white hover:bg-gray-50/60"}
    transition-colors duration-300`}
  style={{ height: "96px" }}
>
  <div
    className="
      w-full h-full relative
      flex flex-col
      px-5 sm:px-6 md:px-8
      py-5 sm:py-6
    "
  >
    {/* Number */}
    <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wide mb-1">
      FAQ {service.number}
    </div>

    {/* ACTIVE CONTENT */}
    <div
      ref={contentRef}
      className="
        opacity-0
        flex flex-col gap-3
        relative
        mt-3
        w-full
        max-w-4xl
        z-10
        pointer-events-none md:pointer-events-auto
      "
    >
      <h2
        ref={leftTitleRef}
        className="
          font-semibold tracking-tight text-gray-900
          text-lg sm:text-xl md:text-2xl
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
        "
      >
        {service.description}
      </p>
    </div>

    {/* INACTIVE TITLE */}
    <div className="absolute right-5 sm:right-6 md:right-8 top-0 h-24 flex items-center pointer-events-none">
      <h2
        ref={rightTitleRef}
        className={`font-medium text-gray-800 text-right
          text-base sm:text-lg md:text-xl
          transition-opacity duration-300
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
