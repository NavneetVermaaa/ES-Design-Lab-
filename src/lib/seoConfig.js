/**
 * SEO Configuration for ES Design Lab
 * Centralized metadata, structured data, and SEO settings
 */

export const SITE_CONFIG = {
  name: 'ES Design Lab',
  description: 'Premium creative design studio specializing in branding, visual design, and video editing for ambitious brands.',
  domain: 'https://esdesignlab.com', // Update with actual domain
  image: 'https://esdesignlab.com/og-image.jpg', // Update with actual OG image URL
  phone: '+1 (555) 123-4567', // Update with actual phone
  email: 'hello@esdesignlab.com', // Update with actual email
  address: '123 Creative Street, Design City, DC 12345', // Update with actual address
  socialProfiles: {
    instagram: 'https://instagram.com/esdesignlab',
    linkedin: 'https://linkedin.com/company/esdesignlab',
    twitter: 'https://twitter.com/esdesignlab',
    facebook: 'https://facebook.com/esdesignlab',
  },
};

export const SERVICES_META = {
  branding: {
    title: 'Branding Design Services | ES Design Lab',
    description: 'Build powerful brand identities for startups and established brands. Logo design, identity systems, and visual guidelines.',
    slug: 'branding',
  },
  'visual-design': {
    title: 'Visual Design Services | ES Design Lab',
    description: 'Editorial, packaging, and marketing design. Brochures, reports, retail packaging, and exhibition design.',
    slug: 'visual-design',
  },
  'video-editing': {
    title: 'Video Editing & Motion Design | ES Design Lab',
    description: 'Story-driven motion content for social media and brands. Professional video editing and animation services.',
    slug: 'video-editing',
  },
};

export const PAGES_META = {
  home: {
    title: 'ES Design Lab | Premium Creative Design Studio',
    description: 'Build to Shape Brands. Premium creative design studio specializing in branding, visual design, and video editing.',
    path: '/',
  },
  work: {
    title: 'Our Work | Creative Portfolio | ES Design Lab',
    description: 'View our portfolio of 50+ successful design projects for ambitious brands and startups.',
    path: '/work',
  },
  blog: {
    title: 'Design Blog | Insights & Articles | ES Design Lab',
    description: 'Read our latest articles on branding, design trends, and creative strategy.',
    path: '/blog',
  },
  process: {
    title: 'Our Design Process | ES Design Lab',
    description: 'Discover our systematic approach to design. From discovery to delivery, learn how we work.',
    path: '/process',
  },
  about: {
    title: 'About | ES Design Lab — Creative Lab for Modern Brands',
    description: 'We are a creative lab for modern brands. Learn about our philosophy, process, and the team behind ES Design Lab.',
    path: '/about',
  },
};

/**
 * Generate structured data for Google Search Console and rich snippets
 */

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.domain,
  logo: `${SITE_CONFIG.domain}/logo.png`,
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address,
  },
  sameAs: [
    SITE_CONFIG.socialProfiles.instagram,
    SITE_CONFIG.socialProfiles.linkedin,
    SITE_CONFIG.socialProfiles.twitter,
  ],
  areaServed: 'US',
  knowsAbout: ['Branding', 'Design', 'Visual Design', 'Video Editing', 'Creative Services'],
  foundingDate: '2018',
  numberOfEmployees: '10',
});

export const getServiceSchema = (serviceKey) => {
  const service = SERVICES_META[serviceKey];
  if (!service) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title.replace(' | ES Design Lab', ''),
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    areaServed: 'US',
    availableLanguage: 'en',
  };
};

export const getCreativeWorkSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.name,
  description: project.description || 'Design project by ES Design Lab',
  image: project.image,
  creator: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
  },
  datePublished: project.date || new Date().toISOString(),
  keywords: project.tags || [],
});

export const getBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_CONFIG.domain}${item.url}`,
  })),
});
