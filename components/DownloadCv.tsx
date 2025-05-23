import { useTranslations } from "next-intl";
import BaseBtn from "./BaseBtn";

export default function DownloadCv() {
    const t = useTranslations();
    return (
        <BaseBtn className="animate-bounce">
            <a download href="/assets/cv.pdf">{t('download_cv')}</a>
        </BaseBtn>
    );

}