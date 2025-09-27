"use client"
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function BaseCard({
    className = "",
    children,
}: {
    gradiant?: boolean;
    className?: string;
    children: ReactNode;
}) {
        return (
        <motion.div
            className={`relative h-full rounded-3xl overflow-hidden group transition-all duration-300 ${className}`}
            whileHover={{ scale: 1.03 }}
        >
            {/* خلفية متدرجة ناعمة */}
            <div className="absolute inset-0 z-0 opacity-70 group-hover:opacity-90 blur-2xl transition-all duration-500">
                <div className="w-full h-full 
                    bg-gradient-to-br 
                    from-blue-100 via-blue-50 to-orange-100 
                    dark:from-blue-900 dark:via-blue-800 dark:to-orange-800" 
                />
            </div>

            {/* محتوى الكارد */}
            <div className="relative z-10 w-full h-full p-1 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="w-full h-full rounded-[calc(1rem-1px)] p-6 md:p-8 flex flex-col items-center justify-center text-center">
                    {children}
                </div>
            </div>
        </motion.div>
    );

}
