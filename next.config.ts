import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Remove experimental config that's causing build issues

  // Redirect malformed URLs to 404 page using targeted patterns
  async redirects() {
    return [
      // Catch URLs that start with problematic special characters
      // These are characters that commonly cause issues in URLs
      {
        source: '/&(.*)',
        destination: '/not-found',
        permanent: false,
      },
      {
        source: '/$(.*)',
        destination: '/not-found',
        permanent: false,
      },
      {
        source: '/%(.*)',
        destination: '/not-found',
        permanent: false,
      },
      {
        source: '/#(.*)',
        destination: '/not-found',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
