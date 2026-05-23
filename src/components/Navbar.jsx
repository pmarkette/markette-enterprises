import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About',         href: '#about'    },
    { label: 'What We Do',    href: '#pillars'  },
    { label: 'How We Operate',href: '#operate'  },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      } bg-white/92 backdrop-blur-xl border-b border-[rgba(15,110,86,0.14)]`}
    >
      <div className="px-[5vw] flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#home" className="font-serif-display text-[1.35rem] tracking-tight no-underline">
          <span className="text-[#121c19]">Markette</span>
          <span className="text-teal-600"> Enterprises</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none items-center">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-[#3a4f47] tracking-wide no-underline hover:text-teal-600 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-white bg-teal-600 hover:bg-teal-800 px-5 py-2 rounded-full no-underline transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-teal-600 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-teal-600 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-teal-600 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[rgba(15,110,86,0.14)] px-[5vw] py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#3a4f47] no-underline hover:text-teal-600"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-white bg-teal-600 hover:bg-teal-800 px-5 py-2 rounded-full text-center no-underline transition-colors"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  )
}
