import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const companies = [
  "/INFY_BIG.png",
  "/ACN_BIG.png",
  "/BIT_WISE_BIG.png",
  "/CTSH_BIG.png",
  "/CAP.PA_BIG.png",
  "/TCS.NS_BIG.png",
  "/ACN_BIG.png",
  "/CTSH_BIG.png",
  "/INFY_BIG.png",
  "/TCS.NS_BIG.png",
  "/ACN_BIG.png",
];

const CompanySlider = () => {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    tlRef.current = gsap.to(track, {
      xPercent: -50,
      duration: 20, // speed control
      ease: "linear",
      repeat: -1, // infinite
    });

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  return (
    <section className="w-full overflow-hidden py-12 bg-white">
      <div
        ref={sliderRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => tlRef.current.pause()}
        onMouseLeave={() => tlRef.current.resume()}
      >
        <div ref={trackRef} className="flex w-max gap-10 px-6">
          {[...companies, ...companies].map((logo, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center
                min-w-[90px] sm:min-w-[120px] md:min-w-[150px]
                h-[50px] sm:h-[60px] md:h-[70px]
                grayscale hover:grayscale-0
                transition duration-300
              "
            >
              <img
                src={logo}
                alt="company logo"
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Edge fade for better contrast */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
};

export default CompanySlider;
