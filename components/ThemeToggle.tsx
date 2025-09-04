"use client";
/* you must lazy load this component it use local storage */
import { Theme } from "@/lib/types";
import { useEffect , useState } from "react";
import { DEFAULT_THEME } from "@/lib/constants";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
    const [isAnimating, setIsAnimating] = useState(false);
    
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark" || savedTheme === "light")
            handleThemeChange(savedTheme);
        else 
            handleThemeChange(DEFAULT_THEME);
    }, []);
    
    function handleThemeChange(theme: Theme) {
        setIsAnimating(true);
        setTimeout(() => {
            localStorage.setItem("theme", theme);
            if (theme === "dark") document.documentElement.classList.add("dark");
            else document.documentElement.classList.remove("dark");
            setTheme(theme);
            setIsAnimating(false);
        }, 200);
    }

    return (
        <div className={`relative w-6 h-6 flex items-center justify-center ${isAnimating ? "animate-spin" : ""}`}>
            {theme === "dark" ? (
                <IoSunnyOutline 
                    className="cursor-pointer text-gray-600 dark:text-gray-300 text-xl 
                               hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-300" 
                    onClick={() => handleThemeChange("light")} 
                />
            ) : (
                <FaRegMoon 
                    className="cursor-pointer text-gray-600 dark:text-gray-300 text-xl 
                              hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300" 
                    onClick={() => handleThemeChange("dark")} 
                />
            )}
        </div>
    );
}