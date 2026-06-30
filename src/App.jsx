import { useState, useEffect } from 'react'
import MainLayout from '@/layouts/MainLayout.jsx'
import Home from '@/pages/Home.jsx'
import ServicePage from '@/pages/ServicePage.jsx'
import WorkPage from '@/pages/WorkPage.jsx'
import RojinPhillipPage from '@/pages/RojinPhillipPage.jsx'
import AcrowellPage from '@/pages/AcrowellPage.jsx'
import CBAPage from '@/pages/CBAPage.jsx'
import MRIPage from '@/pages/MRIPage.jsx'
import SPFPage from '@/pages/SPFPage.jsx'
import NestPage from '@/pages/NestPage.jsx'
import AboutPage from '@/pages/AboutPage.jsx'
import { servicePages } from '@/data/services.js'
import ScrollToTop from '@/components/ScrollToTop.jsx'
import { getCaseStudyMetaTags, getPageMetaTags, getServiceMetaTags } from '@/lib/seo.js'
import { getCreativeWorkSchema, getServiceSchema } from '@/lib/seoConfig.js'

export default function App() {
  const [, forceUpdate] = useState(0)

  useEffect(() => {
    const handler = () => forceUpdate((k) => k + 1)
    window.addEventListener('popstate', handler)
    window.addEventListener('app-navigate', handler)
    return () => {
      window.removeEventListener('popstate', handler)
      window.removeEventListener('app-navigate', handler)
    }
  }, [])

  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const service = servicePages[path]

  // Determine SEO data based on current path
  let seoData = {}

  if (path === '/work/rojin-phillip') {
    const caseStudy = {
      name: 'Rojin Phillip',
      slug: 'rojin-phillip',
      description: 'Luxury fashion brand identity case study for Rojin Phillip by ES Design Lab.',
      services: ['Logo Design', 'Brand Identity', 'Packaging Design'],
    }
    seoData = getCaseStudyMetaTags(caseStudy)
    seoData.structuredData = getCreativeWorkSchema({
      ...caseStudy,
      image: seoData.image,
      tags: caseStudy.services,
    })
  } else if (path === '/projects/acrowell') {
    const caseStudy = {
      name: 'Acrowell',
      slug: 'acrowell',
      description: 'Luxury fashion brand identity case study for Acrowell by ES Design Lab.',
      services: ['Logo Design', 'Brand Identity', 'Packaging Design'],
    }
    seoData = getCaseStudyMetaTags(caseStudy)
    seoData.structuredData = getCreativeWorkSchema({
      ...caseStudy,
      image: seoData.image,
      tags: caseStudy.services,
    })
  } else if (path === '/projects/cba') {
    const caseStudy = {
      name: 'CBA',
      slug: 'cba',
      description: 'Luxury fashion brand identity case study for CBA by ES Design Lab.',
      services: ['Logo Design', 'Brand Identity', 'Packaging Design'],
    }
    seoData = getCaseStudyMetaTags(caseStudy)
    seoData.structuredData = getCreativeWorkSchema({
      ...caseStudy,
      image: seoData.image,
      tags: caseStudy.services,
    })
  } else if (path === '/projects/mri') {
    const caseStudy = {
      name: 'MRI',
      slug: 'mri',
      description: 'Luxury fashion brand identity case study for MRI by ES Design Lab.',
      services: ['Logo Design', 'Brand Identity', 'Packaging Design'],
    }
    seoData = getCaseStudyMetaTags(caseStudy)
    seoData.structuredData = getCreativeWorkSchema({
      ...caseStudy,
      image: seoData.image,
      tags: caseStudy.services,
    })
  } else if (path === '/projects/spf') {
    const caseStudy = {
      name: 'SPF',
      slug: 'spf',
      description: 'Luxury fashion brand identity case study for SPF by ES Design Lab.',
      services: ['Logo Design', 'Brand Identity', 'Packaging Design'],
    }
    seoData = getCaseStudyMetaTags(caseStudy)
    seoData.structuredData = getCreativeWorkSchema({
      ...caseStudy,
      image: seoData.image,
      tags: caseStudy.services,
    })
  } else if (path === '/projects/nest') {
    const caseStudy = {
      name: 'Nest',
      slug: 'nest',
      description: 'Brand identity system for Nest by ES Design Lab.',
      services: ['Logo Design', 'Brand Identity', 'Packaging Design'],
    }
    seoData = getCaseStudyMetaTags(caseStudy)
    seoData.structuredData = getCreativeWorkSchema({
      ...caseStudy,
      image: seoData.image,
      tags: caseStudy.services,
    })
  } else if (path === '/about') {
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
    <>
      <ScrollToTop path={path} />
      <MainLayout seoData={seoData}>
      {path === '/about' ? (
        <AboutPage />
      ) : path === '/work/rojin-phillip' ? (
        <RojinPhillipPage />
      ) : path === '/projects/acrowell' ? (
        <AcrowellPage />
      ) : path === '/projects/cba' ? (
        <CBAPage />
      ) : path === '/projects/mri' ? (
        <MRIPage />
      ) : path === '/projects/spf' ? (
        <SPFPage />
      ) : path === '/projects/nest' ? (
        <NestPage />
      ) : path === '/work' ? (
        <WorkPage />
      ) : service ? (
        <ServicePage service={service} />
      ) : (
        <Home />
      )}
    </MainLayout>
    </>
  )
}
