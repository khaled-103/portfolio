"use client";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaGitAlt, FaSearch,
  FaLaravel, FaNodeJs, FaFigma, FaSass, FaBootstrap
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiGithub, SiExpress, SiMongodb, SiWebpack,
  SiVite, SiTypescript, SiRedux, SiMysql,
  SiDocker,
  SiPostman,
  SiFastapi,
  SiGraphql,
  SiJest,
  SiGitlab
} from "react-icons/si";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";
import { DiScrum } from "react-icons/di";

export default function Skills() {
  const t = useTranslations();

  const skillsByCategory = {
    frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: t("advanced") },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: t("advanced") },
      { name: "Sass", icon: <FaSass className="text-pink-500" />, level: t("intermediate") },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" />, level: t("advanced") },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, level: t("advanced") },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: t("advanced") },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: t("advanced") },
      { name: "React", icon: <FaReact className="text-blue-400" />, level: t("advanced") },
      { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: t("intermediate") },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white" />, level: t("advanced") },
      { name: "Vue", icon: <FaVuejs className="text-green-500" />, level: t("intermediate") },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: t("basic") },
      { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, level: t("basic") },
      { name: "Laravel", icon: <FaLaravel className="text-red-500" />, level: t("intermediate") },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, level: t("intermediate") },
      { name: "Mysql", icon: <SiMysql className="text-blue-600" />, level: t("intermediate") },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: t("advanced") },
      { name: "GitHub", icon: <SiGithub className="text-gray-700 dark:text-gray-300" />, level: t("advanced") },
      { name: "Webpack", icon: <SiWebpack className="text-blue-500" />, level: t("intermediate") },
      { name: "Vite", icon: <SiVite className="text-purple-600" />, level: t("intermediate") },
      { name: "Figma", icon: <FaFigma className="text-purple-500" />, level: t("basic") },
      { name: "Docker", icon: <SiDocker className="text-blue-500" />, level: t("basic") },
      { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: t("intermediate") },
    ],

    other: [
      { name: "SEO", icon: <FaSearch className="text-teal-500" />, level: t("advanced") },
      { name: "Agile / Scrum", icon: <DiScrum className="text-pink-500" />, level: t("intermediate") },
      { name: "REST APIs", icon: <SiFastapi className="text-green-500" />, level: t("advanced") },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-600" />, level: t("basic") },
      { name: "Testing (Jest)", icon: <SiJest className="text-red-500" />, level: t("basic") },
      { name: "CI/CD", icon: <SiGitlab className="text-orange-600" />, level: t("basic") },
    ]

  };

  return (
    <SectionContainer id="skills" title={t("skills")}>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8">
        {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: categoryIndex * 0.15 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-gray-200 dark:border-gray-700 
                       bg-gradient-to-br from-white/70 to-gray-100/50 dark:from-gray-900/70 dark:to-gray-800/50 
                       shadow-lg backdrop-blur-xl p-6 hover:shadow-2xl transition-all duration-300"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-bold mb-6 capitalize text-gray-800 dark:text-gray-100 relative w-fit">
              {category}
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-transparent rounded-full"></span>
            </h3>

            {/* Skills */}
            <ul className="grid grid-cols-2 gap-4">
              {skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center gap-4 p-3 rounded-xl 
                             bg-white/60 dark:bg-gray-800/60 
                             shadow-sm hover:shadow-md 
                             hover:scale-[1.02] transition-all duration-300"
                >
                  <div className=" p-3 rounded-[50%] bg-gradient-to-tr from-gray-400/30 to-gray-600/30 dark:from-gray-500/20 dark:to-gray-700/20 shadow-inner">
                    {skill.icon}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                    <p className="text-xs mt-1 px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 dark:bg-gray-900/40 dark:text-gray-300 inline-block">
                      {skill.level}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
