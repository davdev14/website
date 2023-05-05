
const LANG_STORAGE_KEY = "lang";
const DEFAULT_LANG = "en";

const State = {
    setLang: (lang) => {
        localStorage.setItem(LANG_STORAGE_KEY, lang)
    },
    getLang: () => {
        return localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG;
    },
    isActiveLang: (lang) => {
        return (localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG) == lang;
    }
}

export {State}