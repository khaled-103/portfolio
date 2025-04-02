import { LanguagesKeysType } from "@/lib/types";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiGithub } from "react-icons/si";

export default function Skills({ lang }: { lang: LanguagesKeysType }) {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Vue", icon: <FaVuejs className="text-green-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-700 dark:text-gray-300" /> },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold dark:text-white">{lang === "ar" ? "المهارات" : "Skills"}</h2>
      <ul className="mt-4 grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            {skill.icon}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
