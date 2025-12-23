import { motion } from "framer-motion";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="footer-contact"
      className="relative py-32 sm:py-40 lg:py-48 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            <span className="text-[#fa4b37]">Contact</span> Us
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Have a question or want to work together? Fill out the form below
            and we'll get back to you soon.
          </motion.p>
        </motion.div>

        {/* Form Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center items-center -mt-12"
        >
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12">
            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Name Fields in Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="relative">
                  <label className="absolute -top-2 left-3 bg-white px-1 text-[#2e3d49] text-xs font-extrabold">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 rounded-md shadow-inner border border-gray-300 outline-none text-[#2e3d49] font-semibold text-sm focus:border-[#fa4b37] focus:ring-2 focus:ring-[#fa4b37]/20 transition-all"
                    placeholder="Enter first name"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <label className="absolute -top-2 left-3 bg-white px-1 text-[#2e3d49] text-xs font-extrabold">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 rounded-md shadow-inner border border-gray-300 outline-none text-[#2e3d49] font-semibold text-sm focus:border-[#fa4b37] focus:ring-2 focus:ring-[#fa4b37]/20 transition-all"
                    placeholder="Enter last name"
                  />
                </motion.div>
              </div>

              {/* Email */}
              <motion.div variants={itemVariants} className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-[#2e3d49] text-xs font-extrabold">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-4 rounded-md shadow-inner border border-gray-300 outline-none text-[#2e3d49] font-semibold text-sm focus:border-[#fa4b37] focus:ring-2 focus:ring-[#fa4b37]/20 transition-all"
                  placeholder="Enter email address"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-[#2e3d49] text-xs font-extrabold">
                  Message <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 rounded-md shadow-inner border border-gray-300 outline-none text-[#2e3d49] font-semibold text-sm focus:border-[#fa4b37] focus:ring-2 focus:ring-[#fa4b37]/20 transition-all"
                  placeholder="Enter short message"
                />
              </motion.div>

              {/* Additional Details */}
              <motion.div variants={itemVariants} className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-[#2e3d49] text-xs font-extrabold">
                  Additional Details
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-4 rounded-md shadow-inner border border-gray-300 outline-none text-[#2e3d49] font-semibold text-sm resize-none focus:border-[#fa4b37] focus:ring-2 focus:ring-[#fa4b37]/20 transition-all"
                  placeholder="Enter additional details (optional)"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(250, 75, 55, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full py-4 rounded-md bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white text-sm font-semibold uppercase tracking-wide cursor-pointer shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
