import { DEFAULT_THEME } from "./constants";
import { Theme } from "./types";

function isValidTheme(value: unknown): boolean {
    return value === "light" || value === "dark";
}
export function initTheme(theme?: string) {
    if (isValidTheme(theme))
        return theme as Theme;
    return DEFAULT_THEME;
}
