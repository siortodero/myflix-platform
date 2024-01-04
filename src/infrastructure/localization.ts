import { en, it } from "@/locales";
import i18n, { ResourceLanguage } from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { defaultsDeep, set, transform } from "lodash";
import moment from "moment";
import process from "process";
import { initReactI18next } from "react-i18next";

export const initLocalization = (locales?: ResourceLanguage) => {
  i18n
    .use(languageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      debug: process.env.NODE_ENV === "development", // Ensuring i18next is logging on console when on development environment
      resources: transform(
        defaultsDeep(locales!, { en: en, it: it }),
        (result, value, key) => {
          // Transforming ResourceLanguage into i18n Resource
          set(result, key, {
            translation: value,
          });
        },
        {}
      ),
      fallbackLng: "en",
      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });

  moment.locale(i18n.language);

  i18n.on("languageChanged", (lng) => {
    moment.locale(lng);
  });

  return i18n;
};
