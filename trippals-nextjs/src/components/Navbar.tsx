"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
// App icon is now in public directory

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'zh' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navItems = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.features'), href: '#features' },
        { name: t('nav.howItWorks'), href: '#how-it-works' },
    ];

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1 shadow-sm">
                            <img
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
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                        >
                            <GlobeAltIcon className="w-5 h-5" />
                            <span>{i18n.language === 'en' ? 'EN' : '中'}</span>
                        </button>
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
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 