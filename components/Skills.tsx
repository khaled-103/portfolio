import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaGitAlt,FaSearch, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiGithub } from "react-icons/si";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations();
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" />,level:t("advanced") },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> ,level:t("advanced")},
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-2xl" /> ,level:t("advanced")},
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500 text-2xl" />,level:t("advanced") },
    { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> ,level:t("advanced")},
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-2xl" />,level:t("advanced") },
    { name: "Vue", icon: <FaVuejs className="text-green-500 text-2xl" />,level:t("intermdeiate") },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-2xl" />,level:t("advanced") },
    { name: "GitHub", icon: <SiGithub className="text-gray-700 dark:text-gray-300 text-2xl" />,level:t("advanced") },
    { name: "SEO", icon: <FaSearch className="text-teal-500  text-2xl" />,level:t("advanced") },
    { name: "Laravel", icon: <FaLaravel className="text-red-500  text-2xl" />,level:t("intermdeiate") },
  
  ];

  return (
    <SectionContainer id="skills" title={t('skills')}>
      <div>
        <ul className="grid grid-cols-12 items-center justify-center gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 flex gap-x-2">
              {skill.icon}
              <div className="flex flex-col">
                <span className=" text-gray-600 dark:text-gray-300">{skill.name}</span>
                <span className="text-[.65rem] capitalize text-gray-500 dark:text-gray-400">{skill.level}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
