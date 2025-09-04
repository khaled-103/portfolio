"use client";
import { ComponentProps, ReactNode } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function SectionContainer({
    id,
    title,
    children,
    withMotion = true
}: ComponentProps<"section"> & { withMotion?:boolean,title?: string; children: ReactNode }) {
    const {locale} = useParams();
    return (
        <div id={id} className="min-h-[20vh] my-24 flex flex-col justify-center" key={id + "_" + locale }>
            <motion.section
                initial={ { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.8 }}
            >
                 <motion.h2
                    className="font-extrabold text-3xl md:text-4xl capitalize text-gray-900 dark:text-white mb-8 relative inline-block group"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true,amount: "some" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {title}
                    <span className="absolute -bottom-2 start-0 w-1/4 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true,amount: "some" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {children}
                </motion.div>
            </motion.section>
               </div>

    );
}
