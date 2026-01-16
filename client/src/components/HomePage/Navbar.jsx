// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// import { scrollToSection } from "../../utils/scrollToSection";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isOpenValue, setIsOpenValue] = useState("");
//   const navigate = useNavigate();

//   function doNavigation(sectionId) {
//     if (sectionId === "home") {
//       navigate("/");

//       setIsOpenValue("home");
//     }
//     if (sectionId === "placement_section") {
//       navigate("/placement");

//       setIsOpenValue("placement_section");
//     }
//     if (sectionId === "courses") {
//       navigate("/course");
//       setIsOpenValue("courses");
//     }
//     if (sectionId === "about_section") {
//       navigate("/about");
//       setIsOpenValue("about_section");
//     }
//     if (sectionId === "contact") {
//       navigate("/contact");
//       setIsOpenValue("contact");
//     }
//   }

//   return (
//     <>
//       {/* ===== FIXED NAVBAR ===== */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
//         {/* Header */}
//         <div className="mx-auto max-w-7xl px-5">
//           <div className="flex h-16 items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center ">
//               <img src="/aksoft.png" alt="logo" className="w-8 h-8" />
//               <div>
//                 <a href="/" className="font-bold text-3xl">
//                   ksoft
//                 </a>
//               </div>
//             </div>

//             {/* ===== Desktop Menu ===== */}
//             <div className="hidden lg:flex items-center justify-between gap-18">
//               <ul className="flex items-center gap-8">
//                 {[
//                   ["Home", "home"],
//                   ["Course", "courses"],
//                   ["Placement", "placement_section"],
//                   ["About-us", "about_section"],
//                   ["Contact", "contact"],
//                 ].map(([label, sectionId]) => (
//                   <li key={label}>
//                     <button
//                       onClick={() => {
//                         doNavigation(sectionId);
//                         scrollToSection(sectionId);
//                       }}
//                       className={`relative text-base font-medium transition
//                         ${
//                           isOpenValue === sectionId
//                             ? "text-[#fa4b37] after:scale-x-100"
//                             : "text-slate-700 after:scale-x-0"
//                         }
//                         after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
//                         after:bg-gradient-to-r after:from-[#fa4b37] after:to-[#df2771]
//                         after:transition-transform hover:after:scale-x-100
//                       `}
//                     >
//                       {label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 onClick={() => scrollToSection("footer-contact")}
//                 className="rounded-lg px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#fa4b37] to-[#df2771]"
//               >
//                 Contact-us
//               </button>
//             </div>

//             <div className="lg:hidden flex items-center">
//               <button
//                 onClick={() => setOpen(!open)}
//                 className="text-slate-600 hover:text-slate-900 focus:outline-none"
//               >
//                 {open ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {open && (
//           <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-full">
//             <div className="px-4 pt-2 pb-6 space-y-2">
//               {[
//                 ["Home", "home"],
//                 ["Course", "courses"],
//                 ["Placement", "placement_section"],
//                 ["About-us", "about_section"],
//                 ["Contact", "footer-contact"],
//               ].map(([label, sectionId]) => (
//                 <button
//                   key={label}
//                   onClick={() => {
//                     doNavigation(sectionId);
//                     scrollToSection(sectionId);
//                     setOpen(false);
//                   }}
//                   className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium
//             ${
//               open && isOpenValue === sectionId
//                 ? "text-red-500 bg-red-50"
//                 : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
//             }
//           `}
//                 >
//                   {label}
//                 </button>
//               ))}

//               <button
//                 onClick={() => scrollToSection("footer-contact")}
//                 className="w-full mt-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium py-3 rounded-lg shadow-md"
//               >
//                 Contact-us
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* ===== SPACER ===== */}
//       <div className="h-16" />
//     </>
//   );
// }

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Course", path: "/course" },
    { label: "Placement", path: "/placement" },
    { label: "About-us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ===== FIXED NAVBAR ===== */}
      <nav className="fixed top-0 left-0 px-5  py-2 right-0 z-50 bg-white shadow-md">
        <div className="mx-auto max-w-7xl ">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer"
            >
              <img src="/aksoft.png" alt="logo" className="w-10 h-10" />
              <span className="font-bold text-4xl">ksoft</span>
            </div>

            {/* ===== Desktop Menu ===== */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className={`relative text-base font-medium transition
                        ${
                          isActive(item.path)
                            ? "text-[#fa4b37] after:scale-x-100"
                            : "text-slate-700 after:scale-x-0"
                        }
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                        after:bg-gradient-to-r after:from-[#fa4b37] after:to-[#df2771]
                        after:transition-transform hover:after:scale-x-100
                      `}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/contact")}
                className="rounded-lg px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#fa4b37] to-[#df2771]"
              >
                Contact-us
              </button>
            </div>

            {/* ===== Mobile Toggle ===== */}
            <div className="lg:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* ===== Mobile Menu Overlay ===== */}
        {open && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 z-50 h-screen w-[85%] max-w-sm bg-white shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between px-4 h-16 border-b">
                <div className="flex items-center">
                  <img src="/aksoft.png" alt="logo" className="w-8 h-8" />
                  <span className="font-bold text-3xl">ksoft</span>
                </div>
                <button onClick={() => setOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.path)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition
              ${
                isActive(item.path)
                  ? "text-red-500 bg-red-50"
                  : "text-slate-700 hover:bg-slate-100"
              }
            `}
                  >
                    {item.label}
                  </button>
                ))}

                {/* CTA */}
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="w-full mt-6 bg-gradient-to-r from-[#fa4b37] to-[#df2771] text-white py-3 rounded-lg font-semibold"
                >
                  Contact-us
                </button>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
