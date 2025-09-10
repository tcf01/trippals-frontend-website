import React from 'react';

interface StructuredDataProps {
    type: 'WebApplication' | 'Organization' | 'WebSite' | 'MobileApplication';
    data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
    const getStructuredData = () => {
        const baseData = {
            '@context': 'https://schema.org',
            '@type': type,
            ...data
        };

        return JSON.stringify(baseData);
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: getStructuredData() }}
        />
    );
};

// Predefined structured data for TripPals
export const TripPalsStructuredData = {
    WebApplication: {
        name: 'TripPals',
        alternateName: 'Trip Pals',
        description: 'Connect with like-minded travelers worldwide. Find travel companions, join group adventures, and create unforgettable experiences together.',
        url: 'https://trip-pals.com',
        applicationCategory: 'TravelApplication',
        operatingSystem: 'iOS, Android',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '10000',
            bestRating: '5',
            worstRating: '1'
        },
        author: {
            '@type': 'Organization',
            name: 'TripPals',
            url: 'https://trip-pals.com'
        },
        screenshot: 'https://trip-pals.com/app_icon.png',
        softwareVersion: '1.0.0',
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0]
    },

    Organization: {
        name: 'TripPals',
        alternateName: 'Trip Pals',
        url: 'https://trip-pals.com',
        logo: 'https://trip-pals.com/app_icon.png',
        description: 'A travel companion app that connects like-minded travelers worldwide.',
        foundingDate: '2024',
        sameAs: [
            'https://www.facebook.com/trippals',
            'https://www.instagram.com/trippals',
            'https://twitter.com/trippals'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'support@trip-pals.com'
        }
    },

    WebSite: {
        name: 'TripPals',
        url: 'https://trip-pals.com',
        description: 'Find travel companions and create unforgettable adventures together.',
        inLanguage: ['en', 'zh-TW'],
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://trip-pals.com/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        }
    },

    MobileApplication: {
        name: 'TripPals',
        description: 'Connect with like-minded travelers worldwide. Find travel companions, join group adventures, and create unforgettable experiences together.',
        url: 'https://trip-pals.com',
        applicationCategory: 'TravelApplication',
        operatingSystem: 'iOS, Android',
        downloadUrl: [
            'https://apps.apple.com/app/trippals',
            'https://play.google.com/store/apps/details?id=com.trippals'
        ],
        screenshot: 'https://trip-pals.com/app_icon.png',
        softwareVersion: '1.0.0',
        datePublished: '2024-01-01',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '10000',
            bestRating: '5',
            worstRating: '1'
        }
    }
};

