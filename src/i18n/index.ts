import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNavbar from "@/i18n/locales/en/navbar.json";
import enIntro from "@/i18n/locales/en/intro.json";
import enService from "@/i18n/locales/en/service.json";
import enProjects from "@/i18n/locales/en/ourProjects.json";
import enFooter from "@/i18n/locales/en/footer.json";

import koNavbar from "@/i18n/locales/ko/navbar.json";
import koIntro from "@/i18n/locales/ko/intro.json";
import koService from "@/i18n/locales/ko/service.json";
import koProjects from "@/i18n/locales/ko/ourProjects.json";
import koFooter from "@/i18n/locales/ko/footer.json";


import ruNavbar from "@/i18n/locales/ru/navbar.json";
import ruIntro from "@/i18n/locales/ru/intro.json";
import ruService from "@/i18n/locales/ru/service.json";
import ruProjects from "@/i18n/locales/ru/ourProjects.json";
import ruFooter from "@/i18n/locales/ru/footer.json";


import uzNavbar from "@/i18n/locales/uz/navbar.json";
import uzIntro from "@/i18n/locales/uz/intro.json";
import uzService from "@/i18n/locales/uz/service.json";
import uzProjects from "@/i18n/locales/uz/ourProjects.json";
import uzFooter from "@/i18n/locales/uz/footer.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                navbar: enNavbar,
                intro: enIntro,
                service: enService,
                ourProjects: enProjects,
                footer: enFooter
            },
            ko: {
                navbar: koNavbar,
                intro: koIntro,
                service: koService,
                ourProjects: koProjects,
                footer: koFooter
            },
            ru: {
                navbar: ruNavbar,
                intro: ruIntro,
                service: ruService,
                ourProjects: ruProjects,
                footer: ruFooter
            },
            uz: {
                navbar: uzNavbar,
                intro: uzIntro,
                service: uzService,
                ourProjects: uzProjects,
                footer: uzFooter
            }
        },

        fallbackLng: "en",

        ns: ["navbar", "intro", "service", "ourProjects", "footer"],

        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"]
        }
    });

export default i18n;