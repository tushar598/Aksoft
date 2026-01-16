import React, { useEffect, useRef } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
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

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2
            id="location-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight "
          >
            <span className="text-[#fa4b37]">Visit</span> Our Office
          </h2>

          <p className="text-gray-600 max-w-xl leading-relaxed">
            We’d love to meet you. Find us at our office location or reach out
            anytime for collaboration, support, or business inquiries.
          </p>

          {/* ADDRESS CARD */}
          <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50 space-y-4">
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-gray-900 font-medium">
                First floor, 145-A, Kalani Bagh, Gomti Nagar, Dewas, Madhya
                Pradesh 455001
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="https://www.google.com/maps/place/Aksoft/@22.9579607,76.0405869,17z/data=!4m6!3m5!1s0x396317c05f4d4b93:0x483c0b3834f5bf7d!8m2!3d22.9579607!4d76.0431618!16s%2Fg%2F11g0hd2h54?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#fa4b37] to-[#df2771] px-5 py-3 text-sm font-medium text-white hover:bg-gradient-to-r from-[#fd3d28] to-[#f71d74] hover:scale-105 transition"
              >
                Get Directions
              </a>

              <span className="text-sm text-gray-500">
                Open: Mon – Sat, 6:00 PM – 9:00 PM
              </span>
            </div>
          </div>
        </motion.div>
        {/* Text Content */}
        {/* <div className="loc-anim">
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
        </div> */}
      </div>
    </section>
  );
};

export default LocationSection;
