import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  {
    quote:
      "ES Design Lab has been the creative force behind our brand's visual identity designing our logos with exceptional clarity, creativity, and a deep understanding of what our brand stands for. She goes beyond delivering designs; she listens, understands the vision, and puts her heart into every detail.",
    initials: 'PK',
    name: 'Preeti Kohar',
    role: 'Co-Founder, Hozo',
  },
  {
    quote:
      "I've had the pleasure of working with ES Design Lab for over 2 years, and I can confidently attest to their exceptional skills, dedication, and passion for design. The team is highly talented and driven, consistently bringing an innovative approach, strong attention to detail, and the ability to deliver impactful results.",
    initials: 'PD',
    name: 'Preethi Durga',
    role: 'Owner & Instructor, Kumon',
  },
  {
    quote:
      "It was a pleasure working with ES Design on our offline marketing creatives. The entire process was smooth and professional. Deliveries were always on time, the requirements were understood clearly, and the final designs were provided exactly in the format we needed. What impressed us the most was the creativity and innovative thinking brought to the project. Every design felt fresh while staying perfectly aligned with our brand and brief. We highly recommend ES Design to anyone looking for reliable, thoughtful, and creative design support. We look forward to collaborating again in the future.",
    initials: 'IR',
    name: 'Indu R Eswarappa',
    role: 'Co-founder, Nextmovez',
  },
]

const slideVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
}

export default function Testimonial() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)
  const touchX = useRef(null)

  const goTo = useCallback((index) => {
    setActive(index)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length)
      }, 4500)
    }
  }, [])

  const next = useCallback(() => {
    goTo((active + 1) % testimonials.length)
  }, [active, goTo])

  const prev = useCallback(() => {
    goTo((active - 1 + testimonials.length) % testimonials.length)
  }, [active, goTo])

  useEffect(() => {
    if (isPaused) return
    intervalRef.current = setInterval(next, 4500)
    return () => clearInterval(intervalRef.current)
  }, [isPaused, next])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  const handleTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const diff = touchX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
  }

  const t = testimonials[active]

  return (
    <section
      id="about"
      className="bg-violet text-ink px-6 md:px-10 py-28 md:py-40 grain relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full bg-ink/10 text-ink/50 hover:bg-ink/20 hover:text-ink transition-all duration-300 text-xl md:text-2xl"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full bg-ink/10 text-ink/50 hover:bg-ink/20 hover:text-ink transition-all duration-300 text-xl md:text-2xl"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <blockquote className={`max-w-6xl mx-auto text-center font-serif-i leading-[1.1] text-ink ${active === 2 ? 'text-2xl md:text-4xl lg:text-5xl' : 'text-3xl md:text-5xl lg:text-6xl'}`} style={{ fontFamily: '"Non Idyllic", serif' }}>
            {t.quote}
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-5">
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-ink text-bone grid place-items-center font-display text-xl" style={{ fontFamily: '"Non Idyllic", serif' }}>
              {t.initials}
            </div>
            <div>
              <div className="font-medium text-lg" style={{ fontFamily: '"Non Idyllic", serif' }}>{t.name}</div>
              {t.role && <div className="text-base text-ink/70" style={{ fontFamily: '"Non Idyllic", serif' }}>{t.role}</div>}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
