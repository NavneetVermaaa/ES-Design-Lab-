import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import grand5 from '@/assets/work-grand5.jpg'
import billboard from '@/assets/work-billboard.jpg'
import train from '@/assets/work-train.jpg'
import ashita from '@/assets/work-ashita.jpg'

const projects = [
  { img: grand5, title: 'Grand 5', tag: 'Logo Design · 2024' },
  { img: billboard, title: 'Cashly', tag: 'Campaign · Out of Home' },
  { img: train, title: 'Atelier Rouge', tag: 'Editorial · Fashion' },
  { img: ashita, title: 'Ashita Gupta', tag: 'Beauty · Identity' },
  { img: grand5, title: 'Grand 5', tag: 'Tabletop System' },
  { img: ashita, title: 'Makeover', tag: 'Film · Direction' },
]

export default function Work() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-25%'])

  return (
    <section id="work" ref={ref} className="bg-yellow text-ink py-24 md:py-32 overflow-hidden relative">
      {/* Huge marquee headline */}
      <div className="relative">
        <div className="marquee-track items-baseline gap-12 font-display uppercase text-[22vw] md:text-[18vw] leading-none">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-baseline gap-12 pr-12">
              <span>Featured Projects</span>
              
              <span>Featured Projects</span>
              
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal scrolling cards */}
      <motion.div style={{ x }} className="mt-16 flex gap-6 md:gap-8 px-6 md:px-10 w-max">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href="/work"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="group relative w-[78vw] md:w-[44vw] lg:w-[36vw] shrink-0"
            aria-label={`View work projects including ${p.title}`}
          >
            <div className="relative overflow-hidden rounded-3xl bg-ink aspect-[4/3]">
              <motion.img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between">
              <h3 className="font-display text-2xl md:text-3xl uppercase">{p.title}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-ink/60">{p.tag}</span>
            </figcaption>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
