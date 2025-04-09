import { Link } from "@/lib/i18n/navigation";
import BaseBtn from "./BaseBtn";
import LanguageSwitch from "./LanguageSwitch";
import SideBarHeader from "./SideBarHeader";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";

export default  function HomeHeader() {
    const t =  useTranslations();
    return (
        <header className="xl:w-[80%] 2xl:w-[75%] lg:w-[88%] md:w-[92%] w-[98%] mx-auto bg-transparent">
            <div className="px-1 pt-7 pb-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        
                        <Link href="/" className="py-1 px-3 text-white rounded-[50%] bg-main text-2xl font-bold">K</Link>
                        <div className="flex items-center space-x-1">
                            <LanguageSwitch />
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="sm:flex md:items-baseline md:space-x-1 hidden">
                        <nav className="md:flex hidden md:space-x-4 md:items-center">
                            {[t('home'),t('about_me'),t('projects'),t('experience'),t('contact')].map((link) => (
                                <Link key={link} href={`#${link.toLowerCase()}`} className="border-b-4 capitalize transition-colors border-transparent hover:border-b-main px-3 font-[400] dark:text-white text-black">{link}</Link>
                            ))}
                        </nav>
                        <BaseBtn>
                            {t('download_cv')}
                        </BaseBtn>
                    </div>
                    <SideBarHeader/>
                </div>
            </div>
        </header>
    );
}