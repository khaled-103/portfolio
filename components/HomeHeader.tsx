import { getDictionary } from "@/lib/translate";
import CustomLink from "./CustomLink";
import DownloadCvBtn from "./DownloadCvBtn";
import LanguageSwitch from "./LanguageSwitch";
import SideBarHeader from "./SideBarHeader";
import ThemeToggle from "./ThemeToggle";
import { LanguagesKeysType } from "@/lib/types";

export default async function HomeHeader({lang}:{lang:LanguagesKeysType}) {
    const dictionary = await getDictionary(lang);
    return (
        <header className="lg:w-[90%] md:w-[92%] w-[98%] mx-auto bg-transparent">
            <div className="px-1 pt-7 pb-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            <LanguageSwitch />
                            <ThemeToggle />
                        </div>
                        <CustomLink href="/" className="bg-gradient-to-r from-main to-main/70 bg-clip-text text-transparent  text-2xl font-bold">KhaledAli</CustomLink>
                        {/* <Image src={"/assets/logo.jpg"} className="rounded-[50%] " width={80} height={80} alt="logo image"/> */}
                    </div>
                    <div className="sm:flex md:items-center md:space-x-1 hidden">
                        <nav className="md:flex hidden md:space-x-4 md:items-center">
                            {[dictionary.home,dictionary.about,dictionary.projects,dictionary.contact].map((link) => (
                                <CustomLink key={link} href={`#${link.toLowerCase()}`} className="border-b-2 transition-colors border-transparent hover:border-b-main px-3 font-[400] dark:text-white text-black">{link}</CustomLink>
                            ))}
                        </nav>
                        <DownloadCvBtn>
                            {dictionary.download_cv}
                        </DownloadCvBtn>
                    </div>
                    <SideBarHeader/>
                </div>
            </div>
        </header>
    );
}