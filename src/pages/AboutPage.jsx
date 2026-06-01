import { Reveal } from '@/components/Reveal'
import { Footer } from '@/components/site/Contact'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import aboutSectionBg from '@/assets/about-section-bg.png'



function AboutHeroSection() {
    return (
        <section className="relative w-full min-h-[82vh] bg-black overflow-hidden flex items-center px-[5%] pt-[100px] pb-[60px]">
            <div className="w-full max-w-[1500px] mx-auto">
                <Reveal delay={0.08}>
                    <p className="font-serif-i italic text-white text-[2.5rem] sm:text-[2.9rem] md:text-[3.3rem] leading-[0.95] mb-2">
                        WE ARE
                    </p>
                </Reveal>

                <Reveal delay={0.14}>
                    <h1
                        className="font-display uppercase text-[#FFE600] leading-[0.92]"
                        style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}
                    >
                        A CREATIVE LAB FOR
                    </h1>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-10 mt-0">
                        <h1
                            className="font-display uppercase text-white leading-[0.92]"
                            style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}
                        >
                            MODERN BRANDS
                        </h1>
                        <p className="text-white/70 text-[0.95rem] md:text-[1rem] leading-[1.65] max-w-[300px] lg:pb-2">
                            Over the years, we've helped businesses and creators build visuals that feel clear,
                            consistent, and memorable.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

function AboutSecondSection() {
    return (
        <section className="w-full">
            <img
                src={aboutSectionBg}
                alt="About Us Section"
                className="w-full h-auto block"
            />
        </section>
    )
}

function CountUp({ value, suffix = '', textColor = 'text-bone' }) {
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
        return () => controls.stop()
    }, [isInView, value, motionValue])

    return (
        <div ref={ref} className={`font-display text-5xl md:text-7xl leading-none ${textColor}`}>
            <motion.span>{displayValue}</motion.span>
            <span>{suffix}</span>
        </div>
    )
}

function StatsSection() {
    const stats = [
        { value: 50, suffix: '+', label: 'Projects Done' },
        { value: 98, suffix: '%', label: 'Client Retention' },
        { value: 6, suffix: '+', label: 'Years Experience' },
    ]

    return (
        <section className="w-full bg-[#FFE600]">
            <div className="max-w-[1500px] mx-auto px-[5%] py-16 md:py-20 lg:py-24">
                <div className="flex flex-col md:flex-row">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="relative flex-1 flex flex-col items-center justify-center text-center py-8 md:py-0"
                        >
                            {i > 0 && (
                                <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-black/20 hidden md:block" />
                            )}
                            <CountUp value={stat.value} suffix={stat.suffix} textColor="text-black" />
                            <p className="text-black/60 text-sm md:text-base lg:text-lg font-medium mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function AboutThirdSection() {
    const processItems = [
        {
            num: 1,
            title: 'Getting Clear',
            desc: "Before designing anything, we take time to understand your brand, goals, audience, and what's currently missing or unclear.",
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
            desc: "Once everything is finalized, you receive your files, assets, and the support needed to launch confidently. And if you need help after, we're still here.",
        },
    ]

    const [openIndex, setOpenIndex] = useState(0)

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
            <StatsSection />
            <AboutThirdSection />
            <Footer />
        </main>
    )
}
