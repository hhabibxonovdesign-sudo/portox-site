import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { posts } from '../data/content.js'

export default function Blog() {
  const [featured, ...rest] = posts

  return (
    <div>
      <section className="section-outer pt-12 md:pt-16">
        <Reveal>
          <h1 className="font-sans text-5xl font-bold leading-tight md:text-6xl">News And Insight</h1>
        </Reveal>
      </section>

      <section className="section-outer mt-10">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-black/10 md:grid-cols-2">
            <div className="h-64 md:h-full">
              <img src={featured.img} alt={featured.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="mb-3 text-xs font-semibold text-neutral-500">{featured.date}</p>
              <h2 className="mb-3 font-sans text-2xl font-bold leading-snug md:text-3xl">{featured.title}</h2>
              <p className="mb-6 text-neutral-600">{featured.excerpt}</p>
              <Button href="#" variant="outline" className="self-start">
                Read more →
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-outer mt-12 mb-24 md:mb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 sm:flex-row">
                <div className="h-48 sm:h-auto sm:w-48 sm:shrink-0">
                  <img src={post.img} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <p className="mb-2 text-xs font-semibold text-neutral-500">{post.date}</p>
                  <h3 className="mb-2 font-sans text-lg font-bold leading-snug">{post.title}</h3>
                  <p className="mb-4 text-sm text-neutral-600">{post.excerpt}</p>
                  <a href="#" className="text-sm font-semibold underline underline-offset-4">
                    Read more →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
