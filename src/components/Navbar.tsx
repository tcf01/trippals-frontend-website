"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';
import Image from 'next/image';

// Custom link component that handles locale preservation
const LocaleAwareLink: React.FC<{ href: string; children: React.ReactNode; className?: string; onClick?: () => void }> = ({ href, children, className, onClick }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Get current locale from URL
        const urlParams = new URLSearchParams(window.location.search);
        const urlLocale = urlParams.get('locale');
        let currentLocale = 'en';

        if (urlLocale) {
            currentLocale = urlLocale;
        } else if (window.location.href.includes('locale=zh-HK')) {
            currentLocale = 'zh-HK';
        }

        // Check if it's an anchor link (starts with /#)
        if (href.startsWith('/#')) {
            const anchorId = href.substring(2); // Remove /# to get the anchor ID

            // Update URL with locale parameter
            const localeParam = currentLocale !== 'en' ? `?locale=${currentLocale}` : '';
            const newUrl = `${window.location.pathname}${href}${localeParam}`;
            window.history.pushState(null, '', newUrl);

            // Scroll to the section
            const element = document.getElementById(anchorId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // For regular page links, navigate normally
            const localeParam = currentLocale !== 'en' ? `?locale=${currentLocale}` : '';
            const newHref = href + localeParam;
            window.location.href = newHref;
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <Link href={href} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
};


const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.privacy'), href: '/privacy' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1 shadow-sm">
                            <Image
                                src="/app_icon.png"
                                alt="TripPals"
                                className="w-full h-full object-contain rounded-lg"
                            />
                        </div>
                        <span className="ml-3 text-xl font-bold text-gray-900">TripPals</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <LocaleAwareLink
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </LocaleAwareLink>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary-600"
                        >
                            {isOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                            {navItems.map((item) => (
                                <LocaleAwareLink
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </LocaleAwareLink>
                            ))}
                            <div className="px-3 py-2 border-t mt-2">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 