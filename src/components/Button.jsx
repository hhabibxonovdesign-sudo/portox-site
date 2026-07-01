import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-primary text-black hover:bg-white',
  dark: 'bg-eerie text-white hover:bg-primary hover:text-black',
  outline: 'bg-transparent text-black border border-black/15 hover:border-black hover:bg-black hover:text-white',
  outlineLight: 'bg-transparent text-white border border-white/25 hover:bg-white hover:text-black',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  icon = null,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-semibold text-sm md:text-base transition-colors duration-300 whitespace-nowrap ${variants[variant]} ${className}`

  const content = (
    <motion.span whileTap={{ scale: 0.96 }} className={classes}>
      {children}
      {icon}
    </motion.span>
  )

  if (to) {
    return (
      <Link to={to} className="inline-block">
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className="inline-block" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  )
}
