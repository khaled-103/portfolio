"use client";
import { motion } from "framer-motion";
import { GiPositionMarker } from "react-icons/gi";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

export default function Experience() {
  const t = useTranslations();

  const experiences = [
    { title: t('trillium_soft'), date: "2022 - 2024", duration: t('years', { count: "+2" }), role: t('web_dev'), site: t('palestine') + " - " + t('gaza') },
    { title: t("freelancer"), date: "2022 - 2025", duration: t('years', { count: "+3" }), role: t("web_dev"), site: t("online") },
  ];
  return (
    <SectionContainer className="relative" id="experience" title={t("experience")}>
      <div className="relative border-s-4 border-gray-300 dark:border-gray-600 ms-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative mb-10 ms-6"
          >
            {/* Timeline Dot */}
            <span className="absolute -start-9 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-teal-500 to-purple-600 ring-4 ring-white dark:ring-gray-900 shadow-lg">
            </span>

            {/* Experience Card */}
           <div className="rounded-2xl border border-gray-200 dark:border-none bg-white/70 dark:bg-gray-800/60 backdrop-blur-md shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-teal-600 to-purple-600 text-transparent bg-clip-text">
                {exp.title}
              </h3>

              <div className="mt-3 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <MdOutlineWorkHistory className="text-yellow-500 text-lg" />
                  <p>{exp.role}</p>
                </div>

                <div className="flex items-center gap-2">
                  <GiPositionMarker className="text-teal-500 text-lg" />
                  <span className="capitalize">{exp.site}</span>
                </div>

                <div className="flex items-center gap-2">
                  <BsCalendarDate className="text-red-500 text-lg" />
                  <p>{exp.date} • {exp.duration}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}