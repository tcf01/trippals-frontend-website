"use client";

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function NotFound() {
    const { t, i18n } = useTranslation();
    const [isReady, setIsReady] = useState(false);

    // Wait for i18n to be ready
    useEffect(() => {
        if (i18n.isInitialized) {
            setIsReady(true);
        } else {
            const timer = setTimeout(() => setIsReady(true), 1000);
            return () => clearTimeout(timer);
        }
    }, [i18n.isInitialized]);

    // Update page title and meta description based on locale
    useEffect(() => {
        if (isReady) {
            document.title = `${t('notFound.title')} - TripPals`;

            // Update meta description
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', t('notFound.subtitle'));
            }
        }
    }, [t, isReady]);

    // Show loading state while i18n is initializing
    if (!isReady) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full text-center">
                {/* Language Switcher */}
                <div className="absolute top-4 right-4">
                    <LanguageSwitcher />
                </div>

                <div className="mb-8">
                    <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        {t('notFound.title')}
                    </h2>
                    <p className="text-gray-600 mb-8">
                        {t('notFound.subtitle')}
                    </p>
                </div>

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                        {t('notFound.goHome')}
                    </Link>

                    <div className="text-sm text-gray-500">
                        <p>{t('notFound.contactText')}</p>
                        <a
                            href={`mailto:${t('notFound.contactEmail')}`}
                            className="text-primary-600 hover:underline"
                        >
                            {t('notFound.contactEmail')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
