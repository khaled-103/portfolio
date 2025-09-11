import { useTranslations } from "next-intl";
import BaseBtn from "./BaseBtn";

export default function DownloadCv({className}:{className?:string}) {
    const t = useTranslations();
    return (
        <BaseBtn className={className}>
            <a className="block py-2 px-2" download href="/assets/cv.pdf">{t('download_cv')}</a>
        </BaseBtn>
    );

}