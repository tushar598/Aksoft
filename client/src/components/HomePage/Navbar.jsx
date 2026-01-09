import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { scrollToSection } from "../../utils/scrollToSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isOpenValue, setIsOpenValue] = useState("");
  const navigate = useNavigate();

  function doNavigation(sectionId) {
    if (sectionId === "home") {
      navigate("/");
      
      setIsOpenValue("home");
    }
    if (sectionId === "placement_section") {
      navigate("/placement");
    
      setIsOpenValue("placement_section");
    }
    if (sectionId === "courses") {
      navigate("/course");
      setIsOpenValue("courses");
    }
    if (sectionId === "about_section") {
      navigate("/about");
      setIsOpenValue("about_section");
    }
  }

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
                <a href="/" className="font-bold text-3xl">
                  ksoft
                </a>
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
                      onClick={() => {
                        doNavigation(sectionId);
                        scrollToSection(sectionId);
                      }}
                      className={`relative text-base font-medium transition
                        ${
                           isOpenValue === sectionId
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

           
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {open ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        
        {open && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {[
                ["Home", "home"],
                ["Course", "courses"],
                ["Placement", "placement_section"],
                ["About-us", "about_section"],
                ["Contact", "footer-contact"],
              ].map(([label, sectionId]) => (
                <button
                  key={label}
                  onClick={() => {
                    doNavigation(sectionId);
                    scrollToSection(sectionId);
                    setOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium
            ${
              isOpen && isOpenValue === sectionId
                ? "text-red-500 bg-red-50"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }
          `}
                >
                  {label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("footer-contact")}
                className="w-full mt-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium py-3 rounded-lg shadow-md"
              >
                Contact-us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ===== SPACER ===== */}
      <div className="h-16" />
    </>
  );
}
