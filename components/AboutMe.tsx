"use client";
import SectionContainer from "./SectionContainer";
import { IoSchoolOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdWorkspacePremium } from "react-icons/md";
import { motion } from 'framer-motion';
import { useTranslations } from "next-intl";
import AboutCard from "./AboutCard";



export default function AboutMe() {
    const t = useTranslations();
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <SectionContainer title={t('about_me')}>
            <motion.p
                className="text-base text-justify sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed  md:max-w-3xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {t('about_desc')}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
                <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                    <AboutCard icon={<IoSchoolOutline />} title={t('education')} desc={t('computer_engineer')} />
                </motion.div>
                <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                    <AboutCard icon={<LuShoppingBag />} title={t('experience')} desc={t('years', { count: "+3" })} />
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

