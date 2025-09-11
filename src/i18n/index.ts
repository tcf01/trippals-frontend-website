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

// Only initialize if not already initialized
if (!i18n.isInitialized) {
    i18n
        .use(initReactI18next)
        .init({
            resources,
            fallbackLng: 'zh',
            debug: process.env.NODE_ENV === 'development',
            interpolation: {
                escapeValue: false,
            },
            lng: 'zh', // Force Chinese as default
            react: {
                useSuspense: false, // Disable suspense for SSR compatibility
            },
        });
}

export default i18n; 