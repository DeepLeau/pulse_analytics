import { motion } from 'framer-motion'
import { CTA_HEADLINE, CTA_SUBLINE, CTA_BUTTON } from '@/lib/data'

export function CtaSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/[0.05]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(8,145,178,0.12),transparent)]" />
          <h2 className="relative text-4xl font-semibold text-zinc-50 tracking-[-0.025em]">
            {CTA_HEADLINE}
          </h2>
        </div>
        <p className="text-zinc-400 text-base max-w-md">{CTA_SUBLINE}</p>
        <button className="h-10 px-6 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors shadow-[0_0_20px_rgba(8,145,178,0.3)]">
          {CTA_BUTTON}
        </button>
      </motion.div>
    </section>
  )
}
