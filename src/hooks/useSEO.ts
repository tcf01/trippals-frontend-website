import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOData {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
}

export const useSEO = (language: string) => {
    const { t } = useTranslation();

    const updateMetaTag = (name: string, content: string, property?: string) => {
        const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
        let meta = document.querySelector(selector) as HTMLMetaElement;

        if (!meta) {
            meta = document.createElement('meta');
            if (property) {
                meta.setAttribute('property', property);
            } else {
                meta.setAttribute('name', name);
            }
            document.head.appendChild(meta);
        }

        meta.setAttribute('content', content);
    };

    const updateTitle = (title: string) => {
        document.title = title;
    };

    const updateCanonical = (url: string) => {
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', url);
    };

    const updateHreflang = (language: string) => {
        // Update hreflang tags based on current language
        const hreflangTags = document.querySelectorAll('link[hreflang]');
        hreflangTags.forEach(tag => {
            const href = tag.getAttribute('href');
            if (href) {
                const newHref = href.replace(/[?&]lang=[^&]*/, '') + `?lang=${language}`;
                tag.setAttribute('href', newHref);
            }
        });
    };

    const getSEOData = useCallback((): SEOData => {
        const isChinese = language === 'zh';

        if (isChinese) {
            return {
                title: t('seo.title', 'TripPals - 尋找旅行夥伴'),
                description: t('seo.description', '與志同道合的旅行者聯繫，加入團體冒險，一起創造難忘的體驗。發現與您興趣相投的旅行夥伴，一起探索世界。'),
                keywords: t('seo.keywords', '旅行夥伴, 旅遊, 自由行, 背包客, 旅行團, 台灣旅遊, 香港自由行, 澳門旅行'),
                ogTitle: t('seo.ogTitle', 'TripPals - 尋找旅行夥伴'),
                ogDescription: t('seo.ogDescription', '與志同道合的旅行者聯繫，一起探索世界。'),
                twitterTitle: t('seo.twitterTitle', 'TripPals - 旅行夥伴'),
                twitterDescription: t('seo.twitterDescription', '尋找旅行夥伴，一起創造精彩冒險。')
            };
        } else {
            return {
                title: t('seo.title', 'TripPals - Find Travel Companions'),
                description: t('seo.description', 'Connect with like-minded travelers worldwide. Find travel companions, join group adventures, and create unforgettable experiences together.'),
                keywords: t('seo.keywords', 'travel companions, solo travel, group adventures, backpacking, travel app, adventure travel'),
                ogTitle: t('seo.ogTitle', 'TripPals - Find Travel Companions'),
                ogDescription: t('seo.ogDescription', 'Connect with like-minded travelers worldwide. Find travel companions and create unforgettable adventures.'),
                twitterTitle: t('seo.twitterTitle', 'TripPals - Travel Together'),
                twitterDescription: t('seo.twitterDescription', 'Find travel companions and create amazing adventures together.')
            };
        }
    }, [language, t]);

    useEffect(() => {
        const seoData = getSEOData();

        // Update title
        updateTitle(seoData.title);

        // Update meta tags
        updateMetaTag('title', seoData.title);
        updateMetaTag('description', seoData.description);
        updateMetaTag('keywords', seoData.keywords);

        // Update Open Graph tags
        updateMetaTag('', seoData.ogTitle, 'og:title');
        updateMetaTag('', seoData.ogDescription, 'og:description');
        updateMetaTag('', language === 'zh' ? 'zh_TW' : 'en_US', 'og:locale');

        // Update Twitter tags
        updateMetaTag('', seoData.twitterTitle, 'twitter:title');
        updateMetaTag('', seoData.twitterDescription, 'twitter:description');

        // Update canonical URL
        const canonicalUrl = `https://trip-pals.com${language === 'zh-HK' ? '?locale=zh-HK' : '?locale=en'}`;
        updateCanonical(canonicalUrl);

        // Update hreflang
        updateHreflang(language);

    }, [language, t, getSEOData]);

    return {
        updateMetaTag,
        updateTitle,
        updateCanonical,
        updateHreflang,
        getSEOData
    };
};

