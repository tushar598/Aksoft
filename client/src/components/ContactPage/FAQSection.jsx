import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AccordionItem = ({ question, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span
          className={`text-lg font-medium transition-colors ${
            isOpen
              ? "text-brand-blue"
              : "text-slate-900 group-hover:text-brand-blue"
          }`}
        >
          {question}
        </span>
        <ChevronDown
          className={`text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-blue" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-500 leading-relaxed">
          Yes, Snappy is built with industry-standard encryption protocols to
          ensure your data remains private and secure at all times. We do not
          sell your personal information.
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Default open item
  const sectionRef = useRef(null);

  const questions = [
    "What makes Snappy different from other messaging apps?",
    "How secure are my conversations on Snappy?",
    "Can I personalize my Snappy experience?",
    "What group features does Snappy offer?",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-left", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: -50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".faq-right", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: 50,
        opacity: 0,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Heading and Newsletter */}
        <div className="faq-left">
          <span className="text-slate-500 font-medium mb-2 block">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Do you have any questions for us?
          </h2>
          <p className="text-slate-600 mb-8">
            If there are questions you want to ask. We will answer all your
            question.
          </p>

          <div className="relative max-w-md">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-12 pr-32 py-4 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-brand-blue hover:bg-blue-600 text-white font-medium px-6 rounded-full transition-colors">
              Submit
            </button>
          </div>
        </div>

        {/* Right: Accordion */}
        <div className="faq-right">
          {questions.map((q, index) => (
            <AccordionItem
              key={index}
              question={q}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
