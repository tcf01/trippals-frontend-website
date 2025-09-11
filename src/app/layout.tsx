import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import I18nProvider from '@/components/I18nProvider';
import LocaleProvider from '@/components/LocaleProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TripPals - Find Travel Companions | 尋找旅行夥伴',
  description: 'Connect with like-minded travelers worldwide. Find travel companions, join group adventures, and create unforgettable experiences together. 與志同道合的旅行者聯繫，一起探索世界。',
  keywords: 'travel companions, solo travel, group adventures, backpacking, travel app, 旅行夥伴, 旅遊, 自由行, 背包客, 旅行團',
  authors: [{ name: 'TripPals' }],
  robots: 'index, follow',
  icons: {
    icon: '/app_icon.png',
    shortcut: '/app_icon.png',
    apple: '/app_icon.png',
  },
  openGraph: {
    title: 'TripPals - Find Travel Companions | 尋找旅行夥伴',
    description: 'Connect with like-minded travelers worldwide. Find travel companions and create unforgettable adventures.',
    url: 'https://trip-pals.com',
    siteName: 'TripPals',
    images: [
      {
        url: 'https://trip-pals.com/app_icon.png',
        width: 512,
        height: 512,
        alt: 'TripPals App Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TripPals - Travel Together',
    description: 'Find travel companions and create amazing adventures together.',
    images: ['https://trip-pals.com/app_icon.png'],
    creator: '@trippals',
    site: '@trippals',
  },
  alternates: {
    canonical: 'https://trip-pals.com',
    languages: {
      'en': 'https://trip-pals.com/?locale=en',
      'zh-HK': 'https://trip-pals.com/?locale=zh-HK',
    },
  },
  other: {
    'apple-itunes-app': 'app-id=your-app-id',
    'google-play-app': 'app-id=com.trippals',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <I18nProvider>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </I18nProvider>
      </body>
    </html>
  );
}