import BaseBtn from "./BaseBtn";
import Image from "next/image";
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Intro() {
    const t = useTranslations();
    return (
        <section className="pt-[4rem] md:justify-between  md:flex-row flex-col-reverse flex ">
            <div className="flex  dark:text-white  text-black flex-col">
                <span className="capitalize">{t('hi_i_am')}</span>
                <span className="capitalize text-main">{t('khaled_ali')}</span>
                <span className="uppercase text-2xl font-bold ">{t('frontend')}</span>
                <p className="text-base max-w-[42rem] text-gray-600 dark:text-gray-300 my-2 font-light">{t('intro_desc')}</p>
                <BaseBtn className="">{t('contanct_me')}</BaseBtn>
            </div>
            <div className="flex self-center gap-x-2 items-center">
                <div className="flex flex-col gap-y-2 mt-2">
                    <FaFacebookSquare className="text-gray-600 dark:text-gray-200 text-lg cursor-pointer" />
                    <FaGithub className="text-gray-600 dark:text-gray-200 text-lg cursor-pointer" />
                    <FaInstagram className="text-gray-600 dark:text-gray-200 text-lg cursor-pointer" />
                    <FaLinkedin className="text-gray-600 dark:text-gray-200 text-lg cursor-pointer" />
                </div>
                <div className="relative w-56 h-56 ">
                    <Image className="object-cover border-4 border-gray-400 dark:border-white object-top rounded-[50%]" fill src={"/assets/developer.jpg"} alt="developer image" />
                </div>
            </div>
        </section>
    );
}
