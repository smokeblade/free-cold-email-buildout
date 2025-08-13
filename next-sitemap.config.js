export default {
  siteUrl: 'https://onvally.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  // Ensure sitemap consumers pick up the same favicon as the site
  additionalSitemaps: [],
  exclude: [
    '/book-a-demo',
    '/schedule-discovery-teamlead',
    '/refund-policy',
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/terms', '/privacy', '/replacement-policy', '/refund-policy', '/book-a-demo', '/schedule-discovery-teamlead'] },
    ],
  },
}


