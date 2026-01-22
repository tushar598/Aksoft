import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Stats from "./Stats";

import gsap from "gsap";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const comp = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const bgImageRef = useRef(null);
  const btnGroupRef = useRef(null);
  const rightImageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Text Content Animation (Staggered Fade Up)
      tl.from([titleRef.current, textRef.current, btnGroupRef.current], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });

      // ✅ 3. Right Image Intro Animation
      tl.from(
        rightImageRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
          rotateY: 8,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1.2"
      );

      tl.from(bgImageRef.current, {
        scale: 1.2,
        duration: 1.8,
        ease: "power3.out",
      }).from(
        [".tech-float-1", ".tech-float-2", ".tech-float-3", ".tech-float-4"],
        {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );
      
      gsap.to(".tech-float-1", {
        y: -15,
        rotation: 5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".tech-float-2", {
        y: 15,
        x: 5,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(".tech-float-3", {
        y: -10,
        rotation: -2,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      gsap.to(".tech-float-4", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });

      // 4. Scroll Effects
      gsap.to(".tech-main-card", {
        scrollTrigger: {
          trigger: comp.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 50,
        rotationY: -5,
      });

      gsap.to(".tech-float-1", {
        scrollTrigger: {
          trigger: comp.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: -80,
      });

      gsap.to(".tech-float-2", {
        scrollTrigger: {
          trigger: comp.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
        y: -100,
      });

      gsap.to(".tech-float-4", {
        scrollTrigger: {
          trigger: comp.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
        y: 20,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className="relative  pt-20 pb-12 md:pt-30 md:pb-20 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgImageRef}
          src="/heroSection.jpg"
          alt="Team brainstorming on beanbags"
          className="w-full h-full  object-bottom opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/15 to-black/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-peach/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-xl z-10">
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white"
          >
            Master the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa4b37] to-[#df2771]">
              art of coding
            </span>{" "}
          </h1>

          <p
            ref={textRef}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-md"
          >
            Build Your Career in Tech with Industry-Ready Coding Skills.Learn
            Web Development, Java, Python & more with real projects, expert
            mentors, and placement support.
          </p>

          <div ref={btnGroupRef}>
            <button className="group  relative px-8 py-4 bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white rounded-2xl  text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-dark/30 hover:-translate-y-1">
              <div className="flex justify-center  items-center relative z-10">
                Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                >
                  <img
                    src={`https://picsum.photos/seed/${i + 50}/100/100`}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p>
              Join <span className="font-bold text-gray-300">6,000+</span>{" "}
              students
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative  z-10 w-full flex flex-col justify-center md:justify-end perspective-1000">
          <img
            ref={rightImageRef}
            className="rounded-2xl"
            src="/code.jpg"
            alt="code image"
          />
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
