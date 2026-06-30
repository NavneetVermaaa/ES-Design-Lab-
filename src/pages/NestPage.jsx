import { Contact, Footer } from '@/components/site/Contact.jsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import heroImage from '../../assets/Nest/1.png'
import img2 from '../../assets/Nest/2.png'
import img3 from '../../assets/Nest/3.png'
import img4 from '../../assets/Nest/4.png'
import img5 from '../../assets/Nest/5.png'
import video6 from '../../assets/Nest/6.mp4'
import img7 from '../../assets/Nest/7.png'
import img8 from '../../assets/Nest/8.png'

const fadeUp = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } }

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
      <motion.img src={heroImage} alt="Nest hero" style={{ y: imageY }} className="absolute inset-0 h-[112%] w-full object-cover opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/35 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/20 to-[#050505]/30" />
      <motion.div style={{ y: contentY }} className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20">
        <div className="max-w-6xl">
          <motion.h1 initial={{ y: 34 }} animate={{ y: 0 }} transition={{ delay: 0.34, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mt-5 font-serif text-[17vw] leading-[0.82] text-[#f6efe3] drop-shadow-[0_8px_28px_rgba(0,0,0,0.75)] md:text-[10vw] lg:text-[8.8rem]">Nest</motion.h1>
        </div>
      </motion.div>
    </section>
  )
}

export default function NestPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-bone">
      <ProjectHero />

      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl border-b border-bone/10 pb-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <RevealBlock>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">NEST — Modern Fintech Brand Experience</p>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#d8b47b]/60">Tags</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {['Brand Applications', 'Marketing Design', 'Campaign Creatives', 'Digital Assets'].map((tag) => (
                  <span key={tag} className="rounded-pill border border-[#ead6b4]/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#ead6b4]/80">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 border-t border-bone/10 pt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Overview</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">Nest is a fintech platform designed to simplify personal finance by offering instant loans, credit score monitoring, and financial management tools in one seamless experience.</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">The objective was to create a cohesive visual system that would strengthen brand recognition across digital and offline touchpoints while maintaining a modern, trustworthy, and technology-driven identity.</p>
              </div>
            </RevealBlock>
            <RevealBlock delay={0.08}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">The Challenge</p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">The challenge was to create a modern and trustworthy visual identity that simplifies financial services while maintaining consistency across all brand touchpoints.</p>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-6 md:px-10 md:pb-8">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="bg-white">
            <img src={img2} alt="Nest brand identity showcase" className="mx-auto w-full h-auto object-contain" />
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl border-b border-bone/10 pb-14">
          <RevealBlock className="bg-white">
            <img src={img3} alt="Nest brand identity development" className="mx-auto w-full h-auto object-contain" />
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="mx-auto max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-bone/70 md:text-base">
              <strong className="text-bone/85">A series of marketing emails were designed to increase user engagement and promote financial products.</strong>
            </p>
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="bg-white">
            <img src={img4} alt="Nest brand identity showcase" className="mx-auto w-full h-auto object-contain" />
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock>
            <video autoPlay muted loop playsInline className="w-full object-contain">
              <source src={video6} type="video/mp4" />
            </video>
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="bg-white">
            <img src={img7} alt="Nest brand identity showcase" className="mx-auto w-full h-auto object-contain" />
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="bg-white">
            <img src={img8} alt="Nest brand identity showcase" className="mx-auto w-full h-auto object-contain" />
          </RevealBlock>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#d8b47b]/20 to-transparent mx-6 md:mx-10" />
      <Contact />
      <Footer />
    </main>
  )
}
