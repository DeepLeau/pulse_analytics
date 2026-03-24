import { UnicornBackground } from '@/components/ui/UnicornBackground'
import { AnimatedTextGenerate } from '@/components/ui/AnimatedTextGenerate'
import {
  HERO_BADGE,
  HERO_HEADLINE,
  HERO_SUBLINE,
  SOCIAL_PROOF_LOGOS,
  SOCIAL_PROOF_TEXT,
} from '@/lib/data'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#0a0a0a] overflow-hidden pt-14">
      <UnicornBackground
        jsonFilePath="https://ipbkonbdobkaebffenbz.supabase.co/storage/v1/object/public/scenes/huly_laser.json"
        className="absolute inset-0 z-0 w-full h-full"
        scale={0.75}
        dpi={1.5}
      />
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs text-zinc-400">
          {HERO_BADGE.pulse && (
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          )}
          {HERO_BADGE.text}
        </div>
        <AnimatedTextGenerate
          text={HERO_HEADLINE}
          speed={0.4}
          mode="dark"
          className="w-full"
        />
        <p className="text-base text-zinc-400 max-w-md leading-relaxed">
          {HERO_SUBLINE}
        </p>
        <div className="flex items-center gap-3 mt-2">
          <button className="h-9 px-5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors shadow-[0_0_16px_rgba(8,145,178,0.25)]">
            Get started free
          </button>
          <button className="h-9 px-5 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-zinc-300 text-sm font-medium transition-colors">
            View docs →
          </button>
        </div>
        <p className="text-xs text-zinc-600">
          Trusted by 2,400+ builders · No credit card required
        </p>
      </div>
    </section>
  )
}
