import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { posts } from '../data/content.js'

export default function PostDetail() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div>
      <section className="section-outer pt-12 md:pt-16">
        <Reveal>
          <Link to="/blog" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-black">
            ← Back to Blog
          </Link>
          <h1 className="max-w-3xl font-sans text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>
          <div className="mt-5 flex items-center gap-3 text-sm text-neutral-500">
            <span className="font-semibold text-black">{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </Reveal>
      </section>

      <section className="section-outer mt-8">
        <Reveal className="overflow-hidden rounded-3xl">
          <img src={post.img} alt={post.title} className="max-h-[480px] w-full object-cover" />
        </Reveal>
      </section>

      <section className="section-outer mt-12 mb-16 md:mb-20">
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-6">
          {post.body.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-neutral-700">
              {para}
            </p>
          ))}
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="section-outer mb-24 md:mb-32">
          <Reveal>
            <h2 className="mb-8 font-sans text-2xl font-bold">More from the blog</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link to={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/10">
                  <div className="h-44 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-xs font-semibold text-neutral-500">{p.date}</p>
                    <h3 className="font-sans text-lg font-bold leading-snug group-hover:text-primary">{p.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
