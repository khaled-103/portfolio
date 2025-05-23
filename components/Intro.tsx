import BaseBtn from "./BaseBtn";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SocialMedia from "./SocialMedia";
import { Link } from "@/lib/i18n/navigation";

export default function Intro() {
    const t = useTranslations();
    return (
        <section id="home" className="pt-[4rem] md:justify-between  md:flex-row flex-col-reverse flex ">
            <div className="flex  dark:text-white  text-black flex-col">
                <span className="capitalize">{t('hi_i_am')}</span>
                <span className="capitalize text-main">{t('khaled_ali')}</span>
                <span className="uppercase text-2xl font-bold ">{t('frontend')}</span>
                <p className="text-base max-w-[42rem] text-gray-600 dark:text-gray-300 my-2 font-light">{t('intro_desc')}</p>
                <BaseBtn><Link href={"#contact_me"}>{t('contact_me')}</Link></BaseBtn>
            </div>
            <div className="flex self-center gap-x-2 items-center">
                <div className="flex flex-col gap-y-3 mt-2">
                    <SocialMedia />
                    
                </div>
                <div className="relative w-56 h-56 ">
                    <Image className="object-cover border-4 border-zinc-600 dark:border-white object-top rounded-[50%]" fill src={"/assets/developer.jpg"} alt="developer image" />
                </div>
            </div>
        </section>
    );
}
