/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'cdn.brandfetch.io' },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
  async rewrites() {
    return [
      // Ensure crawlers and browsers hitting /favicon.ico get our PNG
      { source: '/favicon.ico', destination: '/onvally_favicon.png' },
    ]
  },
}

export default nextConfig


