import { DEFAULT_THEME } from "./constants";
import { Theme } from "./types";

export function getLangFromPathname(pathname: string) {
    return pathname.split("/")[1];
}


function isValidTheme(value: unknown): boolean {
    return value === "light" || value === "dark";
}
export function initTheme(theme?: string) {
    if (isValidTheme(theme))
        return theme as Theme;
    return DEFAULT_THEME;
}

export function replaceParams(value: string, target: string[]) {
    let result = value;
    let index = 0;
    let pointer = 0;
    while (index >= 0) {
        console.log("try replace params");
        
        index = result.indexOf("{");
        const lastIndex = result.indexOf("}");
        if (index < 0 || lastIndex < 0) break;
        result = result.replace(value.slice(index, lastIndex + 1), target[pointer++]);
    }
    return result;
}