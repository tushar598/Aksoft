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
      // Initial load animation
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
          [titleLine1Ref.current, titleLine2Ref.current],
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            skewY: 5,
          },
          "-=1"
        );

      // Scroll parallax
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

      {/* Content */}
      <div
        ref={contentWrapperRef}
        className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-between py-12 md:py-16"
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-end items-start mt-12 md:mt-24">
          <div
            ref={secondaryContentRef}
            className="max-w-md text-right md:text-left flex flex-col items-end md:items-start gap-8"
          >
            <p className="text-white/90 text-[20px] text-left font-light md:text-xl  leading-relaxed drop-shadow-lg">
              AKSOFTECHNO wants to give you a surrounding where you will not
              only learn the computer programming languages but also lead you to
              encounter with some more facts about real life scenario. We give
              you liberty where you can ask anything without any hesitation
              which will help you to conclude your problem. We will make sure
              that you can learn the best out of everything.
            </p>
          </div>
        </div>

        {/* Bottom Typography */}
        <div className="flex flex-col justify-end pb-8 md:pb-0">
          <div className="overflow-hidden">
            <h1
              ref={titleLine1Ref}
              className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.9] tracking-tighter drop-shadow-xl"
            >
              <span className="bg-gradient-to-t from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] bg-clip-text text-transparent">
                Where{" "}
              </span>
              Strategy
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              ref={titleLine2Ref}
              className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.9] tracking-tighter drop-shadow-xl"
            >
              Meets{" "}
              <span className="bg-gradient-to-t from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] bg-clip-text text-transparent">
                Creativity
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
