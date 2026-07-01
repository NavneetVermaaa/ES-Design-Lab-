import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import logoSrc from '../../assets/logo.png'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisualDesign, setIsVisualDesign] = useState(false)

  useEffect(() => {
    setIsVisualDesign(window.location.pathname === '/communication-design')
    const handler = () => setIsVisualDesign(window.location.pathname === '/communication-design')
    window.addEventListener('app-navigate', handler)
    window.addEventListener('popstate', handler)
    return () => {
      window.removeEventListener('app-navigate', handler)
      window.removeEventListener('popstate', handler)
    }
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-6">
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
          className="relative block group hover:scale-[1.03] transition-transform duration-500 ease-out"
          onClick={closeMenu}
        >
          <motion.img
            src={logoSrc}
            alt="ES Design Lab"
            className="h-[42px] md:h-[52px] w-auto object-contain image-rendering-auto transition-all duration-500 ease-out group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.25)]"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.a>

        {/* Desktop nav */}
        <div className={`flex items-center ${isVisualDesign ? '' : 'mix-blend-difference'}`}>
          <nav className={`hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.18em] ${isVisualDesign ? 'text-ink' : 'text-bone'}`}>
            <a href="/#work" className={`hover:text-yellow transition-colors ${isVisualDesign ? 'hover:text-[#9B6DFF]' : ''}`}>Work</a>
            <a href="/#expertise" className={`hover:text-yellow transition-colors ${isVisualDesign ? 'hover:text-[#9B6DFF]' : ''}`}>Services</a>
            <a href="/about" target="_blank" rel="noopener noreferrer" className={`hover:text-yellow transition-colors ${isVisualDesign ? 'hover:text-[#9B6DFF]' : ''}`}>About</a>
            <a href="/#contact" className={`hover:text-yellow transition-colors ${isVisualDesign ? 'hover:text-[#9B6DFF]' : ''}`}>Contact</a>
          </nav>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative z-50 ml-4 flex md:hidden h-10 w-10 items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6.5, width: 22 } : { rotate: 0, y: 0, width: 20 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="block h-px bg-bone origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-px w-5 bg-bone"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6.5, width: 22 } : { rotate: 0, y: 0, width: 20 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="block h-px bg-bone origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#050505]/98 backdrop-blur-sm"
          >
            <nav className="flex flex-col items-center gap-10">
              {[
                { label: 'Work', href: '/#work' },
                { label: 'Services', href: '/#expertise' },
                { label: 'About', href: '/about', blank: true },
                { label: 'Contact', href: '/#contact' },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.blank ? '_blank' : undefined}
                  rel={item.blank ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={closeMenu}
                  className="text-4xl md:text-5xl font-display uppercase text-bone hover:text-yellow transition-colors duration-300 tracking-wide"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.97])

  /* ---- mouse parallax ---- */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  useEffect(() => {
    const handleMouse = (e) => {
      const x = ((e.clientX - window.innerWidth / 2) / window.innerWidth) * 12
      const y = ((e.clientY - window.innerHeight / 2) / window.innerHeight) * 12
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handleMouse, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])
  const parallaxX = useSpring(mouseX, { stiffness: 80, damping: 25 })
  const parallaxY = useSpring(mouseY, { stiffness: 80, damping: 25 })

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden grain">
      {/* Subtle animated background blobs with mouse parallax */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -35, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 h-[50vh] w-[50vh] rounded-full bg-yellow/4 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -right-20 h-[60vh] w-[60vh] rounded-full bg-bone/[0.03] blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 35, 0], y: [0, -20, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vh] w-[70vh] rounded-full bg-yellow/[0.015] blur-[150px]"
        />
      </motion.div>

      {/* Floating eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-32 md:top-40 left-6 md:left-10 right-6 md:right-10 flex justify-end text-xs uppercase tracking-[0.25em] text-bone/60 z-10"
      >

      </motion.div>

      <motion.div style={{ y: scrollY, opacity: scrollOpacity, scale: scrollScale }} className="px-6 md:px-10 pb-16 md:pb-24 relative z-10 origin-bottom">
        <h1 className="font-display text-bone leading-[0.85] text-[18vw] md:text-[14vw] uppercase">
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
            className="block"
          >
            Built to
          </motion.span>
          <span className="inline-flex items-baseline gap-[0.15em]">
            <motion.span
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
              className="inline-block text-yellow"
            >
              Shape
            </motion.span>
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.24 }}
              className="font-serif-i text-bone/90 ml-4 not-italic inline-block"
            >
              brands.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 md:mt-8 text-xs md:text-sm uppercase tracking-[0.25em] text-bone/60"
        >
          Branding&ensp;|&ensp;Communication Design&ensp;|&ensp;Video Editing
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12"
        >

        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 right-6 md:right-10 text-[10px] uppercase tracking-[0.3em] text-bone/40 z-10"
      >
      </motion.div>
    </section>
  )
}
