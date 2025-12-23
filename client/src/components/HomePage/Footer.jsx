import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <marquee className=" bg-gradient-to-r from-[#fa4b37] to-[#df2771]  text-white py-1 text-sm font-medium">
        {/* TOP QUOTE STRIP */}
        <div className="py-3 px-4 text-center text-sm sm:text-base font-medium">
          “Education is the passport to the future, for tomorrow belongs to
          those who prepare for it today.” “Your attitude, not your aptitude,
          will determine your altitude.” “If you think education is expensive,
          try ignorance.” “The only person who is educated is the one who has
          learned how to learn …and change.”
        </div>
      </marquee>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* BRAND INFO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white w-60  inline-block px-6 py-1 rounded-xl">
              <img src="/aksoftlogo.png" alt="Aksoft Logo" className=" mx-auto" />
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Aksoft is a technology-driven education and software training
              company focused on practical learning, innovation, and career
              growth.
            </p>

            <div className="flex gap-4 text-lg">
              {[
                { icon: FaFacebookF, link: "https://www.facebook.com/KanungoAseem"},
                { icon: FaInstagram, link: "https://www.instagram.com/aksoftechno/?utm_medium=copy_link"},
                { icon: FaTwitter, link: "https://x.com/aksoftechno"},
                { icon: FaYoutube, link: "https://www.youtube.com/@aksoftechno/featured"},
                { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/aksoftechno"},
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  className="text-white/60 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <FooterLinks
            title="Company"
            links={["About Us", "Our Courses", "Careers", "Blog"]}
          />

          <FooterLinks
            title="Resources"
            links={[
              "Documentation",
              "Student Portal",
              "FAQs",
              "Support Center",
            ]}
          />

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-white/50" />
                <p>
                  44 Anand bag, Civil Lines Rd,
                  <br />
                  Dewas, MP 455001
                </p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-white/50" />
                <p>+91 8770393104</p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-white/50" />
                <p>contact@aksofttechno.com</p>
              </div>

              <p className="text-xs text-white/50">
                Business Hours: Mon - Sat
                (6:00 PM – 9:00 PM)
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* LEGAL STRIP – WHITE BACKGROUND */}
      <div className="bg-white text-black text-center py-4 text-xs sm:text-sm">
        © 2025 Aksoft. Created by a student, Mr. Assem Kanungo.
        <span className="font-medium"> All Rights Reserved.</span>
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="space-y-3 text-sm text-white/70">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href="#" className="hover:text-white transition">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Footer;
