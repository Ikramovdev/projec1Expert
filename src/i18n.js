import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import dashboardUz from './translations/Dashboard/uz.json';
import dashboardRu from './translations/Dashboard/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        dashboard: dashboardUz.dashboard
      },
      ru: {
        dashboard: dashboardRu.dashboard
      }
    },
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 