
/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    'genkit',
    '@genkit-ai/core',
    '@genkit-ai/google-genai',
    '@opentelemetry/sdk-node',
  ],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-cdn.ubuy.co.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'iptvwell.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.demotemplates.online',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'r2.thesportsdb.com',
        port: '',
        pathname: '/images/**',
      }
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'tryiptv\\.com',
          },
        ],
        destination: 'https://www.tryiptv.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?:www\\.)?iptvprovider\\.me',
          },
        ],
        destination: 'https://www.tryiptv.com/:path*',
        permanent: true,
      },
      {
        source: '/checkout',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/iptv-subscription',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/devices/fire-tv',
        destination: '/devices/firestick',
        permanent: true,
      },
      {
        source: '/devices/android',
        destination: '/devices/android-tv',
        permanent: true,
      },
      {
        source: '/devices/ios',
        destination: '/devices/iphone-ipad',
        permanent: true,
      },
      {
        source: '/devices/macos',
        destination: '/devices/mac',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
