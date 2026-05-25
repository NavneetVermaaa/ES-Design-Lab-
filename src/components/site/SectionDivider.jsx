import { motion } from 'framer-motion'
import iconSrc from '@/assets/icon-divider.png'

export default function SectionDivider() {
  return (
    <div className="relative z-10 flex justify-center -mt-14 md:-mt-24 h-0 overflow-visible pointer-events-none">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0 -z-10 flex items-center justify-center"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#fef102]/20 blur-[30px]" />
        </motion.div>
        <motion.div
          className="absolute inset-0 -z-10 flex items-center justify-center"
          animate={{
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#8f65fb]/20 blur-[28px]" />
        </motion.div>
        <motion.img
          src={iconSrc}
          alt=""
          className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-[0_0_10px_rgba(254,241,2,0.4)]"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  )
}
