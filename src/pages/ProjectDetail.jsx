import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { portfolioItems } from '../data/content.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = portfolioItems.findIndex((p) => p.slug === slug)
  const project = portfolioItems[index]

  if (!project) return <Navigate to="/portfolio" replace />

  const next = portfolioItems[(index + 1) % portfolioItems.length]

  return (
    <div>
      <section className="section-outer pt-12 md:pt-16">
        <Reveal>
          <Link to="/portfolio" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-black">
            ← Back to Portfolio
          </Link>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-block rounded-pill bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-800">
                {project.tag}
              </span>
              <h1 className="max-w-2xl font-sans text-4xl font-bold leading-tight md:text-5xl">{project.title}</h1>
            </div>
            <Button href="mailto:hello.andro@gmail.com" variant="dark">
              Start a project
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 grid grid-cols-2 gap-6 rounded-3xl bg-base-white p-8 sm:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase text-neutral-500">Client</p>
            <p className="mt-1 font-semibold">{project.client}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-neutral-500">Year</p>
            <p className="mt-1 font-semibold">{project.year}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-neutral-500">Duration</p>
            <p className="mt-1 font-semibold">{project.duration}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-neutral-500">Services</p>
            <p className="mt-1 font-semibold">{project.services.join(', ')}</p>
          </div>
        </Reveal>
      </section>

      <section className="section-outer mt-10">
        <Reveal className="overflow-hidden rounded-3xl">
          <img src={project.img} alt={project.title} className="max-h-[560px] w-full object-cover" />
        </Reveal>
      </section>

      <section className="section-outer mt-14 grid gap-10 md:mt-20 md:grid-cols-3">
        <Reveal className="md:col-span-1">
          <h2 className="font-sans text-2xl font-bold">Overview</h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-2">
          <p className="text-lg text-neutral-700">{project.overview}</p>
        </Reveal>
      </section>

      <section className="section-outer mt-14 grid gap-10 md:mt-20 md:grid-cols-2">
        <Reveal>
          <h3 className="mb-3 font-sans text-xl font-bold">The challenge</h3>
          <p className="text-neutral-600">{project.challenge}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="mb-3 font-sans text-xl font-bold">The solution</h3>
          <p className="text-neutral-600">{project.solution}</p>
        </Reveal>
      </section>

      <section className="section-outer mt-14 md:mt-20">
        <Reveal className="rounded-3xl bg-eerie p-8 text-white md:p-12">
          <h3 className="mb-3 font-sans text-xl font-bold text-primary">The result</h3>
          <p className="max-w-2xl text-white/80">{project.result}</p>
        </Reveal>
      </section>

      <section className="section-outer mt-14 mb-24 md:mt-20 md:mb-32">
        <div className="grid gap-6 sm:grid-cols-3">
          {project.gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.08} className="overflow-hidden rounded-3xl">
              <img src={src} alt="" className="aspect-[4/3] w-full object-cover" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-base-white p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Next project</p>
          <Link to={`/portfolio/${next.slug}`} className="font-sans text-2xl font-bold hover:text-primary md:text-3xl">
            {next.title} →
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
