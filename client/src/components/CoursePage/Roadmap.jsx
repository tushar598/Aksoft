import React from "react";
import { motion } from "framer-motion";


/* =======================
   Visual Constants
======================= */
const MAIN_NODE_COLOR = "bg-gradient-to-br bg-gradient-to-r from-[#fa4b37] to-[#df2771]";
const SUB_NODE_COLOR = "bg-purple-100";
const BORDER_COLOR = "border-gray-900";

/* =======================
   Roadmap Item Component
======================= */
const RoadmapItem = ({ item, isLast }) => {
  

  return (
    <div className="relative flex flex-col items-center justify-center w-full mb-16 md:mb-24">
      {/* Central Connector Line */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-12 left-1/2 w-0.5 h-full border-l-2 border-blue-400 border-dashed -translate-x-1/2 -z-10 opacity-50"
          style={{ height: "calc(100% + 6rem)" }}
        />
      )}

      {/* Main Topic Node */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 px-8 py-4 rounded-lg border-2 ${BORDER_COLOR} ${MAIN_NODE_COLOR}
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center max-w-xs md:max-w-sm w-full
         hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-200`}
      >
        <span className="absolute -top-3 -left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Step {item.step}
        </span>

        <h3 className="font-bold text-lg md:text-xl text-white">
          {item.title}
        </h3>
      </motion.div>

      {/* Sub Points */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-32 w-full max-w-4xl relative">
        {/* Desktop Helper Lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block -mt-8 overflow-visible"
          style={{ zIndex: -1 }}
        >
          {item.points.map((_, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <path
                key={i}
                d={`M 50% 0 Q 50% 20, ${side === "left" ? "25%" : "75%"} 40`}
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-50"
              />
            );
          })}
        </svg>

        {item.points.map((point, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative flex items-center gap-3 p-3 rounded-xl border ${BORDER_COLOR} ${SUB_NODE_COLOR}
                shadow-sm hover:bg-purple-200 transition-colors cursor-default
                ${
                  isLeft
                    ? "md:justify-self-end md:mr-12"
                    : "md:justify-self-start md:ml-12"
                }
                mx-auto md:mx-0 w-full md:w-auto max-w-xs
              `}
            >
             

              <span className="text-sm md:text-base font-medium text-gray-800">
                {point}
              </span>

              {/* Mobile Connector */}
              <div className="md:hidden absolute top-0 left-1/2 w-0.5 h-4 bg-gray-300 -translate-y-full -translate-x-1/2 -z-10" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

/* =======================
   Roadmap Wrapper
======================= */
const Roadmap = ({ data }) => {
  return (
    <div className="relative w-full overflow-hidden p-4">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Start Node */}
        <div className="mb-12">
          <div className="px-6 py-2 bg-gray-900 text-white rounded-full font-bold text-sm border-2 border-gray-900">
            Start Here
          </div>
          <div className="h-8 w-0.5 bg-gray-900 mx-auto" />
        </div>

        {data.map((item, index) => (
          <RoadmapItem
            key={index}
            item={item}
            index={index}
            isLast={index === data.length - 1}
          />
        ))}

        {/* End Node */}
        <div className="mt-4">
          <div className="h-8 w-0.5 border-l-2 border-blue-400 border-dashed mx-auto opacity-50" />
          <div className="px-6 py-2 bg-gradient-to-br bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white border-2 border-black rounded-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Certificate of Mastery
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

