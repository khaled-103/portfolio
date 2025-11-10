import { Link } from "@/lib/i18n/navigation";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";
import { navLinks } from "@/lib/constants";
import DownloadCv from "./DownloadCv";
import SideBarHeader from "./SideBarHeader";

export default function HomeHeader() {
    const t = useTranslations();
    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50 fixed top-0 inset-x-0">
            <div className="2xl:w-[85%] xl:w-[87%] lg:w-[91%] md:w-[93%] w-[96%] mx-auto py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        {/* Logo with animation */}
                        <Link
                            href="/"
                            aria-label="Go to homepage"
                            className="relative py-2 px-4 text-white font-bold text-2xl rounded-full bg-main overflow-hidden group shadow-lg transition-transform duration-300 hover:scale-110 shadow-main/50 dark:shadow-main/30 hover:shadow-main/70"
                        >
                            <span className="relative z-10">K</span>
                            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </Link>

                        {/* Language and theme switchers */}
                        <div className="flex items-center gap-1">
                            <LanguageSwitch />
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="lg:flex lg:items-baseline lg:space-x-4 hidden">
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
                        <DownloadCv className="animate-bounce" />
                    </div>

                    {/* Mobile Sidebar */}
                    <SideBarHeader />
                </div>
            </div>
        </header>

    );
}
