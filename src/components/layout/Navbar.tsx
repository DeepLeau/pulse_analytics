import { cn } from '@/lib/utils'
import { NAV_LINKS, SITE_NAME } from '@/lib/data'

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-14 flex items-center border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto w-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-cyan-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <span className="text-sm font-semibold text-zinc-100 tracking-tight">
            {SITE_NAME}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href="#"
              className="px-3 h-8 flex items-center text-sm text-zinc-500 hover:text-zinc-200 rounded-md hover:bg-white/[0.04] transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors px-3"
          >
            Log in
          </a>
          <button className="h-8 px-4 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors duration-150 shadow-[0_0_16px_rgba(8,145,178,0.25)]">
            Get started
          </button>
        </div>
      </div>
    </header>
  )
}
