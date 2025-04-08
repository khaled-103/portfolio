"use client"
import { LANGUAGES } from '@/lib/constants/index';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { LanguagesKeysType } from '@/lib/types';
import { useParams } from 'next/navigation';
import { MdLanguage } from "react-icons/md";

export default function LanguageSwitch() {
    const {locale}:{locale:LanguagesKeysType} = useParams();
    // const [language,setLanguage]= useState(lang); 
    const router = useRouter();
    const pathname = usePathname();
    function handleLangChange(language:string) {        
        router.replace({pathname},{locale:language});
    }

    return (
        <div className='group relative'>
            <MdLanguage className="text-xl dark:text-white text-[#555] cursor-pointer" />
            <ul className='hidden group-hover:block absolute top-5 py-3 px-2 start-0  bg-white border border-gray-200 rounded-sm shadow-md' role='menu'>
                {Object.keys(LANGUAGES).map((language) => {
                    return (
                        <li key={language} className={`${locale === language ? "text-main" : ""} text-black cursor-pointer`} onClick={()=>handleLangChange(language)}>{LANGUAGES[language as LanguagesKeysType].nativeName}</li>
                    )
                })}
            </ul>
        </div>
    );
}