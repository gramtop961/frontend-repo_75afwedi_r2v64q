import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" onClick={(e)=>handleNav(e,'#home')} className="font-extrabold text-xl tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">YourName</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={(e)=>handleNav(e,item.href)} className="text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="/test" className="ml-2 text-gray-500 hover:text-gray-800">API Test</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-black/5" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={(e)=>handleNav(e,item.href)} className="block py-2 text-gray-700">
                {item.label}
              </a>
            ))}
            <a href="/test" className="block py-2 text-gray-500">API Test</a>
          </div>
        </div>
      )}
    </header>
  )
}
