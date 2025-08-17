import { ComponentProps } from "react";

export default  function BaseBtn(props:ComponentProps<"button">) {
    return (
        <>
            <button {...props} className={`text-white capitalize hover:opacity-90 inline-block w-fit cursor-pointer bg-main rounded  ${props.className}`}>{props.children}</button>
        </>
    );
}