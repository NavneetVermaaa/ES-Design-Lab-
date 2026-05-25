import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import logoSrc from '../../assets/logo.png'

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-6">
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative block group hover:scale-[1.03] transition-transform duration-500 ease-out"
        >
          <motion.img
            src={logoSrc}
            alt="ES Design Lab"
            className="h-[42px] md:h-[52px] w-auto object-contain image-rendering-auto transition-all duration-500 ease-out group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.25)]"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.a>

        <div className="flex items-center gap-10 mix-blend-difference">
          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.18em] text-bone">
            <a href="#work" className="hover:text-yellow transition-colors">Work</a>
            <a href="#expertise" className="hover:text-yellow transition-colors">Services</a>
            <a href="#about" className="hover:text-yellow transition-colors">About</a>
            <a href="#contact" className="hover:text-yellow transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-pill border border-bone/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-bone hover:bg-bone hover:text-ink transition-colors"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden grain">
      {/* Floating eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-32 md:top-40 left-6 md:left-10 right-6 md:right-10 flex justify-between text-xs uppercase tracking-[0.25em] text-bone/60"
      >
        <span>[ ES Design Lab — Est. 2021 ]</span>
        <span className="hidden md:block">Branding · Visual · Video</span>
      </motion.div>

      <motion.div style={{ y, opacity }} className="px-6 md:px-10 pb-16 md:pb-24">
        <h1 className="font-display text-bone leading-[0.85] text-[18vw] md:text-[14vw] uppercase">
          {'Built to'.split('').map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.04, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-block"
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
          <br />
          <span className="inline-flex items-baseline gap-[0.15em]">
            {'shape'.split('').map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.04, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                className="inline-block text-yellow"
              >
                {ch}
              </motion.span>
            ))}
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="font-serif-i text-bone/90 ml-4 not-italic"
            >
              <span className="font-serif-i">brands.</span>
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12"
        >
          <p className="max-w-md text-bone/70 text-lg leading-relaxed">
            We help brands create a clear and consistent presence through thoughtful design,
            branding, and visual storytelling.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 self-start md:self-auto"
          >
            <span className="rounded-pill bg-violet text-ink px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-transform group-hover:-translate-x-1">
              Contact us
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-yellow text-ink transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 right-6 md:right-10 text-[10px] uppercase tracking-[0.3em] text-bone/40"
      >
        Scroll ↓
      </motion.div>
    </section>
  )
}
