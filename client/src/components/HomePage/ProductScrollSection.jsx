import React from "react";

const products = [
  {
    name: "Sakshi Sharma",
    tag: "Web Developer",
    price: "₹134900.00",
    image: "/iphone.jpeg",
  },
  {
    name: "MacBook Pro 14” with M5",
    tag: "Apple Intelligence",
    price: "From ₹169900.00",
    image: "/iphone01.jpeg",
  },
  {
    name: "iPad Pro",
    tag: "Apple Intelligence",
    price: "From ₹99900.00",
    image: "/ipad.png",
  },
];

const ProductScrollSection = () => {
  return (
    <section className="py-16 bg-[#f5f5f7]">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-3xl text-center md:text-4xl font-semibold">
          <span className="text-blue-500">The latest.</span>{" "}
          <span className="text-gray-700">Truly awe-inspired gifts.</span>
        </h2>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        <div className="flex gap-6 ml-5 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
          <div className="shrink-0 w-4 sm:w-6" />

          {products.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                min-w-[85%] sm:min-w-[70%] lg:min-w-[32%]
                h-[420px]
                snap-start
                rounded-[24px]
                overflow-hidden
                shadow-xl
                cursor-pointer
              "
            >
            

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="
                  relative
                  z-10
                  w-full
                  h-full
                  object-cover
                  
                "
                loading="lazy"
              />

              {/* DARK FADE FOR TEXT READABILITY */}
              <div className="absolute inset-0 z-20 hover:bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              {/* TEXT CONTENT */}
              <div
                className="
                  absolute
                  left-0
                  bottom-[-100%]
                  z-30
                  w-full
                  p-6
                  text-white
                  transition-all
                  duration-500
                  group-hover:bottom-0
                "
              >
                <span className="block text-sm opacity-80">{item.tag}</span>

                <h3 className="text-2xl font-semibold mt-1">{item.name}</h3>

                <p className="mt-2 text-sm opacity-90">Package {item.price}</p>

              </div>
            </div>
          ))}

          <div className="shrink-0 w-4 sm:w-6" />
        </div>
      </div>
    </section>
  );
};

export default ProductScrollSection;
