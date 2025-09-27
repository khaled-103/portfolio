import { Link } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BiShow } from "react-icons/bi";

export default function ProjectCard({ item }: {
    item: {
        image: string;
        title: string;
        description: string;
        tags: {
            title: string;
            colorClass: string;
        }[];
        demoUrl: string;
    } | {
        image: string;
        title: string;
        description: string;
        tags: {
            title: string;
            colorClass: string;
        }[];
        demoUrl?: undefined;
    }
}) {
    const t = useTranslations();

    return (
        <div
            title={item.title}
            className="w-[82%] mx-auto sm:w-full group relative flex flex-col rounded-2xl overflow-hidden 
                    bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 
                    transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
            {/* Project Image */}
            <div className="h-64 lg:h-56 w-full relative overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.title + " photo"}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-101"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="px-2 py-5 flex-1 flex flex-col">
                <div className="mb-4">
                    <h2  className=" line-clamp-1 text-lg font-semibold capitalize mb-4 
                          text-gray-900 dark:text-white 
                          group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">
                        {item.title}
                    </h2>
                    <p className="text-[.9rem] text-gray-600 dark:text-gray-400  line-clamp-5">
                        {item.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className={`px-2 py-0.5 rounded-full text-xs font-medium 
                            bg-gray-200 dark:bg-gray-700 ${tag.colorClass}`}
                        >
                            #{tag.title}
                        </span>
                    ))}
                </div>

                {/* Demo Button */}
                {item.demoUrl && (
                    <div className="mt-auto">
                        <Link
                            href={item.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 
                            text-sm px-4 py-2 rounded-lg font-medium 
                            border border-blue-500 text-blue-600 
                            dark:border-blue-400 dark:text-blue-400 
                            transition-all hover:bg-blue-600 capitalize hover:text-white hover:shadow-lg"
                        >
                            <BiShow className=" text-base" />
                            {t('demo')}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}