import { motion } from 'framer-motion'
import { BentoGrid } from '@/components/ui/BentoGrid'
import { FEATURES } from '@/lib/data'

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/[0.05]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center mb-16 sm:mb-24"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium uppercase tracking-widest mb-4">
          Features
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">
          Everything you need to understand your users
        </h2>
        <p className="text-base text-zinc-500 max-w-xl mx-auto leading-relaxed">
          From raw events to actionable insights — Pulse covers the full stack of
          product analytics without the complexity.
        </p>
      </motion.div>
      <BentoGrid features={FEATURES} />
    </section>
  )
}
