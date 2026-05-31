import SmoothScroll from '@/components/SmoothScroll.jsx'
import { Nav } from '@/components/site/Hero.jsx'
import { Helmet } from 'react-helmet-async'
import { structuredDataToJsonLd } from '@/lib/seo.js'
import { getOrganizationSchema } from '@/lib/seoConfig.js'

export default function MainLayout({ children, seoData = {} }) {
  const {
    title = 'ES Design Lab',
    description = 'Premium creative design studio specializing in branding, visual design, and video editing for ambitious brands.',
    image = 'https://esdesignlab.com/og-image.jpg',
    url = 'https://esdesignlab.com',
    type = 'website',
    keywords = 'design, branding, visual design, video editing, creative studio',
    structuredData = null,
  } = seoData;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        {/* Canonical */}
        <link rel="canonical" href={url} />

        {/* Default Organization Schema */}
        <script type="application/ld+json">
          {structuredDataToJsonLd(getOrganizationSchema())}
        </script>

        {/* Additional Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {structuredDataToJsonLd(structuredData)}
          </script>
        )}
      </Helmet>

      <SmoothScroll />
      <Nav />
      {children}
    </>
  )
}
