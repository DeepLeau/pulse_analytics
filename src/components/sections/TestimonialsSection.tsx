import { motion } from 'framer-motion'
import { AnimatedCanopy } from '@/components/ui/AnimatedCanopy'
import { TESTIMONIALS } from '@/lib/data'
import { cn } from '@/lib/utils'

const TestimonialCard = ({
  quote,
  name,
  role,
  initials,
}: {
  quote: string
  name: string
  role: string
  initials: string
}) => (
  <div
    className={cn(
      'flex-shrink-0 w-[380px] p-6 rounded-2xl border border-white/[0.07]',
      'bg-[#111] flex flex-col gap-4'
    )}
  >
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-zinc-300 leading-relaxed text-sm flex-1">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-bold flex-shrink-0 border border-cyan-500/20">
        {initials}
      </div>
      <div>
        <p className="text-sm font-semibold text-zinc-200">{name}</p>
        <p className="text-xs text-zinc-500">{role}</p>
      </div>
    </div>
  </div>
)

export function TestimonialsSection() {
  return (
    <section className="py-24 overflow-hidden bg-[#0a0a0a] border-t border-white/[0.05]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 px-6"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight">
          Builders love Pulse
        </h2>
      </motion.div>

      <div className="relative flex flex-col gap-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <AnimatedCanopy reverse={false} pauseOnHover>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </AnimatedCanopy>

        <AnimatedCanopy reverse={true} pauseOnHover>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={`b-${t.id}`} {...t} />
          ))}
        </AnimatedCanopy>

        <AnimatedCanopy reverse={false} pauseOnHover>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={`c-${t.id}`} {...t} />
          ))}
        </AnimatedCanopy>
      </div>
    </section>
  )
}
