"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const { i18n } = useTranslation();
    const isChinese = i18n.language === 'zh-HK' || i18n.language === 'zh';

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="pt-20" style={{ height: 'calc(100vh - 187px)' }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">
                            {isChinese ? '聯絡我們' : 'Contact Us'}
                        </h1>

                        <div className="prose prose-lg max-w-none">
                            {isChinese ? (
                                <div className="space-y-6">
                                    <section>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            我們很樂意聽到您的聲音！如果您有任何問題、建議或需要協助，請隨時與我們聯繫。
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">聯絡方式</h2>
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-gray-700 font-medium">電子郵件</p>
                                                    <a href="mailto:admin@trip-pals.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                                                        admin@trip-pals.com
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-gray-700 font-medium">Instagram</p>
                                                    <a href="https://instagram.com/trippals" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                                                        @trippals
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <section>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            We&apos;d love to hear from you! If you have any questions, suggestions, or need assistance, please don&apos;t hesitate to reach out to us.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-gray-700 font-medium">Email</p>
                                                    <a href="mailto:admin@trip-pals.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                                                        admin@trip-pals.com
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-gray-700 font-medium">Instagram</p>
                                                    <a href="https://instagram.com/trippals" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                                                        @trippals
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
