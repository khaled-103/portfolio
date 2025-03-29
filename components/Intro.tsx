import { getDictionary } from "@/lib/translate";
import { LanguagesKeysType } from "@/lib/types";
import BaseBtn from "./BaseBtn";
import Image from "next/image";
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default async function Intro({ lang }: { lang: LanguagesKeysType }) {
    const dictionary = await getDictionary(lang);
    return (
        <section className="pt-[4rem] pb-[3.7rem] md:justify-between justify-center flex md:flex-nowrap flex-wrap  items-center">
            <div className="md:hidden block">
                <DevPhoto />
            </div>

            <div className="flex  dark:text-white  text-black flex-col">
                <span className="capitalize">{dictionary.hi_i_am}</span>
                <span className="capitalize text-main">{dictionary.khaled_ali}</span>
                <span className="uppercase text-2xl font-bold ">{dictionary.frontend}</span>
                <p className="text-base max-w-[42rem] text-gray-600 dark:text-gray-300 my-2 font-light">{dictionary.intro_desc}</p>
                <BaseBtn className="">{dictionary.contanct_me}</BaseBtn>
            </div>
            <div className="md:block hidden">
                <DevPhoto />
            </div>
        </section>
    );
}

function DevPhoto() {
    return (
        <div className="flex  gap-x-2 items-center">
            <div className="flex flex-col gap-y-2 mt-2">
                <FaFacebookSquare className="text-gray-600 dark:text-gray-200 text-lg cursor-pointer" />
                <FaGithub className="text-gray-600 dark:text-gray-200 text-lg cursor-pointer" />
                <FaInstagram className="text-gray-600 dark:text-gray-200 text-lg cursor-pointer" />
                <FaLinkedin className="text-gray-600 dark:text-gray-200 text-lg cursor-pointer" />
            </div>
            <div className="relative w-56 h-56 ">
                <Image className="object-cover border-4 border-white object-top rounded-[50%]" fill src={"/assets/developer.jpg"} alt="developer image" />
            </div>
        </div>
    );
}