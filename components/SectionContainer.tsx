import { ReactNode } from "react";

export default function SectionContainer({title,children,className}:{title:string,children:ReactNode,className?:string}){
    return(
        <section className={`${className} my-16`}>
            <h2 className="font-semibold text-xl capitalize text-black dark:text-white  mb-4">{title}</h2>
            {children}
        </section>
    );
}