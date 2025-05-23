import { useTranslations } from "next-intl";
import SectionContainer from "./SectionContainer";
import BaseBtn from "./BaseBtn";
import { MdOutlineEmail } from "react-icons/md";
import { BiMessage, BiUser } from "react-icons/bi";

export default function ContactMe() {
  const t = useTranslations();
  return (
    <SectionContainer id="contact_me" title={t("contact_me")}>
      <form className="mt-4 max-w-160">
        <div className="relative dark:text-gray-100 text-gray-700">
          <input
            required
            type="text"
            placeholder={t("name")}
            className="w-full outline-none placeholder:text-sm placeholder:capitalize placeholder:text-gray-400 border-gray-400 dark:border-gray-500 py-2 pe-1 ps-8 mb-4 border rounded"
          />
          <BiUser className="absolute  start-2 top-3" />
        </div>
        <div className="relative  dark:text-gray-100 text-gray-700">
          <input
            required
            type="email"
            placeholder={t("email")}
            className="w-full outline-none placeholder:text-sm placeholder:capitalize placeholder:text-gray-400 border-gray-400 dark:border-gray-500 py-2 pe-1 ps-8 mb-4 border rounded"
          />
          <MdOutlineEmail className="absolute  start-2 top-3" />
        </div>
        <div className="relative  dark:text-gray-100 text-gray-700">
          <textarea
            required
            placeholder={t("message")}
            rows={6}
            className="w-full outline-none placeholder:text-sm placeholder:capitalize placeholder:text-gray-400 border-gray-400 dark:border-gray-500 py-2 pe-1 ps-8 mb-4 border rounded"
          />
          <BiMessage className="absolute start-2 top-3" />
        </div>

        <BaseBtn className="px-4">
          {t("send")}
        </BaseBtn>
      </form>
    </SectionContainer>
  );
}
