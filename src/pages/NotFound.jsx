import { motion } from 'framer-motion'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-2 font-sans text-8xl font-extrabold text-primary md:text-[10rem]"
      >
        <span>4</span>
        <motion.span
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center justify-center"
        >
          <span className="rounded-pill bg-black px-4 py-1 text-sm text-primary absolute -top-10 rotate-[-8deg]">
            Sorry
          </span>
          0
        </motion.span>
        <span>4</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 max-w-md text-neutral-600"
      >
        The page you are looking for doesn't exist or has been moved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="mt-8"
      >
        <Button to="/">Back to Home page</Button>
      </motion.div>
    </div>
  )
}
