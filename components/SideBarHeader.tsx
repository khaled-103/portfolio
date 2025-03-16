"use client"
import { FaBars } from "react-icons/fa";
import CustomLink from "./CustomLink";
import DownloadCvBtn from "./DownloadCvBtn";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { useDictionary } from "./DictionaryProvider";

export default function SideBarHeader() {
    const dictionary = useDictionary();
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="sm:hidden">
            <FaBars onClick={() => setShowSidebar(true)} className="text-xl dark:text-white text-[#555] cursor-pointer" />
            <aside className={`${showSidebar ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"} flex flex-col transition-transform w-64 bg-white h-screen overscroll-y-auto fixed top-0 start-0 shadow py-4 px-4`}>
                <MdOutlineClose onClick={() => setShowSidebar(false)} className="absolute top-4 end-2 cursor-pointer" />
                <CustomLink href="/" className="bg-gradient-to-r from-main to-main/70 bg-clip-text text-transparent  text-2xl font-bold mb-4">KhaledAli</CustomLink>
                <div className="flex flex-col grow justify-between">
                    <nav className="flex flex-col space-y-4">
                        {[dictionary.home, dictionary.about, dictionary.projects, dictionary.contact].map((link) => (
                            <CustomLink key={link} href={`#${link.toLowerCase()}`} className="hover:ps-4 transition-all px-3 font-[400] text-black">{link}</CustomLink>
                        ))}
                    </nav>
                    <DownloadCvBtn>{dictionary.download_cv}</DownloadCvBtn>
                </div>
            </aside>
        </div>

    );
}