import React from "react";

const products = [
  {
    name: "Tushar Singh Chouhan",
    tag: "Web-3 Developer",
    price: "₹1.3 Cr",
    image: "/tushar.png",
  },
  {
    name: "Shivani Nigam",
    tag: "Web Developer",
    price: "₹11 LPA",
    image: "/student01.png",
  },
  {
    name: "student name",
    tag: "Web Developer",
    price: "₹10 LPA",
    image: "/student02.png",
  },
  {
    name: "student name",
    tag: "Web Developer",
    price: "₹10 LPA",
    image: "/student03.png",
  },
  {
    name: "student name",
    tag: "Web Developer",
    price: "₹10 LPA",
    image: "/student02.png",
  },
  {
    name: "student name",
    tag: "Web Developer",
    price: "₹10 LPA",
    image: "/student03.png",
  },
];

const ProductScrollSection = () => {
  return (
    <section className="py-16 bg-[#f5f5f7]">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-gray-800 text-center">
          <span className="text-[#fa4b37]">Placed</span>{" "}
          <span className="text-gray-700">Students.</span>
        </h2>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        <div className="flex gap-6 ml-5 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
          <div className="shrink-0 w-4 sm:w-6 " />

          {products.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                min-w-[85%] sm:min-w-[50%] lg:min-w-[32%]
                h-[520px]
                snap-start
                rounded-[24px]
                overflow-hidden
                shadow-xl
                bg-gradient-to-t from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] 
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
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-black/20 to-transparent lg:bg-none lg:hover:bg-gradient-to-t" />

              {/* TEXT CONTENT */}
              <div
                className="
    absolute
    left-0
    bottom-0
    lg:bottom-[-100%]
    z-30
    w-full
    p-6
    text-white
    transition-all
    duration-500
    lg:group-hover:bottom-0
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
