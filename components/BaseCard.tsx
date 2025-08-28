"use client"
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function BaseCard({
    gradiant = true,
    className = "",
    children,
}: {
    gradiant?: boolean;
    className?: string;
    children: ReactNode;
}) {
    return (
        <motion.div
            className={`${gradiant
                    ? "transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden"
                    : "border dark:border-gray-500 border-gray-300"
                } ${className} relative rounded-lg p-[.135rem]`}
            whileHover={{
                boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
            }}
        >
            {gradiant && (
                <motion.div
                    className="absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent dark:via-white/90 via-gray-600 to-transparent"
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            )}
            <motion.div
                className="relative z-10 rounded-lg bg-white dark:bg-main-dark py-3 md:px-3 px-2 h-full"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
