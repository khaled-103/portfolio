"use client"
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { ReactNode, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { navLinks } from "@/lib/constants";

export default function SideBarHeader({children}:{children:ReactNode}) {
    const t = useTranslations();
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="sm:hidden">
            <FaBars onClick={() => setShowSidebar(true)} className="text-xl dark:text-white text-[#555] cursor-pointer" />
            <aside className={`${showSidebar ? "translate-x-0 shadow-lg" : "-translate-x-full rtl:translate-x-full"} flex flex-col transition-transform w-64 bg-gradient-to-r from-purple-950 to-purple-600  h-screen overscroll-y-auto  z-20 fixed top-0 start-0 py-8 px-4`}>
                <MdOutlineClose onClick={() => setShowSidebar(false)} className="absolute text-white text-lg top-3 end-2 cursor-pointer" />
                <Link onClick={()=>setShowSidebar(false)} href="/" className=" text-main text-2xl font-bold mt-3 mb-6">{t('khaled_ali')}</Link>
                <div className="flex flex-col grow justify-between">
                    <nav className="flex flex-col space-y-5">
                        {navLinks.map((link) => (
                            <a onClick={()=>setShowSidebar(false)} key={link} href={`#${link.toLowerCase()}`} className="hover:ps-4 transition-all capitalize px-3 font-[400] text-white">{t(link)}</a>
                        ))}
                    </nav>
                    {children}
                </div>
            </aside>
        </div>

    );
}