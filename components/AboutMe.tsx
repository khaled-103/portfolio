"use client";
import SectionContainer from "./SectionContainer";
import BaseCard from "./BaseCard";
import { IoSchoolOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdWorkspacePremium } from "react-icons/md";
import { motion } from 'framer-motion';
import { ReactNode } from "react";
import { useTranslations } from "next-intl";



export default function AboutMe() {
    const t = useTranslations();
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <SectionContainer title={t('about_me')}>
            <motion.p
                className="text-gray-600 text-base text-justify dark:text-gray-200 mb-8 max-w-2xl "
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {t('about_desc')}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                    <AboutCard icon={<IoSchoolOutline />} title={t('education')} desc={t('computer_engineer')} />
                </motion.div>
                <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                    <AboutCard icon={<LuShoppingBag />} title={t('experience')} desc={t('years', { count: "+2" })} />
                </motion.div>
                <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
                    <AboutCard icon={<MdWorkspacePremium />} title={t('projects')} desc={t('completed', { count: "+10" })} />
                </motion.div>
                <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}>
                    <AboutCard icon={<FiPhoneCall />} title={t('opportunities')} desc={t('open_to_work')} />
                </motion.div>
            </div>
        </SectionContainer>
    );
}

function AboutCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
    return (
        <BaseCard className="min-h-[220px] transition-all duration-500 group">
            <div className="text-5xl mb-5 bg-gradient-to-r from-blue-500 to-orange-500 p-4 rounded-full text-white drop-shadow-lg">{icon}</div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-orange-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 bg-clip-text text-transparent capitalize transition-colors duration-300">
                {title}
            </h3>
            <p className="capitalize text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium max-w-xs transition-colors duration-300">{desc}</p>
        </BaseCard>
    );
}