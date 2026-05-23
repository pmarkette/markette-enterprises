const navLinks = [
  { label: 'Home',            href: '#home'    },
  { label: 'About Us',        href: '#about'   },
  { label: 'What We Do',      href: '#pillars' },
  { label: 'How We Operate',  href: '#operate' },
  { label: 'Contact',         href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white/65 px-[5vw] pt-[60px] pb-10">
      <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12 border-b border-white/[0.08]">

        {/* Brand */}
        <div>
          <a href="#home" className="font-serif-display text-[1.4rem] tracking-tight no-underline block mb-3">
            <span className="text-white">Markette</span>
            <span className="text-teal-100"> Enterprises</span>
          </a>
          <p className="text-sm leading-relaxed text-white/50 font-light max-w-[260px]">
            A privately held business development and operating company. Committed to excellence, accountability, and long-term growth.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-white/40 mb-4">Navigate</h4>
          <ul className="list-none flex flex-col gap-2.5">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="text-[0.9rem] text-white/60 hover:text-teal-100 no-underline transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-white/40 mb-4">Contact</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li>
              <a href="mailto:info@markette.net" className="text-[0.9rem] text-white/60 hover:text-teal-100 no-underline transition-colors">
                info@markette.net
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[0.8rem]">
        <span>© {new Date().getFullYear()} Markette Enterprises. All rights reserved.</span>
        <a href="#" className="text-white/40 no-underline hover:text-white/60 transition-colors">Privacy Policy</a>
      </div>
    </footer>
  )
}
