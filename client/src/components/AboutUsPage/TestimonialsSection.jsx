import React, { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Esther Howard",
    role: "Software Engineer @ TCS",
    text: "The training at Aksoft was transformative. I went from zero coding knowledge to a full-stack developer in 6 months.",
    img: "https://picsum.photos/seed/t1/100/100",
  },
  {
    name: "Jesica Howard",
    role: "Frontend Dev @ Infosys",
    text: "Their placement guarantee is real. The mock interviews and project-based learning gave me the confidence I needed.",
    img: "https://picsum.photos/seed/t2/100/100",
  },
  {
    name: "Robert Fox",
    role: "Backend Dev @ Wipro",
    text: "The instructors are industry experts. The curriculum is up-to-date with current market trends like React and Node.js.",
    img: "https://picsum.photos/seed/t3/100/100",
  },
  {
    name: "Cameron Williamson",
    role: "Product Designer @ Google",
    text: "Learning UI/UX here was the best decision. The hands-on projects helped me build a portfolio that got me hired instantly.",
    img: "https://picsum.photos/seed/t4/100/100",
  },
  {
    name: "Jenny Wilson",
    role: "Data Analyst @ Amazon",
    text: "The data science track is rigorous but rewarding. The placement team worked tirelessly to connect me with top companies.",
    img: "https://picsum.photos/seed/t5/100/100",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (isPaused) return;

      // More reliable end detection with larger threshold for mobile
      const isAtEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 50;

      if (isAtEnd) {
        // Use instant scroll on mobile to avoid conflicts with snap
        container.scrollTo({ left: 0, behavior: "instant" });
        // Then smoothly scroll to first card
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 50);
      } else {
        const firstCard = container.firstElementChild;
        const scrollAmount = (firstCard?.offsetWidth || 300) + 24;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 bg-[#f2f7fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl  font-bold bg-gradient-to-r from-[#fa4b37] to-[#df2771] bg-clip-text text-transparent mb-4">
            Why They Love Aksoft
          </h2>
          <p className="text-gray-600">
            Hear from our beloved students. Read 320+ reviews here.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex-none w-[85vw] sm:w-[400px] md:w-[600px] snap-center sm:snap-start bg-white p-8 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow select-none"
            >
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="w-1 flex-none"></div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
