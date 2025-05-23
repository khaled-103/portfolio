import { useTranslations } from "next-intl";
import SocialMedia from "./SocialMedia";
export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="py-6">
     
      <div className="flex justify-center space-x-4">
        <SocialMedia/>
      </div>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} {t('rights_reserved')}.
      </p>
    </footer>
  );
}
