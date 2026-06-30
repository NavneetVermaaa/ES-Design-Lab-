import { Contact, Footer } from '@/components/site/Contact.jsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import heroImage from '../../assets/SPF/1.png'
import img2 from '../../assets/SPF/2.png'
import img3 from '../../assets/SPF/3.png'
import img4 from '../../assets/SPF/4.png'
import img5 from '../../assets/SPF/5.png'
import img6 from '../../assets/SPF/6.png'
import img7 from '../../assets/SPF/7.png'

const fadeUp = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } }
const keywords = ['Luxury', 'Heritage', 'Prestige', 'Timeless', 'Sophisticated']
const brandCollage = [
  { src: img2, title: 'Luxury wardrobe', className: '' },
  { src: img3, title: 'Leather goods', className: 'col-span-2 row-span-1' },
  { src: img4, title: 'Wordmark', className: '' },
  { src: img5, title: 'Hardware detail', className: '' },
  { src: img6, title: 'Seal mark', className: '' },
]
const developmentImages = [
  { src: img3, title: 'Sketch exploration' },
  { src: img4, title: 'Constructed mark' },
  { src: img5, title: 'Brand pattern' },
]

function RevealBlock({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ProjectHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-[#050505]">
      <motion.img src={heroImage} alt="SPF hero" style={{ y: imageY }} className="absolute inset-0 h-[112%] w-full object-cover opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/35 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/20 to-[#050505]/30" />
      <motion.div style={{ y: contentY }} className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20">
        <div className="max-w-6xl">
          <motion.h1 initial={{ y: 34 }} animate={{ y: 0 }} transition={{ delay: 0.34, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mt-5 font-serif text-[17vw] leading-[0.82] text-[#f6efe3] drop-shadow-[0_8px_28px_rgba(0,0,0,0.75)] md:text-[10vw] lg:text-[8.8rem]">SPF</motion.h1>
        </div>
      </motion.div>
    </section>
  )
}

export default function SPFPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-bone">
      <ProjectHero />

      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl border-b border-bone/10 pb-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <RevealBlock>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">The Sign &amp; Print Factory</p>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#d8b47b]/60">Category</p>
              <p className="mt-1 text-sm leading-relaxed text-bone/70 md:text-base">Logo Design</p>
              <div className="mt-8 border-t border-bone/10 pt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Overview</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">The Sign &amp; Print Factory is a printing and signage company providing print, signage, and visual communication solutions. The goal was to create a professional identity that reflects creativity, precision, and modern printing capabilities.</p>
              </div>
            </RevealBlock>
            <RevealBlock delay={0.08}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">The Challenge</p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-bone/70 md:text-base">
                <li>Incorporate the company initials (<strong className="text-bone/85">S</strong> and <strong className="text-bone/85">P</strong>).</li>
                <li>Feel elegant and professional.</li>
                <li>Avoid overly colorful or child-like aesthetics.</li>
                <li>Represent the printing industry in a subtle way.</li>
                <li>Remain versatile across signage, packaging, vehicles, and digital platforms.</li>
                <li>Include a refined CMYK-inspired gradient without looking loud.</li>
              </ul>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="bg-white">
            <img
              src={img2}
              alt="SPF brand mark"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl border-b border-bone/10 pb-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <RevealBlock>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Client Inspiration</p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">
                Create an elegant logo using the initials <strong className="text-bone/85">S &amp; P</strong>. The identity should feel professional and modern while incorporating a subtle CMYK-inspired gradient that reflects the printing industry.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.08}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">The Solution</p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-bone/70 md:text-base">
                <li>A distinctive monogram built from the company&rsquo;s initials.</li>
                <li>A subtle connection to the printing industry through CMYK-inspired colors.</li>
                <li>An elegant and modern visual style.</li>
                <li>Strong brand recognition across physical and digital touchpoints.</li>
                <li>Flexibility for signage, packaging, vehicle branding, stationery, and web use.</li>
              </ul>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="mx-auto max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-bone/70 md:text-base">
              <strong className="text-bone/85">Inspired by the four essential printing colors, representing the company&rsquo;s core expertise.</strong>
            </p>
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="bg-white">
            <img
              src={img3}
              alt="SPF brand development"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="bg-white">
            <img
              src={img4}
              alt="SPF brand development"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="bg-white">
            <img
              src={img5}
              alt="SPF brand development"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="bg-white">
            <img
              src={img6}
              alt="SPF brand development"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="bg-white">
            <img
              src={img7}
              alt="SPF brand development"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#d8b47b]/20 to-transparent mx-6 md:mx-10" />
      <Contact />
      <Footer />
    </main>
  )
}
