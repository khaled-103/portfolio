import { ReactNode } from "react";
import BaseCard from "./BaseCard";

export default function AboutCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
    return (
        <BaseCard className=" transition-all duration-100 group">
            {/* أيقونة عصرية بتدرج */}
            <div className="text-5xl mb-5 
                bg-gradient-to-br from-blue-500 to-orange-400 
                p-4 rounded-2xl text-white shadow-md group-hover:shadow-lg">
                {icon}
            </div>

            {/* العنوان */}
            <h3 className="text-xl font-bold mb-3 
                bg-gradient-to-r from-blue-600 to-orange-500 
                bg-clip-text text-transparent dark:text-white capitalize transition-transform 
                group-hover:scale-105">
                {title}
            </h3>

            {/* الوصف */}
            <p className="capitalize text-sm 
                text-gray-700 dark:text-gray-300 
                group-hover:text-gray-900 dark:group-hover:text-gray-100 
                font-medium max-w-xs transition-colors leading-relaxed">
                {desc}
            </p>
        
        </BaseCard>
    );
}