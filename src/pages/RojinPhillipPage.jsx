import { Contact, Footer } from '@/components/site/Contact.jsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import heroImage from '../../assets/Project1/1.png'
import conceptImage from '../../assets/Project1/4.png'
import markImage from '../../assets/Project1/4_1.png'
import overviewImage from '../../assets/Project1/Project Look & fill.png'
import animationVideo from '../../assets/Project1/RP animation.mp4'
import stationaryImage from '../../assets/Project1/Stationary.png'
import visitingCardImage from '../../assets/Project1/Visiting card.png'
import tagsImage from '../../assets/Project1/Tags.png'
import keychainImage from '../../assets/Project1/Keychain.png'
import boxImage from '../../assets/Project1/Box.png'
import blackBoxImage from '../../assets/Project1/Black Box.png'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

const keywords = ['Luxury', 'Heritage', 'Prestige', 'Timeless', 'Sophisticated']

const gallery = [
  { src: stationaryImage, title: 'Stationery System', className: 'md:col-span-2 md:row-span-2' },
  { src: visitingCardImage, title: 'Visiting Cards', className: 'md:col-span-2' },
  { src: boxImage, title: 'Packaging Box', className: '' },
  { src: keychainImage, title: 'Leather Keychain', className: '' },
  { src: tagsImage, title: 'Product Tags', className: 'md:col-span-2' },
  { src: blackBoxImage, title: 'Black Box', className: '' },
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
      <motion.img
        src={heroImage}
        alt="Rojin Phillip luxury fashion brand identity hero"
        style={{ y: imageY }}
        className="absolute inset-0 h-[112%] w-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/35 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/20 to-[#050505]/30" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20"
      >
        <motion.a
          href="/work"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 w-fit text-xs uppercase tracking-[0.28em] text-[#ead6b4]/70 transition-colors hover:text-[#ead6b4]"
        >
          Back to work
        </motion.a>

        <div className="max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xs uppercase tracking-[0.35em] text-[#d8b47b]"
          >
            Luxury fashion brand identity
          </motion.p>
          <motion.h1
            initial={{ y: 34 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.34, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-serif text-[17vw] leading-[0.82] text-[#f6efe3] drop-shadow-[0_8px_28px_rgba(0,0,0,0.75)] md:text-[10vw] lg:text-[8.8rem]"
          >
            Rojin Phillip
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-8 flex max-w-4xl flex-col gap-5 border-t border-[#ead6b4]/25 pt-6 text-sm text-bone/65 md:flex-row md:items-end md:justify-between md:text-base"
          >
            <p className="max-w-xl leading-relaxed">
              A premium identity system shaped around heritage, restraint, and a refined
              owl-inspired emblem for a luxury fashion house.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Logo Design', 'Brand Identity', 'Packaging Design'].map((tag) => (
                <span key={tag} className="rounded-pill border border-[#ead6b4]/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#ead6b4]/80">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default function RojinPhillipPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-bone">
      <ProjectHero />

      <section className="px-6 py-14 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 border-b border-bone/10 pb-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pb-24">
          <RevealBlock>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Overview</p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-bone/70 md:text-lg">
              Rojin Phillip is a premium luxury fashion brand focused on timeless
              craftsmanship and refined elegance. The objective was to create a visual
              identity that speaks to affluent customers while maintaining exclusivity
              and sophistication.
            </p>
          </RevealBlock>
          <RevealBlock delay={0.08}>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Challenge</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-bone/65 md:text-base">
              <li>Communicate luxury without appearing excessive.</li>
              <li>Honor tradition while keeping the system modern and practical.</li>
              <li>Build a versatile mark for packaging, print, digital, and apparel use.</li>
              <li>Create a memorable symbol for prestige and craftsmanship.</li>
            </ul>
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <RevealBlock className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Brand Keywords</p>
            <div className="space-y-2">
              {keywords.map((word, index) => (
                <motion.p
                  key={word}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.55 }}
                  className="font-serif text-4xl leading-none text-bone md:text-5xl"
                >
                  {word}
                </motion.p>
              ))}
            </div>
          </RevealBlock>
          <RevealBlock delay={0.1} className="overflow-hidden rounded-2xl border border-[#ead6b4]/15 bg-[#0b0b0d]">
            <img src={overviewImage} alt="Rojin Phillip full identity reference" className="h-full max-h-[720px] w-full object-cover object-top opacity-90" />
          </RevealBlock>
        </div>
      </section>

      <section className="bg-[#071b33] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
          <RevealBlock>
            <p className="text-xs uppercase tracking-[0.3em] text-[#ead6b4]">Concept</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] text-bone md:text-7xl">
              A crest built from restraint.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-bone/70 md:text-base">
              The logo combines the letters R and P into a refined owl-inspired emblem,
              symbolizing wisdom, insight, and prosperity. The result is a mark that
              feels ceremonial without losing everyday usability.
            </p>
          </RevealBlock>
          <RevealBlock delay={0.1} className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-[#06101f] p-4">
              <img src={conceptImage} alt="Rojin Phillip logo construction" className="aspect-square w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl bg-[#06101f] p-4">
              <img src={markImage} alt="Rojin Phillip brand mark detail" className="aspect-square w-full object-contain" />
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Applications</p>
              <h2 className="mt-4 font-serif text-5xl leading-none text-bone md:text-7xl">
                Identity in use
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-bone/55">
              A tactile system across stationery, packaging, leather goods, and print
              touchpoints, designed to feel consistent without becoming repetitive.
            </p>
          </RevealBlock>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[190px]">
            {gallery.map((item, index) => (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-bone/10 bg-[#0d0d10] ${item.className}`}
              >
                <img
                  src={item.src}
                  alt={`Rojin Phillip ${item.title}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505]/85 to-transparent p-4 text-xs uppercase tracking-[0.2em] text-bone/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.title}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[0.9fr_1.1fr]">
          <RevealBlock className="overflow-hidden rounded-2xl border border-[#ead6b4]/15 bg-[#e8dfcf] p-4 md:p-6">
            <video
              src={animationVideo}
              className="aspect-[4/5] h-full w-full rounded-xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </RevealBlock>
          <RevealBlock delay={0.08} className="flex flex-col justify-between rounded-2xl border border-bone/10 bg-[#0c0c0f] p-7 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Digital Presence</p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-bone md:text-7xl">
                From emblem to experience.
              </h2>
            </div>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-bone/60 md:text-base">
              The visual language extends into web and social layouts with a measured
              balance of monochrome photography, deep navy, warm gold, and generous
              editorial spacing.
            </p>
          </RevealBlock>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#d8b47b]/30 to-transparent mx-6 md:mx-10" />
      <Contact />
      <Footer />
    </main>
  )
}
