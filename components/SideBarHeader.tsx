"use client";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { navLinks } from "@/lib/constants";

export default function SideBarHeader() {
  const t = useTranslations();
  const [showSidebar, setShowSidebar] = useState(false);

  // Close sidebar when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector("aside");
      const button = document.querySelector(".sidebar-toggle");

      if (
        showSidebar &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        button &&
        !button.contains(event.target as Node)
      ) {
        setShowSidebar(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showSidebar]);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSidebar]);

  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        onClick={() => setShowSidebar(true)}
        className="sidebar-toggle p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                   hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      >
        <FaBars className="text-xl text-gray-700 dark:text-gray-300" />
      </button>

      {/* Backdrop with blur effect */}
      <div
        className={`${showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"} 
                   fixed inset-0 z-30 transition-opacity duration-300 bg-black/60 backdrop-blur-sm`}
        onClick={() => setShowSidebar(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`${showSidebar ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"} 
                   flex flex-col transition-all duration-500 ease-out w-80 h-screen z-40 fixed top-0 start-0 
                   py-8 px-6 bg-white dark:bg-gray-900 shadow-xl`}
      >
        {/* Close button */}
        <button
          aria-label="Close menu"
          onClick={() => setShowSidebar(false)}
          className="absolute text-gray-500 dark:text-gray-400 text-xl top-6 end-6 cursor-pointer 
                     hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                     p-1.5 rounded-full transition-all duration-300"
        >
          <MdOutlineClose />
        </button>

        {/* Logo/Link */}
        <Link
          onClick={() => setShowSidebar(false)}
          href="/"
          className="text-2xl font-bold mt-3 mb-10 text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-600 to-purple-600 transition-colors"
        >
          {t("khaled_ali")}
        </Link>

        {/* Navigation */}
        <div className="flex flex-col grow justify-between">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                onClick={() => setShowSidebar(false)}
                key={link}
                href={`#${link.toLowerCase()}`}
                className="group hover:ps-6 rtl:hover:ps-0 rtl:hover:pe-6 transition-all duration-300 
                           capitalize px-4 py-3.5 font-medium text-gray-700 dark:text-gray-300 rounded-xl
                           hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                           dark:hover:from-blue-950/30 dark:hover:to-purple-950/30
                           hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-[length:0%_2px] 
                  bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all 
                  duration-500 ease-out pb-0.5">
                  {t(link)}
                </span>
              </a>
            ))}
          </nav>

          {/* Footer section */}
          <div className="pt-10 mt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              © {new Date().getFullYear()} {t("khaled_ali")}
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
// "use client";
// import { FaBars } from "react-icons/fa";
// import { MdOutlineClose } from "react-icons/md";
// import { useEffect, useState } from "react";
// import { useTranslations } from "next-intl";
// import { Link } from "@/lib/i18n/navigation";
// import { navLinks } from "@/lib/constants";

// export default function SideBarHeader() {
//   const t = useTranslations();
//   const [showSidebar, setShowSidebar] = useState(false);

//   // Close sidebar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const sidebar = document.querySelector("aside");
//       const button = document.querySelector(".sidebar-toggle");

//       if (
//         showSidebar &&
//         sidebar &&
        //  sidebar.contains(event.target as Node) &&
//         button &&
//         button.contains(event.target as Node)
//       ) {
//         setShowSidebar(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showSidebar]);

//   return (
//     <div className="md:hidden">
//       <FaBars
//         onClick={() => setShowSidebar(true)}
//         className="sidebar-toggle text-xl dark:text-white text-gray-600 cursor-pointer 
//                    hover:text-main dark:hover:text-main transition-colors duration-300"
//       />

//       <div
//         className={`${showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"} 
//                    fixed inset-0 z-20 transition-opacity duration-300 bg-black/50 backdrop-blur-sm`}
//         onClick={() => setShowSidebar(false)}
//       ></div>

//       <aside
//         className={`${showSidebar ? "translate-x-0 shadow-2xl" : "-translate-x-full rtl:translate-x-full"} 
//                    flex flex-col transition-all duration-300 w-72 h-screen z-30 fixed top-0 start-0 
//                    py-8 px-6 border border-gray-700/50 rounded-r-2xl
//                    bg-gray-800 `}
//       >
//         {/* Close button */}
//         <MdOutlineClose
//           onClick={() => setShowSidebar(false)}
//           className="absolute text-gray-300 text-xl top-5 end-5 cursor-pointer 
//                      hover:text-white hover:bg-gray-700 p-1 rounded-full transition-all duration-300"
//         />

//         {/* Logo/Link */}
//         <Link
//           onClick={() => setShowSidebar(false)}
//           href="/"
//           className="capitalize text-2xl font-bold mt-3 mb-8 text-main transition-colors"
//         >
//           {t("khaled_ali")}
//         </Link>

//         {/* Navigation */}
//         <div className="flex flex-col grow justify-between">
//           <nav className="flex flex-col space-y-2">
//             {navLinks.map((link) => (
//               <a
//                 onClick={() => setShowSidebar(false)}
//                 key={link}
//                 href={`#${link.toLowerCase()}`}
//                 className="hover:ps-6 rtl:hover:ps-0 rtl:hover:pe-6 transition-all duration-300 
//                            capitalize px-4 py-3 font-medium text-gray-300 rounded-lg
//                            hover:bg-gray-700 hover:text-white"
//               >
//                 {t(link)}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </aside>
//     </div>
//   );
// }