import { motion } from 'framer-motion'

const lines = [
  { text: 'WE ARE', highlight: false },
  { text: 'ES DESIGN LAB', highlight: true },
  { text: 'WE BUILT TO', highlight: false },
  { text: 'SHAPE BRANDS', highlight: true },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const lineVariants = {
  hidden: { y: '110%' },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  },
}

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  },
}

export default function Intro() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-44 bg-background">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-7 overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {lines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  variants={lineVariants}
                  className={`inline-block font-display uppercase leading-[0.9] text-[14vw] md:text-[9vw] ${line.highlight ? 'text-yellow' : 'text-bone'}`}
                >
                  {line.text}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-bone/70 text-lg leading-relaxed mb-8">
              We craft identities that command attention. Every brand we build starts with a
              story — and we make sure that story is seen, felt, and remembered.
            </p>
            <a
              href="#work"
              className="group inline-flex items-center gap-3"
            >
              <span className="rounded-pill bg-violet text-ink px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-transform group-hover:-translate-x-1">
                See our work
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-yellow text-ink transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
