import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { UserPlusIcon, MagnifyingGlassIcon, ChatBubbleLeftRightIcon, MapPinIcon } from '@heroicons/react/24/outline';
import appStoreButton from '../assets/download on app store.png';
import googlePlayButton from '../assets/download on google play.png';

const HowItWorks: React.FC = () => {
    const { t } = useTranslation();

    const steps = [
        {
            id: 1,
            icon: UserPlusIcon,
            color: "bg-transparent border-2 border-gray-200",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=200&fit=crop&crop=face"
        },
        {
            id: 2,
            icon: MagnifyingGlassIcon,
            color: "bg-transparent border-2 border-gray-200",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=300&h=200&fit=crop"
        },
        {
            id: 3,
            icon: ChatBubbleLeftRightIcon,
            color: "bg-transparent border-2 border-gray-200",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop&crop=face"
        },
        {
            id: 4,
            icon: MapPinIcon,
            color: "bg-transparent border-2 border-gray-200",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
        }
    ];



    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('howItWorks.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('howItWorks.subtitle')}
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-400 to-primary-600 h-full rounded-full hidden md:block"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-col`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 max-w-lg">
                                    <div className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                        }`}>
                                        <div className="flex items-center mb-6">
                                            <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                                                <step.icon className="w-8 h-8 text-black" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-primary-600 mb-1">
                                                    Step {step.id}
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-900">
                                                    {t(`howItWorks.step${step.id}.title`)}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {t(`howItWorks.step${step.id}.description`)}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline Circle */}
                                <div className="relative z-10 hidden md:block">
                                    <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                                </div>

                                {/* Empty Space for Alternating Layout */}
                                <div className="flex-1 max-w-lg hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline Indicator */}
                <div className="md:hidden mt-12 text-center">
                    <div className="inline-flex items-center space-x-2">
                        {steps.map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.05, duration: 0.2 }}
                                viewport={{ once: true }}
                                className="w-3 h-3 bg-primary-600 rounded-full"
                            />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('download.howItWorksCTA.title')}
                        </h3>
                        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                            {t('download.howItWorksCTA.subtitle')}
                        </p>
                        <p className="text-primary-600 font-medium mb-6 max-w-2xl mx-auto">
                            {t('download.howItWorksCTA.tagline')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks; 