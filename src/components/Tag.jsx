export default function Tag({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
        light ? 'border-white/20 text-primary' : 'border-black/10 text-neutral-700'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  )
}
