export default function Marquee({ text = 'TESTIMONIALS', className = '' }) {
  const items = new Array(6).fill(text)
  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-4 flex shrink-0 items-center gap-4 font-sans text-[64px] font-extrabold uppercase leading-none text-transparent md:text-[96px]"
            style={{ WebkitTextStroke: '1.5px rgba(10,11,10,0.15)' }}
          >
            {t}
            <span className="h-3 w-3 rounded-full bg-primary md:h-4 md:w-4" />
          </span>
        ))}
      </div>
    </div>
  )
}
