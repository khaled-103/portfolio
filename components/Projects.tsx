import { useTranslations } from "next-intl";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import { BiShow } from "react-icons/bi";
import { Link } from "@/lib/i18n/navigation";

export default function Projects() {
  const t = useTranslations();
  const items = [
    
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
      image: "/assets/alfjri.svg",
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
      image: "/assets/proj-stc.svg",
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
      image: "/assets/proj-anhargo.svg",
      title: t("projects_items.anhargo.title"),
      description: t("projects_items.anhargo.desc"),
      tags: [
        { title: "Html", colorClass: "text-orange-500" },
        { title: "CSS", colorClass: "text-blue-500" },
        { title: "Laravel", colorClass: "text-red-500" },
      ],
      demoUrl: "https://anhaaragro.com",
    },{
      image: "/assets/proj-elearn.svg",
      title: t("projects_items.e_learning.title"),
      description: t("projects_items.e_learning.desc"),
      tags: [
        { title: "Html", colorClass: "text-orange-500" },
        { title: "Vue.js", colorClass: "text-green-500" },
        { title: "Laravel", colorClass: "text-red-500" },
      ],
    },
    // {
    //   image: "/assets/exp3.png",
    //   title: t("projects_items.qanuni.title"),
    //   description: t("projects_items.qanuni.desc"),
    //   tags: [
    //     { title: "Html", colorClass: "text-orange-500" },
    //     { title: "VUE.JS", colorClass: "text-green-500" },
    //     { title: "Laravel", colorClass: "text-red-500" },
    //   ],
    //   demoUrl: "https://alqanoni.com/",
    // },
    // {
    //   image: "/assets/exp1.png",
    //   title: t("projects_items.freelancer.title"),
    //   description: t("projects_items.freelancer.desc"),
    //   tags: [
    //     { title: "React JS", colorClass: "text-blue-500" },
    //     { title: "Next.js", colorClass: "text-black dark:text-white" },
    //     { title: "Tailwind", colorClass: "text-teal-500" },
    //   ],
    //   demoUrl: "https://google.com",
    // },
  ];

  return (
    <SectionContainer id="projects" title={t("projects")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col rounded-2xl overflow-hidden 
            bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 
            transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="h-72 md:h-52 w-full relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title + " photo"}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-101"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="px-2 py-5 flex-1 flex flex-col">
              <div className="mb-4">
                <h2 className="h-12 overflow-ellipsis text-xl font-semibold capitalize mb-4 
                  text-gray-900 dark:text-white 
                  group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 line-clamp-4">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2 py-0.5 rounded-full text-xs font-medium 
                    bg-gray-200 dark:bg-gray-700 ${tag.colorClass}`}
                  >
                    #{tag.title}
                  </span>
                ))}
              </div>

              {/* Demo Button */}
              {item.demoUrl && (
                <div className="mt-auto">
                  <Link
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 
                    text-sm px-4 py-2 rounded-lg font-medium 
                    border border-blue-500 text-blue-600 
                    dark:border-blue-400 dark:text-blue-400 
                    transition-all hover:bg-blue-600 capitalize hover:text-white hover:shadow-lg"
                  >
                    <BiShow className=" text-base" />
                    {t('demo')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
