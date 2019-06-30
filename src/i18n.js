import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: "ja",
  interpolation: {
    escapeValue: false,
  },
  lng: "ja",
  resources: {
    en: {
      translations: {
        "Main Title": "hayate4th's room"
      }
    },
    ja: {
      translations: {
        "Main Title": "hayate4thの部屋"
      }
    }
  }
});

export default i18n;
