import { useState } from "react";
import useScrollSpy from "../../hooks/useScrollSpy";
import { scrollToSection } from "../../utils/scrollToSection";


export default function Navbar() {
  const [open, setOpen] = useState(false);


  // 👇 ADD scroll spy hook
  const activeSection = useScrollSpy([
    "home",
    "courses",
    "placement_section",
    "about_section",
    "footer-contact",
  ]);

  return (
    <>
      {/* ===== FIXED NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center ">
              <img src="/aksoft.png" alt="logo" className="w-8 h-8" />
              <div>
                <a href="/"className="font-bold text-3xl">ksoft</a>
              </div>
            </div>

            {/* ===== Desktop Menu ===== */}
            <div className="hidden lg:flex items-center justify-between gap-18">
              <ul className="flex items-center gap-8">
                {[
                  ["Home", "home"],
                  ["Course", "courses"],
                  ["Placement", "placement_section"],
                  ["About-us", "about_section"],
                  ["Contact", "footer-contact"],
                ].map(([label, sectionId]) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollToSection(sectionId)}
                      className={`relative text-base font-medium transition
                        ${
                          activeSection === sectionId
                            ? "text-[#fa4b37] after:scale-x-100"
                            : "text-slate-700 after:scale-x-0"
                        }
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                        after:bg-gradient-to-r after:from-[#fa4b37] after:to-[#df2771]
                        after:transition-transform hover:after:scale-x-100
                      `}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection("footer-contact")}
                className="rounded-lg px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#fa4b37] to-[#df2771]"
              >
                Contact-us
              </button>
            </div>

            {/* ===== Hamburger ===== */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex h-10 w-10 flex-col items-center justify-center"
            >
              <span
                className={`h-[2px] w-6 bg-black transition ${
                  open ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-black my-1 transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-black transition ${
                  open ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* ===== MOBILE DROPDOWN ===== */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-gradient-to-r from-[#f94a38] to-[#df286f] transition-all duration-300 overflow-hidden 
            ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col items-center ">
            {[
              ["Home", "home"],
              ["Course", "courses"],
              ["Placement", "placement_section"],
              ["About-us", "about_section"],
              ["Contact", "footer-contact"],
            ].map(([label, link]) => (
              <li key={label}>
                <button
                  onClick={() => {
                    scrollToSection(link);
                    setOpen(false);
                  }}
                  className="block px-6 py-4 text-center text-white font-medium hover:bg-white/60 rounded-2xl"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-center bg-white px-6 py-4">
            <button className="w-[50%] border border-black px-4 py-2 rounded-lg">
              <a className="block rounded-lg py-3 text-center font-semibold text-[#0f3460]">
                Get started
              </a>
            </button>
          </div>
        </div>
      </nav>

      {/* ===== SPACER ===== */}
      <div className="h-16" />
    </>
  );
}
