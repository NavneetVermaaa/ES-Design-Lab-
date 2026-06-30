/**
 * SEO Utilities for ES Design Lab
 * Functions to manage meta tags, structured data, and SEO metadata
 */

import { SITE_CONFIG, PAGES_META, SERVICES_META } from './seoConfig.js';

/**
 * Get default meta tags for a page
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Meta description
 * @param {string} options.image - OG image URL
 * @param {string} options.url - Page URL
 * @param {string} options.type - og:type (article, website, etc.)
 * @returns {Object} Meta tags object
 */
export const getMetaTags = ({
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.image,
  url = SITE_CONFIG.domain,
  type = 'website',
}) => ({
  title,
  description,
  image,
  url,
  type,
  keywords: 'design, branding, visual design, video editing, creative studio',
});

/**
 * Get service page meta tags
 * @param {string} serviceKey - 'branding', 'communication-design', 'video-editing'
 * @returns {Object} Meta tags for service page
 */
export const getServiceMetaTags = (serviceKey) => {
  const service = SERVICES_META[serviceKey];
  if (!service) return getMetaTags();

  return getMetaTags({
    title: service.title,
    description: service.description,
    url: `${SITE_CONFIG.domain}/${service.slug}`,
  });
};

/**
 * Get page meta tags
 * @param {string} pageKey - 'home', 'work', 'blog', 'process'
 * @returns {Object} Meta tags for page
 */
export const getPageMetaTags = (pageKey) => {
  const page = PAGES_META[pageKey];
  if (!page) return getMetaTags();

  return getMetaTags({
    title: page.title,
    description: page.description,
    url: `${SITE_CONFIG.domain}${page.path}`,
  });
};

/**
 * Get blog post meta tags
 * @param {Object} post - Blog post object
 * @returns {Object} Meta tags for blog post
 */
export const getBlogPostMetaTags = (post) => ({
  title: `${post.title} | ES Design Lab Blog`,
  description: post.excerpt || post.description,
  image: post.image || SITE_CONFIG.image,
  url: `${SITE_CONFIG.domain}/blog/${post.slug}`,
  type: 'article',
  author: post.author || 'ES Design Lab',
  publishedTime: post.publishDate,
  keywords: post.tags?.join(', ') || 'design, branding',
});

/**
 * Get case study meta tags
 * @param {Object} caseStudy - Case study object
 * @returns {Object} Meta tags for case study
 */
export const getCaseStudyMetaTags = (caseStudy) => ({
  title: `${caseStudy.name} | Case Study | ES Design Lab`,
  description: caseStudy.description || `Design case study: ${caseStudy.name}`,
  image: caseStudy.image || SITE_CONFIG.image,
  url: `${SITE_CONFIG.domain}/work/${caseStudy.slug}`,
  type: 'article',
  keywords: caseStudy.services?.join(', ') || 'design, branding',
});

/**
 * Format structured data as JSON-LD script tag
 * @param {Object} schema - Schema.org object
 * @returns {string} JSON-LD script content
 */
export const structuredDataToJsonLd = (schema) => {
  return JSON.stringify(schema);
};

/**
 * Generate canonical URL for a page
 * @param {string} path - Page path
 * @returns {string} Canonical URL
 */
export const getCanonicalUrl = (path = '/') => {
  return `${SITE_CONFIG.domain}${path}`;
};

/**
 * Generate social share URLs
 * @param {string} url - Page URL
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @returns {Object} Social share URLs
 */
export const getSocialShareUrls = (url, title, description) => ({
  twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + ' ' + url)}`,
});

/**
 * Create XML sitemap entry
 * @param {string} loc - URL location
 * @param {string} lastmod - Last modified date (ISO format)
 * @param {string} changefreq - Change frequency (always, hourly, daily, weekly, monthly, yearly, never)
 * @param {string} priority - Priority (0.0 to 1.0)
 * @returns {Object} Sitemap entry
 */
export const createSitemapEntry = (
  loc,
  lastmod = new Date().toISOString().split('T')[0],
  changefreq = 'weekly',
  priority = '0.8'
) => ({
  loc,
  lastmod,
  changefreq,
  priority,
});

/**
 * Create robots.txt content
 * @returns {string} Robots.txt content
 */
export const generateRobotsTxt = () => `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.domain}/sitemap.xml

# Disallow admin routes if any
Disallow: /admin
Disallow: /api
`;
