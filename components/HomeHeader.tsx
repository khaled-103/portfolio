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
        <header className="2xl:w-[75%] xl:w-[82%] lg:w-[88%] md:w-[90%] w-[92%] mx-auto bg-transparent">
            <div className="px-1 pt-7 pb-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">

                        <Link href="/" className="py-1 px-3 text-white rounded-[50%] bg-main text-2xl font-bold">K</Link>
                        <div className="flex items-center space-x-1">
                            <LanguageSwitch />
                            <ThemeToggle />
                        </div>
                        
                    </div>
                    <div className="sm:flex sm:items-baseline sm:space-x-1 hidden">
                        <nav className="md:flex hidden md:space-x-4 md:items-center">
                            {navLinks.map((link) => (
                                <a key={link} href={`#${link.toLowerCase()}`} className="border-b-4 capitalize transition-colors border-transparent hover:border-b-main px-3 font-[400] dark:text-white text-black">{t(link)}</a>
                            ))}
                        </nav>
                        <DownloadCv />
                    </div>
                    <SideBarHeader>
                        <DownloadCv />
                    </SideBarHeader>
                </div>
            </div>
        </header>
    );
}