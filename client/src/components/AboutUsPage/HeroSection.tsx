import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const secondaryContentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const loadTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      loadTl
        .from(bgImageRef.current, {
          scale: 1.2,
          duration: 1.8,
          ease: "power2.out",
        })
        .from(
          secondaryContentRef.current,
          {
            y: -30,
            opacity: 0,
            duration: 1,
          },
          "-=1.2"
        )
        .from(
          [titleLine1Ref.current],
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            skewY: 5,
          },
          "-=1"
        );

      gsap.to(bgImageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(contentWrapperRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[800px] overflow-hidden bg-brand-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgImageRef}
          src="/placementpage.jpg"
          alt="Team brainstorming on beanbags"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Centered Content */}
      <div
        ref={contentWrapperRef}
        className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center items-center text-center"
      >
        
        {/* Title */}
        <div className="overflow-hidden">
          <h1
            ref={titleLine1Ref}
            className="text-[14vw] md:text-[8vw] font-black text-white leading-[0.9] tracking-tighter drop-shadow-xl"
          >
            <span className="bg-gradient-to-t from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] bg-clip-text text-transparent">
              About
            </span>
            -Us
          </h1>
        </div>

        {/* Text */}
        <div ref={secondaryContentRef} className="max-w-3xl mb-10">
          <p className="text-white/90 text-[18px] md:text-xl font-light leading-relaxed drop-shadow-lg">
            We play to win. Period. Aksoft is built by former elite athletes
            turned business operators, developers, and finance pros. We run our
            projects like we trained—focused, relentless, and always pushing the
            edge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
