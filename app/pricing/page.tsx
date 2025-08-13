import Pricing from '@/pages/Pricing'
import type { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Pricing — Free Cold Email Buildout',
  description: 'Buildout is free. You cover software and inboxes directly. We’ll recommend providers and a safe sending plan.',
  openGraph: {
    title: 'Pricing — Free Cold Email Buildout',
    description: 'Buildout is free. You cover software and inboxes directly.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Free Cold Email Buildout',
    description: 'Buildout is free. You cover software and inboxes directly.'
  }
}

export default function Page() { 
  return <Pricing /> 
}


