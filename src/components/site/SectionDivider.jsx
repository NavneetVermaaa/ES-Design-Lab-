import { motion } from 'framer-motion'
import iconSrc from '../../../assets/Icon Shape-01.png'

export default function SectionDivider() {
  return (
    <div className="relative z-10 h-0 overflow-visible pointer-events-none">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#fef102]/20 blur-[30px]"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#8f65fb]/20 blur-[28px]"
              animate={{
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </div>
          <div className="quote-divider">
            <motion.img
              src={iconSrc}
              alt=""
              className="quote-icon quote-left w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-[0_0_10px_rgba(254,241,2,0.4)]"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.img
              src={iconSrc}
              alt=""
              className="quote-icon quote-right w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-[0_0_10px_rgba(254,241,2,0.4)]"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.15,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
