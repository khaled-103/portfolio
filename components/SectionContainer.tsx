import { ReactNode } from "react";

export default function SectionContainer({title,children,className}:{title:string,children:ReactNode,className?:string}){
    return(
        <section className={`${className} my-12`}>
            <h2 className="font-semibold text-lg capitalize text-black dark:text-white sm:text-start text-center mb-4">{title}</h2>
            {children}
        </section>
    );
}