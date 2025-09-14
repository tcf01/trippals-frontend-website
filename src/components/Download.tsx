"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DevicePhoneMobileIcon, GlobeAltIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import appIcon from '../assets/app_icon.png';
import appStoreButton from '../assets/download_on_app_store.png';
import googlePlayButton from '../assets/download_on_google_play.png';

const Download: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="download" className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('download.title')}
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            {t('download.subtitle')}
                        </p>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <UserGroupIcon className="w-6 h-6 text-white" />
                                <span className="text-white/90">{t('download.features.community')}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <GlobeAltIcon className="w-6 h-6 text-white" />
                                <span className="text-white/90">{t('features.multiLanguage.title')}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <ShieldCheckIcon className="w-6 h-6 text-white" />
                                <span className="text-white/90">{t('download.features.secure')}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
                                <span className="text-white/90">{t('download.features.offline')}</span>
                            </div>
                        </div>

                        {/* Download Buttons */}
                        <div className="flex flex-row gap-3 justify-center sm:justify-start">
                            <button className="hover:opacity-80 transition-opacity duration-300">
                                <Image
                                    src={appStoreButton}
                                    alt="Download on the App Store"
                                    width={120}
                                    height={56}
                                    className="h-12 sm:h-14 w-auto"
                                />
                            </button>
                            <button className="hover:opacity-80 transition-opacity duration-300">
                                <Image
                                    src={googlePlayButton}
                                    alt="Get it on Google Play"
                                    width={120}
                                    height={56}
                                    className="h-12 sm:h-14 w-auto"
                                />
                            </button>
                        </div>

                        {/* App Rating */}
                        <div className="mt-8 flex items-center space-x-4">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-white/90">{t('download.phoneMockup.rating')}</span>
                        </div>
                    </motion.div>

                    {/* App Screenshots */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative mx-auto max-w-sm">
                            {/* Phone Mockup */}
                            <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                <div className="bg-white rounded-[2.5rem] p-4">
                                    {/* App Screen Content */}
                                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                                                    <Image
                                                        src={appIcon}
                                                        alt="TripPals"
                                                        width={40}
                                                        height={40}
                                                        className="w-full h-full object-contain rounded-full"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">{t('download.phoneMockup.title')}</h3>
                                                    <p className="text-primary-100 text-sm">{t('download.phoneMockup.subtitle')}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Download Progress */}
                                        <div className="space-y-4">
                                            <div className="bg-white/20 rounded-lg p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-sm font-medium">{t('download.phoneMockup.downloading')}</span>
                                                    <span className="text-sm text-primary-100">85%</span>
                                                </div>
                                                <div className="w-full bg-white/20 rounded-full h-2">
                                                    <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
                                                </div>
                                            </div>

                                            <div className="bg-white/20 rounded-lg p-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                                        <span className="text-xs">📱</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium">TripPals App</p>
                                                        <p className="text-xs text-primary-100">{t('download.phoneMockup.readyToInstall')}</p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-white text-primary-600 text-xs font-medium rounded-lg">
                                                        {t('download.phoneMockup.install')}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 transform -rotate-12"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">✓</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Verified</div>
                                        <div className="text-xs text-gray-600">{t('download.phoneMockup.safeToInstall')}</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 transform rotate-12"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">⚡</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Fast</div>
                                        <div className="text-xs text-gray-600">Quick download</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Download; 