import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex h-11 w-11 items-center justify-center rounded-full bg-primary" aria-label="Home">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="6" height="18" rx="1.5" fill="#0A0B0A" />
        <rect x="3" y="10.5" width="18" height="3" rx="1" fill="#0A0B0A" />
        <rect x="15" y="3" width="6" height="18" rx="1.5" fill="#0A0B0A" />
      </svg>
    </Link>
  )
}
