import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'

const inputClass =
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-black/40'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <section className="section-outer pt-12 text-center md:pt-16">
        <Reveal>
          <h1 className="font-sans text-5xl font-bold leading-tight md:text-6xl">I'm Available For Hire</h1>
          <p className="mt-4 text-neutral-600">
            Senior product designer &amp; developer in Manchester with 10+ years of experience
          </p>
        </Reveal>
      </section>

      <section className="section-outer mt-12 mb-24 md:mb-32">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl bg-base-white">
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 p-10 text-center text-neutral-500">
              <span className="text-4xl">📍</span>
              <p className="font-semibold text-black">Manchester, United Kingdom</p>
              <p className="text-sm">Available for remote work worldwide</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-black/10 p-8 md:p-10">
            <h2 className="mb-6 font-sans text-2xl font-bold">Let's discuss together</h2>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-primary/10 p-10 text-center"
              >
                <span className="text-3xl">🎉</span>
                <p className="font-semibold">Thanks! Your message has been sent.</p>
                <p className="text-sm text-neutral-600">I'll get back to you within 1–2 business days.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold">
                    Your name*
                    <input required className={inputClass} placeholder="Enter your name" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold">
                    Your email*
                    <input required type="email" className={inputClass} placeholder="Enter your email" />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold">
                    Service*
                    <select required className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Choose one...
                      </option>
                      <option>UI/UX Design</option>
                      <option>Web Development</option>
                      <option>Branding</option>
                      <option>Mobile App Design</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold">
                    Your budget*
                    <select required className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Choose one...
                      </option>
                      <option>Under $1,000</option>
                      <option>$1,000 – $5,000</option>
                      <option>$5,000 – $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Message*
                  <textarea
                    required
                    rows={5}
                    className={inputClass}
                    placeholder="Type something about your project..."
                  />
                </label>
                <Button type="submit" variant="dark" className="mt-2 self-start">
                  Send Message
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  )
}
