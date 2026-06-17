import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/doctors', label: 'Doctors' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/amar logo.png"
              alt="AMAR HOSPITALS"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-maroon font-semibold'
                    : 'text-gray-600 hover:text-maroon'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9281622955"
              className="bg-maroon text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-maroon-light transition-colors duration-200"
            >
              Book Appointment
            </a>
          </div>

          <button
            className="md:hidden text-maroon p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? 'text-maroon bg-red-50'
                    : 'text-gray-600 hover:text-maroon hover:bg-red-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9281622955"
              className="block text-center bg-maroon text-white text-sm font-medium px-4 py-2.5 rounded-full mt-2"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
