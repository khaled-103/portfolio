import { ReactNode } from "react";

export default function BaseCard({className,children}:{className?:string,children:ReactNode}) {
    return (
        <div className={`${className} rounded-xl py-4 border border-gray-300 dark:border-gray-600`}>
            {children}
        </div>
    );
}