import { Link } from "@/lib/i18n/navigation";
import LanguageSwitch from "./LanguageSwitch";
import SideBarHeader from "./SideBarHeader";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";
import { navLinks } from "@/lib/constants";
import DownloadCv from "./DownloadCv";

export default function HomeHeader() {
    const t = useTranslations();
    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-2xl z-50 fixed top-0 inset-x-0 transition-all duration-300 hover:shadow-md">
            <div className="2xl:w-[75%] xl:w-[82%] lg:w-[88%] md:w-[90%] w-[92%] mx-auto py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* Logo with animation */}
                        <Link
                            href="/"
                            className="py-1 px-3 text-white rounded-[50%] bg-main text-2xl font-bold 
                    transition-transform duration-300 shadow-lg
                    shadow-main/50 dark:shadow-main/30"
                        >
                            K
                        </Link>

                        {/* Language and theme switchers */}
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <LanguageSwitch />
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="md:flex md:items-baseline md:space-x-4 hidden">
                        <nav className="flex space-x-4 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="relative capitalize px-2 font-medium dark:text-white text-gray-800
                        group transition-all duration-300 hover:text-main dark:hover:text-main"
                                >
                                    {t(link)}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>
                        <DownloadCv />
                    </div>

                    {/* Mobile Sidebar */}
                    <SideBarHeader>
                        <DownloadCv />
                    </SideBarHeader>
                </div>
            </div>
        </header>

    );
}