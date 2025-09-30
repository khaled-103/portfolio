"use client"
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { LanguagesKeysType } from '@/lib/types';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { MdLanguage } from "react-icons/md";

export default function LanguageSwitch() {
    const [isOpen, setIsOpen] = useState(false);
    const { locale }: { locale: LanguagesKeysType } = useParams();
    const router = useRouter();
    const pathname = usePathname();

    const LANGS = {
        en: { name: "English", flag: "🇺🇸" },
        ar: { name: "العربية", flag: "🇸🇦" },
    };

    function handleChange(lang: string) {
        router.replace({ pathname }, { locale: lang });
        setIsOpen(false);
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className=" text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center
         cursor-pointer transition-all duration-300
          text-2xl hover:scale-110"
                aria-label="Change Language"
            >
                <MdLanguage/>
            </button>

            {isOpen && (
                <ul className="absolute z-50 top-12 start-0 w-40 rounded-xl px-3 py-2
          bg-white dark:bg-gray-900 backdrop-blur-lg
          border border-white/20 dark:border-gray-700 shadow-xl
          space-y-1 animate-fade-in-down"
                >
                    {Object.entries(LANGS).map(([key, { name, flag }]) => (
                        <li
                            key={key}
                            className={`flex items-center justify-between text-sm px-3 py-2 rounded-lg
                cursor-pointer transition-all duration-200
                ${locale === key
                                    ? "bg-main text-white"
                                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100"
                                }`}
                            onClick={() => handleChange(key)}
                        >
                            <span>{name}</span>
                            <span>{flag}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

