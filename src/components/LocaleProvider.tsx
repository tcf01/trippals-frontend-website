"use client";

import React, { useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'next/navigation';

function LocaleHandler({ children }: { children: React.ReactNode }) {
    const { i18n } = useTranslation();
    const searchParams = useSearchParams();

    useEffect(() => {
        const locale = searchParams.get('locale');

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
