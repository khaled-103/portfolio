"use client";
import { useTranslations } from "next-intl";
import SectionContainer from "./SectionContainer";
import useLoadMore from "@/lib/hooks/useLoadMore";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const t = useTranslations();
  const items = [
    {
      image: "/assets/proj-million1.png",
      title: t("projects_items.million.title"),
      description: t("projects_items.million.desc"),
      tags: [
        { title: "Html", colorClass: "text-orange-500" },
        { title: "CSS", colorClass: "text-blue-500" },
        { title: "React.js", colorClass: "text-blue-500" },
      ],
      demoUrl: "https://68fddb1949c0d50008193d42--who-will-million.netlify.app",
    },
    {
      image: "/assets/proj-aptu.svg",
      title: t("projects_items.aptu.title"),
      description: t("projects_items.aptu.desc"),
      tags: [
        { title: "Html", colorClass: "text-orange-500" },
        { title: "CSS", colorClass: "text-blue-500" },
        { title: "Vue.js", colorClass: "text-green-500" },
      ],
      demoUrl: "https://splendorous-kulfi-f7f86d.netlify.app",
    },
    {
      image: "/assets/proj-alfjri.png",
      title: t("projects_items.alfajri.title"),
      description: t("projects_items.alfajri.desc"),
      tags: [
        { title: "Html", colorClass: "text-orange-500" },
        { title: "CSS", colorClass: "text-blue-500" },
        { title: "Laravel", colorClass: "text-red-500" },
      ],
      demoUrl: "https://alfajri.so",
    },
    {
      image: "/assets/proj-stc.png",
      title: t("projects_items.stc.title"),
      description: t("projects_items.stc.desc"),
      tags: [
        { title: "Html", colorClass: "text-orange-500" },
        { title: "CSS", colorClass: "text-blue-500" },
        { title: "Laravel", colorClass: "text-red-500" },
      ],
      demoUrl: "https://stciq.com",
    },
    {
      image: "/assets/proj-anhargo.png",
      title: t("projects_items.anhargo.title"),
      description: t("projects_items.anhargo.desc"),
      tags: [
        { title: "Html", colorClass: "text-orange-500" },
        { title: "CSS", colorClass: "text-blue-500" },
        { title: "Laravel", colorClass: "text-red-500" },
      ],
      demoUrl: "https://anhaaragro.com",
    }, {
      image: "/assets/proj-elearn.png",
      title: t("projects_items.e_learning.title"),
      description: t("projects_items.e_learning.desc"),
      tags: [
        { title: "Html", colorClass: "text-orange-500" },
        { title: "Vue.js", colorClass: "text-green-500" },
        { title: "Laravel", colorClass: "text-red-500" },
      ],
    },
  ];
  const [projectsList,loadMore] = useLoadMore(items);
  return (
    <SectionContainer id="projects" title={t("projects")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {projectsList.map((item, index) => (
          <ProjectCard item={item} key={index}/>
        ))}
      </div>
      {/* Show More Button */}
        {items.length > projectsList.length && (
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={loadMore}
              className="flex cursor-pointer items-center justify-center gap-2 
              text-sm px-4 py-2 rounded-lg font-medium 
              border border-blue-500 text-blue-600 
              dark:border-blue-400 dark:text-blue-400 
              transition-all hover:bg-blue-600 capitalize hover:text-white hover:shadow-lg"
            >
              {/* <BiShow className=" text-base" /> */}
              {t('show_more')}
            </button>
          </div>
        )}
    </SectionContainer>
  );
}
