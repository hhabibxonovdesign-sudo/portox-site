import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo.jsx'
import Button from './Button.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : 'bg-white/0'
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-4 md:px-10 lg:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 rounded-pill border border-black/10 bg-white/70 p-1 backdrop-blur md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-pill px-5 py-2 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-primary text-black' : 'text-neutral-700 hover:text-black'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="dark">
            💬 Let's talk
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-black transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-black transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-black transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-black/5 bg-white md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-primary text-black' : 'text-neutral-700'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/contact" variant="dark" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Let's talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
