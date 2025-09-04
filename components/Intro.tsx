import BaseBtn from "./BaseBtn";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SocialMedia from "./SocialMedia";
import { Link } from "@/lib/i18n/navigation";
import SectionContainer from "./SectionContainer";

export default function Intro() {
    const t = useTranslations();
    return (
        <SectionContainer
            id="home"
            withMotion={false}
            className="flex  py-12 bg-white dark:bg-gray-900"
        >
            <div className=" w-full grid lg:grid-cols-2 gap-8 items-center md:gap-12 ">
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <div className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                        {t('hi_i_am')}
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="text-main">{t('khaled_ali')}</span>
                    </h1>

                    <h2 className="text-2xl sm:text-3xl capitalize font-semibold text-gray-700 dark:text-gray-300 mb-6">
                        {t('web_developer')}
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                        {t('intro_desc')}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 gap-x-1">
                        <BaseBtn className="w-full sm:w-auto">
                            <Link href="#contact_me" className="px-6 py-3 block font-medium text-center">
                                {t('contact_me')}
                            </Link>
                        </BaseBtn>
                        <SocialMedia />
                    </div>
                </div>

                {/* Image - Optimized */}
                <div className="order-1 lg:order-2 relative w-full max-w-2xs mx-auto group">
                    <div className="pb-[100%] relative transition-transform duration-500 hover:scale-105"> {/* 1:1 Aspect Ratio Container */}
                        {/* Animated background elements */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-main/20 to-blue-500/20 -rotate-3 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105"></div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rotate-3 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105"></div>
                        
                        {/* Main image with modern styling */}
                        <Image
                            className="absolute rounded-2xl object-cover object-top w-full h-full border-4 border-white dark:border-gray-800 shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:border-main/20"
                            src="/assets/developer.jpg"
                            alt="Khaled Ali - Frontend Developer"
                            width={288}
                            height={288}
                            quality={90}
                            priority
                        />
                        
                    </div>
                </div>
            </div>
        </SectionContainer>
    );


}
