// Pulse Analytics — données statiques centralisées
// Remplacez par un appel API quand une vraie source de données est connectée

export const SITE_NAME = 'Pulse Analytics'

export const NAV_LINKS = [
  'Features',
  'Pricing',
  'Docs',
  'Changelog',
] as const

export const HERO_BADGE = {
  text: 'Now in public beta',
  pulse: true,
}

export const HERO_HEADLINE = 'Know what your users do.'
export const HERO_SUBLINE =
  'Pulse gives you real-time visibility into how people use your product — from first click to conversion. No guesswork, just signal.'

export const SOCIAL_PROOF_TEXT = 'Trusted by builders at'
export const SOCIAL_PROOF_LOGOS = [
  'Vercel',
  'Linear',
  'Resend',
  'Raycast',
  'Supabase',
  'Turso',
]

export type Feature = {
  id: string
  title: string
  description: string
  type: 'counter' | 'metrics' | 'timeline' | 'typing' | 'spotlight'
  accent?: boolean
  colSpan?: 2 | 3
  counter?: { start: number; end: number; suffix: string }
  metrics?: Array<{ label: string; value: number; suffix?: string }>
  timeline?: Array<{ year: string; event: string }>
  typing?: { code: string }
  spotlight?: string[]
}

export const FEATURES: Feature[] = [
  {
    id: 'live-analytics',
    title: 'Live event tracking',
    description: 'Every click, scroll, and action captured the moment it happens. No sampling, no delays.',
    type: 'counter',
    accent: true,
    colSpan: 2,
    counter: { start: 0, end: 2400000, suffix: '+' },
  },
  {
    id: 'funnels',
    title: 'Conversion funnels',
    description: 'Visualize where users drop off and optimize every step of your funnel.',
    type: 'metrics',
    metrics: [
      { label: 'Activation rate', value: 68, suffix: '%' },
      { label: 'Retention D7', value: 42, suffix: '%' },
      { label: 'Trial → Paid', value: 23, suffix: '%' },
    ],
  },
  {
    id: 'segments',
    title: 'User segments',
    description: 'Slice your data by behavior, plan, or any custom property in seconds.',
    type: 'spotlight',
    spotlight: [
      'Filter by 20+ properties',
      'Save and name segments',
      'Compare segments side-by-side',
      'Auto-refresh every 30 seconds',
    ],
  },
  {
    id: 'session-replay',
    title: 'Session replay',
    description: 'Watch exactly how users navigate your product — no bias, no assumptions.',
    type: 'timeline',
    timeline: [
      { year: '2024', event: 'Recording infrastructure rebuilt — 10x faster' },
      { year: '2023', event: 'Heatmaps + rage clicks added' },
      { year: '2022', event: 'Session replay launched' },
      { year: '2021', event: 'Initial beta with 50 users' },
    ],
  },
  {
    id: 'performance',
    title: 'Dashboard latency',
    description: 'Sub-second queries on billions of events. No waiting for reports to load.',
    type: 'metrics',
    metrics: [
      { label: 'P50 query time', value: 82, suffix: 'ms' },
      { label: 'P99 query time', value: 340, suffix: 'ms' },
      { label: 'Uptime SLA', value: 99.9, suffix: '%' },
    ],
  },
  {
    id: 'integration',
    title: 'Three lines of code',
    description: 'Add Pulse to any product with a single snippet. No SDK bloat.',
    type: 'typing',
    colSpan: 2,
    typing: {
      code: `import { Pulse } from '@pulse/sdk'\n\nPulse.init({ projectId: 'proj_abc123' })\nPulse.track({ event: 'button_click', properties: { label: 'Get started' } })`,
    },
  },
]

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', quote: 'Went from zero insight to a full analytics setup in under an hour. Pulse is now the first thing I check every morning.', name: 'Alex Kovalenko', role: 'Founder @ Streamline', initials: 'AK' },
  { id: '2', quote: 'Cut our time-to-insight from days to minutes. We found a funnel leak in week one that was costing us $12k/month.', name: 'Sara Martinez', role: 'Head of Product @ Orbital', initials: 'SM' },
  { id: '3', quote: 'The session replay feature alone saved us a week of debugging. We shipped a fix before anyone even reported the bug.', name: 'Tom Reynolds', role: 'CTO @ Ditto', initials: 'TR' },
  { id: '4', quote: "Pulse's API is the cleanest I've integrated with. The SDK adds zero bundle weight and starts in milliseconds.", name: 'Mia Chen', role: 'Lead Engineer @ Cascade', initials: 'MC' },
  { id: '5', quote: 'Finally a tool that doesn’t require a data analyst to read. My whole team uses it daily now.', name: 'James Whitfield', role: 'CEO @ Lumen', initials: 'JW' },
  { id: '6', quote: 'We replaced Mixpanel and saved $8k/year. The data is cleaner and the UX is 10x better.', name: 'Priya Nair', role: 'Growth Lead @ Bloom', initials: 'PN' },
  { id: '7', quote: 'Real-time is not a buzzword here. We watch conversions happen live during launches. Game changer.', name: 'Carlos Reyes', role: 'Founder @ Nava', initials: 'CR' },
  { id: '8', quote: "Segmenting users by behavior instead of demographics gave us insights we never expected. Pulse surfaces patterns you don't know to look for.", name: 'Emma Larsson', role: 'Product Lead @ Fold', initials: 'EL' },
]

export type PricingPlan = {
  id: string
  name: string
  price: number | null
  desc: string
  cta: string
  highlight: boolean
  features: string[]
  missing?: string[]
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Starter',
    price: 0,
    desc: 'For indie makers validating their idea.',
    cta: 'Get started free',
    highlight: false,
    features: [
      'Up to 5,000 events/month',
      '1 project',
      '30-day data retention',
      'Basic funnels',
      'Email support',
    ],
    missing: [
      'Session replay',
      'Custom properties',
      'Team members',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49,
    desc: 'For growing teams who need full visibility.',
    cta: 'Start free trial',
    highlight: true,
    features: [
      'Unlimited events',
      'Unlimited projects',
      '1-year data retention',
      'Advanced funnels + segments',
      'Session replay',
      'Priority support',
      'Custom properties',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: null,
    desc: 'For scale. Custom volume, SLAs, and compliance.',
    cta: 'Contact sales',
    highlight: false,
    features: [
      'Everything in Pro',
      'Unlimited data retention',
      'SSO / SAML',
      'Custom SLA (99.99%)',
      'Dedicated infrastructure',
      'SOC 2 Type II',
      'White-glove onboarding',
    ],
  },
]

export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  },
  {
    title: 'Developers',
    links: ['Docs', 'SDK Reference', 'API Reference', 'CLI', 'Integrations'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  },
]

export const CTA_HEADLINE = 'Start shipping with data.'
export const CTA_SUBLINE = 'Join 2,400+ builders. Free plan available. No credit card required.'
export const CTA_BUTTON = 'Get started for free'
