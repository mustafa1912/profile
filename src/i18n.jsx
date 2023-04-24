import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from './lang/En.json'
import translationAr from './lang/Ar.json'
import translationFra from './lang/Fra.json'

const resources = {
    En: {
        translation: translationEn
    },
    Ar: {
        translation: translationAr
    },
    Fra: {
        translation: translationFra
    }
};

i18n
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "En",
        interpolation: {
            escapeValue: false
        },
        React: {
            useSuspense: false
        },
    });

export default i18n;