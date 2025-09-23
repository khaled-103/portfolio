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
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50 fixed top-0 inset-x-0">
            <div className="2xl:w-[75%] xl:w-[82%] lg:w-[88%] md:w-[90%] w-[92%] mx-auto py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* Logo with animation */}
                        <Link
                            href="/"
                            className="py-2 px-4 text-white rounded-full bg-main text-2xl font-bold 
                            relative overflow-hidden group
                            transition-all duration-300 shadow-lg hover:scale-110
                            shadow-main/50 dark:shadow-main/30 hover:shadow-main/70"
                        >
                            <span className="relative z-10">K</span>
                            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 
                            transition-transform duration-300 origin-left"></span>
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
                        <DownloadCv className="animate-bounce"/>
                    </div>

                    {/* Mobile Sidebar */}
                    <SideBarHeader/>
                </div>
            </div>
        </header>

    );
}