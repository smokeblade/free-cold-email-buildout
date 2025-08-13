import HowItWorks from '@/pages/HowItWorks'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn how onvally® works: from consult to virtual assistant placement in ~72 hours (may vary). Simple, fast, and guaranteed.',
  openGraph: {
    title: 'How It Works',
    description: 'Learn how onvally® works: from initial consultation to virtual assistant placement in ~72 hours (may vary).',
    type: 'website',
    url: 'https://onvally.com/how-it-works'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works',
    description: 'Learn how onvally® works: simple, fast, and guaranteed.'
  }
}

export default function Page() { 
  return <HowItWorks /> 
}


