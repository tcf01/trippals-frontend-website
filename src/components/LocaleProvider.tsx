"use client";

import React, { useEffect, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'next/navigation';

function LocaleHandler({ children }: { children: React.ReactNode }) {
    const { i18n } = useTranslation();
    const searchParams = useSearchParams();
    const [isLanguageReady, setIsLanguageReady] = useState(false);

    useEffect(() => {
        // Check for locale in search params first
        let locale = searchParams.get('locale');

        // If not found in search params, check hash fragment
        if (!locale && typeof window !== 'undefined') {
            const fullUrl = window.location.href;
            if (fullUrl.includes('locale=zh-HK') || fullUrl.includes('locale=zh')) {
                locale = 'zh-HK';
            } else if (fullUrl.includes('locale=en')) {
                locale = 'en';
            }
        }

        const targetLanguage = locale === 'zh-HK' || locale === 'zh' ? 'zh-HK' : 'en';

        // Only change language if it's different from current
        if (i18n.language !== targetLanguage) {
            i18n.changeLanguage(targetLanguage).then(() => {
                setIsLanguageReady(true);
            });
        } else {
            setIsLanguageReady(true);
        }
    }, [searchParams, i18n]);

    // Show loading state while language is being set
    if (!isLanguageReady) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    return <>{children}</>;
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<>{children}</>}>
            <LocaleHandler>{children}</LocaleHandler>
        </Suspense>
    );
}
