import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { portfolioItems } from '../data/content.js'

const categories = ['All', 'UI/UX', 'Web Design', 'Mobile', 'Branding']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? portfolioItems : portfolioItems.filter((p) => p.tag === active)

  return (
    <div>
      <section className="section-outer pt-12 md:pt-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <Reveal>
            <h1 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
              Projects I Have Personally Created and Developed
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-neutral-600">
              A selection of case studies spanning product design, branding and full front-end builds —
              each one solving a real problem for a real client.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-pill border px-5 py-2 text-sm font-semibold transition-colors ${
                active === c ? 'border-black bg-black text-white' : 'border-black/15 text-neutral-600 hover:border-black/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="section-outer mt-12 mb-24 md:mb-32">
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl bg-black"
            >
              <Link to={`/portfolio/${p.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-pill bg-white/90 px-3 py-1 text-xs font-semibold">
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-sans text-lg font-bold text-white">{p.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
