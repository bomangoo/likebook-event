/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: '사이트명',
    generateRobotsTxt: true,
    priority: false,
    transform: async (config, url) => {
        return {
            loc: url,
            changefreq: 'daily',
            priority: url === '/' ? 1.0 : 0.8,
            lastmod: new Date().toISOString(),
        };
    },
};
