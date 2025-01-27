
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.cecdetailing.com.au',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    additionalPaths: async (config) => {
        return [
            { loc: '/', changefreq: 'daily', priority: 1.0 },
            { loc: '/contact', changefreq: 'daily', priority: 0.7 },
            { loc: '/faq', changefreq: 'daily', priority: 0.7 },
            { loc: '/gallery', changefreq: 'daily', priority: 0.7 },
            { loc: '/our-location', changefreq: 'daily', priority: 0.7 },
            { loc: '/privacy-policy-tos', changefreq: 'daily', priority: 0.7 },
            { loc: '/services/ceramic-coating', changefreq: 'daily', priority: 0.7 },
            { loc: '/services/decontamination', changefreq: 'daily', priority: 0.7 },
            { loc: '/services/engine-bay-detail', changefreq: 'daily', priority: 0.7 },
            { loc: '/services/headlight-restoration', changefreq: 'daily', priority: 0.7 },
            { loc: '/services/interior-detailing', changefreq: 'daily', priority: 0.7 },
            { loc: '/services/paint-correction', changefreq: 'daily', priority: 0.7 },
            { loc: '/subscription-plans', changefreq: 'daily', priority: 0.7 },
        ];
    },
};