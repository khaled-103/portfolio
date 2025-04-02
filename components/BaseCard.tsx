import { ReactNode } from "react";

export default function BaseCard({className,children}:{className?:string,children:ReactNode}) {
    return (
        <div className={`${className} flex flex-col justify-center items-center  rounded-xl py-4 border border-gray-300 bg-white dark:bg-transparent h-full`}>
            {children}
        </div>
    );
}