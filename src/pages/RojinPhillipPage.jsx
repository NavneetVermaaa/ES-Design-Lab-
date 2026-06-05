import { Contact, Footer } from '@/components/site/Contact.jsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import heroImage from '../../assets/Project1/1.png'
import sketchImage from '../../assets/Project1/Sketch.png'
import logoImage from '../../assets/Project1/Logo.png'
import patternImage from '../../assets/Project1/Patern.png'
import formulaImage from '../../assets/Project1/R+P.png'
import blueLogoImage from '../../assets/Project1/Blue back logo.png'
import circleLogoImage from '../../assets/Project1/Circle logo.png'
import modelImage from '../../assets/Project1/model image.png'
import productImage from '../../assets/Project1/Product image.png'
import productsShootImage from '../../assets/Project1/Products shoot.png'
import stationaryImage from '../../assets/Project1/Stationary.png'
import visitingCardImage from '../../assets/Project1/Visiting card.png'
import tagsImage from '../../assets/Project1/Tags.png'
import keychainImage from '../../assets/Project1/Keychain.png'
import boxImage from '../../assets/Project1/Box.png'
import blackBoxImage from '../../assets/Project1/Black Box.png'
import websiteImage from '../../assets/Project1/Website.png'
import socialMediaImage from '../../assets/Project1/Social media.png'
import colorsFamilyImage from '../../assets/Project1/4.png'
import rpAnimation from '../../assets/Project1/RP animation.mp4'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

const keywords = ['Luxury', 'Heritage', 'Prestige', 'Timeless', 'Sophisticated']

const brandCollage = [
  { src: modelImage, title: 'Luxury wardrobe', className: '' },
  { src: productsShootImage, title: 'Leather goods', className: 'col-span-2 row-span-1' },
  { src: blueLogoImage, title: 'Wordmark', className: '' },
  { src: productImage, title: 'Hardware detail', className: '' },
  { src: circleLogoImage, title: 'Seal mark', className: '' },
]

const developmentImages = [
  { src: sketchImage, title: 'Sketch exploration' },
  { src: logoImage, title: 'Constructed mark' },
  { src: patternImage, title: 'Brand pattern' },
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

      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl border-b border-bone/15 pb-12">
          {/* <RevealBlock className="mb-6 flex flex-wrap gap-2">
            {['Logo Design', 'Brand Identity Design', 'Packaging Design'].map((tag) => (
              <span key={tag} className="rounded-pill border border-[#ead6b4]/25 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#ead6b4]/80">
                {tag}
              </span>
            ))}
          </RevealBlock> */}

          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <RevealBlock>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Overview</p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">
                Rojin Phillip is a premium luxury fashion brand focused on timeless
                craftsmanship and refined elegance. The objective was to create a visual
                identity that would resonate with affluent customers while maintaining a
                sense of exclusivity and sophistication.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.08}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Challenge</p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-bone/70 md:text-base">
                <li>Communicate luxury without appearing excessive.</li>
                <li>Appeal to high-end fashion consumers.</li>
                <li>Maintain versatility across packaging and print applications.</li>
                <li>Create a memorable symbol that represents prestige and craftsmanship.</li>
              </ul>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 border-b border-bone/15 pb-14 md:grid-cols-[0.34fr_0.66fr] md:items-center">
          <RevealBlock>
            <p className="text-sm font-semibold text-bone md:text-base">Brand Keywords</p>
            <div className="mt-7 space-y-1.5">
              {keywords.map((word, index) => (
                <motion.p
                  key={word}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.55 }}
                  className="text-xl leading-tight text-bone/85 md:text-2xl"
                >
                  {word}
                </motion.p>
              ))}
            </div>
          </RevealBlock>

          <RevealBlock delay={0.1} className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {brandCollage.map((item, index) => (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group overflow-hidden bg-[#0d0d10] ${item.className}`}
              >
                <img
                  src={item.src}
                  alt={`Rojin Phillip ${item.title}`}
                  className={`
                    h-full w-full transition-transform duration-700 group-hover:scale-105
                    ${item.title === 'Leather goods'
                      ? 'object-contain bg-[#0d0d10]'
                      : 'object-cover aspect-square'
                    }
                  `}
                />
              </motion.figure>
            ))}
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl border-b border-bone/15 pb-14">
          <div className="grid gap-4 md:grid-cols-3">
            {developmentImages.map((item, index) => (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden bg-[#0d0d10]"
              >
                <img
                  src={item.src}
                  alt={`Rojin Phillip ${item.title}`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.figure>
            ))}
          </div>

          <RevealBlock delay={0.12} className="mt-4 overflow-hidden bg-[#08080a]">
            <img src={formulaImage} alt="Rojin Phillip logo formula" className="w-full object-cover" />
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="grid gap-8 border-b border-bone/15 pb-10 md:grid-cols-[0.22fr_0.78fr] md:items-start">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8b47b]">Concept</p>
            <p className="max-w-4xl text-sm leading-relaxed text-bone/72 md:text-base">
              The logo combines the letters R and P to form a refined owl-inspired
              emblem, symbolizing wisdom, insight, and prosperity. Designed with
              elegance and sophistication in mind, it reflects the brand's commitment
              to luxury, exclusivity, and timeless style.
            </p>
          </RevealBlock>

          <RevealBlock delay={0.08} className="mt-10">
            <img
              src={colorsFamilyImage}
              alt="Rojin Phillip Colors Family"
              className="w-full h-auto object-cover"
            />
          </RevealBlock>

          <RevealBlock delay={0.08} className="border-b border-bone/15 py-12 text-center md:py-16">
            <p className="font-serif text-4xl uppercase leading-none text-bone md:text-6xl">
              Perpetua Titling MT
            </p>
            <div className="mx-auto mt-8 flex max-w-3xl items-end justify-between border-t border-[#d8b47b]/50 pt-5 text-[#d8b47b]">
              <span className="font-serif text-2xl">Abcdefghij...</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-bone/45">Light / Bold</span>
              <span className="font-serif text-2xl font-bold">Abcdefghij...</span>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-bone/70 md:text-base">
              A custom pattern was developed from the brand mark to create a consistent
              luxury experience across packaging and printed materials.
            </p>
          </RevealBlock>

          <div className="space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="group relative overflow-hidden bg-[#f3f0ea]">
                <img
                  src={stationaryImage}
                  alt="Stationery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/50 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-bone/80">
                    Stationery System
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="group relative overflow-hidden bg-[#f3f0ea]">
                  <img
                    src={visitingCardImage}
                    alt="Visiting Card"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505]/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-[0.2em] text-bone/80">
                      Visiting Cards
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden bg-[#f3f0ea]">
                  <img
                    src={boxImage}
                    alt="Packaging Box"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505]/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-[0.2em] text-bone/80">
                      Packaging Box
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="group relative overflow-hidden bg-[#f3f0ea]">
                <img
                  src={blackBoxImage}
                  alt="Black Box"
                  className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505]/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-bone/80">
                    Black Box
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-[#f3f0ea]">
                <img
                  src={keychainImage}
                  alt="Keychain"
                  className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505]/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-bone/80">
                    Leather Keychain
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-[#062b52]">
                <img
                  src={tagsImage}
                  alt="Tags"
                  className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505]/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-bone/80">
                    Product Tags
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
              >
                <source src={rpAnimation} type="video/mp4" />
              </video>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505]/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.2em] text-bone/80">
                  Brand Animation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-4 border-t border-bone/15 pt-10 md:grid-cols-2">
          <RevealBlock className="bg-[#e8dfcf] p-5 text-center md:p-8">
            <p className="mb-4 font-serif text-3xl uppercase leading-none text-[#30281f] md:text-4xl">
              Website
            </p>
            <img src={websiteImage} alt="Rojin Phillip website design" className="w-full object-contain shadow-2xl shadow-black/30" />
          </RevealBlock>
          <RevealBlock delay={0.08} className="bg-[#e8dfcf] p-5 text-center md:p-8">
            <img src={socialMediaImage} alt="Rojin Phillip social media design" className="w-full object-contain shadow-2xl shadow-black/30" />
            <p className="mt-4 font-serif text-3xl uppercase leading-none text-[#30281f] md:text-4xl">
              Social Media
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
