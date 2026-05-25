import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
}

export function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

// Word-by-word reveal for headlines
export function RevealText({ text, className, as: Tag = 'h2' }) {
  const words = text.split(' ')
  const MotionTag = motion(Tag)
  return (
    <MotionTag
      className={className}
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
          >
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
