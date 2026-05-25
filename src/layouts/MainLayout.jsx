import SmoothScroll from '@/components/SmoothScroll.jsx'
import { Nav } from '@/components/site/Hero.jsx'

export default function MainLayout({ children }) {
  return (
    <>
      <SmoothScroll />
      <Nav />
      {children}
    </>
  )
}
