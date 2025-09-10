import React from 'react';
import { useTranslation } from 'react-i18next';
import { StructuredData, TripPalsStructuredData } from './StructuredData';

interface SEOHeadProps {
    title?: string;
    description?: string;
    language?: string;
    ogImage?: string;
    canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    language = 'en',
    ogImage = 'https://trip-pals.com/app_icon.png',
    canonicalUrl = 'https://trip-pals.com'
}) => {
    const { t } = useTranslation();

    const isChinese = language === 'zh';

    const seoTitle = title || t('seo.title', isChinese ? 'TripPals - 尋找旅行夥伴' : 'TripPals - Find Travel Companions');
    const seoDescription = description || t('seo.description', isChinese
        ? '與志同道合的旅行者聯繫，加入團體冒險，一起創造難忘的體驗。發現與您興趣相投的旅行夥伴，一起探索世界。'
        : 'Connect with like-minded travelers worldwide. Find travel companions, join group adventures, and create unforgettable experiences together.'
    );

    return (
        <>
            {/* Primary Meta Tags */}
            <title>{seoTitle}</title>
            <meta name="title" content={seoTitle} />
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={t('seo.keywords', isChinese
                ? '旅行夥伴, 旅遊, 自由行, 背包客, 旅行團, 台灣旅遊, 香港自由行, 澳門旅行'
                : 'travel companions, solo travel, group adventures, backpacking, travel app, adventure travel'
            )} />
            <meta name="author" content="TripPals" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />

            {/* Language Targeting */}
            <link rel="alternate" hrefLang="en" href="https://trip-pals.com/?lang=en" />
            <link rel="alternate" hrefLang="zh-TW" href="https://trip-pals.com/?lang=zh" />
            <link rel="alternate" hrefLang="x-default" href="https://trip-pals.com" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />
            <meta property="og:site_name" content="TripPals" />
            <meta property="og:locale" content={isChinese ? 'zh_TW' : 'en_US'} />
            <meta property="og:locale:alternate" content={isChinese ? 'en_US' : 'zh_TW'} />

            {/* Twitter */}
            <meta property="twitter:card" content="app" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={seoTitle} />
            <meta property="twitter:description" content={seoDescription} />
            <meta property="twitter:image" content={ogImage} />
            <meta property="twitter:app:name:iphone" content="TripPals" />
            <meta property="twitter:app:name:ipad" content="TripPals" />
            <meta property="twitter:app:name:googleplay" content="TripPals" />
            <meta property="twitter:app:url:iphone" content="https://apps.apple.com/app/trippals" />
            <meta property="twitter:app:url:ipad" content="https://apps.apple.com/app/trippals" />
            <meta property="twitter:app:url:googleplay" content="https://play.google.com/store/apps/details?id=com.trippals" />

            {/* App Store Meta Tags */}
            <meta name="apple-itunes-app" content="app-id=your-app-id" />
            <meta name="google-play-app" content="app-id=com.trippals" />

            {/* Structured Data */}
            <StructuredData type="WebApplication" data={TripPalsStructuredData.WebApplication} />
            <StructuredData type="Organization" data={TripPalsStructuredData.Organization} />
            <StructuredData type="WebSite" data={TripPalsStructuredData.WebSite} />
            <StructuredData type="MobileApplication" data={TripPalsStructuredData.MobileApplication} />
        </>
    );
};
