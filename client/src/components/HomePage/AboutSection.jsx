import { motion } from "framer-motion";


export default function AboutSection() {
  return (
    <section id="about_section" className="w-full py-20 bg-amber-50 overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-bold text-red-500 mb-16"
      >
        About
      </motion.h2>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/about.png"
            alt="About AKSOFT"
            className="w-[85%] max-w-md md:max-w-lg lg:max-w-xl"
          />
        </motion.div>

        {/* Right Content Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient Card */}
          <div className="bg-gradient-to-br bg-gradient-to-r from-[#fa4b37] to-[#df2771] rounded-2xl p-8 md:p-10 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              What you think about us ?
            </h3>

            <p className="text-sm md:text-base leading-relaxed opacity-95 mb-4">
              AKSOFT is a leading software development training institute in
              Dewas, offering software courses with a{" "}
              <strong>100% job placement guarantee</strong>. We focus on quality
              education to ensure a bright future for our trainees.
            </p>

            <p className="text-sm md:text-base leading-relaxed opacity-95 mb-4">
              We believe in building concepts from scratch, especially for
              students with zero knowledge but a strong passion for software
              engineering. Our training methods are continuously updated to
              provide the best learning experience in the simplest way.
            </p>

            <p className="text-sm md:text-base leading-relaxed opacity-95 mb-4">
              For students and professionals, we offer various career programs
              and programming classes for <strong>11th & 12th graders</strong>.
            </p>

            <p className="text-sm md:text-base leading-relaxed opacity-95">
              With <strong>10+ years of experience</strong>, AKSOFT has trained
              thousands of IT professionals, many of whom are placed in top MNCs
              like
              <strong> TCS, Infosys, and Wipro</strong>. Our goal is to
              strengthen programming concepts and provide skilled job seekers to
              companies.
            </p>
          </div>

          {/* Soft Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#fa4b37] to-[#df2771] blur-3xl opacity-20 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
