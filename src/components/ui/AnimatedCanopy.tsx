'use client'
import { useId } from 'react'
import { cn } from '@/lib/utils'

export function AnimatedCanopy({
  children,
  reverse = false,
  pauseOnHover = true,
  className,
}: {
  children: React.ReactNode
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
}) {
  const id = useId()

  return (
    <div
      className={cn('relative flex w-full overflow-hidden', className)}
      style={{ gap: '12px' }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={reverse ? 'marquee-track-reverse' : 'marquee-track'}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
