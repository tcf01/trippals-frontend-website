"use client";

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/outline';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
    const { t, i18n } = useTranslation();

    const createTypingSequence = useCallback(() => {
        const countries = t('hero.typingAnimation.countries', { returnObjects: true }) as string[];
        const prefix = t('hero.typingAnimation.prefix');
        const sequence: (string | number)[] = [];

        // Ensure countries is an array
        if (Array.isArray(countries)) {
            countries.forEach(country => {
                sequence.push(`${prefix} ${country}`, 2000);
            });
        } else {
            // Fallback if translation is not loaded yet
            sequence.push(`${prefix} 日本`, 2000);
        }

        return sequence;
    }, [t]);

    return (
        <section id="home" className="pt-20 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 flex flex-col items-center justify-center"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                            <StarIcon className="w-4 h-4 mr-2" />
                            {t('hero.badge')}
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-center">
                            {t('hero.title')}
                        </h1>
                        <div className="text-2xl md:text-4xl text-center text-primary-600 mt-4 mb-6 min-h-[100px]">
                            <TypeAnimation
                                sequence={createTypingSequence()}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                                cursor={true}
                                key={i18n.language}
                            />
                        </div>
                        <div className="flex flex-row gap-3 justify-center sm:justify-start">
                            <button
                                className="hover:opacity-80 transition-opacity duration-300"
                                onClick={() => {
                                    if ((window as any).trackAppDownload) {
                                        (window as any).trackAppDownload('app_store');
                                    }
                                }}
                            >
                                <img
                                    src="/download on app store.png"
                                    alt="Download on the App Store"
                                    className="h-12 sm:h-14 w-auto"
                                />
                            </button>
                            <button
                                className="hover:opacity-80 transition-opacity duration-300"
                                onClick={() => {
                                    if ((window as any).trackAppDownload) {
                                        (window as any).trackAppDownload('google_play');
                                    }
                                }}
                            >
                                <img
                                    src="/download on google play.png"
                                    alt="Get it on Google Play"
                                    className="h-12 sm:h-14 w-auto"
                                />
                            </button>
                        </div>
                    </motion.div>

                    {/* App Screenshots Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-4xl mx-auto mt-10"
                    >
                        <img
                            src="/multiple-cap-screen.png"
                            alt="TripPals App Screenshots - Multiple Cap Screen"
                            className="w-full h-auto object-contain rounded-2xl"
                            style={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
