import React, { useEffect, useRef } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LocationSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".loc-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FCFDFE] px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Map Section */}
        <div className="loc-anim relative rounded-3xl overflow-hidden bg-slate-100 aspect-square lg:aspect-[4/3] shadow-inner">
          {/* Google Map iframe */}
          <iframe
            title="Snappy Location"
            src="https://www.google.com/maps?q=AkSoft+First+floor,+145-A,+Kalani+Bagh,+Gomti+Nagar,+Dewas,+Madhya+Pradesh+455001&output=embed"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Text Content */}
        <div className="loc-anim">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#fa4b37] to-[#df2771] bg-clip-text text-transparent mb-8 leading-tight">
            Want to visit our office?
          </h2>

          <div className="space-y-6">
            <span className="text-slate-500 font-medium mb-2 block">
              Our Location
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Address:
              </h3>
              <p className="text-slate-600 font-medium">AkSoft Techno .</p>
              <div className="text-slate-500 mt-2 space-y-1">
                <p>
                  First floor, 145-A, Kalani Bagh, Gomti Nagar, Dewas, Madhya
                  Pradesh 455001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
