import { ComponentProps, ReactNode } from "react";

export default function SectionContainer({ id, title, children, className }: ComponentProps<"section"> & { title: string, children: ReactNode }) {
    return (
        <section id={id} className={`${className} my-20`}>
            <h2 className="font-semibold text-xl capitalize text-black dark:text-white  mb-4">{title}</h2>
            {children}
        </section>
    );
}