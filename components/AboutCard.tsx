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
  bg-gradient-to-br from-indigo-400 via-blue-500 to-violet-500
  p-4 rounded-3xl text-white shadow-md group-hover:shadow-lg 
  transition-transform duration-300 group-hover:scale-105
  dark:from-indigo-500 dark:via-blue-600 dark:to-violet-600"
>
  {icon}
</div>

{/* العنوان */}
<h3
  className="text-xl font-bold mb-3 
  bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent 
  dark:from-blue-400 dark:to-indigo-300 capitalize 
  transition-transform group-hover:scale-105"
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
