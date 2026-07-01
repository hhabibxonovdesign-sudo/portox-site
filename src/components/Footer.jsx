import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import Logo from './Logo.jsx'

const social = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'f' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'ig' },
]

export default function Footer() {
  return (
    <footer className="mt-10 bg-eerie text-white">
      <div className="mx-auto max-w-container px-6 py-16 md:px-10 lg:px-6 md:py-24">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <span className="rounded-pill border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Let's work together
          </span>
          <h2 className="max-w-2xl font-sans text-4xl font-bold leading-tight md:text-5xl">
            I'm always open to new opportunities and conversations
          </h2>
          <Button href="mailto:hello.andro@gmail.com" variant="primary">
            hello.andro@gmail.com
          </Button>
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <Logo />
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Andro. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-semibold uppercase transition-colors hover:bg-primary hover:text-black"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
