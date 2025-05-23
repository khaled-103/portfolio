import { useTranslations } from "next-intl";
import SectionContainer from "./SectionContainer";
import BaseCard from "./BaseCard";
import Image from "next/image";
import { FaAirbnb } from "react-icons/fa";

export default function Projects() {
    const t = useTranslations();
    const items = [
        {
            image: "/assets/exp1.png",
            title: t("projects_items.e_learning.title"),
            description: t("projects_items.e_learning.desc"),
            tags: [
                {
                    title: "Html,",
                    colorClass: "text-orange-500 dark:text-white"
                },
                {
                    title: "VUE JS",
                    colorClass: "text-green-500"
                },

                {
                    title: "LARAVEL",
                    colorClass: "text-red-500"
                },
            ],
        },
        {
            image: "/assets/exp2.png",
            title: t("projects_items.aptu.title"),
            description: t("projects_items.aptu.desc"),
            tags: [
                {
                    title: "React",
                    colorClass: "text-blue-400"
                },
                {
                    title: "Next.js",
                    colorClass: "text-black dark:text-white"
                },
                {
                    title: "Tailwind",
                    colorClass: "text-teal-500"
                },
            ],
            demoUrl: "https://google.com"
        },
        {
            image: "/assets/exp1.png",
            title: t("projects_items.alfajri.title"),
            description: t("projects_items.alfajri.desc"),
            tags: [

                {
                    title: "Next.js",
                    colorClass: "text-black dark:text-white"
                },
                {
                    title: "React",
                    colorClass: "text-blue-400"
                },
                {
                    title: "Tailwind",
                    colorClass: "text-teal-500"
                },
            ],
            demoUrl: "https://google.com"
        },
        {
            image: "/assets/exp3.png",
            title: t("projects_items.qanuni.title"),
            description: t("projects_items.qanuni.desc"),
            tags: [

                {
                    title: "Next.js",
                    colorClass: "text-black dark:text-white"
                },

                {
                    title: "Tailwind",
                    colorClass: "text-teal-500"
                },
            ],
            demoUrl: "https://google.com"
        }
    ];
    return (
        <SectionContainer id="projects" title={t('projects')}>
            <div className="grid grid-cols-12 gap-3">
                {items.map((item, index) => {
                    return (
                        <BaseCard gradiant={false} className="col-span-11 sm:col-span-6  md:col-span-4 lg:col-span-3  group" key={index}>
                            <div className="h-40 relative transition-transform group-hover:scale-101">
                                <Image src={item.image} alt={item.title + " photo"} fill />
                            </div>
                            <h2 className="dark:text-gray-200 line-clamp-1 text-gray-800 font-medium text-lg mb-2 mt-4 capitalize">{item.title}</h2>
                            <p className=" text-[.85rem] line-clamp-4 text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, tagIndex) => <span className={`text-xs ${tag.colorClass} capitalize`} key={tagIndex}>#{tag.title}</span>)}
                            </div>
                            {item.demoUrl && <a className="flex mt-2 w-fit  rounded-sm border text-gray-700 dark:text-gray-200 gap-x-1 py-1 px-2 transition-colors hover:text-white hover:bg-purple-600 " href={item.demoUrl} target="_blank" rel="noopener noreferrer">
                                <FaAirbnb className="text-sm" />
                                <span className="text-xs">Demo</span>
                            </a>}
                        </BaseCard>
                    );
                })}
            </div>
        </SectionContainer>
    );
}