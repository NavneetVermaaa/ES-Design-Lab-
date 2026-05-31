import { Reveal } from '@/components/Reveal'
import { Footer } from '@/components/site/Contact'
import { motion, useInView, useMotionValue, useScroll, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function AboutHeroSection() {
  return (
    <section className="relative w-full h-[82vh] min-h-[620px] max-h-[900px] bg-black overflow-hidden flex items-center px-[5%] pt-[54px] pb-[36px]">
      <div className="w-full max-w-[1500px] mx-auto">
        <div className="w-full lg:w-[92%] xl:w-[88%]">
          <Reveal delay={0.08}>
            <p className="font-serif-i italic text-white text-[2.5rem] sm:text-[2.9rem] md:text-[3.3rem] leading-[0.95]">
              WE ARE
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <h1 className="font-display uppercase tracking-[-0.015em] text-[#FFE600] text-[3.15rem] sm:text-[4.9rem] md:text-[6.2rem] lg:text-[7rem] xl:text-[7.7rem] leading-[0.92] mt-1">
              A CREATIVE LAB FOR
            </h1>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-0.5 grid grid-cols-1 lg:grid-cols-[minmax(0,68%)_minmax(0,28%)] items-start gap-y-3 lg:gap-x-5 xl:gap-x-7">
              <h2 className="font-display uppercase tracking-[-0.015em] text-white text-[3.15rem] sm:text-[4.9rem] md:text-[6.2rem] lg:text-[7rem] xl:text-[7.7rem] leading-[0.92] shrink-0">
                MODERN BRANDS
              </h2>

              <p className="text-[#CFCFCF] text-[0.98rem] md:text-[1.03rem] leading-[1.65] max-w-[420px] mt-2 lg:mt-[1.2rem] xl:mt-[1.5rem]">
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

function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => Math.round(v))

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    })
    return () => controls.stop()
  }, [inView, mv, value])

  return (
    <div ref={ref} className="font-display text-black leading-none">
      <motion.span className="text-[3.2rem] md:text-[4rem] lg:text-[4.4rem]">{rounded}</motion.span>
      <span className="text-[3.2rem] md:text-[4rem] lg:text-[4.4rem]">{suffix}</span>
    </div>
  )
}

function AboutSecondSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [24, -24])

  return (
    <section ref={sectionRef} className="w-full bg-[#FFE600] py-[80px] md:py-[96px] lg:py-[112px]">
      <div className="max-w-[1500px] mx-auto px-[5%]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-12">
          <div className="w-full lg:w-[38%] text-left">
            <Reveal>
              <div className="space-y-3 text-[1rem] md:text-[1.06rem] leading-[1.55]">
                <p className="text-white">We believe brands should feel clear.</p>

                <p className="font-serif-i italic text-black">Not confusing.</p>
                <p className="font-serif-i italic text-black">Not forgettable.</p>

                <p className="text-white">Because design is more than decoration.</p>

                <p className="font-serif-i italic text-black">It&apos;s how people recognize you.</p>
                <p className="font-serif-i italic text-black">Trust you.</p>
                <p className="font-serif-i italic text-black">Remember you.</p>

                <p className="text-white">So we create visuals with intention.</p>

                <p className="font-serif-i italic text-black">Through branding.</p>
                <p className="font-serif-i italic text-black">Through motion.</p>
                <p className="font-serif-i italic text-black">Through storytelling.</p>

                <p className="text-white">No noise.</p>
                <p className="text-white">No unnecessary clutter.</p>

                <p className="text-white">
                  Just thoughtful creative
                  <br />
                  built to shape brands.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="w-full lg:w-[62%] flex flex-col items-center justify-center">
            <Reveal delay={0.08}>
              <motion.div
                style={{ y: parallaxY }}
                className="w-[300px] h-[390px] sm:w-[360px] sm:h-[470px] md:w-[420px] md:h-[540px] bg-black relative flex items-center justify-center"
              >
                <div
                  className="absolute inset-0 bg-black"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 72% 82%, 72% 100%, 0 100%)' }}
                />
                <div className="relative z-10 text-[#FFE600] font-display uppercase leading-[0.9] text-[3.2rem] sm:text-[3.9rem] md:text-[4.5rem] text-center">
                  ES
                  <br />
                  Design
                  <br />
                  Lab.
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="w-full max-w-[760px] mt-12 md:mt-14 border-t border-black/35 pt-8 md:pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                  <div className="text-center py-4">
                    <CountUp value={50} suffix="+" />
                    <p className="text-black text-[0.82rem] md:text-[0.9rem] uppercase tracking-[0.12em] mt-2">
                      Projects Done
                    </p>
                  </div>

                  <div className="text-center py-4 border-t md:border-t-0 md:border-l md:border-r border-black/35">
                    <CountUp value={98} suffix="%" />
                    <p className="text-black text-[0.82rem] md:text-[0.9rem] uppercase tracking-[0.12em] mt-2">
                      Client Retention
                    </p>
                  </div>

                  <div className="text-center py-4 border-t md:border-t-0">
                    <CountUp value={6} suffix="+" />
                    <p className="text-black text-[0.82rem] md:text-[0.9rem] uppercase tracking-[0.12em] mt-2">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutThirdSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const processItems = [
    {
      num: 1,
      title: 'Getting Clear',
      desc: 'Before designing anything, we take time to understand your brand, goals, audience, and what\'s currently missing or unclear.',
    },
    {
      num: 2,
      title: 'Defining the direction',
      desc: 'Together, we shape the creative direction, the tone, visual language, and overall feeling your brand should communicate.',
    },
    {
      num: 3,
      title: 'Designing with intention',
      desc: 'Every visual decision is made with purpose. From branding to motion and layout, everything is designed to communicate clearly and connect naturally.',
    },
    {
      num: 4,
      title: 'Refining',
      desc: 'We review, refine, and improve collaboratively until everything feels aligned, polished, and ready to represent your brand confidently.',
    },
    {
      num: 5,
      title: 'Deliver, Support & launch',
      desc: 'Once everything is finalized, you receive your files, assets, and the support needed to launch confidently. And if you need help after, we\'re still here.',
    },
  ]

  return (
    <section className="w-full bg-black py-[80px] md:py-[96px] lg:py-[112px] border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-[5%]">
        <Reveal>
          <h2 className="text-[#FFE600] text-center font-display uppercase tracking-[-0.015em] text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem] mb-[80px] leading-none">
            The Process
          </h2>
        </Reveal>

        <div className="max-w-[1200px] mx-auto border-t border-white/15">
          {processItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={i} delay={0.06 * i}>
                <div className="border-b border-white/15">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full py-6 md:py-8 px-0 flex items-center justify-between text-left group hover:bg-white/[0.01] transition-colors duration-200"
                  >
                    <span className="flex-1 flex items-center gap-6 md:gap-8">
                      <span className="font-display text-[#FFE600] text-[0.85rem] md:text-[0.95rem] font-bold leading-none">
                        {String(item.num).padStart(2, '0')}
                      </span>
                      <span className="font-display text-white text-[1.3rem] md:text-[1.7rem] lg:text-[1.95rem] leading-tight">
                        {item.title}
                      </span>
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="shrink-0 ml-4"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-white stroke-[1.5]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </div>
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.3, ease: 'easeOut' },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 md:pb-8 pl-[calc(2rem+1.5rem)] md:pl-[calc(2.5rem+2rem)] pr-8 md:pr-12">
                      <p className="text-[#CFCFCF] text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] leading-[1.65] md:leading-[1.75] max-w-[700px]">
                        {item.desc}
                      </p>
                    </div>
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

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <AboutHeroSection />
      <AboutSecondSection />
      <AboutThirdSection />
      <Footer />
    </main>
  )
}
