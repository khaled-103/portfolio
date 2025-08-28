"use client";
import { ComponentProps, ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function SectionContainer({ id, title, children, className }: ComponentProps<"section"> & { title: string, children: ReactNode }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                }
            },
            { threshold: 0.1 }
        );
        const sectionRefValue = sectionRef.current;
        
        if (sectionRefValue) {
            observer.observe(sectionRefValue);
        }
        
        return () => {
            if (sectionRefValue) {
                observer.unobserve(sectionRefValue);
            }
        };
    }, []);

    return (
        <motion.section 
            id={id} 
            ref={sectionRef}
            className={`${className} my-10 opacity-0 transition-all duration-700 section-visible:opacity-100 transform translate-y-8 section-visible:translate-y-0`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            <motion.h2 
                className="font-bold text-2xl capitalize text-black dark:text-white mb-6 relative inline-block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {title}
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {children}
            </motion.div>
        </motion.section>
    );
}