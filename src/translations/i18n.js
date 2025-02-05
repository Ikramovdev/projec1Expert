import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzTranslations from "./uz.json";
import ruTranslations from "./ru.json";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: uzTranslations,
    },
    ru: {
      translation: ruTranslations,
    },
  },
  lng: "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
