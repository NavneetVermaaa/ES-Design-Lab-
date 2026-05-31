import { Reveal } from '@/components/Reveal'
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const aboutBlocks = [
  { text: 'We believe brands should feel clear.', accent: false },
  { text: 'Not confusing.\nNot forgettable.', accent: true },
  { text: 'Because design is more than decoration.', accent: false },
  { text: "It's how people recognize you.\nTrust you.\nRemember you.", accent: true },
  { text: 'So we create visuals with intention.', accent: false },
  { text: 'Through branding.\nThrough motion.\nThrough storytelling.', accent: true },
  { text: 'No noise.\nNo unnecessary clutter.', accent: false },
  { text: 'Just thoughtful creative built to shape brands.', accent: false },
]

const stats = [
  { value: 50, suffix: '+', label: 'Projects Done' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 6, suffix: '+', label: 'Years Experience' },
]

const processItems = [
  {
    title: 'Getting Clear',
    description:
      'Before designing anything, we understand your brand, goals, audience, and what currently feels unclear.',
  },
  {
    title: 'Defining the direction',
    description:
      'We shape your visual direction, tone, and the emotional language your brand should communicate.',
  },
  {
    title: 'Designing with intention',
    description:
      'Every choice is purposeful. From identity to motion, we design to communicate clearly and connect naturally.',
  },
  {
    title: 'Refining',
    description:
      'We iterate with you until everything feels aligned, polished, and ready to represent your brand confidently.',
  },
  {
    title: 'Deliver, Support & launch',
    description:
      'You receive complete assets and rollout-ready files, plus support so your launch feels smooth and confident.',
  },
]

function HeroSection() {
  return (
    <section className="bg-black w-full min-h-screen flex items-center px-[5%] pt-[80px] pb-[60px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex items-center">
        <div className="w-full md:w-[55%]">
          <Reveal delay={0.08}>
            <p className="font-serif-i text-white text-[2.8rem] md:text-[2.8rem] leading-tight">
              WE ARE
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <h2 className="font-display text-[#FFE600] text-[5.5rem] md:text-[5.6rem] leading-[1] mt-2 -ml-[0.04em] tracking-tight uppercase">
              A CREATIVE LAB FOR
            </h2>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="flex items-start gap-8 mt-2">
              <h2 className="font-display text-white text-[5.5rem] md:text-[5.6rem] leading-[1] -ml-[0.04em] shrink-0">
                MODERN BRANDS
              </h2>

              <p className="text-[#CCCCCC] text-[0.95rem] max-w-[320px] pt-2 leading-relaxed">
                Over the years, we&rsquo;ve helped businesses and creators build visuals
                that feel clear, consistent, and memorable.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function AboutContentSection() {
  return (
    <section className="w-full min-h-[520px] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[55%] bg-[#0A0A0A] px-[5%] py-[60px]">
        <div className="max-w-[620px]">
          {aboutBlocks.map((block, i) => (
            <Reveal key={i} delay={0.06 * i}>
              <p
                className={`whitespace-pre-line text-[1rem] leading-relaxed mb-4 ${
                  block.accent
                    ? "font-serif-i text-[#FFE600]"
                    : 'text-white'
                }`}
              >
                {block.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[45%] bg-[#FFE600] relative overflow-hidden min-h-[420px] lg:min-h-[520px] flex items-center justify-center">
        <Reveal delay={0.18}>
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-[6%] w-[340px] h-[460px] bg-black"
              style={{ borderRadius: '50% 50% 50% 0 / 60% 60% 40% 40%' }}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute right-[9%] bottom-[6%] font-display text-[#FFE600] text-[2.8rem] leading-[1.05]"
            >
              ES Design Lab.
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CountUp({ value, suffix = '', isPercent = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => Math.round(v))

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, value, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    })
    return () => controls.stop()
  }, [inView, value, mv])

  return (
    <div ref={ref} className="font-display text-black leading-none">
      <motion.span className="text-[4.5rem] md:text-[5rem]">{rounded}</motion.span>
      {suffix && (
        <span className={`${isPercent ? 'text-[2.5rem] md:text-[3rem] align-top ml-1' : 'text-[4.5rem] md:text-[5rem] ml-1'}`}>
          {suffix}
        </span>
      )}
    </div>
  )
}

function StatsSection() {
  return (
    <section className="w-full bg-[#FFE600] px-[5%] py-[50px]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center">
            <Reveal delay={0.1 * i}>
              <div className="min-w-[220px] text-center px-6 py-4">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  isPercent={stat.suffix === '%'}
                />
                <p className="font-sans text-black text-[0.85rem] uppercase tracking-[0.12em] mt-2">
                  {stat.label}
                </p>
              </div>
            </Reveal>
            {i < stats.length - 1 && (
              <div className="hidden md:block w-[1px] h-[60px] bg-black/30 mx-2" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function ProcessSection() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="w-full bg-black px-[5%] py-[80px]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-[#FFE600] text-[2.4rem] md:text-[3.5rem] leading-none text-center mb-[50px] uppercase">
            The Process
          </h2>
        </Reveal>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          {processItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={item.title} delay={0.08 * i}>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full py-6 flex items-center justify-between text-left"
                  >
                    <span className="font-display text-white text-[1.2rem] md:text-[1.6rem] leading-none uppercase">
                      {i + 1}. {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#CCCCCC] text-[0.98rem] leading-relaxed pb-6 max-w-3xl">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AboutFooter() {
  return (
    <footer className="w-full bg-black px-[5%] pt-[60px] pb-[30px]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 justify-between">
          <div>
            <p className="font-display text-[#FFE600] text-[2rem] leading-none uppercase">ES</p>
            <p className="text-white text-sm mt-4">info@esdesignlab.com</p>
            <p className="text-white text-sm mt-1">7668102139</p>
          </div>

          <div>
            <p className="text-white text-[0.75rem] tracking-[0.18em] uppercase mb-3">Navigate</p>
            <ul className="space-y-2 text-[0.9rem]">
              <li><a href="/about" className="text-white hover:text-[#FFE600] transition-all duration-300">About</a></li>
              <li><a href="/work" className="text-white hover:text-[#FFE600] transition-all duration-300">Work</a></li>
              <li><a href="/services" className="text-white hover:text-[#FFE600] transition-all duration-300">Services</a></li>
              <li><a href="/contact" className="text-white hover:text-[#FFE600] transition-all duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-white text-[0.75rem] tracking-[0.18em] uppercase mb-3">Elsewhere</p>
            <ul className="space-y-2 text-[0.9rem]">
              <li><a href="#" className="text-white hover:text-[#FFE600] transition-all duration-300">📷 Instagram</a></li>
              <li><a href="#" className="text-white hover:text-[#FFE600] transition-all duration-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-4 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-white text-[0.75rem]">© 2026 ES DESIGN LAB</p>
          <p className="text-white text-[0.75rem]">ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutContentSection />
      <StatsSection />
      <ProcessSection />
      <AboutFooter />
    </main>
  )
}
