import { FOOTER_LINKS, SITE_NAME } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded bg-cyan-500 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">P</span>
              </div>
              <span className="text-sm font-semibold text-zinc-100">
                {SITE_NAME}
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
              Real-time user analytics for modern builders.
            </p>
          </div>
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
              <p className="text-xs font-medium text-zinc-400 mb-3 uppercase tracking-wider">
                {title}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-white/[0.05]">
          <p className="text-xs text-zinc-600">
            © {year} {SITE_NAME} Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
