"use client";

import React, { useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'next/navigation';

function LocaleHandler({ children }: { children: React.ReactNode }) {
    const { i18n } = useTranslation();
    const searchParams = useSearchParams();

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

        if (locale === 'zh-HK' || locale === 'zh') {
            i18n.changeLanguage('zh-HK');
        } else if (locale === 'en') {
            i18n.changeLanguage('en');
        } else {
            // Default to English if no locale specified or empty
            i18n.changeLanguage('en');
        }
    }, [searchParams, i18n]);

    return <>{children}</>;
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<>{children}</>}>
            <LocaleHandler>{children}</LocaleHandler>
        </Suspense>
    );
}
