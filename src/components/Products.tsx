import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBagIcon, StarIcon, HeartIcon } from '@heroicons/react/24/outline';

const Products: React.FC = () => {
    const products = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 299.99,
            originalPrice: 399.99,
            rating: 4.8,
            reviews: 1247,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
            badge: "Best Seller"
        },
        {
            id: 2,
            name: "Smart Fitness Watch",
            price: 199.99,
            originalPrice: 249.99,
            rating: 4.6,
            reviews: 892,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
            badge: "New"
        },
        {
            id: 3,
            name: "Ultra HD Camera",
            price: 599.99,
            originalPrice: 699.99,
            rating: 4.9,
            reviews: 567,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
            badge: "Limited"
        },
        {
            id: 4,
            name: "Portable Speaker",
            price: 149.99,
            originalPrice: 199.99,
            rating: 4.7,
            reviews: 1034,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
            badge: "Sale"
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
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Featured Products
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our curated collection of premium products designed to enhance your lifestyle
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Badge */}
                            {product.badge && (
                                <div className="absolute top-4 left-4 z-10">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${product.badge === 'Best Seller' ? 'bg-primary-500 text-white' :
                                        product.badge === 'New' ? 'bg-accent-500 text-white' :
                                            product.badge === 'Limited' ? 'bg-red-500 text-white' :
                                                'bg-secondary-500 text-white'
                                        }`}>
                                        {product.badge}
                                    </span>
                                </div>
                            )}

                            {/* Wishlist Button */}
                            <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <HeartIcon className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                            </button>

                            {/* Product Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                    {product.name}
                                </h3>

                                {/* Rating */}
                                <div className="flex items-center mb-3">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(product.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">
                                        ({product.reviews})
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-2xl font-bold text-gray-900">
                                            ${product.price}
                                        </span>
                                        {product.originalPrice > product.price && (
                                            <span className="text-lg text-gray-500 line-through">
                                                ${product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Add to Cart Button */}
                                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2 group/btn">
                                    <ShoppingBagIcon className="w-5 h-5" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="inline-flex items-center px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300">
                        View All Products
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Products; 