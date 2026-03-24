import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PRICING_PLANS } from '@/lib/data'

export function PricingSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/[0.05]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-semibold text-zinc-100 tracking-tight">
            Simple pricing
          </h2>
          <p className="mt-3 text-zinc-500">Start free. Upgrade when you&apos;re ready.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={cn(
                'relative rounded-xl p-6 border flex flex-col gap-5',
                plan.highlight
                  ? 'bg-[#111] border-cyan-500/40 shadow-[0_0_32px_rgba(8,145,178,0.08)]'
                  : 'bg-[#0d0d0d] border-white/[0.07]'
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-0.5 rounded-full bg-cyan-500 text-white text-[11px] font-medium">
                    Most popular
                  </span>
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-zinc-400">{plan.name}</p>
                <div className="flex items-end gap-1 mt-1.5">
                  <span className="text-4xl font-semibold text-zinc-50 tracking-tight">
                    {plan.price === null ? 'Custom' : `$${plan.price}`}
                  </span>
                  {plan.price !== null && (
                    <span className="text-zinc-500 text-sm mb-1.5">/month</span>
                  )}
                </div>
                <p className="text-sm text-zinc-500 mt-2">{plan.desc}</p>
              </div>
              <button
                className={cn(
                  'h-9 rounded-md text-sm font-medium transition-colors',
                  plan.highlight
                    ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_12px_rgba(8,145,178,0.2)]'
                    : 'border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-zinc-300'
                )}
              >
                {plan.cta}
              </button>
              <ul className="flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <Check
                      size={13}
                      className="text-green-500 shrink-0"
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
                {plan.missing?.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-600">
                    <Minus size={13} className="shrink-0" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
