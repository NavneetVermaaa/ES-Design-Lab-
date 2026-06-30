import { Contact, Footer } from '@/components/site/Contact.jsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import bannerVideo from '../../assets/CBA/Banner video1.mp4'
import colorVideo from '../../assets/CBA/color video.mp4'
import img2 from '../../assets/CBA/2.png'
import img3 from '../../assets/CBA/3.png'
import img4 from '../../assets/CBA/4.png'
import img5 from '../../assets/CBA/5.png'
import img6 from '../../assets/CBA/6.png'
import img7 from '../../assets/CBA/7.png'

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
  { src: img5, title: 'Constructed mark' },
  { src: img7, title: 'Brand pattern' },
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
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-[#050505]">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-75">
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/35 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/20 to-[#050505]/30" />
      <motion.div style={{ y: contentY }} className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20">
        <div className="max-w-6xl">
          <motion.h1 initial={{ y: 34 }} animate={{ y: 0 }} transition={{ delay: 0.34, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mt-5 font-serif text-[17vw] leading-[0.82] text-[#f6efe3] drop-shadow-[0_8px_28px_rgba(0,0,0,0.75)] md:text-[10vw] lg:text-[8.8rem]">CBA</motion.h1>
        </div>
      </motion.div>
    </section>
  )
}

export default function CBAPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-bone">
      <ProjectHero />

      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl border-b border-bone/10 pb-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <RevealBlock>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Celetise Business Advisor</p>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#d8b47b]/60">Category</p>
              <p className="mt-1 text-sm leading-relaxed text-bone/70 md:text-base">Brand Identity</p>
              <div className="mt-8 border-t border-bone/10 pt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">The Challenge</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">Most financial advisory firms use generic charts, arrows, or bar graphs in their branding.</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">The challenge was to create a distinctive visual identity that communicates growth and guidance while remaining clean, modern, and professional.</p>
              </div>
            </RevealBlock>
            <RevealBlock delay={0.08}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Overview</p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">Brand Identity Design for <strong className="text-bone/90">CBA (Celetise Business Advisors)</strong>, a financial consulting firm providing Fractional CFO, Bookkeeping, and FP&amp;A (Financial Planning &amp; Analysis) services for small and medium-sized businesses.</p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">Their mission is to help businesses gain financial clarity, make informed decisions, and achieve sustainable growth.</p>
              <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Project Objectives</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-bone/70 md:text-base">
                <li>Represent business growth and financial expertise.</li>
                <li>Build trust and credibility.</li>
                <li>Appeal to SMB owners and decision-makers.</li>
                <li>Use the initials <strong className="text-bone/90">&quot;CBA&quot;</strong> in a meaningful and strategic way.</li>
              </ul>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="w-full overflow-hidden bg-[#0d0d10]">
            <img src={img2} alt="CBA brand identity design showcase" className="w-full object-contain" />
          </RevealBlock>
          <RevealBlock delay={0.08} className="mt-8 w-full overflow-hidden bg-[#0d0d10]">
            <img src={img3} alt="CBA brand identity application showcase" className="w-full object-contain" />
          </RevealBlock>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
            <RevealBlock delay={0.1}>
              <p className="text-sm leading-relaxed text-bone/70 md:text-base">
                The arrow signifies continuous business growth, while the tick represents financial accuracy and trusted decision-making. Together, they communicate sustainable growth driven by expert financial guidance.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.16}>
              <img src={img4} alt="CBA arrow and tick brand mark" className="w-full object-contain bg-[#0d0d10]" />
            </RevealBlock>
          </div>
          <RevealBlock delay={0.12} className="mt-8 w-full overflow-hidden bg-[#0d0d10]">
            <img src={img5} alt="CBA brand identity visual showcase" className="w-full object-contain" />
          </RevealBlock>
          <RevealBlock delay={0.16} className="mt-8 w-full">
            <video autoPlay muted loop playsInline className="w-full object-contain">
              <source src={colorVideo} type="video/mp4" />
            </video>
          </RevealBlock>
          <RevealBlock delay={0.2} className="mt-8 w-full overflow-hidden bg-[#0d0d10]">
            <img src={img6} alt="CBA brand identity detail showcase" className="w-full object-contain" />
          </RevealBlock>
          <RevealBlock delay={0.24} className="mt-8 w-full overflow-hidden bg-[#0d0d10]">
            <img src={img7} alt="CBA brand identity final showcase" className="w-full object-contain" />
          </RevealBlock>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
