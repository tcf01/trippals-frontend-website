import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, BellIcon, GiftIcon } from '@heroicons/react/24/outline';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            // Reset after 3 seconds
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Icons */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <EnvelopeIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <BellIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <GiftIcon className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-white mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter and be the first to know about new products, exclusive offers, and special discounts.
                    </p>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold">🎁</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Exclusive Offers</h3>
                            <p className="text-white/80 text-sm">Get access to subscriber-only discounts and promotions</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold">🚀</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">New Products</h3>
                            <p className="text-white/80 text-sm">Be the first to discover our latest product releases</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold">💡</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Expert Tips</h3>
                            <p className="text-white/80 text-sm">Receive valuable insights and product recommendations</p>
                        </div>
                    </div>

                    {/* Subscription Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-md mx-auto"
                    >
                        {!isSubscribed ? (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="w-full px-6 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                    <span>Subscribe</span>
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center"
                            >
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎉</span>
                                </div>
                                <h3 className="text-white font-semibold text-lg mb-2">Welcome aboard!</h3>
                                <p className="text-white/90">You've successfully subscribed to our newsletter.</p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Privacy Note */}
                    <p className="text-white/70 text-sm mt-6">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter; 