import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh.json';

const resources = {
    en: {
        translation: enTranslations,
    },
    zh: {
        translation: zhTranslations,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'zh',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        lng: 'zh', // Force Chinese as default
    });

// Manually set language to Chinese after initialization
i18n.changeLanguage('zh');

export default i18n; 