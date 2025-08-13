import Index from '@/pages/Index'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'onvally® | Hire remote talent, fast and affordable',
  description: 'Use onvally® to hire remote talent fast, affordable and without placement fees. Our placement guarantee ensures you get the top 1% of talent.',
  openGraph: {
    title: 'onvally® | Hire remote talent, fast and affordable',
    description: 'Use onvally® to hire remote talent fast, affordable and without placement fees. Our placement guarantee ensures you get the top 1% of talent.',
    type: 'website',
    url: 'https://onvally.com'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'onvally® | Hire remote talent, fast and affordable',
    description: 'Use onvally® to hire remote talent fast, affordable and without placement fees.'
  }
}

export default function Page() { 
  return <Index /> 
}


