import { Reveal } from '@/components/Reveal'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    title: 'Branding',
    headline: 'One identity. Endless reach.',
    tagline: 'We build identities that live beyond the logo — in every interaction, every surface, every touchpoint.',
    body: 'From building identities for new startups to reshaping established brands. We make sure your brand communicates clearly, connects with the right audience, and leaves a lasting impression.',
    items: ['Identity systems', 'Logo design', 'Brand guidelines', 'Naming'],
  },
  {
    title: 'Visual Design',
    headline: 'Make it inevitable.',
    tagline: 'Every pixel earns its place. Visual systems that feel like they\'ve always belonged.',
    body: 'Editorial layouts, packaging, social systems and digital surfaces — designed to feel inevitable. Every pixel earns its place in your visual language.',
    items: ['Art direction', 'Packaging', 'Social systems', 'Web design'],
  },
  {
    title: 'Video Editing',
    headline: 'Motion that moves.',
    tagline: 'Story-driven, rhythm-built, scroll-stopping. Cut for emotion and built for the feed.',
    body: 'Story-driven motion for the platforms people actually scroll. From reels to brand films, we cut for emotion, rhythm and the algorithm — in that order.',
    items: ['Brand films', 'Reels & shorts', 'Motion graphics', 'Color grade'],
  },
]

const radii = [
  '[border-radius:80px_0px_80px_0px]',
  '[border-radius:0px_80px_0px_80px]',
  '[border-radius:80px_0px_80px_0px]',
]

export default function Expertise() {
  const [open, setOpen] = useState(0)
  const current = open !== null ? services[open] : services[0]

  return (
    <section id="expertise" className="px-6 md:px-10 py-28 md:py-40 bg-background">
      <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-end mb-16 md:mb-24">
        <Reveal className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-bone/50">[ 02 — Expertise ]</p>
        </Reveal>
        <div className="md:col-span-8">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={open}
                initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -40, filter: 'blur(4px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-display uppercase text-bone text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
              >
                {current.headline}
              </motion.h2>
            </AnimatePresence>
          </div>
          <div className="mt-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={open}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-bone/60 max-w-xl text-lg"
              >
                {current.tagline}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {services.map((s, i) => {
          const isOpen = open === i
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                layout
                className={`
                  relative overflow-hidden
                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${i > 0 ? '-mt-px' : ''}
                  ${isOpen ? 'bg-gradient-to-br from-[#8f65fb]/25 via-[#8f65fb]/8 to-transparent border-[#fef102]/30 shadow-[0_0_60px_rgba(143,101,251,0.08)]' : 'bg-ink border-yellow/10 hover:border-[#fef102]/25'}
                  border
                  ${radii[i]}
                `}
              >
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                  >
                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#fef102]/[0.04] rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#8f65fb]/[0.08] rounded-full blur-[80px]" />
                    <motion.div
                      className="absolute top-10 right-16 w-2 h-2 rounded-full bg-[#fef102]/20"
                      animate={{ y: [0, -10, 0], opacity: [0, 0.6, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                      className="absolute bottom-16 left-20 w-1.5 h-1.5 rounded-full bg-[#8f65fb]/30"
                      animate={{ y: [0, -14, 0], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                    />
                    <motion.div
                      className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-[#fef102]/15"
                      animate={{ y: [0, -8, 0], opacity: [0, 0.4, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                    />
                  </motion.div>
                )}

                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="relative z-10 w-full text-left p-6 md:p-10 lg:p-12 group"
                >
                  <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-1">
                      <span className="font-mono text-xs text-bone/30">0{i + 1}</span>
                    </div>
                    <div className="md:col-span-4">
                      <motion.h3
                        initial={isOpen ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0.85, filter: 'blur(1.5px)' }}
                        animate={isOpen ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0.85, filter: 'blur(1.5px)' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display uppercase text-bone text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none"
                      >
                        {s.title}
                      </motion.h3>
                    </div>
                    <div className="hidden lg:block md:col-span-5">
                      <motion.p
                        initial={isOpen ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 4 }}
                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 4 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-bone/40 text-sm leading-relaxed line-clamp-2"
                      >
                        {s.body}
                      </motion.p>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                      <motion.span
                        animate={{ x: isOpen ? 6 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl md:text-4xl text-[#fef102] inline-block
                                   transition-[filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                                   group-hover:brightness-130
                                   group-hover:drop-shadow-[0_0_16px_rgba(254,241,2,0.5)]
                                   drop-shadow-[0_0_8px_rgba(254,241,2,0.25)]"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 md:pt-12 grid md:grid-cols-12 gap-6 md:gap-8">
                      <div className="hidden md:block md:col-span-1" />
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isOpen ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 text-bone/70 text-lg leading-relaxed max-w-2xl"
                      >
                        {s.body}
                      </motion.p>
                      <ul className="md:col-span-4 flex flex-col gap-3 text-sm text-bone/60">
                        {s.items.map((it, idx) => (
                          <motion.li
                            key={it}
                            initial={{ opacity: 0, y: 12 }}
                            animate={isOpen ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.12 + idx * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center gap-3"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#fef102] shadow-[0_0_6px_rgba(254,241,2,0.4)] flex-shrink-0" />
                            {it}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </button>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
