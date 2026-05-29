import MainLayout from '@/layouts/MainLayout.jsx'
import Home from '@/pages/Home.jsx'
import ServicePage from '@/pages/ServicePage.jsx'
import { servicePages } from '@/data/services.js'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const service = servicePages[path]

  return (
    <MainLayout>
      {service ? <ServicePage service={service} /> : <Home />}
    </MainLayout>
  )
}
