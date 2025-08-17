"use client"
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { ReactNode, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { navLinks } from "@/lib/constants";

export default function SideBarHeader({ children }: { children: ReactNode }) {
    const t = useTranslations();
    const [showSidebar, setShowSidebar] = useState(false);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.querySelector('aside');
            const button = document.querySelector('.sidebar-toggle');

            if (showSidebar && sidebar && !sidebar.contains(event.target as Node) &&
                button && !button.contains(event.target as Node)) {
                setShowSidebar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showSidebar]);

    return (
        <div className="md:hidden">
            <FaBars
                onClick={() => setShowSidebar(true)}
                className="sidebar-toggle text-xl dark:text-white text-gray-600 cursor-pointer 
                           hover:text-main dark:hover:text-main transition-colors duration-300"
            />

            <aside className={`${showSidebar ? "translate-x-0 shadow-2xl" : "-translate-x-full rtl:translate-x-full"} 
                  flex flex-col transition-all duration-300 w-72 bg-gray-800
                  h-screen overscroll-y-auto z-20 fixed top-0 start-0 py-8 px-6  border-gray-700`}>
                {/* Close button */}
                <MdOutlineClose
                    onClick={() => setShowSidebar(false)}
                    className="absolute text-gray-300 text-xl top-5 end-5 cursor-pointer 
                  hover:text-white hover:bg-gray-700 p-1 rounded-full transition-all duration-300"
                />

                {/* Logo/Link */}
                <Link
                    onClick={() => setShowSidebar(false)}
                    href="/"
                    className=" text-2xl font-bold mt-3 mb-8 text-main transition-colors"
                >
                    {t('khaled_ali')}
                </Link>

                {/* Navigation */}
                <div className="flex flex-col grow justify-between">
                    <nav className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <a
                                onClick={() => setShowSidebar(false)}
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="hover:ps-6 rtl:hover:ps-0 rtl:hover:pe-6 transition-all duration-300 
                              capitalize px-4 py-3 font-medium text-gray-300 rounded-lg
                              hover:bg-gray-700 hover:text-white"
                            >
                                {t(link)}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-8">
                        {children}
                    </div>
                </div>
            </aside>
        </div>
    );
}