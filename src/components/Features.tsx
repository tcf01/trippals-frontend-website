import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    UserGroupIcon,
    MapPinIcon,
    ChatBubbleLeftRightIcon,
    MagnifyingGlassIcon,
    HeartIcon,
    GlobeAltIcon,
} from '@heroicons/react/24/outline';

const Features: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: UserGroupIcon,
            title: t('features.smartMatching.title'),
            description: t('features.smartMatching.description'),
            color: 'bg-transparent border-2 border-gray-200',
        },
        {
            icon: MapPinIcon,
            title: t('features.groupAdventures.title'),
            description: t('features.groupAdventures.description'),
            color: 'bg-transparent border-2 border-gray-200',
        },
        {
            icon: ChatBubbleLeftRightIcon,
            title: t('features.chat.title'),
            description: t('features.chat.description'),
            color: 'bg-transparent border-2 border-gray-200',
        },
        {
            icon: MagnifyingGlassIcon,
            title: t('features.search.title'),
            description: t('features.search.description'),
            color: 'bg-transparent border-2 border-gray-200',
        },
        {
            icon: HeartIcon,
            title: t('features.wishlist.title'),
            description: t('features.wishlist.description'),
            color: 'bg-transparent border-2 border-gray-200',
        },
        {
            icon: GlobeAltIcon,
            title: t('features.multiLanguage.title'),
            description: t('features.multiLanguage.description'),
            color: 'bg-transparent border-2 border-gray-200',
        },
    ];

    return (
        <section id="features" className="bg-white pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('features.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
                        >
                            <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Features; 