import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
        aria-label="Primary"
      >
        <a href="#home" className="font-mono text-sm font-semibold text-teal-300">
          &lt;iyan.dev /&gt;
        </a>

        <button
          className="rounded-md p-2 text-slate-300 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a className="text-sm text-slate-400 transition hover:text-teal-300" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="border-t border-white/5 bg-ink-950 px-5 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="block py-2 text-sm text-slate-300"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
