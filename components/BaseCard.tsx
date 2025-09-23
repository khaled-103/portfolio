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
            className={`relative rounded-2xl overflow-hidden group transition-all duration-300 ${className}`}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring" }}
            
        >
            {/* خلفية متدرجة */}
            <div
                className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 blur-xl transition-all duration-500"
            >
                <div className="w-full h-full 
                    bg-gradient-to-br 
                    from-blue-100 via-orange-100 to-white 
                    dark:from-blue-500 dark:via-orange-400 dark:to-blue-300" 
                />
            </div>

            {/* تأثير زجاجي يدعم Light/Dark */}
            <div className="absolute inset-0 z-0 
                bg-white/60 dark:bg-black/40 
                backdrop-blur-lg rounded-2xl 
                border border-gray-200/40 dark:border-zinc-700/40" 
            />

            {/* محتوى الكارد */}
            <div
                className="relative z-10 w-full h-full p-px rounded-2xl 
                shadow-sm hover:shadow-lg transition-all duration-500"
            >
                <div
                    className="w-full h-full rounded-[calc(1rem-1px)] 
                    p-6 md:p-8 flex flex-col items-center justify-center text-center"
                >
                    {children}
                </div>
            </div>
        </motion.div>
    
    );
}
