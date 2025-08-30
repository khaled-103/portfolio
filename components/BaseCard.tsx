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
            className={`relative rounded-2xl overflow-hidden group transition-all duration-100 ${className}`}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            {/* Enhanced background with blue-orange gradient for a modern feel */}
            <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.5) 0%, rgba(249, 115, 22, 0.5) 100%)",
                }}
            />

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-100 blur-xl"
                style={{
                    background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.6) 0%, rgba(249, 115, 22, 0.6) 100%)",
                }}
            />

            {/* The main card content area with improved styling */}
            <div
                className="relative z-10 w-full h-full p-px rounded-2xl
                border border-gray-200/80 dark:border-zinc-700/80
                shadow-sm hover:shadow-md transition-all duration-300"
            >
                <div
                    className="w-full h-full rounded-[calc(1rem-1px)] p-6 md:p-8
                    
                    flex flex-col items-center justify-center text-center"
                >
                    {children}
                </div>
            </div>
        </motion.div>
    );
}
