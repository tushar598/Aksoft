import React, { useLayoutEffect, useRef } from "react";
import { Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactHero = () => {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const textRefs = useRef([]);
  const formRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animation (same rhythm as HeroSection)
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
          textRefs.current,
          {
            y: 100,
            opacity: 0,
            skewY: 5,
            duration: 1.2,
            stagger: 0.15,
          },
          "-=1.2"
        )
        .from(
          formRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );

      // Parallax scroll (same feel as HeroSection)
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
    <section
      ref={containerRef}
      className="relative bg-[#F5F5F7] min-h-screen px-6 py-12 md:px-12 md:py-16 lg:px-24 overflow-hidden"
    >
    

    

      <div
        ref={contentWrapperRef}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
      >
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h1
            ref={(el) => (textRefs.current[0] = el)}
            className="text-5xl md:text-8xl bg-gradient-to-r from-[#fa4b37] to-[#df2771] bg-clip-text text-transparent font-black tracking-tighter leading-[0.9] mb-6"
          >
            Contact Us
          </h1>

          <p
            ref={(el) => (textRefs.current[1] = el)}
            className="text-lg text-gray-600 mb-8 max-w-md"
          >
            Email, call, or complete the form to contact.
          </p>

          <div
            ref={(el) => (textRefs.current[2] = el)}
            className="text-sm space-y-2 mb-8"
          >
            <a href="/" className="text-gray-600 font-medium">
              contact@aksofttechno.com
            </a>
            <p className="text-gray-600 font-medium">+91 8770393104</p>
          </div>

          <div
            ref={(el) => (textRefs.current[3] = el)}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8"
          >
            <div>
              <h3 className="font-bold text-gray-600 mb-2">
                Customer Support
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-600 mb-2">
                Feedback and Suggestions
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We value your feedback and are continuously working to improve
                AkSoft. Your input is crucial.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-600 mb-2">Media Inquiries</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                For media-related questions or press inquiries, please contact
                us at media@aksofttechno.com.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div
          ref={formRef}
          className="bg-gradient-to-r from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] rounded-3xl p-8 shadow-xl shadow-brand-blue/5"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-black tracking-tighter text-white mb-1">
              Get in Touch
            </h2>
            <p className="text-gray-200">You can reach us anytime</p>
          </div>

          <form
            className="space-y-4 text-black"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-white outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-white outline-none text-sm"
              />
            </div>

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700"
                size={18}
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full pl-12 px-4 py-3 rounded-xl bg-white border-2 border-white outline-none text-sm"
              />
            </div>

            <div className="flex gap-4">
              {" "}
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-white shadow-[1px_1px_0px_0px_rgba(255,255,255,0)] outline-none transition-all text-sm"
              />{" "}
            </div>

            <textarea
              placeholder="How can we help?"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-white border-2 border-white outline-none text-sm resize-none"
            />

            <button
              className="w-full px-8 py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-[#fa4b37] to-[#df2771] border-2 border-black
              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              hover:translate-y-1 hover:shadow-none transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
