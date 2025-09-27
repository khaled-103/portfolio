import { ReactNode } from "react";
import BaseCard from "./BaseCard";

export default function AboutCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <BaseCard className="transition-all duration-150">
      {/* أيقونة مع تدرج بسيط */}
      <div
        className="text-3xl mb-5 
        bg-gradient-to-br from-blue-300 via-blue-200 to-orange-200
        p-4 rounded-3xl text-gray-900 shadow-md group-hover:shadow-lg transition-transform duration-300 group-hover:scale-105"
      >
        {icon}
      </div>

      {/* العنوان */}
      <h3
        className="text-xl font-bold mb-3 
        bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent dark:text-white capitalize transition-transform group-hover:scale-105"
      >
        {title}
      </h3>

      {/* الوصف */}
      <p
        className="capitalize text-base text-gray-700 dark:text-gray-300 
        font-medium max-w-xs leading-relaxed"
      >
        {desc}
      </p>
    </BaseCard>
  );
}
