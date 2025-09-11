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
    'zh-HK': {
        translation: zhTranslations, // Use same translations for zh-HK
    },
};

// Function to detect locale from query string (including hash fragments)
export const detectLocale = (): string => {
    if (typeof window !== 'undefined') {
        // Simple check: look for locale parameter anywhere in the URL
        const fullUrl = window.location.href;

        if (fullUrl.includes('locale=zh-HK') || fullUrl.includes('locale=zh')) {
            return 'zh-HK';
        } else if (fullUrl.includes('locale=en')) {
            return 'en';
        }
    }

    // Default to English if no locale specified or empty
    return 'en';
};

if (!i18n.isInitialized) {
    i18n
        .use(initReactI18next)
        .init({
            resources,
            fallbackLng: 'en', // Default to English
            debug: process.env.NODE_ENV === 'development',
            interpolation: {
                escapeValue: false,
            },
            lng: detectLocale(), // Detect locale from query string
            react: {
                useSuspense: false, // Disable suspense for SSR compatibility
            },
        });
}

export default i18n; 