import Reveal from '../components/Reveal.jsx'
import Tag from '../components/Tag.jsx'
import Button from '../components/Button.jsx'
import Accordion from '../components/Accordion.jsx'
import { faqs } from '../data/content.js'

const skills = [
  { label: 'UI/UX Design', value: 95 },
  { label: 'Web Development', value: 88 },
  { label: 'Branding', value: 80 },
  { label: 'Motion Design', value: 72 },
]

const awards = [
  { year: '2024', title: 'Awwwards — Site of the Day' },
  { year: '2023', title: 'CSS Design Awards — Best UI' },
  { year: '2022', title: 'Webby Honoree — Portfolio Sites' },
  { year: '2021', title: 'Dribbble — Top Shot of the Month' },
]

const gallery = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80',
]

export default function About() {
  return (
    <div>
      <section className="section-outer pt-12 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal className="order-2 md:order-1">
            <Tag>About me</Tag>
            <h1 className="mt-5 font-sans text-4xl font-bold leading-tight md:text-6xl">
              I'm a bold designer and developer in Manchester
            </h1>
            <p className="mt-6 max-w-lg text-neutral-600">
              With over a decade of experience, I help startups and studios turn ambitious ideas into
              polished digital products — from first sketch to final line of code.
            </p>
            <div className="mt-8">
              <Button to="/contact">Hire Me</Button>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="order-1 md:order-2">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
                alt="Andro at work"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skill bars */}
      <section className="mt-20 bg-eerie py-16 text-white md:mt-28 md:py-20">
        <div className="section-outer">
          <Reveal>
            <h2 className="font-sans text-3xl font-bold md:text-4xl">10 years of experience</h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-6">
            {skills.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="flex items-center gap-6">
                  <span className="w-40 shrink-0 text-sm font-semibold text-white/80">{s.label}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-pill bg-white/10">
                    <div
                      className="h-full rounded-pill bg-primary transition-all duration-1000"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right text-sm text-white/60">{s.value}%</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-outer mt-20 md:mt-28">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <Tag>Recognition</Tag>
            <h2 className="mt-5 font-sans text-4xl font-bold leading-tight">Awards</h2>
            <div className="mt-8 flex flex-col gap-4">
              {awards.map((a) => (
                <div key={a.title} className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="font-semibold">{a.title}</span>
                  <span className="text-sm text-neutral-500">{a.year}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex h-full items-center justify-center rounded-3xl bg-base-white p-12">
              <span className="text-7xl">🏆</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-outer mt-20 md:mt-28">
        <div className="grid gap-6 sm:grid-cols-3">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.1}>
              <div className="overflow-hidden rounded-3xl">
                <img src={src} alt="" className="aspect-[3/4] w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-outer mt-20 mb-24 md:mt-28 md:mb-32">
        <Reveal className="mb-10 text-center">
          <h2 className="font-sans text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto max-w-2xl">
          <Accordion items={faqs} />
        </Reveal>
      </section>
    </div>
  )
}
