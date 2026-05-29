import { Reveal, RevealText } from '@/components/Reveal'
import { motion } from 'framer-motion'

const reasons = [
  {
    n: '01',
    title: ' Not Just Design - We Think in Outcomes',
    body: 'Every visual is created with a purpose: attention, engagement, or conversion.',
  },
  {
    n: '02',
    title: 'All-in-one creative partner',
    body: 'Branding, design, and video handled in one place for total consistency.',
  },
  {
    n: '03',
    title: 'Built for modern platforms',
    body: 'We design for how people actually consume content today, not yesterday.',
  },
  {
    n: '04',
    title: 'Simple, fast, reliable',
    body: 'Clear communication, quick delivery, no unnecessary complexity.',
  },
]

const cardRadii = [
  '[border-radius:80px_80px_0px_80px]',
  '[border-radius:80px_80px_0px_0px]',
  '[border-radius:80px_80px_0px_0px]',
  '[border-radius:80px_80px_80px_0px]',
]

export default function WhyUs() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-40 bg-background">
      <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
        <Reveal className="md:col-span-4">
         
        </Reveal>
        <div className="md:col-span-8">
          <RevealText
            as="h2"
            text="Reasons clients stay."
            className="font-display uppercase text-bone text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((r, i) => (
          <Reveal key={r.n} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className={`group relative h-full border border-bone/15 bg-card p-8 overflow-hidden ${cardRadii[i]}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow/0 to-yellow/0 group-hover:from-yellow/10 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-baseline justify-between mb-12">
                  <span className="font-display text-yellow text-2xl">{r.n}</span>
                  <span className="h-2 w-2 rounded-full bg-bone/30 group-hover:bg-yellow transition-colors" />
                </div>
                <h3 className="font-display uppercase text-bone text-2xl md:text-3xl leading-tight mb-4">
                  {r.title}
                </h3>
                <p className="text-bone/60 text-sm leading-relaxed">{r.body}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
