"use client";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { navLinks } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function SideBarHeader() {
  const t = useTranslations();
  const {locale} = useParams();
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  // Close sidebar when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showSidebar &&
        !sidebarRef.current?.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
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
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [showSidebar]);

  return (
    <div className="lg:hidden">
      {/* Toggle Button */}
      <button
        ref={buttonRef}
        aria-label="Open menu"
        onClick={() => setShowSidebar(true)}
        className="cursor-pointer sidebar-toggle p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 
                   dark:from-gray-800 dark:to-gray-700 shadow-sm
                   hover:shadow-md transition-all duration-300"
      >
        <FaBars className="text-xl text-blue-600 dark:text-blue-400" />
      </button>

      {/* AnimatePresence for smooth exit */}
      <AnimatePresence>
        {showSidebar && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowSidebar(false)}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.aside
              ref={sidebarRef}
              initial={{ x: locale === "ar" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: locale === "ar" ? "100%" : "-100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="fixed overflow-auto top-0 start-0 z-40 w-72 h-screen flex flex-col 
                         py-8 px-6 bg-white dark:bg-gray-900 
                         shadow-2xl border-e border-gray-200 dark:border-gray-800"
            >
              {/* Close Button */}
              <button
                aria-label="Close menu"
                onClick={() => setShowSidebar(false)}
                className="cursor-pointer absolute top-6 end-6 text-gray-500 dark:text-gray-400 
                           hover:text-blue-600 dark:hover:text-blue-400 
                           p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800
                           transition-all duration-300"
              >
                <MdOutlineClose className="text-2xl" />
              </button>

              {/* Logo */}
              <Link
                onClick={() => setShowSidebar(false)}
                href="/"
                className="text-2xl font-bold my-8 text-transparent bg-clip-text 
                           bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {t("khaled_ali")}
              </Link>

              {/* Nav */}
              <nav className="flex flex-col gap-2 grow">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setShowSidebar(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group capitalize px-4 py-3 font-medium 
                               text-gray-700 dark:text-gray-300 rounded-xl
                               hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                               dark:hover:from-blue-950/30 dark:hover:to-purple-950/30
                               hover:text-blue-600 dark:hover:text-blue-400
                               transition-all duration-300"
                  >
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-[length:0%_2px] 
                      bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all 
                      duration-500 ease-out pb-0.5">
                      {t(link)}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  © {new Date().getFullYear()} {t("khaled_ali")}
                </p>

                {/* Social icons */}
                <div className="flex justify-center gap-4 mt-4">
                  <a href="https://github.com/" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400">
                    <i className="ri-github-line text-xl" />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400">
                    <i className="ri-linkedin-line text-xl" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
