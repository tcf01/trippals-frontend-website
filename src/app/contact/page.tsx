"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Custom Instagram icon that matches Heroicons style
const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

export default function ContactPage() {
    const { i18n } = useTranslation();
    const isChinese = i18n.language === 'zh-HK' || i18n.language === 'zh';

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="pt-20" style={{ height: 'calc(100vh - 187px)' }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-lg shadow-lg p-8"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl font-bold text-gray-900 mb-8"
                        >
                            {isChinese ? '聯絡我們' : 'Contact Us'}
                        </motion.h1>

                        <div className="prose prose-lg max-w-none">
                            {isChinese ? (
                                <div className="space-y-6">
                                    <motion.section
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            我們很樂意聽到您的聲音！如果您有任何問題、建議或需要協助，請隨時與我們聯繫。
                                        </p>
                                    </motion.section>

                                    <motion.section
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">聯絡方式</h2>
                                        <div className="space-y-4">
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                                className="flex items-center space-x-3"
                                            >
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <EnvelopeIcon className="w-5 h-5 text-primary-600" />
                                                </div>
                                                <div>
                                                    <p className="text-gray-700 font-medium">電子郵件</p>
                                                    <a href="mailto:admin@trip-pals.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                                                        admin@trip-pals.com
                                                    </a>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                                className="flex items-center space-x-3"
                                            >
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <InstagramIcon className="w-5 h-5 text-primary-600" />
                                                </div>
                                                <div>
                                                    <p className="text-gray-700 font-medium">Instagram</p>
                                                    <a href="https://instagram.com/trippals" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                                                        @trippals
                                                    </a>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.section>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <motion.section
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            We&apos;d love to hear from you! If you have any questions, suggestions, or need assistance, please don&apos;t hesitate to reach out to us.
                                        </p>
                                    </motion.section>

                                    <motion.section
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                                        <div className="space-y-4">
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                                className="flex items-center space-x-3"
                                            >
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <EnvelopeIcon className="w-5 h-5 text-primary-600" />
                                                </div>
                                                <div>
                                                    <p className="text-gray-700 font-medium">Email</p>
                                                    <a href="mailto:admin@trip-pals.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                                                        admin@trip-pals.com
                                                    </a>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                                className="flex items-center space-x-3"
                                            >
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <InstagramIcon className="w-5 h-5 text-primary-600" />
                                                </div>
                                                <div>
                                                    <p className="text-gray-700 font-medium">Instagram</p>
                                                    <a href="https://instagram.com/trippals" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                                                        @trippals
                                                    </a>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.section>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
