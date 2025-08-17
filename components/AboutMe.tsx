import SectionContainer from "./SectionContainer";
import BaseCard from "./BaseCard";
import { IoSchoolOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdWorkspacePremium } from "react-icons/md";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";



export default function AboutMe() {
    const t =  useTranslations();

    return (
        <SectionContainer title={t('about_me')}>
            <p className="text-gray-600 text-base text-justify dark:text-gray-200 mb-5">{t('about_desc')}</p>
            <div className="grid grid-cols-12 md:gap-3 gap-2 ">
                <AboutCard icon={<IoSchoolOutline className="dark:text-white mx-auto text-gray-700 text-2xl"/>} title={t('education')} desc={t('computer_engineer')} />
                <AboutCard icon={<LuShoppingBag className="dark:text-white mx-auto text-gray-700 text-2xl"/>} title={t('experience')} desc={t('years',{count:"+2"})} />
                <AboutCard icon={<MdWorkspacePremium className="dark:text-white mx-auto text-gray-700 text-2xl"/>} title={t('projects')} desc={t('completed', {count:"+10"})} />
                <AboutCard icon={<FiPhoneCall className="dark:text-white mx-auto text-gray-700 text-2xl"/>} title={t('opportunities')} desc={t('open_to_work')} />
            </div>
        </SectionContainer>
    );
}

function AboutCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
    return (
        <BaseCard className="relative sm:col-span-3 lg:col-span-2 text-center col-span-4">
            {icon}
            <h2 className="capitalize mt-3 mb-1 dark:text-white text-gray-700">{title}</h2>
            <span className="capitalize text-center text-[.72rem] font-extralight dark:text-gray-200 text-gray-500">{desc}</span>
        </BaseCard>
    );
}