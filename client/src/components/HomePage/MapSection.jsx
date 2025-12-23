import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="relative w-full bg-white py-20 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

        {/* RIGHT MAP */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
        >
          <iframe
            title="Office Location Map"
            aria-label="Google Map showing office location"
            src="https://www.google.com/maps?q=AkSoft+First+floor,+145-A,+Kalani+Bagh,+Gomti+Nagar,+Dewas,+Madhya+Pradesh+455001&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
