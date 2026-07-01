import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import Tag from '../components/Tag.jsx'
import StatItem from '../components/StatItem.jsx'
import Marquee from '../components/Marquee.jsx'
import { services, processSteps, portfolioItems, testimonials, posts } from '../data/content.js'

const skillIcons = ['🎨', '🧠', '⚡', '🧩', '✳️']

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="section-outer pt-6 md:pt-10">
        <div className="relative overflow-hidden rounded-[32px] bg-eerie px-6 py-14 text-white md:px-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <p className="mb-4 text-lg">Hey 👋 I'm Andro</p>
              <h1 className="font-sans text-5xl font-bold leading-[1.05] md:text-7xl">
                Designer &amp; Developer
              </h1>
              <div className="mt-8">
                <Button to="/contact" variant="primary">
                  Hire Me
                </Button>
              </div>
              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <StatItem value="20+" label="Years of experience" dark />
                <StatItem value="2k+" label="Happy clients" dark />
                <StatItem value="160+" label="Country" dark />
              </div>
            </Reveal>

            <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
                  alt="Portrait of Andro"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -right-4 -top-6 rounded-2xl bg-white/95 p-4 text-black shadow-xl backdrop-blur md:-right-8"
              >
                <p className="mb-2 text-xs font-semibold text-neutral-600">Experienced in</p>
                <div className="flex gap-2">
                  {skillIcons.map((icon, i) => (
                    <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-base">
                      {icon}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-outer mt-24 md:mt-32">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <Reveal>
            <Tag>What I do</Tag>
            <h2 className="mt-5 font-sans text-4xl font-bold leading-tight md:text-5xl">
              Services I provide!
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col items-start gap-5 md:items-end md:text-right">
            <p className="max-w-md text-neutral-600">
              My service focuses on developing products that resonate with your audience and drive real
              results. We combine research, strategy and craft.
            </p>
            <Button to="/contact" variant="outline">
              Hire Me
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-black/10 p-7 transition-colors hover:border-black/30">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-2xl">
                  {s.icon}
                </span>
                <h3 className="mb-2 font-sans text-xl font-bold">{s.title}</h3>
                <p className="text-sm text-neutral-600">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 rounded-3xl bg-base-white p-8 sm:grid-cols-4">
          <StatItem value="50+" label="Repeat clients" />
          <StatItem value="100+" label="Work done" />
          <StatItem value="12+" label="Awards won" />
          <StatItem value="98%" label="Client satisfaction" />
        </div>
      </section>

      {/* Process */}
      <section className="section-outer mt-24 md:mt-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Tag>Process</Tag>
          <h2 className="mt-5 font-sans text-4xl font-bold leading-tight md:text-5xl">
            My reliable and effective design process
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-base-white p-7">
                <span className="mb-8 block text-sm font-semibold text-neutral-500">{p.step}</span>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                  {p.icon}
                </span>
                <h3 className="mb-2 font-sans text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-neutral-600">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-outer mt-24 md:mt-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Tag>Portfolio</Tag>
            <h2 className="mt-5 max-w-xl font-sans text-4xl font-bold leading-tight md:text-5xl">
              Check out my awesome showcase!
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button to="/portfolio" variant="outline">
              View all Cases
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-24 overflow-hidden md:mt-32">
        <Marquee />
        <div className="section-outer mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-black/10 p-7">
                <p className="mb-6 text-neutral-700">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-sans font-bold">{t.name}</p>
                <p className="text-sm text-neutral-500">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="section-outer mt-24 md:mt-32 mb-24 md:mb-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Tag>Blog</Tag>
            <h2 className="mt-5 font-sans text-4xl font-bold leading-tight md:text-5xl">News and Insights</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button to="/blog" variant="outline">
              View all Posts
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block h-full overflow-hidden rounded-3xl border border-black/10"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs font-semibold text-neutral-500">{post.date}</p>
                  <h3 className="mb-2 font-sans text-lg font-bold leading-snug group-hover:text-primary">{post.title}</h3>
                  <p className="mb-4 text-sm text-neutral-600">{post.excerpt}</p>
                  <span className="inline-flex items-center rounded-pill border border-black/15 px-4 py-2 text-xs font-semibold">
                    Read more →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
