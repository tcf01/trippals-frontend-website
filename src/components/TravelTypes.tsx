import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, CameraIcon, FireIcon, StarIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const TravelTypes: React.FC = () => {
    const travelTypes = [
        {
            id: 1,
            name: "Adventure",
            description: "Thrilling outdoor activities and extreme sports",
            icon: FireIcon,
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
            color: "from-orange-500 to-red-500"
        },
        {
            id: 2,
            name: "Beach",
            description: "Relaxing coastal getaways and water activities",
            icon: MapPinIcon,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 3,
            name: "Cultural",
            description: "Immerse yourself in local traditions and heritage",
            icon: CameraIcon,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=400&h=300&fit=crop",
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 4,
            name: "Food & Dining",
            description: "Culinary adventures and gastronomic experiences",
            icon: StarIcon,
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
            color: "from-yellow-500 to-orange-500"
        },
        {
            id: 5,
            name: "Hiking",
            description: "Scenic trails and mountain adventures",
            icon: FireIcon,
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 6,
            name: "Photography",
            description: "Capture stunning landscapes and moments",
            icon: CameraIcon,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            color: "from-indigo-500 to-purple-500"
        },
        {
            id: 7,
            name: "Road Trip",
            description: "Epic journeys by car with scenic routes",
            icon: TruckIcon,
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
            color: "from-gray-500 to-slate-500"
        },
        {
            id: 8,
            name: "Backpacking",
            description: "Budget-friendly exploration and hostels",
            icon: UserGroupIcon,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=400&h=300&fit=crop",
            color: "from-teal-500 to-cyan-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="travel-types" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Discover Your Travel Style
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From adventure seekers to culture enthusiasts, find travel companions who share your passion for exploration
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {travelTypes.map((type) => (
                        <motion.div
                            key={type.id}
                            variants={itemVariants}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={type.image}
                                    alt={type.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-3`}>
                                    <type.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {type.name}
                                </h3>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    {type.description}
                                </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                        <type.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {type.name}
                                    </h3>
                                    <p className="text-white/90 text-sm mb-4">
                                        {type.description}
                                    </p>
                                    <button className="px-6 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                        Find Buddies
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-lg text-gray-600 mb-6">
                        Can't find your travel style? Create your own custom trip!
                    </p>
                    <button className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors duration-300">
                        Create Custom Trip
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default TravelTypes; 