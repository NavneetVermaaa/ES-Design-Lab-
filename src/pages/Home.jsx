import { Hero } from '@/components/site/Hero.jsx'
import Intro from '@/components/site/Intro.jsx'
import Work from '@/components/site/Work.jsx'
import Expertise from '@/components/site/Expertise.jsx'
import SectionDivider from '@/components/site/SectionDivider.jsx'
import Testimonial from '@/components/site/Testimonial.jsx'
import WhyUs from '@/components/site/WhyUs.jsx'
import { Contact, Footer } from '@/components/site/Contact.jsx'

export default function Home() {
  return (
    <main className="bg-background text-bone">
      <Hero />
      <Intro />
      <Work />
      <Expertise />
      <SectionDivider />
      <Testimonial />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
