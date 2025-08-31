import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Solo Traveler",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            content: "TripPals completely changed my travel experience! I found amazing travel buddies for my Japan trip. We're still friends and planning our next adventure together.",
            verified: true,
            trip: "Tokyo Adventure"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Adventure Seeker",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            content: "As someone who loves hiking, I found the perfect group for my Patagonia trek through TripPals. The matching system is incredibly accurate!",
            verified: true,
            trip: "Patagonia Trek"
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            role: "Culture Enthusiast",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            content: "I was nervous about traveling alone, but TripPals helped me find like-minded travelers. My Italy trip was absolutely magical thanks to my travel companions.",
            verified: true,
            trip: "Italy Cultural Tour"
        },
        {
            id: 4,
            name: "David Thompson",
            role: "Photography Lover",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            content: "Found a photography group for my Iceland trip through TripPals. We captured amazing shots together and shared techniques. Highly recommended!",
            verified: true,
            trip: "Iceland Photography"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our Travelers Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Hear from real travelers who found their perfect companions and created unforgettable adventures through TripPals.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Trip Badge */}
                            <div className="flex justify-center mb-4">
                                <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                                    {testimonial.trip}
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex justify-center mb-4">
                                <div className="flex items-center space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <p className="text-gray-700 text-center mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-center space-x-3">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="text-center">
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    {testimonial.verified && (
                                        <div className="flex items-center justify-center mt-1">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                ✓ Verified Traveler
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                        <div className="text-gray-600">Traveler Satisfaction</div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
                        <div className="text-gray-600">Successful Matches</div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
                        <div className="text-gray-600">App Store Rating</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials; 