import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzTranslations from "./uz.json";
import ruTranslations from "./ru.json";

i18n.use(initReactI18next).init({
  resources: {
    uzb: {
      translation: uzTranslations,
    },
    rus: {
      translation: ruTranslations,
    },
  },
  lng: "uzb",
  fallbackLng: "uzb",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
