import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 5000, label: "Enrolled Students" },
  { value: 2300, label: "Placed Students" },
  { value: 35, label: "Total Courses" },
  { value: 500, label: "Total Projects" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-amber-50 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          We’re increasing this data every year
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base">
          Real growth. Real placements. Real success.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            {/* Card */}
            <div className="bg-gradient-to-br from-red-500 via-pink-500 to-pink-600 rounded-2xl p-10 text-center shadow-xl transition-all duration-300">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                <CountUp end={item.value} duration={2.5} />+
              </h3>

              <p className="mt-4 text-white/90 text-sm md:text-base font-medium">
                {item.label}
              </p>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 to-pink-500 blur-2xl opacity-0 group-hover:opacity-30 transition duration-300 -z-10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
