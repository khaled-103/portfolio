import { ComponentProps } from "react";

export default  function BaseBtn(props:ComponentProps<"button">) {
    return (
        <>
            <button {...props} className={`text-white capitalize hover:opacity-90 inline-block w-fit cursor-pointer bg-main pb-1 pt-2 px-2 rounded  ${props.className}`}>{props.children}</button>
        </>
    );
}