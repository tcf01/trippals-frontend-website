import React from 'react';

// Declare gtag function for TypeScript
declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event' | 'js' | 'set',
            targetId: string | Date,
            config?: {
                [key: string]: any;
            }
        ) => void;
        dataLayer: any[];
    }
}

interface GoogleAnalyticsProps {
    measurementId: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
    React.useEffect(() => {
        // Load Google Analytics script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script1);

        // Initialize Google Analytics
        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'language'
        }
      });
    `;
        document.head.appendChild(script2);

        // Track language changes
        const trackLanguageChange = (language: string) => {
            if (typeof window.gtag !== 'undefined') {
                window.gtag('event', 'language_change', {
                    language: language,
                    page_title: document.title,
                    page_location: window.location.href
                });
            }
        };

        // Track app download attempts
        const trackAppDownload = (platform: string) => {
            if (typeof window.gtag !== 'undefined') {
                window.gtag('event', 'app_download_attempt', {
                    platform: platform,
                    page_title: document.title,
                    page_location: window.location.href
                });
            }
        };

        // Make tracking functions globally available
        (window as any).trackLanguageChange = trackLanguageChange;
        (window as any).trackAppDownload = trackAppDownload;

        return () => {
            // Cleanup
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, [measurementId]);

    return null;
};
