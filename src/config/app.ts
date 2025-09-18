// App configuration file
export const appConfig = {
    name: 'TripPals',
    description: 'Connect with fellow travelers and share your adventures',

    // Social Media
    instagram: {
        handle: 'official_trippals',
        url: 'https://instagram.com/official_trippals',
        displayName: '@official_trippals'
    },

    // App Store Links
    appStore: {
        ios: 'https://apps.apple.com/app/trippals/id6752492547',
        android: 'https://play.google.com/store/apps/details?id=com.trippals.app'
    },

    // Contact Information
    contact: {
        email: 'admin@trip-pals.com',
        website: 'https://www.trip-pals.com'
    },

    // SEO Information
    seo: {
        creator: '@official_trippals',
        site: '@official_trippals'
    }
} as const;

export default appConfig;
