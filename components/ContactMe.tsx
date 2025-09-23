"use client";
import { useTranslations } from "next-intl";
import SectionContainer from "./SectionContainer";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";
import { contactInfo } from "@/lib/constants";

export default function ContactMe() {
  const t = useTranslations();

  return (
    <SectionContainer id="contact_me" title={t("contact_me")}>
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch max-w-6xl mx-auto">

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2  w-full p-6 rounded-2xl shadow-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
            {t("let_s_connect")}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t("contact_description")}
          </p>

          <div className="space-y-5 mb-4">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <MdOutlineEmail className="text-2xl text-blue-500 animate-pulse" />
              <span className="text-base">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
              <FaPhone className="text-2xl text-green-500" />
              <span className="text-base" dir="ltr">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
              <FaMapMarkerAlt className="text-2xl text-red-500" />
              <span className="text-base capitalize">{t(contactInfo.city)}, {t(contactInfo.country)}</span>
            </div>
          </div>

          <SocialMedia />
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full p-6 rounded-2xl shadow-lg bg-gradient-to-br bg-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
        >
          <form className="space-y-6 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white/70 to-gray-100/70 dark:from-gray-900/70 dark:to-gray-800/70 backdrop-blur-xl">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-300 text-gray-900 dark:text-gray-100"
              />
              <label
                htmlFor="name"
                className="absolute start-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
              >
                {t("name")}
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-300 text-gray-900 dark:text-gray-100"
              />
              <label
                htmlFor="email"
                className="absolute start-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
              >
                {t("email")}
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                required
                placeholder=" "
                rows={5}
                className="peer w-full px-4 pt-6 pb-2 rounded-2xl border border-gray-300 dark:border-gray-600 bg-transparent shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-300 text-gray-900 dark:text-gray-100 resize-none"
              />
              <label
                htmlFor="message"
                className="absolute start-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
              >
                {t("message")}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              {t("send")}
            </button>
          </form>

        </motion.div>
      </div>
    </SectionContainer>
  );
}
