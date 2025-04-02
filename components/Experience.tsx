import { LanguagesKeysType } from "@/lib/types";

export default function Experience({ lang }: { lang: LanguagesKeysType }) {
  const experiences = {
    en: [
      { title: "Trillium Soft", duration: "2 years", role: "Software Developer" },
      { title: "Freelancer", duration: "2 years", role: "Developer" },
    ],
    ar: [
      { title: "تريليوم سوفت", duration: "سنتان", role: "مطور برمجيات" },
      { title: "مستقل", duration: "سنتان", role: "مطور" },
    ],
  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold dark:text-white">{lang === "ar" ? "الخبرات" : "Experience"}</h2>
      <div className="mt-4 border-l-2 border-gray-300 dark:border-gray-600">
        {experiences[lang].map((exp, index) => (
          <div key={index} className="ml-4 mb-6 relative">
            <div className="absolute -left-2 w-4 h-4 bg-blue-500 rounded-full dark:bg-blue-700"></div>
            <h3 className="text-xl font-semibold dark:text-gray-200">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{exp.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


