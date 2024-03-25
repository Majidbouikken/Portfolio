import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const LOCALES: {[key: string]: string;} = {
    'en': 'en-UK',
    'fr': 'fr-FR',
    // 'it': 'it-IT',
    'de': 'de-DE',
    // 'es': 'es-ES',
    // 'pt': 'pt-PT',
    'ar': 'ar-DZ',
    // 'jp': 'jp-JP',
};

export const LANGUAGES: {[key: string]: string;} = {
    'en': 'English',
    'fr': 'Français',
    // 'it': 'Italiano',
    'de': 'Deutsch',
    // 'es': 'Español',
    // 'pt': 'Português',
    'ar': 'العربية',
    // 'jp': '日本語',
};

const resources = {
    en: {
      translation: require('./locales/en.json'),
    },
    fr: {
      translation: require('./locales/fr.json'),
    },
    // it: {
    //   translation: require('./locales/it.json'),
    // },
    de: {
      translation: require('./locales/de.json'),
    },
    // es: {
    //   translation: require('./locales/es.json'),
    // },
    // pt: {
    //   translation: require('./locales/pt.json'),
    // },
    ar: {
      translation: require('./locales/ar.json'),
    },
    // jp: {
    //   translation: require('./locales/jp.json'),
    // },
  };

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: 'en',
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development',
        detection: {
          order: ['path', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'subdomain'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;