import { motion } from 'framer-motion'
import { SOCIAL_PROOF_LOGOS, SOCIAL_PROOF_TEXT } from '@/lib/data'

export function SocialProofSection() {
  return (
    <section className="py-12 px-6 border-y border-white/[0.05] bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-xs text-zinc-600 uppercase tracking-widest mb-8">
          {SOCIAL_PROOF_TEXT}
        </p>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {SOCIAL_PROOF_LOGOS.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              className="text-sm font-semibold text-zinc-600 tracking-tight hover:text-zinc-400 transition-colors cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
