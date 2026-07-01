import { Contact, Footer } from '@/components/site/Contact.jsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import heroImage from '../../assets/Acrowell/1.png'
import img2 from '../../assets/Acrowell/2.png'
import img3 from '../../assets/Acrowell/3.png'
import img4 from '../../assets/Acrowell/4.png'
import img5 from '../../assets/Acrowell/5.png'
import img6 from '../../assets/Acrowell/6.png'
import img7 from '../../assets/Acrowell/7.png'
import img8 from '../../assets/Acrowell/8.png'

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
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-[#050505]">
      <motion.img src={heroImage} alt="Acrowell hero" style={{ y: imageY }} className="absolute inset-0 h-[112%] w-full object-cover opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/35 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/20 to-[#050505]/30" />
      <motion.div style={{ y: contentY }} className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20">
        <div className="max-w-6xl">
          <motion.h1 initial={{ y: 34 }} animate={{ y: 0 }} transition={{ delay: 0.34, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mt-5 font-serif text-[17vw] leading-[0.82] text-[#f6efe3] drop-shadow-[0_8px_28px_rgba(0,0,0,0.75)] md:text-[10vw] lg:text-[8.8rem]">Acrowell</motion.h1>
        </div>
      </motion.div>
    </section>
  )
}

export default function AcrowellPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-bone">
      <ProjectHero />

      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl border-b border-bone/10 pb-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <RevealBlock>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Acrowell Dermacare</p>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#d8b47b]/60">Category</p>
              <p className="mt-1 text-sm leading-relaxed text-bone/70 md:text-base">Brand Identity</p>
              <div className="mt-8 border-t border-bone/10 pt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">The Challenge</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">Design a logo that balances clinical trust with modern skincare aesthetics while creating a distinctive visual identity for the brand.</p>
              </div>
            </RevealBlock>
            <RevealBlock delay={0.08}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Overview</p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">Acrowell Dermacare is an Indian dermatology and skincare brand operating under Acrowell Labs. The company offers GMP and WHO-certified skincare solutions, including cleansers, sunscreens, and targeted treatment products designed for healthy and effective skin care.</p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">The objective was to create a sophisticated and memorable identity that reflects both scientific credibility and beauty-focused skincare.</p>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
            <RevealBlock>
              <img
                src={img2}
                alt="Acrowell lotus-inspired W letterform"
                className="w-full h-auto object-contain"
              />
            </RevealBlock>
            <RevealBlock delay={0.08} className="md:py-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Lotus-inspired form</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-bone md:text-5xl">W letterform</h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">
                A unique brand mark that represents purity, skin wellness, beauty, and transformation.
              </p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">
                The lotus symbolizes renewal, care, and natural beauty, while the integrated <strong className="text-bone/85">&ldquo;W&rdquo;</strong> reinforces the Acrowell brand name and creates a distinctive visual signature.
              </p>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock>
            <img
              src={img3}
              alt="Acrowell brand mark detail"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
          <RevealBlock delay={0.08} className="mt-8 text-center">
            <p className="mx-auto max-w-4xl text-sm leading-relaxed text-bone/70 md:text-base">
              <strong className="text-bone/85">Together, they create a symbol that reflects healthy skin, confidence, and scientific skincare expertise.</strong>
            </p>
          </RevealBlock>
          <RevealBlock delay={0.12} className="mt-8">
            <img
              src={img4}
              alt="Acrowell brand mark detail"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
          <RevealBlock delay={0.16} className="mt-8">
            <img
              src={img5}
              alt="Acrowell brand mark detail"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
          <RevealBlock delay={0.2} className="mt-8">
            <img
              src={img6}
              alt="Acrowell brand mark detail"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
          <RevealBlock delay={0.24} className="mt-8">
            <img
              src={img7}
              alt="Acrowell brand mark detail"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
          <RevealBlock delay={0.28} className="mt-8">
            <img
              src={img8}
              alt="Acrowell brand mark detail"
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
