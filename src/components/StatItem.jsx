import { motion } from 'framer-motion'

export default function StatItem({ value, label, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-1"
    >
      <span className={`font-sans text-3xl font-bold md:text-4xl ${dark ? 'text-white' : 'text-black'}`}>{value}</span>
      <span className={`border-t pt-2 text-sm ${dark ? 'border-white/15 text-white/60' : 'border-black/10 text-neutral-600'}`}>
        {label}
      </span>
    </motion.div>
  )
}
