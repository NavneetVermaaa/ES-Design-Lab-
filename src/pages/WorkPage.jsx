import { Reveal, RevealText } from '@/components/Reveal'
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useInView,
  animate,
} from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'

import { Contact, Footer } from '@/components/site/Contact.jsx'

import ashita from '@/assets/work-ashita.jpg'
import { projects, categories } from '@/data/projects'

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 6, suffix: '+', label: 'Years Creative Experience' },
]

const sizeClasses = {
  large: 'md:col-span-2 md:row-span-2',
  square: 'md:col-span-1 md:row-span-1',
  portrait: 'md:col-span-1 md:row-span-2',
}

function CustomCursor({ hovering }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <motion.div
        animate={{
          width: hovering ? 48 : 8,
          height: hovering ? 48 : 8,
          opacity: hovering ? 0.5 : 0.8,
          borderWidth: hovering ? 1.5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="rounded-full border-[#B39DDB] bg-[#B39DDB] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}

function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const displayValue = useTransform(motionValue, (v) => Math.round(v))

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    })
    return controls.stop
  }, [isInView, value, motionValue])

  return (
    <div ref={ref} className="font-display text-5xl md:text-7xl text-bone leading-none">
      <motion.span>{displayValue}</motion.span>
      <span className="text-yellow">{suffix}</span>
    </div>
  )
}

function HeroSection() {
  const words = "If It Makes You Pause, It's Working.".split(' ')

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#050505] px-6 md:px-10 pt-32 pb-20">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          background:
            'radial-gradient(circle at center, #B39DDB 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl overflow-visible">
        <RevealText
          text="SELECTED WORK"
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-bone/40 font-sans mb-10 md:mb-12"
          as="p"
        />
        <h1 className="font-display text-bone text-[15vw] md:text-8xl lg:text-[9rem] leading-[0.9] overflow-visible">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: '110%' },
                    show: { y: '0%', transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
                  }}
                  style={w.toLowerCase().startsWith('pause') ? { color: '#FEF102' } : undefined}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </h1>
        <Reveal delay={0.5}>
          <p className="max-w-xl text-bone/50 text-base md:text-lg leading-relaxed mt-12 md:mt-16">
            Branding, visual design, and creative direction built for brands that
            refuse to blend in. Every project is a study in clarity, intention, and
            lasting impact.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function FilterBar({ categories, active, onChange }) {
  return (
    <div className="sticky top-0 z-20 bg-[#050505]/90 backdrop-blur-xl border-b border-bone/5">
      <div className="px-6 md:px-10 py-4 flex items-center gap-8 md:gap-12 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`relative text-xs md:text-sm uppercase tracking-[0.2em] py-2 transition-colors duration-300 whitespace-nowrap ${
              active === cat ? 'text-bone' : 'text-bone/40 hover:text-bone/70'
            }`}
          >
            {cat}
            {active === cat && (
              <motion.div
                layoutId="filter-underline"
                className="absolute -bottom-4 left-0 right-0 h-[2px] bg-yellow"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const CardElement = project.href ? motion.a : motion.div
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <CardElement
      {...(project.href ? { href: project.href } : {})}
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-bone/5 cursor-pointer ${sizeClasses[project.size] || 'md:col-span-1 md:row-span-1'}`}
      aria-label={project.href ? `View ${project.title} case study` : `${project.title} project preview`}
    >
      <div className="relative w-full h-full min-h-[200px] md:min-h-[260px] overflow-hidden">
        <motion.img
          src={project.img}
          alt={project.title}
          style={{ y: imgY }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#B39DDB]/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h3 className="font-display text-xl md:text-2xl text-bone">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-bone/50 mt-1 tracking-wide uppercase">
            {project.category}
          </p>
        </div>

        <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-bone/10 flex items-center justify-center opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <svg
            className="w-4 h-4 text-yellow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
    </CardElement>
  )
}

function FeaturedShowcase() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-[#0a0a0a] border border-bone/5"
      >
        <div className="absolute -inset-20 bg-[#B39DDB]/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="overflow-hidden aspect-[4/3] md:aspect-auto">
          <motion.img
            src={ashita}
            alt="Featured project"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="p-8 md:p-14 flex flex-col justify-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-yellow font-medium">
            Featured Project
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-bone leading-[0.9] mt-4 md:mt-6">
            Ashita <br />
            <span className="text-yellow">Gupta</span>
          </h2>
          <p className="text-bone/50 text-sm md:text-base leading-relaxed mt-6 max-w-md">
            A complete beauty identity system — from logo and packaging to social
            templates and campaign visuals. Every element designed to feel as refined
            as the brand itself.
          </p>
          <motion.a
            href="#"
            className="group inline-flex items-center gap-3 mt-8 text-sm uppercase tracking-[0.15em] text-bone/70 hover:text-yellow transition-colors duration-300 w-fit"
            whileHover={{ x: 8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            View Project
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 bg-[#050505]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-28 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <CountUp value={stat.value} suffix={stat.suffix} />
            <p className="text-bone/50 text-xs md:text-sm tracking-[0.15em] mt-3 uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function WorkPage() {
  const [filter, setFilter] = useState('All')
  const [cursorHover, setCursorHover] = useState(false)

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter)

  const handleFilterChange = useCallback((cat) => {
    setFilter(cat)
  }, [])

  return (
    <main
      className="bg-[#050505] text-bone min-h-screen overflow-x-hidden"
      onMouseEnter={() => setCursorHover(false)}
    >
      <style>{`
        * { cursor: none; }
        @media (max-width: 768px) {
          * { cursor: auto; }
        }
      `}</style>

      <CustomCursor hovering={cursorHover} />

      <HeroSection />

      <FilterBar
        categories={categories}
        active={filter}
        onChange={handleFilterChange}
      />

      <section className="px-6 md:px-10 py-10 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-auto"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <FeaturedShowcase />

      {/* Divider — Grid to Stats */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow/15 to-transparent mx-6 md:mx-10" />

      <StatsSection />

      {/* Transition — Dark to Contact */}
      <div className="relative h-20 md:h-28 bg-[#050505] overflow-hidden">
        <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-b from-transparent via-yellow/[0.03] to-yellow/[0.18] blur-xl" />
        <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-yellow/25 to-transparent" />
      </div>

      <Contact />
      <Footer />
    </main>
  )
}
