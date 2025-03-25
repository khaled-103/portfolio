"use client"
import { DEFAULT_LANG, LANGUAGES } from '@/lib/constants/index';
import { LanguagesKeysType } from '@/lib/types';
import Cookies from 'js-cookie'
import { useParams, usePathname, useRouter } from 'next/navigation';
import { MdLanguage } from "react-icons/md";

export default function LanguageSwitch() {
    const { lang = DEFAULT_LANG }: { lang: string } = useParams();
    // const [language,setLanguage]= useState(lang); 
    const router = useRouter();
    const pathname = usePathname();
    function handleLangChange(language:string) {
        Cookies.set("locale", language, {
            expires: 30
        })
        router.push(pathname.replace(lang, language));
    }

    return (
        <div className='group relative'>
            <MdLanguage className="text-xl dark:text-white text-[#555] cursor-pointer" />
            <ul className='hidden group-hover:block absolute top-5 py-3 px-2 start-0  bg-white border border-gray-200 rounded-sm shadow-md' role='menu'>
                {Object.keys(LANGUAGES).map((language) => {
                    return (
                        <li key={language} className={`${lang === language ? "text-main" : ""} text-black cursor-pointer`} onClick={()=>handleLangChange(language)}>{LANGUAGES[language as LanguagesKeysType].nativeName}</li>
                    )
                })}
            </ul>
        </div>
    );
}