import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import AppScreensCarousel from './AppScreensCarousel';
import homepageScreenshot from '../assets/homepage.png';
import appStoreButton from '../assets/download on app store.png';
import googlePlayButton from '../assets/download on google play.png';

const Hero: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [typingSequence, setTypingSequence] = useState<(string | number)[]>([]);

    // Create typing animation sequence with translations
    const createTypingSequence = useCallback(() => {
        const countries = t('hero.typingAnimation.countries', { returnObjects: true }) as string[];
        const prefix = t('hero.typingAnimation.prefix');
        const sequence: (string | number)[] = [];

        countries.forEach(country => {
            sequence.push(`${prefix} ${country}`, 2000);
        });

        return sequence;
    }, [t]);

    // Update sequence when language changes
    useEffect(() => {
        setTypingSequence(createTypingSequence());
    }, [i18n.language, createTypingSequence]);

    // Screenshots for the carousel
    const appScreenshots = [
        {
            id: 1,
            image: homepageScreenshot,
            title: "",
            description: "Connect with travelers worldwide and discover amazing trips"
        },
        // You can add more screenshots here when you provide them
    ];

    return (
        <section id="home" className="pt-20 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
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

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            {t('hero.title')}
                        </h1>

                        {/* Typing Animation */}
                        <div className="text-2xl md:text-3xl font-mono font-semibold text-primary-600 mt-4 mb-6 min-h-[200px]">
                            <TypeAnimation
                                sequence={typingSequence}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                                cursor={true}
                                key={i18n.language} // Force re-render when language changes
                            />
                        </div>

                        <div className="flex flex-row gap-3 justify-center sm:justify-start">
                            <button className="hover:opacity-80 transition-opacity duration-300">
                                <img
                                    src={appStoreButton}
                                    alt="Download on the App Store"
                                    className="h-12 sm:h-14 w-auto"
                                />
                            </button>
                            <button className="hover:opacity-80 transition-opacity duration-300">
                                <img
                                    src={googlePlayButton}
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
                        className="relative"
                    >
                        <AppScreensCarousel
                            screenshots={appScreenshots}
                            autoPlay={true}
                            autoPlayInterval={5000}
                        />

                        {/* Floating Elements */}

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 transform rotate-12"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="relative w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-lg flex items-center justify-center">
                                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                                    {/* Red notification dot */}
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">{t('hero.liveChat')}</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 