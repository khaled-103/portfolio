import { ReactNode } from "react";

export default function SectionContainer({title,children}:{title:string,children:ReactNode}){
    return(
        <section className="my-4">
            <h2 className="font-semibold text-lg capitalize text-black dark:text-white sm:text-start text-center mb-4">{title}</h2>
            {children}
        </section>
    );
}