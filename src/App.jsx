import MainLayout from '@/layouts/MainLayout.jsx'
import Home from '@/pages/Home.jsx'
import ServicePage from '@/pages/ServicePage.jsx'
import WorkPage from '@/pages/WorkPage.jsx'
import { servicePages } from '@/data/services.js'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const service = servicePages[path]

  if (path === '/work') return <WorkPage />

  return (
    <MainLayout>
      {service ? <ServicePage service={service} /> : <Home />}
    </MainLayout>
  )
}
