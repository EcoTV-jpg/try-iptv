
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
      // ── Domain canonicalization ────────────────────────────────────────────
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

      // ── Commercial page redirects ──────────────────────────────────────────
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

      // ── Old device slug redirects (legacy aliases) ─────────────────────────
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
      // /devices/ios had a how-to page (iphone-ipad) that is no longer in
      // the approved allowlist. No approved iOS device page exists. 404.
      {
        source: '/devices/macos',
        destination: '/devices/mac',
        permanent: true,
      },
      // /devices/mag → /devices/mag-box (slug rename to match approved allowlist)
      {
        source: '/devices/mag',
        destination: '/devices/mag-box',
        permanent: true,
      },
      // /devices/iphone-ipad has no approved replacement device page → 404
      // (no redirect added intentionally)

      // /devices/troubleshooting → closest approved equivalent is /help/iptv-buffering
      {
        source: '/devices/troubleshooting',
        destination: '/help/iptv-buffering',
        permanent: true,
      },

      // ── Removed utility page redirects ─────────────────────────────────────
      // /contact → /contact-us (slug rename to match approved allowlist)
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      // /about has no close approved equivalent → intentional 404
      // (no redirect added intentionally)
    ]
  },
};

export default nextConfig;
