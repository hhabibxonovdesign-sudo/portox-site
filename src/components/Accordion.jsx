import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className="py-5">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-sans text-lg font-semibold md:text-xl">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-lg"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 pr-10 text-neutral-600">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
