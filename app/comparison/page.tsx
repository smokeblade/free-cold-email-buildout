import Comparison from '@/pages/Comparison'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Compare Virtual Assistant Services',
  description: 'Compare onvally® vs Upwork, Fiverr, and other platforms. See why businesses choose us for reliable, affordable virtual assistant services.',
  openGraph: {
    title: 'Compare Virtual Assistant Services',
    description: 'Compare onvally® vs Upwork, Fiverr, and other platforms. See why businesses choose us.',
    type: 'website',
    url: 'https://onvally.com/comparison'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Virtual Assistant Services',
    description: 'Compare onvally® vs other platforms for virtual assistant services.'
  }
}

export default function Page() { 
  return <Comparison /> 
}


