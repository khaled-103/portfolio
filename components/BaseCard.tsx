import { ReactNode } from "react";

export default function BaseCard({ gradiant=true,className, children }: {gradiant?:boolean, className?: string, children: ReactNode }) {
    return (
        <div className={`${gradiant ? " transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  overflow-hidden" : "border dark:border-gray-500 border-gray-300"} ${className} relative rounded-lg p-[.135rem] `}>
            {gradiant && <div className="animate-slow-spin absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent dark:via-white/90 via-gray-600 to-transparent"></div>}
            <div className="relative z-10 rounded-lg bg-white dark:bg-main-dark py-3 md:px-3 px-2 h-full">
                {children}
            </div>
        </div>
    );
}