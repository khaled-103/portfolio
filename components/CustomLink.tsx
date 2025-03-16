"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { ComponentProps } from "react";

export default function CustomLink(props:ComponentProps<"a">) {
    const {lang} = useParams();
    return <Link {...props} href={`/${lang}${props.href}`}>{props.children}</Link>
}