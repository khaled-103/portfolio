import { getDictionary } from "@/lib/translate";
import CustomLink from "./CustomLink";
import BaseBtn from "./BaseBtn";
import LanguageSwitch from "./LanguageSwitch";
import SideBarHeader from "./SideBarHeader";
import ThemeToggle from "./ThemeToggle";
import { LanguagesKeysType } from "@/lib/types";

export default async function HomeHeader({lang}:{lang:LanguagesKeysType}) {
    const dictionary = await getDictionary(lang);
    return (
        <header className="xl:w-[80%] 2xl:w-[75%] lg:w-[88%] md:w-[92%] w-[98%] mx-auto bg-transparent">
            <div className="px-1 pt-7 pb-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        
                        <CustomLink href="/" className="py-1 px-3 text-white rounded-[50%] bg-main text-2xl font-bold">K</CustomLink>
                        <div className="flex items-center space-x-1">
                            <LanguageSwitch />
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="sm:flex md:items-center md:space-x-1 hidden">
                        <nav className="md:flex hidden md:space-x-4 md:items-center">
                            {[dictionary.home,dictionary.about,dictionary.projects,dictionary.contact].map((link) => (
                                <CustomLink key={link} href={`#${link.toLowerCase()}`} className="border-b-2 capitalize transition-colors border-transparent hover:border-b-main px-3 font-[400] dark:text-white text-black">{link}</CustomLink>
                            ))}
                        </nav>
                        <BaseBtn>
                            {dictionary.download_cv}
                        </BaseBtn>
                    </div>
                    <SideBarHeader/>
                </div>
            </div>
        </header>
    );
}