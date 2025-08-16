import Pricing from '@/pages/Pricing'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Pricing — Cold Email Launchpad',
  description: 'One plan: Completely free setup. You pay software providers directly. Cold Email Launchpad earns via affiliate partnerships. Your price stays the same.',
  openGraph: {
    title: 'Pricing — Cold Email Launchpad',
    description: 'One plan: Completely free setup. You pay software providers directly.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Cold Email Launchpad',
    description: 'One plan: Completely free setup. You pay software providers directly.'
  }
}

export default function Page() { 
  return <Pricing /> 
}


