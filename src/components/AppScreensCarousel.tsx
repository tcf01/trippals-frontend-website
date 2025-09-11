"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Screenshot {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface AppScreensCarouselProps {
    screenshots: Screenshot[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const AppScreensCarousel: React.FC<AppScreensCarouselProps> = ({
    screenshots,
    autoPlay = true,
    autoPlayInterval = 4000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay || screenshots.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
            );
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, screenshots.length]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (screenshots.length === 0) return null;

    return (
        <div className="relative w-full max-w-sm mx-auto">
            {/* iPhone Mockup Container */}
            <div className="relative bg-black rounded-[3rem] p-1 shadow-2xl">
                {/* iPhone Screen Bezel */}
                <div className="bg-black rounded-[2.8rem] p-1">
                    {/* iPhone Notch */}
                    <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                        {/* Screenshot Container */}
                        <div className="relative h-[600px] bg-gray-100 pt-6">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={screenshots[currentIndex].image}
                                    alt={screenshots[currentIndex].title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Navigation Arrows - Only show if more than one screenshot */}
                            {screenshots.length > 1 && (
                                <>
                                    <button
                                        onClick={goToPrevious}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm"
                                        aria-label="Previous screenshot"
                                    >
                                        <ChevronLeftIcon className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={goToNext}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm"
                                        aria-label="Next screenshot"
                                    >
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </button>
                                </>
                            )}

                            {/* Bottom overlay with title and description */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                <h3 className="text-white font-semibold text-lg mb-1">
                                    {screenshots[currentIndex].title}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    {screenshots[currentIndex].description}
                                </p>
                            </div>
                            {/* iPhone Home Indicator */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dots Indicator - Only show if more than one screenshot */}
            {screenshots.length > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                    {screenshots.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                ? 'bg-primary-600 scale-110'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to screenshot ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Screenshot counter */}
            {screenshots.length > 1 && (
                <div className="absolute top-4 right-4 bg-black/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    {currentIndex + 1} / {screenshots.length}
                </div>
            )}
        </div>
    );
};

export default AppScreensCarousel;
