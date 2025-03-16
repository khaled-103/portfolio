export const DEFAULT_THEME = "light";

export const DEFAULT_LANG = "en";
export const LANGUAGES = {
    "en":{
        nativeName: "English",
        supportRtl: false
    },
    "ar":{
        nativeName: "Arabic",
        supportRtl: true
    }
};

export enum STATUS_FETCH{
    SUCCESS,
    VALIDATION_ERROR,
    AUTHNITICATE_ERROR,
    AUTHORIZE_ERROR,
    GENERAL_ERROR
}

export const SESSION_EXPIRE_IN = 1000*60*10; // MUST GREATER THAN 2 MINUTES
export const SESSION_REFRESH_IN = SESSION_EXPIRE_IN - 1000*60*2;

