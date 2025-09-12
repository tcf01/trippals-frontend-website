"use client";

import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

function LanguageSwitcherContent() {
    const { i18n } = useTranslation();
    const router = useRouter();

    const toggleLanguage = () => {
        const newLocale = i18n.language === 'en' ? 'zh-HK' : 'en';

        // Get the current pathname and hash without query parameters
        const pathname = window.location.pathname;
        const hash = window.location.hash.split('?')[0]; // Remove any existing query params from hash

        // Create new URL with just the locale parameter
        const newUrl = `${pathname}${hash}?locale=${newLocale}`;

        router.push(newUrl);
    };

    const currentLocale = i18n.language;

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200"
        >
            <GlobeAltIcon className="w-5 h-5" />
            <span>{currentLocale === 'en' ? '中' : 'EN'}</span>
        </button>
    );
}

export default function LanguageSwitcher() {
    return (
        <Suspense fallback={<div className="flex items-center space-x-1"><GlobeAltIcon className="w-5 h-5" /><span>EN</span></div>}>
            <LanguageSwitcherContent />
        </Suspense>
    );
}