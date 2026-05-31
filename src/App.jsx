import MainLayout from '@/layouts/MainLayout.jsx'
import Home from '@/pages/Home.jsx'
import ServicePage from '@/pages/ServicePage.jsx'
import WorkPage from '@/pages/WorkPage.jsx'
import AboutPage from '@/pages/AboutPage.jsx'
import { servicePages } from '@/data/services.js'
import { getPageMetaTags, getServiceMetaTags } from '@/lib/seo.js'
import { getServiceSchema } from '@/lib/seoConfig.js'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const service = servicePages[path]

  // Determine SEO data based on current path
  let seoData = {}

  if (path === '/about') {
    seoData = getPageMetaTags('about')
  } else if (path === '/work') {
    seoData = getPageMetaTags('work')
  } else if (service) {
    // Extract service key from path (e.g., '/branding' -> 'branding')
    const serviceKey = path.slice(1)
    seoData = getServiceMetaTags(serviceKey)
    seoData.structuredData = getServiceSchema(serviceKey)
  } else {
    // Home page
    seoData = getPageMetaTags('home')
  }

  return (
    <MainLayout seoData={seoData}>
      {path === '/about' ? <AboutPage /> : path === '/work' ? <WorkPage /> : service ? <ServicePage service={service} /> : <Home />}
    </MainLayout>
  )
}
