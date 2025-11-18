import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-2 group">
          <div className="relative w-7 h-7 rounded-md bg-gradient-to-b from-sky-500 to-cyan-400 shadow-[0_0_20px_#22d3ee66] grid place-items-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-semibold tracking-widest text-sm group-hover:opacity-80 transition-opacity">LAKO</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 text-sm font-medium rounded-full bg-sky-500/90 hover:bg-sky-400 text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] transition-colors">Start a Project</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-white/90" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 text-sm font-medium rounded-full bg-sky-500/90 hover:bg-sky-400 text-white text-center">Start a Project</a>
          </div>
        </div>
      )}
    </header>
  )
}
