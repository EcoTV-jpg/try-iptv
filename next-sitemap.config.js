const SITE_URL = process.env.SITE_URL || 'https://www.tryiptv.com';

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    exclude: ['/iptv-subscription'],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            // Example of disallowing a path:
            // { userAgent: '*', disallow: '/admin' },
        ],
        additionalSitemaps: [
            `${SITE_URL}/sitemap.xml`,
        ],
        transformRobotsTxt: async (_, robotsTxt) => {
            return robotsTxt.replace(/Host: https?:\/\//i, 'Host: ');
        },
        // To add a crawl-delay, uncomment the following line:
        // crawlDelay: 5, 
    }
};

export default config;
