import { GiPositionMarker } from "react-icons/gi";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";
import { MdOutlineKeyboardArrowRight, MdOutlineWorkHistory } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

export default function Experience() {
  const t = useTranslations();

  const experiences = [
    { title: t('trillium_soft'), date: "2022 - 2024", duration: t('years', { count: "+2" }), role: t('web_dev'), site: t('palestine') + t('gaza') },
    { title: t("freelancer"), date: "2022 - 2024", duration: t('years', { count: "+2" }), role: t("web_dev"), site: t("online") },
  ];

  return (
    <SectionContainer title={t('experience')}>
      <div className="relative md:pe-12 w-fit flex gap-x-8 sm:gap-x-20 md:gap-x-32 border-b-2 border-gray-600 dark:border-gray-200">
        {experiences.map((exp, index) => (
          <div key={index} className="py-6  space-y-2 relative">
            <div className="absolute -bottom-[.85rem] w-3 h-3 rounded-[50%] dark:bg-main-dark bg-white border-gray-600 dark:border-gray-200 border-2"></div>
            <h3 className="text-lg mb-4 font-medium text-center py-0.5 bg-gradient-to-r  from-teal-800 to-purple-800 text-white rounde-sm">
              {exp.title}
            </h3>
            <div className="flex gap-x-2">
              <MdOutlineWorkHistory className="text-yellow-500 text-lg" />
              <p className="text-gray-600 dark:text-gray-200">{exp.role}</p>
            </div>
            <div className="flex gap-x-2">
              <GiPositionMarker className="text-teal-500 text-lg" />
              <span className="capitalize text-gray-600 dark:text-gray-200">{exp.site}</span>
            </div>
            <div className="flex gap-x-2">
              <BsCalendarDate className="text-lg text-red-500" />
              <p className="text-sm text-gray-600 dark:text-gray-200">{exp.date}</p>
            </div>
          </div>
        ))}
        <MdOutlineKeyboardArrowRight className="absolute -bottom-[.659rem] -end-[.6rem]  text-xl dark:text-white text-main-dark rtl:rotate-180" />
      </div>
    </SectionContainer>
  );
}


