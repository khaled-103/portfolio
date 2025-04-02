import SectionContainer from "./SectionContainer";
import BaseCard from "./BaseCard";
import { IoSchoolOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdWorkspacePremium } from "react-icons/md";
import { LanguagesKeysType } from "@/lib/types";
import { getDictionary } from "@/lib/translate";
import { replaceParams } from "@/lib";
import { ReactNode } from "react";

export default async function AboutMe({ lang }: { lang: LanguagesKeysType }) {
    const dictionary = await getDictionary(lang);

    return (
        <SectionContainer title="about me">
            <p className="text-gray-600 text-base text-justify dark:text-gray-200 mb-5">Front-end developer turning ideas into seamless, interactive web experiences. I blend design and code to craft user-friendly interfaces. My passion for coding drives me to create dynamic and engaging digital experiences.</p>
            <div className="grid grid-cols-12 gap-2 ">
                <AboutCard icon={<IoSchoolOutline className="text-white"/>} title={dictionary.education} desc={dictionary.computer_engineer} />
                <AboutCard icon={<LuShoppingBag className="text-white"/>} title={dictionary.experince} desc={replaceParams(dictionary.years, ["+2"])} />
                <AboutCard icon={<MdWorkspacePremium className="text-white"/>} title={dictionary.projects} desc={replaceParams(dictionary.completed, ["+10"])} />
                <AboutCard icon={<FiPhoneCall className="text-white"/>} title={dictionary.opportunities} desc={dictionary.open_to_work} />
            </div>
        </SectionContainer>
    );
}

function AboutCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
    return (
        <BaseCard className="px-6 ">
            {icon}
            <h4 className="capitalize  mt-3 mb-1 dark:text-white text-gray-700">{title}</h4>
            <span className="capitalize text-center text-[.72rem] font-extralight dark:text-gray-200 text-gray-500">{desc}</span>
        </BaseCard>
    );
}