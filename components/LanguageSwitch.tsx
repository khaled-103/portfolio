"use client"
import { LANGUAGES } from '@/lib/constants/index';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { LanguagesKeysType } from '@/lib/types';
import { useParams } from 'next/navigation';
import { MdLanguage } from "react-icons/md";

export default function LanguageSwitch() {
    const {locale}:{locale:LanguagesKeysType} = useParams();
    const router = useRouter();
    const pathname = usePathname();
    
    function handleLangChange(language:string) {        
        router.replace({pathname},{locale:language});
    }

    return (
        <div className='group relative'>
            <MdLanguage className="text-xl dark:text-white text-gray-600 cursor-pointer hover:text-main dark:hover:text-main transition-colors duration-300" />
            <ul className='hidden group-hover:block absolute top-5 py-2 px-3 start-0 
                          bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg 
                          min-w-[120px] space-y-2 transition-all duration-300 origin-top' role='menu'>
                {Object.keys(LANGUAGES).map((language) => {
                    return (
                        <li 
                            key={language} 
                            className={`${locale === language ? "text-main font-medium" : "text-gray-700"} 
                                      cursor-pointer px-2 py-1 rounded hover:bg-gray-100 transition-colors duration-200`} 
                            onClick={()=>handleLangChange(language)}
                        >
                            {LANGUAGES[language as LanguagesKeysType].nativeName}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}