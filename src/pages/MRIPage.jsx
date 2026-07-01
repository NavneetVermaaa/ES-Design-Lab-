import { Contact, Footer } from '@/components/site/Contact.jsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import heroImage from '../../assets/MRI/1.png'
import img2 from '../../assets/MRI/2.png'
import img3 from '../../assets/MRI/3.png'
import img4 from '../../assets/MRI/4.png'
import img5 from '../../assets/MRI/5.png'
import img6 from '../../assets/MRI/6.png'

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
      <motion.img src={heroImage} alt="MRI hero" style={{ y: imageY }} className="absolute inset-0 h-[112%] w-full object-cover opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/35 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/20 to-[#050505]/30" />
      <motion.div style={{ y: contentY }} className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20">
        <div className="max-w-6xl">
          <motion.h1 initial={{ y: 34 }} animate={{ y: 0 }} transition={{ delay: 0.34, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mt-5 font-serif text-[17vw] leading-[0.82] text-[#f6efe3] drop-shadow-[0_8px_28px_rgba(0,0,0,0.75)] md:text-[10vw] lg:text-[8.8rem]">MRI</motion.h1>
        </div>
      </motion.div>
    </section>
  )
}

export default function MRIPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-bone">
      <ProjectHero />

      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl border-b border-bone/10 pb-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <RevealBlock>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">MRI Education &amp; Knowledge Platform</p>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#d8b47b]/60">Category</p>
              <p className="mt-1 text-sm leading-relaxed text-bone/70 md:text-base">Logo Design</p>
              <div className="mt-8 border-t border-bone/10 pt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Overview</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">MRI Master is an educational platform dedicated to MRI professionals, radiography students, radiologists, and medical learners. The platform provides practical MRI resources, examination protocols, artifacts, anatomy references, pathologies, and MRI physics in an accessible and user-friendly format.</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">The goal was to create a recognizable identity that directly connects with the field of Magnetic Resonance Imaging while maintaining clarity and professionalism.</p>
              </div>
            </RevealBlock>
            <RevealBlock delay={0.08}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">The Challenge</p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">The client wanted a logo inspired by MRI science, specifically incorporating a proton-inspired symbol and MRI-related visual elements.</p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">The identity needed to feel educational, professional, and instantly recognizable within the medical imaging field.</p>
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
                alt="MRI brand concept exploration"
                className="w-full h-auto object-contain"
              />
            </RevealBlock>
            <RevealBlock delay={0.08} className="md:py-8">
              <p className="max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">
                Multiple concepts were explored during the ideation phase, focusing on proton movement, magnetic resonance, orbit-inspired forms, and MRI symbolism.
              </p>
            </RevealBlock>
          </div>
          <div className="h-px bg-bone/10 mt-12" />
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="mx-auto max-w-3xl md:max-w-5xl text-center">
            <p className="text-sm leading-relaxed text-bone/70 md:text-base">
              After evaluating several directions, the proton-inspired concept was selected and refined into a clean, scalable mark. The final identity simplifies a complex scientific concept into a memorable visual symbol.
            </p>
          </RevealBlock>
          <RevealBlock delay={0.08} className="mt-8">
            <img
              src={img3}
              alt="MRI brand development"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
          <RevealBlock delay={0.12} className="mt-8">
            <img
              src={img4}
              alt="MRI brand development"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
          <RevealBlock delay={0.16} className="mt-8">
            <img
              src={img5}
              alt="MRI brand development"
              className="mx-auto w-full h-auto object-contain"
            />
          </RevealBlock>
          <RevealBlock delay={0.2} className="mt-8">
            <img
              src={img6}
              alt="MRI brand development"
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
