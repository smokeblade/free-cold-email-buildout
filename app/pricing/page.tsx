import Pricing from '@/pages/Pricing'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Pricing — Free Cold Email Buildout',
  description: 'One plan: Free buildout. You cover software and inboxes directly. We earn via affiliate from some providers. Your price doesn’t change.',
  openGraph: {
    title: 'Pricing — Free Cold Email Buildout',
    description: 'One plan: Free buildout. You cover software and inboxes directly.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Free Cold Email Buildout',
    description: 'One plan: Free buildout. You cover software and inboxes directly.'
  }
}

export default function Page() { 
  return <Pricing /> 
}


