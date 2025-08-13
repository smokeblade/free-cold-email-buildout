import Index from '@/pages/Index'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Cold Email Buildout — We set it up for free',
  description: 'We set up your cold email infrastructure for free. You cover software and inboxes; we earn via affiliate. Safe defaults, clear docs, and a clean handoff.',
  openGraph: {
    title: 'Free Cold Email Buildout — We set it up for free',
    description: 'We set up your cold email infrastructure for free. You cover software and inboxes; we earn via affiliate.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Cold Email Buildout',
    description: 'We set up your cold email infrastructure for free. You cover software and inboxes.'
  }
}

export default function Page() { 
  return <Index /> 
}


