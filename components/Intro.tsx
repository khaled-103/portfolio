import { getDictionary } from "@/lib/translate";
import { LanguagesKeysType } from "@/lib/types";
import BaseBtn from "./BaseBtn";
import Image from "next/image";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import { SlSocialTwitter ,SlSocialGithub  } from "react-icons/sl";

export default async function Intro({ lang }: { lang: LanguagesKeysType }) {
    const dictionary = await getDictionary(lang);
    return (
        <section className="pt-[4rem] pb-[3.7rem] flex justify-center gap-x-5 items-center">
            <div className="flex dark:text-white text-black flex-col">
                <span className="capitalize">{dictionary.hi_i_am}</span>
                <span className="capitalize text-main">{dictionary.khaled_ali}</span>
                <span className="uppercase font-bold">{dictionary.frontend}</span>
                <p className="text-base max-w-[40rem] my-2 font-light">{dictionary.intro_desc}</p>
                <BaseBtn className="">{dictionary.contanct_me}</BaseBtn>
            </div>
            <div>
                <div className="relative w-48 h-48 bg-gradient-to-b  from-main rounded-[50%] to-transparent">
                    <Image className="object-cover outline-offset-4 p-[.125rem]  object-top rounded-[50%]" fill src={"/assets/developer.jpg"} alt="developer image" />
                </div>
                <div className="flex gap-x-1 justify-center mt-2">
                    <TiSocialFacebookCircular className="dark:text-white text-black text-2xl cursor-pointer"/>
                    <SlSocialTwitter className="dark:text-white text-2xl text-black cursor-pointer"/>
                    <TiSocialLinkedinCircular className="dark:text-white text-black text-2xl cursor-pointer"/>
                    <SlSocialGithub className="dark:text-white text-black text-2xl cursor-pointer"/>
                </div>
            </div>
        </section>
    );
}