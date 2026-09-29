const SITE_URL = process.env.SITE_URL || 'https://www.tryiptv.com';

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    autoLastmod: false,
    exclude: [
        '/iptv-subscription',
        '/checkout',
        '/api/*',
        '/robots.txt',
        '/sitemap.xml',
    ],
    transform: async (config, path) => {
        return {
            loc: path,
        };
    },
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
        additionalSitemaps: [
            `${SITE_URL}/sitemap.xml`,
        ],
        transformRobotsTxt: async (_, robotsTxt) => {
            return robotsTxt.replace(/Host: https?:\/\//i, 'Host: ');
        },
    }
};

export default config;
