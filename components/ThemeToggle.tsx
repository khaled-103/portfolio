"use client";

/* you must lazy load this component it use local storage */
import { Theme } from "@/lib/types";
import { useEffect, useState } from "react";
import { DEFAULT_THEME } from "@/lib/constants";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark" || savedTheme === "light")
            handleThemeChange(savedTheme);
    }, []);
    function handleThemeChange(theme: Theme) {
        localStorage.setItem("theme", theme);
        if (theme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
        setTheme(theme);
    }

    return (
        <>
            {theme === "dark" ? <IoSunnyOutline className="cursor-pointer text-[#555] dark:text-white text-xl" onClick={() => handleThemeChange("light")} />
                : <FaRegMoon className="cursor-pointer dark:text-white text-[#555] text-xl" onClick={() => handleThemeChange("dark")} />}
        </>
    );
}